"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { GradientBlobs } from "@/components/gradient-blobs";
import { ProjectCard } from "@/components/project-card";
import { SelectedWork } from "@/components/sections/selected-work";
import { Cta } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/constants/projects";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16">
        <GradientBlobs />
        <div className="container-custom">
          <SectionHeading
            eyebrow="Projects"
            title="A closer look at what I've built"
            description="Full case studies of platforms designed and engineered from the ground up."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-custom">
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className="focus-visible:outline-none"
              >
                <Badge
                  variant={active === category ? "solid" : "outline"}
                  className={cn(
                    "cursor-pointer px-4 py-2 text-sm transition-transform hover:-translate-y-0.5"
                  )}
                >
                  {category}
                </Badge>
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      <SelectedWork />
      <Cta />
    </>
  );
}
