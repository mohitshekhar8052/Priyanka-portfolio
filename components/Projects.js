export default function Projects() {
  const projects = [
    {
      title: 'Rock Paper Scissors Game',
      description: 'A classic game implemented in Java with an intuitive user interface.',
      image: 'p1.PNG',
      tech: ['Java', 'OOP'],
      link: 'https://drive.google.com/file/d/1iQ1ofcQt3_rYyuzATUZcnCEQizm7mBJa/view?usp=sharing',
    },
    {
      title: 'Snake Game',
      description: 'A responsive Snake game built with HTML5 Canvas and JavaScript.',
      image: 'p2.PNG',
      tech: ['HTML5', 'JavaScript'],
      link: 'https://drive.google.com/drive/folders/1w3UZD0DYWX-t3xVhh8p7PUUz4FuS8xTF?usp=sharing',
    },
    {
      title: 'Temperature Converter',
      description: 'Web application for converting temperatures between units.',
      image: 'p3.PNG',
      tech: ['HTML', 'JavaScript'],
      link: 'https://drive.google.com/drive/folders/1yA0TsNUNbQIUCwbSsMsFGGuywImW9d_r?usp=sharing',
    },
    {
      title: 'To-Do List Application',
      description: 'Task management app with local storage for data persistence.',
      image: 'p4.PNG',
      tech: ['JavaScript', 'Storage'],
      link: 'https://drive.google.com/drive/folders/1mw0FgzwMDaUevymMF-yTTEDesQZ6C9gO?usp=sharing',
    },
    {
      title: 'Calculator',
      description: 'A functional calculator with clean interface and keyboard support.',
      image: 'p6.png',
      tech: ['HTML', 'JavaScript'],
      link: 'https://drive.google.com/drive/folders/1b3VjOwH04mgztPz7kIxCO3d0FGg8U48R?usp=sharing',
    },
  ]

  return (
    <section id="projects" className="projects-section-modern">
      <div className="container">
        <div className="projects-header-modern">
          <h2 className="projects-title-modern">Projects</h2>
        </div>
        <div className="projects-grid-modern">
          {projects.map((project, index) => (
            <div key={index} className="project-card-modern">
              <div className="project-image-modern">
                <img src={`/${project.image}`} alt={project.title} />
              </div>
              <div className="project-info-modern">
                <h3 className="project-title-modern">{project.title}</h3>
                <p className="project-desc-modern">{project.description}</p>
                <div className="project-tags-modern">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="project-tag-modern">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-modern">
                  View Project <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
