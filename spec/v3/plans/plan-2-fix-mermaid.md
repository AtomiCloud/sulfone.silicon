# Plan 2: Fix Mermaid Diagram Syntax Errors

## Scope

Fix all broken Mermaid diagrams across documentation files.

## Common Errors

1. Parse error: Special characters in node labels (parentheses, colons)
2. TypeError: Element null (malformed diagram)
3. Lexical error: Unrecognized text

## Files to Fix

### Contributor Docs

- `content/docs/contributor/architecture/execution-flow.mdx`

### Developer Docs

- `content/docs/developer/basics/architecture.mdx`
- Any other files with Mermaid diagrams

## Implementation Steps

### 1. Find All Mermaid Diagrams

````bash
grep -rn "```mermaid" content/docs/
````

### 2. Fix Syntax Issues

#### Common Fixes:

- **Node labels with special chars**: Use quotes

  ```
  # Bad
  A[Call template(inquirer, determini...]

  # Good
  A["Call template - inquirer, determini..."]
  ```

- **Participant names**: No special characters

  ```
  # Bad
  participant Template:5550

  # Good
  participant Template_5550
  ```

- **Arrow labels**: Keep simple

  ```
  # Bad
  A -->|step 1: do something| B

  # Good
  A -->|step 1| B
  ```

### 3. Test Each Diagram

- Run dev server and verify each diagram renders
- Check browser console for errors

## Acceptance Criteria

- [ ] No Mermaid parse errors in console
- [ ] All diagrams render correctly
- [ ] No "element is null" errors

## Estimated Effort

High - requires debugging each broken diagram
