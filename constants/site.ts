import type { NavItem, SocialLink } from "@/types";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

export const siteConfig = {
  name: "Naomi Waya",
  alias: "Walex",
  title: "Naomi Waya | Software Engineer",
  role: "Software Engineer",
  tagline: "At least that's what my Boss keeps calling me.",
  description:
    "Naomi Waya is a Software Engineer who designs and builds scalable web applications, business platforms, internal tools, and digital products used by businesses and organizations.",
  url: "https://naomiwaya.com",
  email: "contact@naomiwaya.com",
  location: "Abuja, Nigeria",
  keywords: [
    "Naomi Waya",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Engineer",
    "Web Application Developer Nigeria",
    "SaaS Developer",
    "School Management System Developer",
    "Learning Management System Developer",
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/waya-naomi-5a6968290/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/wayanaomi",
    icon: FaGithub,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: FaXTwitter,
  },
];
