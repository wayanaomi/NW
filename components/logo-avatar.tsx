import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoAvatarProps {
  className?: string;
  sizeClassName?: string;
}

/**
 * Circular photo avatar used as the site's logo mark in the navbar,
 * footer, and loading screen, replacing the "NW" text badge.
 */
export function LogoAvatar({
  className,
  sizeClassName = "size-9",
}: LogoAvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden rounded-full ring-2 ring-primary/40",
        sizeClassName,
        className
      )}
    >
      <Image
        src="/images/naomi-waya-portrait.jpg"
        alt="Naomi Waya"
        fill
        sizes="48px"
        className="object-cover"
      />
    </span>
  );
}
