import type { Project, SelectedWork } from "@/types";

export const projects: Project[] = [
  {
    slug: "school-management-system",
    title: "School Management System",
    category: "Education Platform",
    description:
      "A complete school operations platform covering academics, administration, and communication between staff, students, and parents.",
    image: "/projects/school-management-system.svg",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
    features: [
      "Student Records",
      "Attendance",
      "Fee Management",
      "Results",
      "Parent Portal",
      "Teacher Dashboard",
      "RBAC",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    category: "EdTech Platform",
    description:
      "An online learning platform for instructors to publish courses and for learners to enroll, track progress, and earn certificates.",
    image: "/projects/learning-management-system.svg",
    tech: ["Next.js", "TypeScript", "MongoDB", "Node.js", "TailwindCSS"],
    features: [
      "Course Creation",
      "Videos",
      "Enrollment",
      "Progress Tracking",
      "Assessments",
      "Certificates",
      "Instructor Dashboard",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    slug: "online-marketplace",
    title: "Online Marketplace",
    category: "E-Commerce Platform",
    description:
      "A multi-vendor marketplace with product listings, secure checkout, and dedicated dashboards for vendors and administrators.",
    image: "/projects/online-marketplace.svg",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Express.js"],
    features: [
      "Vendor Dashboard",
      "Shopping Cart",
      "Authentication",
      "Orders",
      "Ratings",
      "Reviews",
      "Products",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    slug: "job-board",
    title: "Job Board",
    category: "Recruitment Platform",
    description:
      "A two-sided recruitment platform connecting employers with candidates through applications, tracking, and search.",
    image: "/projects/job-board.svg",
    tech: ["Next.js", "TypeScript", "MySQL", "NestJS"],
    features: [
      "Employers",
      "Candidates",
      "Applications",
      "Resume Upload",
      "Search",
      "Tracking",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    slug: "business-websites",
    title: "Business Websites",
    category: "Corporate Websites",
    description:
      "Beautiful, responsive business websites focused on conversions, brand storytelling, and fast performance.",
    image: "/projects/business-websites.svg",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Conversion Focused",
      "CMS Ready",
      "Fast Performance",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    featured: false,
  },
];

export const selectedWork: SelectedWork[] = [
  {
    name: "Lukmoore",
    url: "https://lukmoore.com",
    description:
      "Corporate website designed with performance, responsiveness, and user experience in mind.",
  },
  {
    name: "Avedok",
    url: "https://avedok.ng",
    description:
      "Digital skills academy showcasing services, courses, programs, and events.",
  },
];
