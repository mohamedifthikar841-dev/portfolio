function Project() {
  const projects = [
    {
      number: "01",
      title: "Student Portfolio",
      description: "A personal portfolio website built using React and CSS.",
      tech: "React • CSS • JavaScript",
      link: "#"
    },
    {
      number: "02",
      title: "Counter Application",
      description: "A simple application with increment, decrement and reset functionality.",
      tech: "React • JSX • CSS",
      link: "#"
    },
    {
      number: "03",
      title: "Find My Vehicle",
      description: "A platform concept designed to help users locate and recover stolen vehicles.",
      tech: "Web Development • JavaScript",
      link: "#"
    }
  ];

  return (
    <section className="section projects" id="projects">

      <p className="section-subtitle">WHAT I HAVE BUILT</p>
      <h2 className="section-title">My <span>Projects</span></h2>

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <span className="project-number">{project.number}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4>{project.tech}</h4>

            <a href={project.link}>View Project ↗</a>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Project;