import {
  FaReact,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaTools,
} from "react-icons/fa";

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    technologies: ["React", "Vue.js", "Angular", "TypeScript"],
  },

  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Creating robust server-side applications and RESTful APIs.",
    technologies: ["Node.js", "Express", "Django", "Laravel"],
  },

  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },

  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "Building cross-platform mobile applications with modern technologies.",
    technologies: ["React Native", "Flutter", "Android"],
  },

  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description:
      "Deploying and managing applications using modern cloud technologies.",
    technologies: ["AWS", "Docker", "Vercel", "GitHub Actions"],
  },

  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Using modern development tools to build, test and deploy applications.",
    technologies: ["Git", "GitHub", "VS Code", "Postman"],
  },
];