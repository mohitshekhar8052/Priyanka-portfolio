'use client'

export default function Hero() {
  return (
    <section id="home" className="hero_section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-left">
            <p className="hero-tagline">
              Clean, Enfficient Code<br />
              for your project&apos;s success.<br />
              Trusted
            </p>
          </div>
          
          <div className="hero-center">
            <div className="greeting-badge">
              Hello!
              <div className="greeting-sparkle"></div>
            </div>
            <h1 className="hero-name">
              I&apos;m <span className="name-highlight">Priyanka</span>,<br />
              Software Engineer
            </h1>
            
            <div className="hero-image-wrapper">
              <div className="orange-blob"></div>
              <img 
                src="/priyanka-professional.jpg" 
                alt="Priyanka Singh Sengar" 
                className="hero-profile-image"
              />
            </div>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn-portfolio">
                Portfolio <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn-hire">
                Hire me
              </a>
            </div>
          </div>
          
          <div className="hero-text-right">
            <div className="experience-badge">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="experience-text">
                <span className="years">Junior Years</span>
                <span className="label">Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
