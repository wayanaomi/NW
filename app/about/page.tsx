import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { AboutPreview } from "@/components/sections/about-preview";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { Cta } from "@/components/sections/cta";
import { SectionHeading } from "@/components/section-heading";
import { GradientBlobs } from "@/components/gradient-blobs";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn more about Naomi Waya, a Software Engineer building scalable web applications, business platforms, and digital products.",
  path: "/about",
  keywords: ["About Naomi Waya", "Software Engineer bio"],
});

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16">
        <GradientBlobs />
        <div className="container-custom">
          <SectionHeading
            eyebrow="About Me"
            title="The engineer behind the code"
            description="A closer look at how I think, work, and build software that lasts."
          />
        </div>
      </section>

      <AboutPreview />
      <TechStackSection />
      <DevelopmentProcess />
      <WhyWorkWithMe />
      <Cta />
    </>
  );
}
