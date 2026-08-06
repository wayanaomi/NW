import { cn } from "@/lib/utils";

export function GradientBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/*
      <div className="absolute -top-24 -left-24 size-72 rounded-full bg-blob-1/30 blur-3xl animate-blob" />

      <div
        className="absolute top-1/3 -right-20 size-80 rounded-full bg-blob-2/20 blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div
        className="absolute bottom-0 left-1/4 size-72 rounded-full bg-blob-3/25 blur-3xl animate-blob"
        style={{ animationDelay: "6s" }}
      />
      */}
    </div>
  );
}