import {
  Search,
  ClipboardList,
  Code2,
  FlaskConical,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding your business goals, users, and constraints before a single line of code is written.",
    icon: Search,
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Mapping the architecture, data models, and timeline so the build stays predictable and on schedule.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Building clean, tested, well-structured features in focused iterations with regular check-ins.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Verifying functionality, performance, and edge cases across devices before anything ships.",
    icon: FlaskConical,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Shipping to production with proper CI/CD, monitoring, and zero-downtime releases.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Support",
    description:
      "Staying available after launch for fixes, improvements, and the next phase of growth.",
    icon: LifeBuoy,
  },
];
