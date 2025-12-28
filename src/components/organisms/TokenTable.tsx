"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import TokenHeader from "./TokenHeader"
import TokenRow from "@/components/molecules/TokenRow"
import TableTabs from "./TableTabs"
import TokenTableSkeleton from "@/components/skeletons/TokenTableSkeleton"
import { tokenData, TokenCategory, Token } from "@/lib/mockData"
import { useMockWebSocket } from "@/hooks/useMockWebSocket"

type SortKey = "price" | "change24h"

export default function TokenTable() {
  const [activeTab, setActiveTab] = useState<TokenCategory>("new")
  const [sortKey, setSortKey] = useState<SortKey>("price")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [loading, setLoading] = useState(true)

  const [liveData, setLiveData] =
    useState<Record<TokenCategory, Token[]>>(tokenData)

  // 🔹 fake API delay for skeleton
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  // 🔹 mock websocket update
  const onUpdate = useCallback(
    (id: string, price: number, change24h: number) => {
      setLiveData((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].map((t) =>
          t.id === id ? { ...t, price, change24h } : t
        ),
      }))
    },
    [activeTab]
  )

  useMockWebSocket(liveData[activeTab], onUpdate)

  // 🔹 sorting
  const sortedData = useMemo(() => {
    const data = [...liveData[activeTab]]
    data.sort((a, b) =>
      sortOrder === "asc"
        ? a[sortKey] - b[sortKey]
        : b[sortKey] - a[sortKey]
    )
    return data
  }, [activeTab, liveData, sortKey, sortOrder])

  // 🔹 skeleton first
  if (loading) {
    return (
      <div className="rounded-xl border border-[#1f2937] bg-[#0f172a]">
        <TokenTableSkeleton />
      </div>
    )
  }

  return (
    <div className="rounded-xl overflow-hidden">
      <TableTabs active={activeTab} onChange={setActiveTab} />

      {/* ✅ RESPONSIVE WRAPPER */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <TokenHeader
            sortKey={sortKey}
            sortOrder={sortOrder}
            onSortChange={(key) => {
              if (key === sortKey) {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc")
              } else {
                setSortKey(key)
                setSortOrder("desc")
              }
            }}
          />

          {sortedData.map((token) => (
            <TokenRow key={token.id} token={token} />
          ))}
        </div>
      </div>
    </div>
  )
}
