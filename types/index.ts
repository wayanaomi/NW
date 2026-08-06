import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechCategory {
  category: string;
  items: {
    name: string;
    icon?: LucideIcon | IconType;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SelectedWork {
  name: string;
  url: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarInitials: string;
}

export type ContactFormState = "idle" | "loading" | "success" | "error";
