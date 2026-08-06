import { Hero } from "@/components/sections/hero";
import { TrustedTech } from "@/components/sections/trusted-tech";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SelectedWork } from "@/components/sections/selected-work";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedTech />
      <AboutPreview />
      <ServicesSection />
      <TechStackSection />
      <FeaturedProjects />
      <SelectedWork />
      <DevelopmentProcess />
      <WhyWorkWithMe />
      <Testimonials />
      <Cta />
    </>
  );
}

