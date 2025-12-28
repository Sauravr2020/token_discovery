"use client"

import { cn } from "@/lib/utils"
import { TokenCategory } from "@/lib/mockData"

const tabs: { id: TokenCategory; label: string }[] = [
  { id: "new", label: "New Pairs" },
  { id: "final", label: "Final Stretch" },
  { id: "migrated", label: "Migrated" },
]

type Props = {
  active: TokenCategory
  onChange: (val: TokenCategory) => void
}

export default function TableTabs({ active, onChange }: Props) {
  return (
    <div className="flex items-center gap-6 border-b border-gray-800 px-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "relative py-3 text-sm font-medium text-gray-400 transition",
            active === tab.id && "text-white"
          )}
        >
          {tab.label}

          {active === tab.id && (
            <span className="absolute left-0 -bottom-px h-[2px] w-full bg-white" />
          )}
        </button>
      ))}
    </div>
  )
}
