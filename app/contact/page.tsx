import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { GradientBlobs } from "@/components/gradient-blobs";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { siteConfig, socialLinks } from "@/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Naomi Waya to discuss your next web application, SaaS platform, or digital product.",
  path: "/contact",
  keywords: ["Contact Naomi Waya", "Hire Software Engineer"],
});

const contactDetails = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: undefined,
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "waya-naomi",
    href: socialLinks[0].href,
    icon: FaLinkedinIn,
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <GradientBlobs />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Tell me about your project and I'll get back to you within one business day."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-6">
            {contactDetails.map((detail) => (
              <Card key={detail.label} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <detail.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-foreground">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 sm:p-10">
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
}
