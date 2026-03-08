<!-- source: content/docs/developer/templates/how-to/use-keys.mdx -->
# 📄 File: content/docs/developer/templates/how-to/use-keys.mdx

> This document explains how the `id` parameter acts as a key for answer reuse across questions and composed templates. All API claims are accurate and match the source code in helium SDK.

### 🔴 Source Code Inaccuracies
None found. All documented API signatures match the actual implementation:
- `i.text(message, id, help)` - Verified in `/helium/sdks/node/src/domain/core/inquirer.ts:20-22`
- `i.confirm(message, id, help)` - Verified in `/helium/sdks/node/src/domain/core/inquirer.ts:8-10`
- The `id` parameter on question interfaces (TextQ, ConfirmQ, etc.) - Verified in `/helium/sdks/node/src/domain/core/question.ts`
- Answer storage by `id` in `Record<string, Answer>` - Verified in `/helium/sdks/node/src/domain/template/input.ts:4-5` and usage in `/helium/sdks/node/src/domain/service/stateless_inquirer.ts:15-21`

### 🟡 Documentation Issues
1. **Mermaid syntax may need client-side rendering** | Multiple locations (lines 58-70) | The Mermaid diagrams use `<Mermaid chart={...} />` component which requires client-side rendering. This is consistent with the project setup but should work correctly.

2. **Minor inconsistency in explanation** | Lines 14-19 | The documentation says "Every question has an `id` parameter that serves as its **key**" which is technically correct, but the shorthand API doesn't use a named `id` parameter - it's a positional parameter. The object form (using `TextQ` interface) does have a named `id` property. This is a minor clarification but not an error.

### 🟠 Other Problems
None found. The documentation accurately describes:
- How keys work for answer caching
- Namespacing best practices
- Cross-template key behavior
- Common patterns for using keys

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 0 |
