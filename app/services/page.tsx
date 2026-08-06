import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { GradientBlobs } from "@/components/gradient-blobs";
import { ServicesSection } from "@/components/sections/services-section";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore the services Naomi Waya offers, from custom web applications and SaaS platforms to APIs, dashboards, and cloud deployment.",
  path: "/services",
  keywords: ["Web Development Services", "SaaS Development", "API Development"],
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16">
        <GradientBlobs />
        <div className="container-custom">
          <SectionHeading
            eyebrow="Services"
            title="Software services built around your goals"
            description="Whether you need a full platform or a focused feature, here is how I can help."
          />
        </div>
      </section>

      <ServicesSection />
      <DevelopmentProcess />
      <WhyWorkWithMe />
      <Cta />
    </>
  );
}
