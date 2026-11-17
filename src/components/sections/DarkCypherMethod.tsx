
const methodSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Investigate the problem, define requirements, understand constraints, and identify the underlying challenges before deciding how to approach a solution.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Design a practical approach, select appropriate technologies, and plan for scalability, maintainability, performance, and security from the beginning.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Translate the design into functional solutions through structured development, thoughtful implementation, experimentation, and iterative improvement.",
  },
  {
    number: "04",
    title: "Test & Secure",
    description:
      "Verify functionality, evaluate reliability, identify potential vulnerabilities, and strengthen the solution through testing and security-conscious development.",
  },
];

export default function DarkCypherMethod() {
  return (
    <section
      className="method-section section-container"
      id="method"
    >
      <div className="section-heading">
        <p className="eyebrow">03 / THE DARKCYPHER METHOD</p>

        <h2>
          Think critically.
          <span> Engineer purposefully.</span>
        </h2>

        <p className="section-description">
          Effective engineering requires more than writing code.
          My approach brings together problem analysis, thoughtful
          architecture, practical implementation, and continuous
          testing with security in mind.
        </p>
      </div>

      <div className="method-grid">
        {methodSteps.map((step) => (
          <article className="method-card" key={step.number}>
            <span className="method-number">{step.number}</span>

            <div className="method-card-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            <span className="method-card-mark" aria-hidden="true">
              /
            </span>
          </article>
        ))}
      </div>

      <p className="method-closing">
        Learn continuously. Build intelligently. Innovate fearlessly.
        Secure the digital world.
      </p>
    </section>
  );
}
