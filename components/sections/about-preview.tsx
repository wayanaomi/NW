"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { useCounter } from "@/hooks/use-counter";
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/motion";

const stats = [
  { label: "Years of Experience", value: 4, suffix: "+" },
  { label: "Projects Delivered", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
  { label: "Technologies Mastered", value: 18, suffix: "+" },
];

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, value: count } = useCounter(value);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <p className="text-3xl font-bold text-foreground sm:text-4xl">
        {count}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

const highlights = [
  "Clean, maintainable, well-tested code",
  "Clear communication from kickoff to launch",
  "Security and performance built in, not bolted on",
];

export function AboutPreview() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-custom">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering software that respects people's time"
          className="mx-auto mb-16 max-w-2xl"
        />

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <Image
                src="/images/naomi-waya-portrait.jpg"
                alt="Naomi Waya, Software Engineer"
                fill
                sizes="(max-width: 768px) 320px, 384px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg">
              <p className="text-xs font-semibold text-muted-foreground">
                Based in
              </p>
              <p className="text-base font-bold text-foreground">
                Abuja, Nigeria
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;m Naomi Waya, a software engineer who partners with
              founders, schools, and organizations to turn ambitious ideas
              into reliable products. My work spans custom web applications,
              SaaS platforms, and the internal tools businesses run on every
              day.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I care about the details recruiters and clients notice
              immediately: fast load times, thoughtful UX, and code that the
              next engineer can actually understand.
            </p>

            <ul className="flex flex-col gap-3">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </motion.div>

            <div>
              <Button asChild variant="link" className="text-base">
                <Link href="/about">
                  More about my story
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
