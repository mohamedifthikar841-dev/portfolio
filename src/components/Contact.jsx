
function Contact() {
  return (
    <section className="section contact" id="contact">

      <h2>Contact Me</h2>

      <p className="contact-intro">
        Have a project or an opportunity?
        Feel free to contact me.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p> Email</p>
          <a href="mailto:mohamedifthikar841@gmail.com">
            mohamedifthikar841@gmail.com
          </a>

          <p> Phone</p>
          <a href="tel:+917871200737">
            +91 7871200737
          </a>

          <p> Location</p>
          <span>Tamil Nadu, India</span>

          <div className="social-links">
            <a href="https://github.com/"
               target="_blank"
               rel="noreferrer">
              GitHub
            </a>

            <a href="https://linkedin.com/"
               target="_blank"
               rel="noreferrer">
              LinkedIn
            </a>
          </div>

        </div>

        <form className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting me!");
          }}>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
