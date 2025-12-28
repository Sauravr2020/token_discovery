import TokenTable from "@/components/organisms/TokenTable"
import ErrorBoundary from "@/components/ui/ErrorBoundary"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0e11] text-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6">
        <h1 className="text-lg font-semibold mb-4">
          Token Discovery
        </h1>

        <div className="rounded-xl border border-[#1f2937] bg-[#0f172a]">
          <ErrorBoundary>
            <TokenTable />
          </ErrorBoundary>
        </div>
      </div>
    </main>
  )
}
