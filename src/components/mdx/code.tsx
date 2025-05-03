import {
  AnnotationHandler,
  HighlightedCode,
  Inline,
  Pre,
  RawCode,
  highlight,
} from "codehike/code"
import { CopyButton } from "@/components/mdx/copy-button"
import { lineNumbers } from "./annotations/line-numbers"
import { CodeIcon } from "./annotations/icons"
import { callout } from "./annotations/callout"
import { mark } from "./annotations/mark"
import { link } from "./annotations/link"
import { wordWrap } from "./annotations/word-wrap"
import { tokenTransitions } from "./annotations/token-transitions"
import { diff } from "./annotations/diff"
import { className as classNameHandler } from "./annotations/classname"
import { cn } from "@/lib/utils"
import { CSSProperties } from "react"



export async function InlineCode({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-from-css")
  return (
    <Inline
      code={highlighted}
      style={highlighted.style}
      className="selection:bg-editor-selectionBackground"
    />
  )
}

export async function Code({
  codeblock,
  ...rest
}: {
  codeblock: RawCode
  className?: string
  style?: React.CSSProperties
  extraHandlers?: AnnotationHandler[]
}) {
  const { flags } = extractFlags(codeblock)
  const highlighted = await highlight(codeblock, "github-from-css", {
    annotationPrefix: flags.includes("p") ? "!!" : undefined,
  })
  return <HighCode highlighted={highlighted} {...rest} />
}

export function HighCode({
  highlighted,
  className,
  style,
  extraHandlers = [],
}: {
  highlighted: HighlightedCode
  className?: string
  style?: React.CSSProperties
  extraHandlers?: AnnotationHandler[]
}) {
  const { title, flags } = extractFlags(highlighted)
  const h = { ...highlighted, meta: title }

  const handlers = [
    ...extraHandlers,
    classNameHandler,
    mark,
    flags.includes("a") && tokenTransitions,
    flags.includes("n") && lineNumbers,
    diff,
    link,
    flags.includes("w") && wordWrap,
    callout,
  ].filter(Boolean) as AnnotationHandler[]

  const pre = (
    <Pre
      code={h}
      className="m-0 py-2 px-0 bg-editor-background rounded-none group flex-1 selection:bg-editor-selectionBackground"
      handlers={handlers}
      style={{
        backgroundColor: "var(--bg-color)",
      }}
    />
  )

  if (title) {
    return (
      <div
        className={cn(
          "border my-2", 
          "rounded overflow-hidden",
          className,
        )}
        style={
          {
            "--border-color": "var(--ch-23)",
            borderColor: "var(--border-color)",
            ...style,
          } as CSSProperties
        }
      >
        <div
          className="px-3 py-2 border-b text-sm text-tab-activeForeground flex"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="text-tab-activeForeground text-sm flex items-center gap-3">
            <CodeIcon title={title} />
            <span>{title}</span>
          </div>
          {flags.includes("c") && (
            <CopyButton text={h.code} className="ml-auto" />
          )}
        </div>
        {pre}
      </div>
    )
  } else {
    return (
      <div
        className={cn(
          flags.includes("b") ? "border my-2" : "",
          "rounded overflow-hidden relative",
          className,
        )}
        style={
          {
            "--border-color": "var(--ch-23)",
            borderColor: flags.includes("b") ? "var(--border-color)" : "transparent",
            ...style,
          } as CSSProperties
        }
      >
        {flags.includes("c") && (
          <CopyButton text={h.code} className="absolute right-4 my-0 top-2" />
        )}
        {pre}
      </div>
    )
  }
}

export function extractFlags(codeblock: RawCode) {
  const flags =
    codeblock.meta.split(" ").filter((flag) => flag.startsWith("-"))[0] ?? ""
  const title =
    codeblock.meta === flags
      ? ""
      : codeblock.meta.replace(" " + flags, "").trim()
  return { title, flags: flags.slice(1).split("") }
}