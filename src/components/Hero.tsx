import { hero } from '../content'
import { Stage } from './Stage'

// The self intro: who Peter is on the left, his story on the right, and photos of
// him and his teams running through the middle as the page scrolls.
export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Stage
        eager
        pics={hero.photos}
        left={
          <div className="hero__intro" data-enter="left">
            <h1 className="hero__title" id="hero-title">
              {hero.title}
            </h1>
            <p className="hero__lead">{hero.lead}</p>
            <a className="button" href={hero.action.href}>
              {hero.action.label}
            </a>
          </div>
        }
        right={
          <a className="hero__story" href={hero.story.href} data-enter="right">
            <span className="hero__journey">
              {hero.story.label.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="hero__last">
                {hero.story.label.split(' ').at(-1)}
                <span className="hero__arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </span>
            <span className="hero__note">{hero.story.note}</span>
          </a>
        }
      />
    </section>
  )
}
