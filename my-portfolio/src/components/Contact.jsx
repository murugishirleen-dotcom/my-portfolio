import React from 'react'
import"../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:murugishirleen31@gmail.com" className="contact-btn email">
          📧 Email
        </a>

        <a href="tel:+254 114840420" className="contact-btn phone">
          📞 Call
        </a>

        <a
          href="https://www.linkedin.com/in/Shirleen Murugi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin"
        >
          🔗 LinkedIn
        </a>

        <a
          href="https://github.com/murugishirleen-dotcom"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn github"
        >
          💻 GitHub
        </a>

        <a 
          href="https://murugishirleen-dotcom.github.io/my-portfolio/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-btn"
        >
         🌍 View Portfolio
        </a>

      </div>
    </section>
  )
}
