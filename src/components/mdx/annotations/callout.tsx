import { AnnotationHandler, InlineAnnotation, InnerLine } from "codehike/code"

export const callout: AnnotationHandler = {
  name: "callout",
  transform: (annotation: InlineAnnotation) => {
    // transform inline annotation to block annotation
    const { name, query, lineNumber, fromColumn, toColumn } = annotation
    return {
      name,
      query,
      fromLineNumber: lineNumber,
      toLineNumber: lineNumber,
      data: {...annotation.data, column: (fromColumn + toColumn) / 2},
    }
  },
  AnnotatedLine: ({ annotation, ...props }) => {
    const { column } = annotation.data
    const { indentation, children } = props
    return (
      <InnerLine merge={props}>
        {children}
        <div
          style={{
            minWidth: `${column + 4}ch`,
            marginLeft: `${indentation}ch`,
          }}
          className="w-fit border border-current rounded px-2 relative -ml-[1ch] mt-1 whitespace-break-spaces bg-fd-background"
        >
          <div
            style={{ left: `${column - indentation - 1}ch` }}
            className="absolute border-l border-t border-current w-2 h-2 rotate-45 -translate-y-1/2 -top-[1px] bg-fd-background"
          />
          {annotation.data.children || (
            <div className="px-2">{annotation.query}</div>
          )}
        </div>
      </InnerLine>
    )
  },
}


