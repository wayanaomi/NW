"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Download, Menu, Mail } from "lucide-react";

import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { navItems, siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogoAvatar } from "@/components/logo-avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrollPosition(16);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "glass-panel border-b border-border shadow-sm"
          : "border-b border-transparent"
      )}
    >
      <nav className="container-custom flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight"
        >
          <LogoAvatar />
          <span className="hidden sm:inline">Naomi Waya</span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-border bg-card/60 p-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="/resume/naomi-waya-cv.pdf" download>
              <Download className="size-4" />
              Resume
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <ul className="mt-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-muted",
                          pathname === item.href
                            ? "bg-secondary text-secondary-foreground"
                            : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
                <Button asChild variant="secondary">
                  <a href="/resume/naomi-waya-cv.pdf" download>
                    <Download className="size-4" />
                    Download CV
                  </a>
                </Button>
                <Button asChild>
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="size-4" />
                    Contact Me
                  </a>
                </Button>
                <div className="flex justify-center pt-1">
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
