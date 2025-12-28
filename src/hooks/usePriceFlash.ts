import { useEffect, useState } from "react"

export function usePriceFlash(value: number) {
  const [prev, setPrev] = useState(value)
  const [flash, setFlash] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    if (value > prev) setFlash("up")
    if (value < prev) setFlash("down")
    setPrev(value)

    const t = setTimeout(() => setFlash(null), 400)
    return () => clearTimeout(t)
  }, [value, prev])

  return flash
}
