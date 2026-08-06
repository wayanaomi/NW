import { MessageCircleQuestion, Target, HeartHandshake } from "lucide-react";
import type { WhyPoint } from "@/types";

export const whyWorkWithMe: WhyPoint[] = [
  {
    title: "I Ask Questions",
    description:
      "Before writing code, I dig into the why behind the request so the solution actually fits your business.",
    icon: MessageCircleQuestion,
  },
  {
    title: "I Understand Business Goals",
    description:
      "Every technical decision is weighed against what actually moves your product and revenue forward.",
    icon: Target,
  },
  {
    title: "I Don't Disappear After Deployment",
    description:
      "Launch day is the beginning, not the end. I stay involved for fixes, iteration, and long-term support.",
    icon: HeartHandshake,
  },
];
