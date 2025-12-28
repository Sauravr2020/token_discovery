import Price from "@/components/atoms/Price"
import Text from "@/components/atoms/Text"
import Badge from "@/components/atoms/Badge"
import { Token } from "@/lib/mockData"

type Props = {
  token: Token
}

export default function TokenRow({ token }: Props) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center px-4 py-3 hover:bg-[#141a2a] transition">
      
      {/* Token */}
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gray-700" />
        <div>
          <Text className="font-medium">{token.symbol}</Text>
          <Text className="text-xs text-gray-400">{token.name}</Text>
        </div>
      </div>

      {/* ✅ PRICE VALUE LEFT ALIGNED */}
      <div className="text-left">
        <Price
          value={token.price}
          positive={token.change24h > 0}
        />
      </div>

      <Badge
        label={`${token.change24h > 0 ? "+" : ""}${token.change24h}%`}
        variant={token.change24h > 0 ? "success" : "danger"}
      />

      <Text>{token.volume}</Text>
      <Text>{token.marketCap}</Text>
    </div>
  )
}
