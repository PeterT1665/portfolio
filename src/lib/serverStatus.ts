import { useSyncExternalStore } from 'react'
import type { Status } from '../content'

// The live thing on this page. Render's free servers sleep after a quiet spell and
// take 30-60 s to wake. Every demo is pinged once when the page loads, which starts
// waking it, and its status line says what is happening, so by the time a
// recruiter clicks, the demo opens straight away.
//
// The ping is a no-cors request: the response is opaque, but it only resolves once
// the server answers, which is all we need to know.

export type Live =
  | { state: 'always' }
  | { state: 'checking' }
  | { state: 'waking'; since: number }
  | { state: 'awake' }
  | { state: 'unreachable' }

const SLOW_MS = 2500 // longer than this and the server was asleep
const GIVE_UP_MS = 90_000

const states = new Map<string, Live>()
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

function set(key: string, live: Live) {
  states.set(key, live)
  emit()
}

export function startPing(key: string, status: Status) {
  if (states.has(key)) return
  if (status.kind === 'static') return set(key, { state: 'always' })

  set(key, { state: 'checking' })
  const started = Date.now()
  const slow = setTimeout(() => {
    if (states.get(key)?.state === 'checking') set(key, { state: 'waking', since: started })
  }, SLOW_MS)

  fetch(status.ping, { mode: 'no-cors', cache: 'no-store', signal: AbortSignal.timeout(GIVE_UP_MS) })
    .then(() => set(key, { state: 'awake' }))
    .catch(() => set(key, { state: 'unreachable' }))
    .finally(() => clearTimeout(slow))
}

function subscribe(l: () => void) {
  listeners.add(l)
  return () => listeners.delete(l)
}

const CHECKING: Live = { state: 'checking' } // one object, so React sees a stable snapshot

export function useLive(key: string): Live {
  return useSyncExternalStore(subscribe, () => states.get(key) ?? CHECKING)
}
