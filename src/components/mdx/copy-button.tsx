"use client"

import { cn } from "@/lib/utils"
import { Copy, Check } from "lucide-react"
import * as React from "react"

// Matches fumadocs-ui buttonVariants with size="icon-xs" and ghost variant
const copyButtonVariants = cn(
  // Base styles from fumadocs buttonVariants
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100",
  "disabled:pointer-events-none disabled:opacity-50",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring",
  // Ghost variant
  "hover:bg-fd-accent hover:text-fd-accent-foreground",
  // icon-xs size
  "p-1 [&_svg]:size-4"
)

export function CopyButton({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  return (
    <button
      type="button"
      data-checked={copied || undefined}
      className={cn(
        copyButtonVariants,
        "data-[checked=true]:text-fd-accent-foreground",
        className,
      )}
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1200)
      }}
      aria-label="Copy to clipboard"
    >
      {copied ? <Check /> : <Copy />}
    </button>
  )
}