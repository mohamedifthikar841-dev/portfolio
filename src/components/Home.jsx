
function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">
        <p>Hello, I'm</p>

        <h1>Mohamed Ifthikar</h1>

        <h3>Student | Web Developer</h3>

        <p>
          I am a college student interested in
          web development and programming.
          I enjoy learning new technologies
          and creating simple websites.
        </p>

        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>

      <div className="profile">
        <img src="/src/assets/hero.png" alt="My profile" />
      </div>

    </section>
  );
}

export default Home;
