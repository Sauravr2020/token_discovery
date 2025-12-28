export type TokenCategory = "new" | "final" | "migrated"

export type Token = {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  volume: string
  marketCap: string
}

export const tokenData: Record<TokenCategory, Token[]> = {
  new: [
    {
      id: "axm",
      symbol: "AXM",
      name: "Axiom",
      price: 0.0123,
      change24h: 12.4,
      volume: "$1.2M",
      marketCap: "$10.5M",
    },
  ],

  final: [
    {
      id: "fin",
      symbol: "FIN",
      name: "Finale",
      price: 0.245,
      change24h: -3.2,
      volume: "$800K",
      marketCap: "$6.1M",
    },
  ],

  migrated: [
    {
      id: "mig",
      symbol: "MIG",
      name: "MigrateX",
      price: 1.12,
      change24h: 5.6,
      volume: "$3.4M",
      marketCap: "$22.9M",
    },
  ],
}
