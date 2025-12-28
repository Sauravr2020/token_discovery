import { useEffect } from "react"
import { Token } from "@/lib/mockData"

type UpdateFn = (id: string, price: number, change24h: number) => void

export function useMockWebSocket(tokens: Token[], onUpdate: UpdateFn) {
  useEffect(() => {
    const id = setInterval(() => {
      tokens.forEach((t) => {
        const delta = (Math.random() - 0.5) * 0.01 // ±1%
        const nextPrice = +(t.price * (1 + delta)).toFixed(4)
        const nextChange = +(t.change24h + delta * 100).toFixed(2)
        onUpdate(t.id, nextPrice, nextChange)
      })
    }, 1500)

    return () => clearInterval(id)
  }, [tokens, onUpdate])
}
