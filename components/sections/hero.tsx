"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientBlobs } from "@/components/gradient-blobs";
import { TypedText } from "@/components/typed-text";
import { siteConfig } from "@/constants/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

const rotatingRoles = [
  "Software Engineer",
  "Problem Solver",
  "Product Builder",
  "Full-Stack Developer",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <GradientBlobs />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 noise-overlay opacity-[0.03]"
      />

      <div className="container-custom grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {siteConfig.name},{" "}
            <span className="text-gradient-primary">call me Walex</span> if
            you like.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="h-8 text-lg font-semibold text-primary sm:text-xl"
          >
            <TypedText words={rotatingRoles} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I design and build scalable web applications, business platforms,
            internal tools, and digital products used by businesses and
            organizations. I believe software should be intuitive, fast,
            secure, and actually solve a problem—not become one.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card px-5 py-3 text-sm italic text-muted-foreground"
          >
            &ldquo;{siteConfig.tagline}&rdquo;
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button asChild size="lg" className="glow-primary">
              <a href="/resume/naomi-waya-cv.pdf" download>
                <Download className="size-4" />
                Download CV
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                <Mail className="size-4" />
                Let&apos;s Talk
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl" />

            <div className="relative size-full overflow-hidden rounded-[2.5rem] border border-border bg-card p-3 shadow-xl glow-primary">
              <div className="relative size-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/naomi-waya-portrait.jpg"
                  alt="Portrait of Naomi Waya, Software Engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium tracking-wide">
            Scroll
          </span>
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}