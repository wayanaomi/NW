import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiRender,
  SiRailway,
  SiNetlify,
  SiVercel,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiPostman,
  SiPrisma,
  SiFigma,
} from "react-icons/si";
import { KeyRound, Fingerprint, Code } from "lucide-react";
import type { TechCategory } from "@/types";

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Authentication",
    items: [
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "OAuth", icon: KeyRound },
      { name: "Session Auth", icon: Fingerprint },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Render", icon: SiRender },
      { name: "Railway", icon: SiRailway },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vercel", icon: SiVercel },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: Code },
      { name: "Prisma", icon: SiPrisma },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export const trustedTech = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Docker", icon: SiDocker },
  { name: "Vercel", icon: SiVercel },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
];
