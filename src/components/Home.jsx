function Home() {
  return (
    <section className="home section" id="home">

      <div className="home-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Mohamed Ifthikar</span>
        </h1>

        <h2>Student | Frontend Developer</h2>

        <p>
          I am a passionate college student interested in web development,
          programming and modern technologies. I enjoy creating websites
          and learning new technologies.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-circle">MI</div>
        <h2>Mohamed Ifthikar</h2>
        <p>Future Software Developer</p>
        <div className="available">● Open to Opportunities</div>
      </div>

    </section>
  );
}

export default Home;