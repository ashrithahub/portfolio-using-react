const { useState, useEffect } = React;

const App = () => {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    // Staggered hero hidden -> show
    const hiddenElements = document.querySelectorAll('.hidden');
    const timeouts = [];
    hiddenElements.forEach((el, index) => {
      const t = setTimeout(() => el.classList.add('show'), index * 200);
      timeouts.push(t);
    });

    // Intersection Observer for reveal elements
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      timeouts.forEach(t => clearTimeout(t));
      observer.disconnect();
    };
  }, []);

  const handleAnchor = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      setNavActive(false);
    }
  };

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={handleAnchor}>Ashritha<span className="dot">.</span></a>
          <ul className={"nav-links" + (navActive ? ' active' : '')}>
            <li><a href="#home" onClick={handleAnchor}>Home</a></li>
            <li><a href="#about" onClick={handleAnchor}>About</a></li>
            <li><a href="#skills" onClick={handleAnchor}>Skills</a></li>
            <li><a href="#projects" onClick={handleAnchor}>Projects</a></li>
            <li><a href="resume.pdf" className="btn-primary" target="_blank">Resume</a></li>
          </ul>
          <div className="hamburger" onClick={() => setNavActive(v => !v)}>
            <i className={navActive ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="container hero-wrapper">
            <div className="hero-text">
              <span className="greeting hidden">Hello, I'm</span>
              <h1 className="name hidden">Ashritha PL</h1>
              <h2 className="role hidden">Full Stack <span className="text-gradient">Developer</span></h2>
              <p className="bio hidden">Building seamless digital experiences from the database to the pixel.</p>
              <div className="cta-buttons hidden">
                <a href="#projects" className="btn-primary" onClick={handleAnchor}>View Work</a>
                <a href="#contact" className="btn-secondary" onClick={handleAnchor}>Let's Talk</a>
              </div>
            </div>

            <div className="hero-image hidden" style={{ transitionDelay: '0.4s' }}>
              <div className="photo-blob"></div>
            </div>
          </div>

          <div className="scroll-down">
            <span>Scroll</span>
            <i className="fas fa-arrow-down"></i>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title reveal">About Me</h2>
            <div className="about-grid">
              <div className="about-text reveal">
                <p>I am a passionate Full Stack Developer with a knack for building robust, scalable applications. My approach combines clean code architecture with modern design principles.</p>
                <p>Whether it's designing a complex backend API or crafting a fluid frontend interface, I love solving problems with technology.</p>
                <div className="stats"></div>
              </div>
              <div className="about-cards reveal">
                <div className="card glass">
                  <i className="fas fa-code"></i>
                  <h3>Frontend</h3>
                  <p>React, Next.js, Tailwind</p>
                </div>
                <div className="card glass">
                  <i className="fas fa-server"></i>
                  <h3>Backend</h3>
                  <p>Node.js, Express, SQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title reveal">Tech Stack</h2>
            <div className="skills-wrapper">
              <div className="skill-category reveal">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React.js</span>
                  <span>Tailwind CSS</span>
                  <span>Redux</span>
                </div>
              </div>
              <div className="skill-category reveal">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>Python</span>
                  <span>MongoDB</span>
                  <span>PostgreSQL</span>
                  <span>REST APIs</span>
                </div>
              </div>
              <div className="skill-category reveal">
                <h3>Tools</h3>
                <div className="skill-tags">
                  <span>Git</span>
                  <span>Docker</span>
                  <span>AWS</span>
                  <span>Figma</span>
                  <span>Postman</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title reveal">Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card reveal">
                <div className="project-image">
                  <div className="overlay">
                    <a href="#" className="icon-link"><i className="fab fa-github"></i></a>
                    <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                  </div>
                  <div className="img-placeholder" style={{ background: 'linear-gradient(45deg, #2a2a72, #009ffd)' }}></div>
                </div>
                <div className="project-info">
                  <h3>E-Commerce Platform</h3>
                  <p>A full-stack shopping application with payment integration and user dashboard.</p>
                  <div className="tags">
                    <span>React</span>
                    <span>Node</span>
                    <span>MongoDB</span>
                    <span>Python</span>
                  </div>
                </div>
              </div>

              <div className="project-card reveal">
                <div className="project-image">
                  <div className="overlay">
                    <a href="#" className="icon-link"><i className="fab fa-github"></i></a>
                    <a href="#" className="icon-link"><i className="fas fa-external-link-alt"></i></a>
                  </div>
                  <div className="img-placeholder" style={{ background: 'linear-gradient(45deg, #43cea2, #185a9d)' }}></div>
                </div>
                <div className="project-info">
                  <h3>Task Manager AI</h3>
                  <p>Productivity tool utilizing AI to prioritize daily tasks automatically.</p>
                  <div className="tags">
                    <span>Python</span>
                    <span>Django</span>
                    <span>OpenAI API</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title reveal">Get In Touch</h2>
            <div className="contact-wrapper reveal">
              <div className="contact-info">
                <h3>Let's build something amazing together.</h3>
                <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.</p>
                <div className="social-links">
                  <a href="https://github.com/ashrithahub" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/ashritha-pl-798aaa2b4" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="mailto:plashritha5@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
              <form className="contact-form glass">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <p>Designed & Built by <span className="highlight">Ashritha PL</span> &copy; 2025</p>
        </footer>
      </main>
    </>
  );
};
