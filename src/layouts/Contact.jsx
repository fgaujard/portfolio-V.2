import ProfilePic from "../assets/ProfilePic.png";
import Resume from "../assets/Resume.pdf";

export default function Contact() {
  return (
    <section id="contact" className="app-body_contact section-contact">
      <h1>Let's connect us !</h1>
      <p className="contact-subtitle">Send me a message</p>
      <article className="contact-card">
        <img src={ProfilePic} alt="Profile" loading="lazy" />

        <div className="contact-card_container">
          <div className="contact-card_ID">
            <p className="contact-card_name">Flavien GAUJARD</p>
          </div>

          <p className="contact-card_work">Web Developer</p>
          <div className="contact-card_list">
            <ul className="contact-card_icon">
              <li>
                <i className="fab fa-linkedin" alt="LinkedIn Icon" />
                <a
                  href="https://www.linkedin.com/in/flavien-gaujard/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <i className="fas fa-file-pdf" alt="Resume Icon" />
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <i className="fab fa-github" alt="Github Icon" />
                <a
                  href="https://github.com/fgaujard?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <i className="fas fa-at" alt="Email Icon" />
                <a href="mailto:contact@flavien-gaujard.fr">E-mail</a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
