function Skills() {
  const skills = [
    { name: "HTML", level: "52%" },
    { name: "CSS", level: "40%" },
    { name: "JavaScript", level: "35%" },
    { name: "React", level: "54%" },
    { name: "Git & GitHub", level: "65%" }
  ];

  return (
    <section className="section skills" id="skills">

      <p className="section-subtitle">MY TECHNICAL ABILITIES</p>
      <h2 className="section-title">My <span>Skills</span></h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;