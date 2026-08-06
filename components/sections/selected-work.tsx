"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { selectedWork } from "@/constants/projects";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function SelectedWork() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Selected Work"
          title="Live client websites"
          description="Real businesses using products I designed and built."
          className="mx-auto mb-14 max-w-2xl"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {selectedWork.map((work) => (
            <motion.a
              key={work.name}
              variants={fadeUp}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {work.name}
                  </h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {work.description}
                </p>
                <p className="mt-6 truncate text-xs font-medium text-primary">
                  {work.url.replace("https://", "")}
                </p>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
