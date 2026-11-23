function About() {
  return (
    <section className="section about" id="about">

      <p className="section-subtitle">GET TO KNOW ME</p>
      <h2 className="section-title">About <span>Me</span></h2>

      <div className="about-content">

        <div className="about-card">
          <h3>Who Am I?</h3>

          <p>
            Hello! I am Mohamed Ifthikar, a college student passionate
            about technology and web development.
          </p>

          <p>
            I am currently learning HTML, CSS, JavaScript and React.
            I enjoy developing websites and improving my programming skills.
          </p>

          <p>
            My goal is to become a skilled software developer and
            build useful real-world applications.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-box">
            <h3>01</h3>
            <p>Creative Thinking</p>
          </div>

          <div className="detail-box">
            <h3>02</h3>
            <p>Problem Solving</p>
          </div>

          <div className="detail-box">
            <h3>03</h3>
            <p>Continuous Learning</p>
          </div>

          <div className="detail-box">
            <h3>04</h3>
            <p>Teamwork</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;