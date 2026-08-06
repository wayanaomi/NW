import {
  Code2,
  Layers,
  School,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Globe,
  LayoutDashboard,
  Server,
  ShieldCheck,
  CreditCard,
  Database,
  Gauge,
  Cloud,
} from "lucide-react";
import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    title: "Custom Web Applications",
    description:
      "Bespoke, scalable web applications engineered around your exact business workflow, not a generic template.",
    icon: Code2,
  },
  {
    title: "SaaS Platforms",
    description:
      "Multi-tenant SaaS products with subscriptions, billing, roles, and dashboards built to scale from day one.",
    icon: Layers,
  },
  {
    title: "School Management Systems",
    description:
      "End-to-end platforms for student records, attendance, fees, results, and parent-teacher communication.",
    icon: School,
  },
  {
    title: "Learning Management Systems",
    description:
      "Course creation, video delivery, enrollment, progress tracking, and certification for online learning.",
    icon: GraduationCap,
  },
  {
    title: "Online Marketplaces",
    description:
      "Multi-vendor marketplaces with catalogs, carts, checkout, ratings, and vendor dashboards.",
    icon: ShoppingCart,
  },
  {
    title: "Job Boards",
    description:
      "Job listing platforms connecting employers and candidates with applications, resumes, and tracking.",
    icon: Briefcase,
  },
  {
    title: "Business Websites",
    description:
      "Beautiful, responsive, conversion-focused websites that represent your brand with clarity and polish.",
    icon: Globe,
  },
  {
    title: "Admin Dashboards",
    description:
      "Data-rich internal tools and admin panels with role-based access, analytics, and reporting.",
    icon: LayoutDashboard,
  },
  {
    title: "REST APIs",
    description:
      "Well-documented, secure, and versioned APIs designed for reliability and easy integration.",
    icon: Server,
  },
  {
    title: "Authentication Systems",
    description:
      "Secure sign-up and login flows using JWT, OAuth, or session-based authentication with RBAC.",
    icon: ShieldCheck,
  },
  {
    title: "Payment Integration",
    description:
      "Seamless integration of payment gateways for subscriptions, one-off payments, and invoicing.",
    icon: CreditCard,
  },
  {
    title: "Database Design",
    description:
      "Efficient, normalized schemas and query optimization across PostgreSQL, MongoDB, and MySQL.",
    icon: Database,
  },
  {
    title: "Performance Optimization",
    description:
      "Faster load times, optimized bundles, caching strategies, and Core Web Vitals improvements.",
    icon: Gauge,
  },
  {
    title: "Cloud Deployment",
    description:
      "Production deployments and CI/CD pipelines across Vercel, Render, Railway, and Docker.",
    icon: Cloud,
  },
];
