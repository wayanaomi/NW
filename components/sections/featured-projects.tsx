"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Recent work I'm proud of"
          description="A selection of platforms built end-to-end, from data modeling to production deployment."
          className="mx-auto mb-16 max-w-2xl"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              View all projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
