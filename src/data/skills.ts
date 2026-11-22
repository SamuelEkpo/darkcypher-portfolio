export type SkillLevel = "hands-on" | "lab" | "familiar";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillLevelLabels: Record<SkillLevel, string> = {
  "hands-on": "Hands-on Experience",
  lab: "Lab & Practical Training",
  familiar: "Familiarity",
};

export const skillCategories: SkillCategory[] = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    description:
      "Core engineering practices, languages, architecture, and development workflows.",
    skills: [
      { name: "TypeScript", level: "hands-on" },
      { name: "JavaScript", level: "hands-on" },
      { name: "Python", level: "hands-on" },
      { name: "Git & GitHub", level: "hands-on" },
      { name: "Object-Oriented Programming", level: "hands-on" },
      { name: "REST APIs", level: "hands-on" },
      { name: "System Design Fundamentals", level: "hands-on" },
      { name: "Clean Architecture", level: "lab" },
      { name: "Design Patterns", level: "lab" },
      { name: "Unit Testing", level: "lab" },
      { name: "Agile / Iterative Delivery", level: "familiar" },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Frontend and full-stack web application development with modern frameworks and tools.",
    skills: [
      { name: "Next.js", level: "hands-on" },
      { name: "React", level: "hands-on" },
      { name: "HTML5 & CSS3", level: "hands-on" },
      { name: "Responsive Design", level: "hands-on" },
      { name: "Node.js", level: "hands-on" },
      { name: "Express.js", level: "hands-on" },
      { name: "PostgreSQL", level: "hands-on" },
      { name: "Prisma", level: "hands-on" },
      { name: "Tailwind CSS", level: "lab" },
      { name: "Authentication & Authorization", level: "lab" },
      { name: "GraphQL", level: "familiar" },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Application security, defensive practices, and ethical security exploration.",
    skills: [
      { name: "Application Security Basics", level: "hands-on" },
      { name: "OWASP Top 10 Awareness", level: "hands-on" },
      { name: "Network Fundamentals", level: "hands-on" },
      { name: "Linux Security Basics", level: "lab" },
      { name: "Vulnerability Assessment Concepts", level: "lab" },
      { name: "Penetration Testing Fundamentals", level: "lab" },
      { name: "Secure Coding Practices", level: "lab" },
      { name: "Threat Modeling", level: "familiar" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing & DevOps",
    description:
      "Cloud platforms, infrastructure, deployment, automation, and server administration.",
    skills: [
      { name: "Kubernetes", level: "hands-on" },
      { name: "GitHub Actions / CI/CD", level: "hands-on" },
      { name: "Linux Administration", level: "hands-on" },
      { name: "AWS", level: "hands-on" },
      { name: "Microsoft Azure", level: "hands-on" },
      { name: "Google Cloud Platform", level: "hands-on" },
      { name: "Vercel", level: "hands-on" },
      { name: "Render", level: "hands-on" },
      { name: "Redis", level: "hands-on" },
      { name: "Cloudflare", level: "hands-on" },
      { name: "Docker", level: "lab" },
      { name: "Docker Compose", level: "lab" },
      { name: "Terraform", level: "lab" },
      { name: "Nginx", level: "familiar" },
    ],
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    description:
      "Machine learning frameworks, generative AI, language models, and retrieval-based systems.",
    skills: [
      { name: "Python", level: "hands-on" },
      { name: "Jupyter Notebook", level: "hands-on" },
      { name: "NumPy", level: "hands-on" },
      { name: "Pandas", level: "hands-on" },
      { name: "Matplotlib", level: "hands-on" },
      { name: "Scikit-learn", level: "hands-on" },
      { name: "TensorFlow", level: "hands-on" },
      { name: "Keras", level: "hands-on" },
      { name: "PyTorch", level: "hands-on" },
      { name: "OpenAI API", level: "hands-on" },
      { name: "Anthropic API", level: "hands-on" },
      { name: "Hugging Face", level: "hands-on" },
      { name: "LangChain", level: "hands-on" },
      { name: "LlamaIndex", level: "hands-on" },
      { name: "Ollama", level: "hands-on" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "hands-on" },
      { name: "Embeddings", level: "hands-on" },
      { name: "Vector Databases", level: "hands-on" },
      { name: "LLM Fine-tuning", level: "hands-on" },
      { name: "Model Context Protocol (MCP)", level: "hands-on" },
      { name: "Gemini API", level: "lab" },
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation & Intelligent Agents",
    description:
      "Workflow automation, agent frameworks, and intelligent tool-driven systems.",
    skills: [
      { name: "Zapier", level: "hands-on" },
      { name: "Make.com", level: "hands-on" },
      { name: "LangGraph", level: "hands-on" },
      { name: "CrewAI", level: "hands-on" },
      { name: "AutoGen", level: "hands-on" },
      { name: "AI Agents", level: "hands-on" },
      { name: "Agentic Workflows", level: "hands-on" },
      { name: "Function Calling", level: "hands-on" },
      { name: "Tool Calling", level: "hands-on" },
      { name: "n8n", level: "lab" },
      { name: "Voice AI Integration", level: "lab" },
      { name: "AI Chatbot Development", level: "familiar" },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Science & Data Engineering",
    description:
      "Data analysis, analytics, data pipelines, processing, and data platforms.",
    skills: [
      { name: "Python Data Analysis", level: "hands-on" },
      { name: "SQL Analytics", level: "hands-on" },
      { name: "Apache Spark", level: "hands-on" },
      { name: "Apache Airflow", level: "hands-on" },
      { name: "dbt", level: "hands-on" },
      { name: "ETL Pipelines", level: "hands-on" },
      { name: "Data Warehousing", level: "hands-on" },
      { name: "Power BI", level: "hands-on" },
      { name: "Tableau", level: "hands-on" },
      { name: "MongoDB", level: "hands-on" },
      { name: "Elasticsearch", level: "hands-on" },
    ],
  },
  {
    id: "blockchain-web3",
    title: "Blockchain & Web3 Development",
    description:
      "Blockchain application development, Ethereum tooling, and smart contract ecosystems.",
    skills: [
      { name: "Web3.js", level: "hands-on" },
      { name: "Ethers.js", level: "hands-on" },
      { name: "Hardhat", level: "hands-on" },
      { name: "MetaMask", level: "hands-on" },
      { name: "Smart Contract Development", level: "hands-on" },
      { name: "Decentralized Application (dApp) Development", level: "hands-on" },
      { name: "Solidity", level: "lab" },
      { name: "Ethereum", level: "lab" },
      { name: "Foundry", level: "lab" },
    ],
  },
];

function countByLevel(level: SkillLevel): number {
  return skillCategories.reduce(
    (sum, category) =>
      sum + category.skills.filter((skill) => skill.level === level).length,
    0,
  );
}

export const skillLevelCounts = {
  "hands-on": countByLevel("hands-on"),
  lab: countByLevel("lab"),
  familiar: countByLevel("familiar"),
  total: skillCategories.reduce(
    (sum, category) => sum + category.skills.length,
    0,
  ),
};
