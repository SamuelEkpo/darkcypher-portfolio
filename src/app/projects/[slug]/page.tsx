
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
    title: `${project.name} | DarkCypher Projects`,
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

  return (
    <main className="project-detail-page">
      <div className="project-detail-container">
        <Link href="/#projects" className="project-back-link">
          <span aria-hidden="true">←</span> Back to selected projects
        </Link>

        <header className="project-detail-header">
          <p className="eyebrow">
            PROJECT / {project.id.toUpperCase()}
          </p>

          <p className="project-detail-category">
            {project.category}
          </p>

          <h1>{project.name}</h1>

          <span
            className={`project-status ${
              project.status === "In Progress"
                ? "project-status-progress"
                : project.status === "Under Review & Analysis"
                  ? "project-status-review"
                  : "project-status-prelaunch"
            }`}
          >
            {project.status}
          </span>

          <p className="project-detail-description">
            {project.description}
          </p>
        </header>

        <section className="project-detail-section">
          <p className="eyebrow">01 / PROJECT OVERVIEW</p>
          <h2>About this project</h2>
          <p>{project.description}</p>
        </section>

        <section className="project-detail-section">
          <p className="eyebrow">02 / PROJECT FOCUS</p>
          <h2>Key areas and objectives</h2>

          <div className="project-detail-focus-grid">
            {project.highlights.map((highlight, index) => (
              <article key={highlight} className="project-focus-card">
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

          <div className="project-technologies project-detail-technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section className="project-detail-section project-detail-links">
          <p className="eyebrow">04 / EXPLORE</p>
          <h2>Project resources</h2>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              View GitHub Repository ↗
            </a>
          ) : (
            <p>
              A public repository has not been linked for this project yet.
            </p>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              Visit Live Project ↗
            </a>
          ) : (
            <p className="project-resource-note">
              A live demonstration is not currently available.
            </p>
          )}
        </section>

        <Link href="/#projects" className="project-back-link">
          ← Return to all projects
        </Link>
      </div>
    </main>
  );
}
