type Props = {
  sortKey: "price" | "change24h"
  sortOrder: "asc" | "desc"
  onSortChange: (key: "price" | "change24h") => void
}

export default function TokenHeader({
  sortKey,
  sortOrder,
  onSortChange,
}: Props) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-4 py-2 text-xs text-gray-400 border-b border-gray-800">
      <div className="text-left">Token</div>

      {/* ✅ PRICE HEADER LEFT ALIGNED */}
      <button
        onClick={() => onSortChange("price")}
        className="text-left"
      >
        Price {sortKey === "price" && (sortOrder === "asc" ? "↑" : "↓")}
      </button>

      <button
        onClick={() => onSortChange("change24h")}
        className="text-left"
      >
        24h % {sortKey === "change24h" && (sortOrder === "asc" ? "↑" : "↓")}
      </button>

      <div className="text-left">Volume</div>
      <div className="text-left">Market Cap</div>
    </div>
  )
}
