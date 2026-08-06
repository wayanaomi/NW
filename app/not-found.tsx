"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientBlobs } from "@/components/gradient-blobs";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden py-24">
      <GradientBlobs />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container-custom flex flex-col items-center gap-6 text-center"
      >
        <div className="flex size-20 items-center justify-center rounded-3xl bg-secondary text-secondary-foreground">
          <SearchX className="size-10" />
        </div>
        <p className="text-7xl font-bold tracking-tight text-primary sm:text-8xl">
          404
        </p>
        <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
          This page took a wrong turn
        </h1>
        <p className="max-w-md text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="size-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <ArrowLeft className="size-4" />
              Contact Me Instead
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
