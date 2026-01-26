export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-inner">
        <p className="contact-eyebrow">Let’s connect</p>
        <h1>Contact</h1>
        <p className="contact-subtitle">
          I’d love to connect. Feel free to reach out anytime.
        </p>

        <div className="contact-actions">
          <a className="resume-btn" href="mailto:tatematley@gmail.com">
            Email Me
          </a>
          <a
            className="resume-btn resume-btn-secondary"
            href="https://www.linkedin.com/in/tatematley/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact-lines">
          <a className="contact-line" href="mailto:tatematley@gmail.com">
            tatematley@gmail.com
          </a>
          <a className="contact-line" href="tel:+18012004361">
            (801) 200-4361
          </a>
        </div>

        <div className="contact-openTo">
          <p className="contact-openTitle">Open to</p>
          <p className="contact-openItems">
            UX / web design roles • freelance projects • collaborations
          </p>
        </div>

        <p className="contact-note">
          Quick note: texting is usually the fastest way to reach me.
        </p>
      </div>
    </section>
  );
}
