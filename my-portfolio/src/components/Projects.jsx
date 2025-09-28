import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal website built with React + Vite, showcasing my skills,
            projects, and contact details. Hosted on GitHub Pages.
          </p>
        </div>

        <div className="project-card">
          <h3>School Attendance Tracker System</h3>
          <p>
            A full-stack system for managing student attendance with React
            frontend, Node.js + Express backend, and MySQL database.
          </p>
        </div>

        <div className="project-card">
          <h3>Volleyball Club Website</h3>
          <p>
            A responsive website for a volleyball club with event management,
            team information, and match updates.
          </p>
        </div>

      </div>
    </section>
  );
}
