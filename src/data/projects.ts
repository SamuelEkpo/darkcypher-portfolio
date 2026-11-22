
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
      "A defensive cybersecurity platform in development, designed to give security teams a central place to monitor authorised assets, assess vulnerabilities, track potential threats, manage incidents, and review security activity.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
    highlights: [
      "Authorised asset discovery and monitoring",
      "Vulnerability assessment and security analysis",
      "Threat monitoring and detection workflows",
      "Security incident tracking and management",
      "Centralised security analytics",
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
      "A full-stack digital services ecosystem being developed to connect clients with digital professionals. The platform brings together service requests, quotation workflows, project coordination, online payments, and technology education.",
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
      "Client registration and service request workflows",
      "Automated request assessment and quotation generation",
      "Administrative management dashboards",
      "Client project tracking and progress updates",
      "FIOS Grid Tech Academy",
      "Online payment integration",
    ],
  },
  {
    id: "skyline-air",
    name: "Skyline Air",
    category: "Airline Booking & Management",
    status: "Under Review & Analysis",
    description:
      "An airline booking and management platform currently undergoing review and technical analysis. Its proposed scope covers passenger reservations, flight administration, booking workflows, and operational management.",
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
      "Passenger seat selection and reservations",
      "Booking lifecycle and transaction management",
      "Payment verification workflows",
      "Flight and aircraft administration",
      "Passenger and crew management",
    ],
  },
  {
    id: "booksmart",
    name: "BookSmart",
    category: "SaaS Product Engineering",
    status: "In Progress",
    description:
      "A business appointment and scheduling platform for service-based businesses. It covers calendar management, customer records, staff assignment, service catalogs, and booking workflows with a modern workspace UI.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS Modules",
    ],
    highlights: [
      "Appointment calendar with month, week, and day views",
      "Customer, staff, and service management",
      "Reusable UI system for tables, modals, and status badges",
      "New appointment flow with validation and scheduling rules",
      "Workspace navigation designed for business operators",
    ],
  },
  {
    id: "aethermind",
    name: "AetherMind",
    category: "AI Engineering",
    status: "Pre-Launch Review",
    description:
      "An AI engineering initiative exploring intelligent software development systems. Its proposed direction includes codebase understanding, programming assistance, software architecture analysis, and automated development workflows using local and cloud-based AI models.",
    technologies: [
      "Artificial Intelligence",
      "Transformer Models",
      "Open-Weight Models",
      "Local AI",
      "Cloud AI",
    ],
    highlights: [
      "AI-assisted programming workflows",
      "Software architecture exploration",
      "Code generation and debugging assistance",
      "Hybrid local and cloud AI architecture",
      "Custom Transformer model research",
    ],
  },
];
