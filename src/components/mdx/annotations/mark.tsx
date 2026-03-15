import { type AnnotationHandler, InnerLine } from "codehike/code"

export const mark: AnnotationHandler = {
  name: "mark",
  Line: ({ annotation, ...props }) => {
    const color = getColor(annotation)
    return (
      <div
        style={{
          borderLeft: "solid 2px transparent",
          borderLeftColor: annotation && color,
          backgroundColor: annotation && `rgb(from ${color} r g b / 0.13)`,
        }}
        className="flex"
      >
        <InnerLine merge={props} className="px-2 flex-1" />
      </div>
    )
  },
  Inline: ({ annotation, children }) => {
    const color = getColor(annotation)
    return (
      <span
        style={{
          outline: `solid 1px rgb(from ${color} r g b / 0.5)`,
          backgroundColor: `rgb(from ${color} r g b / 0.13)`,
        }}
        className="rounded px-0.5 py-0 -mx-0.5"
      >
        {children}
      </span>
    )
  },
}

function getColor(annotation?: { query?: string }) {
  const query = annotation?.query?.trim() || ""
  // If query is a number, use it as index into colors array
  const n = Number(query)
  if (!isNaN(n) && query !== "") {
    return colors[Math.abs(n) % colors.length]
  }
  // If query is a valid CSS color (starts with # or is a named color), use it
  if (query.startsWith("#") || cssColorNames.includes(query.toLowerCase())) {
    return query
  }
  // Default to first color for any other query (including descriptions)
  return colors[0]
}

// Common CSS color names for validation
const cssColorNames = [
  "red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white",
  "cyan", "magenta", "lime", "olive", "maroon", "navy", "teal", "aqua", "fuchsia", "silver",
  "gray", "grey", "transparent", "currentcolor"
]

const colors = [
  "#22c55e",
  "#14b8a6",
  "#0ea5e9",
  "#8b5cf6",
  "#d946ef",
  "#ec4899",
]