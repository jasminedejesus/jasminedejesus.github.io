export default function ProjectsPage() {
  return (
    <main>
      <section id="Projects">
        <div className="section-inner">
          <h2>Projects</h2>
          <p>A few works that reflect my journey</p>
        </div>
        <div className="container-projects">
          <div className="project">
            <h3>Project Title 1</h3>
            <p>Short description of Project 1.</p>
            <a href="#">View Project</a>
            <a href="https://www.example.com/">Github repo</a>
          </div>
          <div className="project">
            <h3>Project Title 2</h3>
            <p>Short description of Project 2.</p>
            <a href="#">View Project</a>
            <a href="https://www.example.com/">Github repo</a>
          </div>
          <div className="project">
            <h3>Project Title 3</h3>
            <p>Short description of Project 3.</p>
            <a href="#">View Project</a>
            <a href="https://www.example.com/">Github repo</a>
          </div>
        </div>
      </section>
    </main>
  );
}

