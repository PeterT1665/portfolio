import { useEffect, useState } from 'react'
import { useLive } from '../lib/serverStatus'

// One line of plain text saying whether a demo's server is up right now.
export function LiveLine({ id }: { id: string }) {
  const live = useLive(id)
  const [, tick] = useState(0)

  useEffect(() => {
    if (live.state !== 'waking') return
    const t = setInterval(() => tick((n) => n + 1), 1000)
    return () => clearInterval(t)
  }, [live.state])

  let text: string
  switch (live.state) {
    case 'always':
      text = 'Static site, always on'
      break
    case 'checking':
      text = 'Checking the server'
      break
    case 'waking':
      text = `Waking the server for you: ${Math.round((Date.now() - live.since) / 1000)} s`
      break
    case 'awake':
      text = 'Server awake, opens instantly'
      break
    case 'unreachable':
      text = 'Server not answering yet, the link still works'
      break
  }

  return (
    <span className="live" data-state={live.state} aria-live="polite">
      {text}
    </span>
  )
}
