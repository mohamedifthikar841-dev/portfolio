function Contact() {
  return (
    <section className="section contact" id="contact">

      <p className="section-subtitle">LET'S CONNECT</p>
      <h2 className="section-title">Contact <span>Me</span></h2>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Work Together</h3>

          <p>
            Have an idea or opportunity? Feel free to contact me.
            I would be happy to connect with you.
          </p>

          <p>📧 Your email address</p>
          <p>📍 Tamil Nadu, India</p>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting me!");
            e.target.reset();
          }}
        >
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <input type="text" placeholder="Subject" required />

          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;