# Plan 6: Fix Codehike Syntax Highlighting

## Scope

Investigate and fix Codehike syntax highlighting issues - missing colors and incorrect rendering.

## Problem

- Codehike code blocks not rendering with proper syntax highlighting
- Missing colors in code blocks

## Files to Investigate

### Configuration Files

- `source.config.ts` - Main CodeHike configuration
- `next.config.ts` - Next.js configuration

### Components

- `src/components/mdx/` - Custom MDX components

## Implementation Steps

### 1. Check Current Configuration

Read and analyze:

- `source.config.ts` for CodeHike theme and syntax settings
- Any CSS files related to code styling

### 2. Verify CodeHike Setup

- Check if CodeHike is properly integrated with Fumadocs
- Verify theme is configured (e.g., `theme: "github-dark"` or similar)
- Check if syntax highlighting languages are registered

### 3. Common Fixes

- Ensure theme is explicitly set in configuration
- Check for CSS conflicts with Fumadocs styles
- Verify remark/rehype plugins are correctly ordered

### 4. Test

- Create test code blocks with various languages
- Verify colors appear correctly
- Check both light and dark modes if applicable

## Acceptance Criteria

- [ ] Code blocks render with proper syntax colors
- [ ] Multiple languages supported (TS, JS, bash, etc.)
- [ ] Colors visible in both dev and build modes

## Estimated Effort

Medium - requires debugging configuration
