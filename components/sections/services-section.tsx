"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/30 py-24 sm:py-32">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          description="From a single conversion-focused landing page to a full multi-tenant SaaS platform."
          className="mx-auto mb-16 max-w-2xl"
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <TiltCard>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Button asChild size="lg">
            <Link href="/services">
              View all services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
