
export type ProjectStatus =
  | "In Progress"
  | "Under Review & Analysis"
  | "Pre-Launch Review";

export interface Project {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "sentineldesk",
    name: "SentinelDesk",
    category: "Cybersecurity Engineering",
    status: "In Progress",
    description:
      "A defensive cybersecurity platform being developed to centralise asset monitoring, vulnerability assessment, threat monitoring, incident management, and security analytics.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
    highlights: [
      "Authorised asset monitoring",
      "Vulnerability assessment",
      "Threat detection and monitoring",
      "Security incident management",
      "Security analytics",
    ],
    githubUrl:
      "https://github.com/SamuelEkpo/sentineldesk-security-monitor",
  },
  {
    id: "fios-grid",
    name: "FIOS Grid Digital Ecosystem",
    category: "Full-Stack Software Engineering",
    status: "In Progress",
    description:
      "A digital services ecosystem connecting clients with professionals through service requests, automated quotations, project management, and technology education.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Paystack",
    ],
    highlights: [
      "Client service request management",
      "Automated assessment and quotations",
      "Administrative dashboards",
      "Project tracking and updates",
      "Technology Academy",
      "Payment integration",
    ],
  },
  {
    id: "skyline-air",
    name: "Skyline Air",
    category: "Airline Booking & Management",
    status: "Under Review & Analysis",
    description:
      "An airline technology platform under analysis, designed to connect passenger reservations with administrative and operational airline management.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    highlights: [
      "Flight search and fare comparison",
      "Seat selection and reservations",
      "Transactional booking management",
      "Payment verification",
      "Flight and aircraft administration",
      "Passenger and crew management",
    ],
  },
  {
    id: "aethermind",
    name: "AetherMind",
    category: "AI Engineering",
    status: "Pre-Launch Review",
    description:
      "An AI engineering project exploring intelligent development systems that can understand codebases, assist with programming, analyse architectures, and automate software development workflows.",
    technologies: [
      "Artificial Intelligence",
      "Transformer Models",
      "Open-Weight Models",
      "Local AI",
      "Cloud AI",
    ],
    highlights: [
      "AI-assisted programming",
      "Software architecture analysis",
      "Code generation and debugging",
      "Hybrid local and cloud architecture",
      "Custom Transformer exploration",
    ],
  },
];
