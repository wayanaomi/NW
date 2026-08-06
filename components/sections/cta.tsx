"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { siteConfig } from "@/constants/site";

export function Cta() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-border bg-[#111827] px-8 py-16 text-center shadow-xl sm:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.2),transparent_50%)]"
          />
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Have a product idea worth building properly?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-base text-white/85"
          >
            Let&apos;s talk about your goals and figure out the fastest,
            most reliable way to bring them to life.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-white/90 hover:-translate-y-0.5"
            >
              <Link href="/contact">
                <Mail className="size-4" />
                Start a Project
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10"
            >
              <a href={`mailto:${siteConfig.email}`}>
                Email Me
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
