
import Image from "next/image";

import SkillsSection from "../components/SkillsSection";

import ProjectsSection from "../components/ProjectsSection";

import DarkCypherMethod from "../components/sections/DarkCypherMethod";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Method", href: "#method" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const expertise = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Building software solutions through structured development, problem-solving, application architecture, database design, and continuous improvement.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Developing responsive websites and full-stack web applications using modern frontend and backend technologies, APIs, and database systems.",
  },
  {
    number: "03",
    title: "Cybersecurity",
    description:
      "Exploring application security, network security, vulnerability assessment, and practical penetration testing through ethical security practices.",
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Building AI-powered workflows and exploring intelligent agents, integrations, and automation solutions that help simplify repetitive tasks.",
  },
];

type ContactIconName = "email" | "github" | "x" | "whatsapp";

function ContactIcon({ name }: { name: ContactIconName }) {
  const commonProps = {
    width: 25,
    height: 25,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
    focusable: false as const,
  };

  switch (name) {
    case "email":
      return (
        <svg {...commonProps} stroke="currentColor" strokeWidth="1.7">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path
            d="m4 7 8 6 8-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "github":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.78 2.08 3.37 1.48.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case "x":
      return (
        <svg {...commonProps} fill="currentColor">
          <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.36L5.6 22H2.48l7.25-8.29L1.8 2h6.4l4.43 6.77L18.9 2Zm-1.1 18h1.73L7.26 3.9H5.4L17.8 20Z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2a9.91 9.91 0 0 0-8.5 15.01L2.1 22l5.12-1.34A9.95 9.95 0 1 0 12.04 2Zm0 18.08a8.1 8.1 0 0 1-4.12-1.12l-.3-.18-3.04.8.81-2.96-.2-.31a8.12 8.12 0 1 1 6.85 3.77Zm4.45-6.08c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.43-.59 1.63-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      );
  }
}

const contactLinks: {
  name: ContactIconName;
  label: string;
  href: string;
  primary?: boolean;
  external?: boolean;
}[] = [
  {
    name: "email",
    label: "Email",
    href: "mailto:samueljackie157@gmail.com",
  },
  {
    name: "github",
    label: "GitHub",
    href: "https://github.com/SamuelEkpo",
    external: true,
  },
  {
    name: "x",
    label: "X",
    href: "https://x.com/Sterling_Tech19",
    external: true,
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/2347078222486?text=Hello%20Samuel%2C%20I%20visited%20your%20DarkCypher%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    primary: true,
    external: true,
  },
];

const whatsappProjectLink =
  "https://wa.me/2347078222486?text=Hello%20Samuel%2C%20I%20visited%20your%20DarkCypher%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="site-header">
        <a className="brand" href="#home" aria-label="DarkCypher home">
          DARK<span>CYPHER</span>
          <span className="brand-mark">.</span>
        </a>

        <nav className="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href={whatsappProjectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuss a project <span aria-hidden="true">&#8599;</span>
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            SOFTWARE ENGINEERING &#183; WEB DEVELOPMENT &#183; AI AUTOMATION
          </p>

          <h1>
            I build websites,
            <br />
            <span>applications &amp; AI solutions.</span>
          </h1>

          <p className="hero-description">
            I&apos;m Samuel Ekpo, known professionally as DarkCypher. I develop
            modern websites, full-stack applications, and practical AI
            automation solutions. I work with businesses, individuals, and
            teams to turn ideas and technical requirements into useful digital
            products.
          </p>

          <div className="hero-actions">
            <a
              className="button-primary"
              href={whatsappProjectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss a project <span aria-hidden="true">&#8599;</span>
            </a>

            <a className="button-secondary" href="#projects">
              View my work
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/images/darkcypher-hacker.jpg"
              alt="Anonymous hooded figure working at multiple computer monitors in a dark room"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 48vw"
              className="hero-image"
            />

            <div className="hero-image-overlay" />

            <span className="visual-label">DARK CYPHER / 001</span>

            <span className="visual-coordinate">
              TECHNOLOGY WITH PURPOSE
            </span>
          </div>
        </div>

        <div className="hero-footer">
          <span>INDEPENDENT THINKING. PURPOSEFUL ENGINEERING.</span>
          <span>SCROLL TO EXPLORE &#8595;</span>
        </div>
      </section>

      {/* About */}
      <section className="about-section section-container" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT</p>

          <h2>
            Curiosity drives the work.
            <span> Purpose defines the result.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            I am Samuel Ekpo, known professionally as DarkCypher. I am a
            software engineer and aspiring ethical hacker with a strong
            interest in understanding how technology works and using that
            knowledge to solve real-world problems.
          </p>

          <p>
            My technical work and interests span software development, web
            technologies, artificial intelligence, automation, computer
            networking, and cybersecurity. I enjoy designing applications,
            developing backend systems, integrating APIs, and finding practical
            ways to make digital products more useful and reliable.
          </p>

          <p>
            I am interested in working with businesses, individuals, and
            development teams that need help building websites, web
            applications, or automation workflows. Through my involvement with
            FIOS Grid, I also contribute to technology education and digital
            innovation.
          </p>

          <p>
            My long-term vision is to become a highly skilled software engineer
            and ethical hacker, build useful technology platforms, and
            contribute to a safer and more innovative digital world.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section
        className="expertise-section section-container"
        id="expertise"
      >
        <div className="section-heading">
          <p className="eyebrow">02 / EXPERTISE</p>

          <h2>
            Areas of <span>focus.</span>
          </h2>

          <p className="section-description">
            Technical disciplines and services I work with to solve problems
            and build digital solutions.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <span className="card-number">{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="card-arrow" aria-hidden="true">
                &#8599;
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* The DarkCypher Method */}
      <DarkCypherMethod />

      {/* Technical Capabilities */}
      <SkillsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Contact */}
      <section className="contact-section section-container" id="contact">
        <p className="eyebrow">06 / CONTACT</p>

        <h2>
          Have a project in mind?
          <br />
          <span>Let&apos;s discuss how to build it.</span>
        </h2>

        <p>
          Need a website, a web application, or an AI-powered automation
          workflow? Share what you are working on, the problem you want to
          solve, and what you need. I&apos;d be glad to discuss the project and
          explore how I can help.
        </p>

        <div
          className="contact-links"
          aria-label="Contact and social profiles"
        >
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`contact-link contact-icon-link${
                link.primary ? " contact-link-primary" : ""
              }`}
              aria-label={link.label}
              title={link.label}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <ContactIcon name={link.name} />
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <a className="brand" href="#home" aria-label="DarkCypher home">
          DARK<span>CYPHER</span>
          <span className="brand-mark">.</span>
        </a>

        <p>Independent thinking. Purposeful engineering.</p>

        <span>&#169; 2026 DARKCYPHER</span>
      </footer>
    </main>
  );
}
