<!-- source: content/docs/developer/templates/reference/index.mdx -->
# 📄 File: content/docs/developer/templates/reference/index.mdx

> This is an index/overview page listing template reference documentation. All code examples and API references were verified against the helium SDK source code. No significant inaccuracies found.

### 🔴 Source Code Inaccuracies
None found.

### 🟡 Documentation Issues
None found.

### 🟠 Other Problems
None found.

## Verification Details

**Code Example Verification (Lines 31-42):**
- `StartTemplateWithLambda` - VERIFIED: Function exists in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:140`
- `GlobType` - VERIFIED: Enum exists in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`
  - `GlobType.Template` and `GlobType.Copy` are correct
- Package `@atomicloud/cyan-sdk` - VERIFIED: Package name confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2`
- Lambda function signature `(i, d)` - VERIFIED: Matches `LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>` from `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts:6`

**Question Types Table Verification (Lines 47-54):**
All methods verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts`:
- `text()` returns `Promise<string>` - VERIFIED (line 20-22)
- `select()` returns `Promise<string>` - VERIFIED (line 16-18)
- `confirm()` returns `Promise<boolean>` - VERIFIED (line 8-10)
- `checkbox()` returns `Promise<string[]>` - VERIFIED (line 4-6)
- `password()` returns `Promise<string>` - VERIFIED (line 12-14)
- `dateSelect()` returns `Promise<string>` - VERIFIED (line 24-26)

**File Processing Table Verification (Lines 57-61):**
- `GlobType.Template` - VERIFIED: Enum value 0 in cyan.ts
- `GlobType.Copy` - VERIFIED: Enum value 1 in cyan.ts

**Internal Links:**
All links starting with `/docs` are correct per instructions.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 0 |
| 🟠 | 0 |
