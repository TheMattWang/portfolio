import { cn } from "@/lib/utils";

interface BlogStatusBadgeProps {
  isComplete?: boolean;
  className?: string;
}

export function BlogStatusBadge({ isComplete = false, className }: BlogStatusBadgeProps) {
  if (isComplete) {
    return (
      <div className={cn(
        "rounded-lg bg-green-50 p-2 text-sm text-green-800 border border-green-100",
        className
      )}>
        ✨ This article is complete and up to date.
      </div>
    );
  }

  return (
    <div className={cn(
      "rounded-lg bg-yellow-50 p-2 text-sm text-yellow-800 border border-yellow-100",
      className
    )}>
      🚧 This write-up is still evolving; check back for updates.
    </div>
  );
} 