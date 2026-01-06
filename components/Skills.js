'use client'

export default function Skills() {
  const skills = [
    { name: 'Python', icon: '1.png', level: 75 },
    { name: 'JavaScript', icon: '2.png', level: 70 },
    { name: 'MySQL', icon: '3.png', level: 65 },
    { name: 'C++', icon: '4.png', level: 80 },
    { name: 'C', icon: '5.png', level: 75 },
    { name: 'HTML', icon: '6.png', level: 85 },
    { name: 'CSS', icon: '7.png', level: 80 },
  ]

  return (
    <section id="skills" className="skills-section-modern">
      <div className="container">
        <div className="skills-header-modern">
          <h2 className="skills-title-modern">Skills</h2>
        </div>
        <div className="skills-grid-modern">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item-modern">
              <div className="skill-icon-modern">
                <img src={`/${skill.icon}`} alt={skill.name} />
              </div>
              <span className="skill-name-modern">{skill.name}</span>
              <div className="skill-progress-modern">
                <div className="skill-progress-bar-modern" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
