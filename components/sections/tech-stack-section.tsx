"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { techStack } from "@/constants/tech-stack";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 sm:py-32">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use to ship reliable products"
          className="mx-auto mb-14 max-w-2xl"
        />

        <Tabs defaultValue={techStack[0].category} className="items-center">
          <TabsList>
            {techStack.map((group) => (
              <TabsTrigger key={group.category} value={group.category}>
                {group.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {techStack.map((group) => (
            <TabsContent
              key={group.category}
              value={group.category}
              className="w-full"
            >
              <motion.div
                variants={staggerContainer(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
              >
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-colors hover:border-primary/40"
                  >
                    {item.icon && (
                      <item.icon className="size-8 text-primary" />
                    )}
                    <span className="text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
