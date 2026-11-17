
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return {
      title: "Project Not Found | DarkCypher",
    };
  }

  return {
    title: `${project.name} | DarkCypher`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  const statusClass =
    project.status === "In Progress"
      ? "project-status-progress"
      : project.status === "Under Review & Analysis"
        ? "project-status-review"
        : "project-status-prelaunch";

  return (
    <main className="project-detail-page">
      <div className="project-detail-container">
        <Link href="/#projects" className="project-back-link">
          <span aria-hidden="true">←</span>
          Back to selected projects
        </Link>

        <header className="project-detail-header">
          <p className="eyebrow">
            PROJECT / {project.id.toUpperCase()}
          </p>

          <p className="project-detail-category">
            {project.category}
          </p>

          <h1>{project.name}</h1>

          <span className={`project-status ${statusClass}`}>
            {project.status}
          </span>

          <p className="project-detail-description">
            {project.description}
          </p>
        </header>

        <section className="project-detail-section">
          <p className="eyebrow">01 / OVERVIEW</p>
          <h2>Understanding the project</h2>

          <p>{project.description}</p>

          <p>
            This project forms part of my ongoing work in software
            engineering and digital product development. The scope,
            implementation priorities, and technical decisions are
            guided by the project&apos;s objectives and current development
            stage.
          </p>
        </section>

        <section className="project-detail-section">
          <p className="eyebrow">02 / PROJECT FOCUS</p>
          <h2>Key areas and objectives</h2>

          <div className="project-detail-focus-grid">
            {project.highlights.map((highlight, index) => (
              <article
                key={highlight}
                className="project-focus-card"
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{highlight}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="project-detail-section">
          <p className="eyebrow">03 / TECHNOLOGY</p>
          <h2>Technologies and tools</h2>

          <p>
            The following technologies are associated with this
            project&apos;s development.
          </p>

          <div className="project-technologies project-detail-technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section className="project-detail-section project-detail-links">
          <p className="eyebrow">04 / PROJECT RESOURCES</p>
          <h2>Explore the project</h2>

          <p>
            Explore the available project resources and development
            materials.
          </p>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              View GitHub Repository ↗
            </a>
          )}

          {!project.githubUrl && (
            <p className="project-resource-note">
              A public repository has not been linked for this
              project yet.
            </p>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              Visit Live Project ↗
            </a>
          )}

          {!project.liveUrl && (
            <p className="project-resource-note">
              A live demonstration is not currently available.
            </p>
          )}
        </section>

        <div className="project-detail-footer">
          <Link href="/#projects" className="project-back-link">
            ← Return to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
