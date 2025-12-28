import Text from "@/components/atoms/Text"

type TokenCellProps = {
  value: string
  align?: "left" | "right"
}

export default function TokenCell({
  value,
  align = "left",
}: TokenCellProps) {
  return (
    <div
      className={
        align === "right"
          ? "text-right"
          : "text-left"
      }
    >
      <Text>{value}</Text>
    </div>
  )
}
