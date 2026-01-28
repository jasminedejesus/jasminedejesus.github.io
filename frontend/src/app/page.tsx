export default function Home() {
  return (
    <main>
      <section id="Home">
        <div className="hero-inner">
          <h1>Jasmine De Jesus</h1>
          <p className="hero-subtitle">
            A Computer Science student, passionate about exploring different
            areas in technology. Enjoys learning new skills and building
            projects that foster growth.
          </p>
          <div className="hero-actions">
            <a href="/projects">
              <button>See projects</button>
            </a>
            <a href="/contact" className="secondary-link">
              <span>Contact me</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}