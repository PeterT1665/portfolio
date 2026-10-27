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
          <div className="hero__story" data-enter="right">
            <p>{hero.story.note}</p>
            <a className="button" href={hero.story.href}>
              {hero.story.label}
            </a>
          </div>
        }
      />
    </section>
  )
}
