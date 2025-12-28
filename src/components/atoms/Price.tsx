import { cn } from "@/lib/utils"
import { usePriceFlash } from "@/hooks/usePriceFlash"

type PriceProps = {
  value: number
  positive?: boolean
}

export default function Price({ value, positive }: PriceProps) {
  const flash = usePriceFlash(value)

  return (
    <span
      className={cn(
        "font-medium transition-colors",
        positive ? "text-green-400" : "text-red-400",
        flash === "up" && "bg-green-500/10",
        flash === "down" && "bg-red-500/10"
      )}
    >
      ${value.toFixed(4)}
    </span>
  )
}
