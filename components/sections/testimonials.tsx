"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/constants/testimonials";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say after working with me"
          className="mx-auto mb-16 max-w-2xl"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeUp}>
              <Card className="flex h-full flex-col gap-5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <Quote className="size-8 text-primary/30" />
                <p className="flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.avatarInitials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
