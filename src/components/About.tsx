import { about } from '../content'
import { Photo } from './Photo'

// The journey: its own page at /journey, reached from the intro's "My story".
export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__head" data-rise-group>
        <h1 className="about__title" id="about-title" data-rise>
          {about.heading}
        </h1>
        <a className="button" href="/#work" data-rise>
          Back to the live projects
        </a>
      </div>
      <ol className="about__chapters">
        {about.chapters.map((c) => (
          <li key={c.title} id={c.id} className="chapter" data-rise-group>
            <Photo className="chapter__photo" label={c.photo.label} note={c.photo.note} src={c.photo.src} alt={c.photo.alt} />
            <div className="chapter__text">
              <h3 data-rise>{c.title}</h3>
              {c.lead && (
                <p className="chapter__lead" data-rise>
                  {c.lead}
                </p>
              )}
              <p data-rise>{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="about__close" data-rise-group>
        <h3 data-rise>What teammates get</h3>
        <ul className="about__strengths" data-rise>
          {about.strengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p data-rise>{about.languages}</p>
        <a className="button" href="/#work" data-rise>
          Back to the live projects
        </a>
      </div>
    </section>
  )
}
