export default function TokenTableSkeleton() {
    return (
      <div className="animate-pulse">
        {/* Tabs skeleton */}
        <div className="flex gap-6 px-4 py-3 border-b border-gray-800">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-4 w-20 rounded bg-gray-700"
            />
          ))}
        </div>
  
        {/* Header skeleton */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-4 py-3 border-b border-gray-800">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-3 w-24 bg-gray-700 rounded" />
          ))}
        </div>
  
        {/* Rows skeleton */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-4 py-4"
          >
            {Array.from({ length: 5 }).map((__, j) => (
              <div
                key={j}
                className="h-4 w-24 bg-gray-700 rounded"
              />
            ))}
          </div>
        ))}
      </div>
    )
  }
  