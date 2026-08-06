"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/constants/process";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function DevelopmentProcess() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Development Process"
          title="How a project comes together"
          description="A predictable, transparent process from first conversation to long-term support."
          className="mx-auto mb-16 max-w-2xl"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="absolute left-6 top-2 bottom-2 hidden w-px bg-border sm:block lg:left-1/2" />

          <div className="flex flex-col gap-10 lg:gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className={`relative flex flex-col gap-4 sm:pl-16 lg:w-1/2 lg:pl-0 ${
                  index % 2 === 0
                    ? "lg:pr-16 lg:text-right lg:items-end lg:self-start"
                    : "lg:pl-16 lg:ml-auto lg:items-start lg:self-start"
                }`}
              >
                <div className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm sm:left-0 lg:left-1/2 lg:-translate-x-1/2">
                  <step.icon className="size-5" />
                </div>
                <div className="pl-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Step {step.step}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground lg:ml-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
