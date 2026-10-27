import { contact, person } from '../content'

// The email address as the section's display type, on the inverse colours.
export function Contact() {
  const [user, domain] = person.email.split('@')
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <h2 className="contact__invite" id="contact-title" data-rise>
        {contact.invite}
      </h2>
      <a className="contact__email" href={`mailto:${person.email}`} data-rise>
        {user}
        <wbr />@{domain}
      </a>
      <div className="contact__foot">
        <p>{person.city}</p>
        <p className="contact__links">
          <a className="link" href={person.resume} target="_blank" rel="noreferrer">
            Résumé
          </a>
          <a className="link" href={person.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="link" href={person.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}
