"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { whyWorkWithMe } from "@/constants/why-work-with-me";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function WhyWorkWithMe() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="A partner, not just a contractor"
          className="mx-auto mb-16 max-w-2xl"
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {whyWorkWithMe.map((point) => (
            <motion.div key={point.title} variants={fadeUp}>
              <Card className="h-full p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <point.icon className="size-7" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
