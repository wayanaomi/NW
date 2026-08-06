"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { TiltCard } from "@/components/tilt-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <TiltCard className="h-full">
        <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <Badge
              variant="solid"
              className="absolute left-4 top-4 shadow-sm"
            >
              {project.category}
            </Badge>
          </div>

          <CardContent className="flex flex-1 flex-col gap-4 p-6">
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-1.5">
                  <span className="size-1 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex gap-3 pt-4">
              {project.liveUrl && (
              <Button asChild size="sm" className="flex-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <ExternalLink className="size-3.5" />
                Live Demo
                </a>
              </Button>
              )}

              {project.githubUrl && (
                <Button asChild size="sm" variant="outline" className="flex-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="size-3.5" />
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </TiltCard>
    </motion.div>
  );
}
