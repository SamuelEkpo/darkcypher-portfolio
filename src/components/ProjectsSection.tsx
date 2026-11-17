
import Link from "next/link";
import { projects, type ProjectStatus } from "../data/projects";

const statusClasses: Record<ProjectStatus, string> = {
  "In Progress": "project-status-progress",
  "Under Review & Analysis": "project-status-review",
  "Pre-Launch Review": "project-status-prelaunch",
};

export default function ProjectsSection() {
  return (
    <section
      className="projects-section section-container"
      id="projects"
    >
      <div className="section-heading">
        <p className="eyebrow">04 / SELECTED WORK</p>

        <h2>
          Ideas into <span>real projects.</span>
        </h2>

        <p className="section-description">
          A selection of software engineering, cybersecurity, and
          artificial intelligence projects I am developing and exploring.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-top">
              <span className="project-index">
                PROJECT / {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={`project-status ${statusClasses[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <div className="project-card-content">
              <p className="project-category">{project.category}</p>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-highlights">
                <h4>Project focus</h4>

                <ul>
                  {project.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="project-card-footer">
              <Link href={`/projects/${project.id}`}>
                View Project Details <span aria-hidden="true">→</span>
              </Link>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository <span aria-hidden="true">↗</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Website <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
