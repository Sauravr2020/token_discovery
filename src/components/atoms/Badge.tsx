import { cn } from "@/lib/utils"

type BadgeProps = {
  label: string
  variant?: "success" | "danger" | "neutral"
}

export default function Badge({
  label,
  variant = "neutral",
}: BadgeProps) {
  const styles = {
    success: "bg-green-500/10 text-green-400",
    danger: "bg-red-500/10 text-red-400",
    neutral: "bg-gray-500/10 text-gray-400",
  }

  return (
    <span
      className={cn(
        "rounded px-2 py-0.5 text-xs font-medium",
        styles[variant]
      )}
    >
      {label}
    </span>
  )
}
