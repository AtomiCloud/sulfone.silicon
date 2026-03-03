<!-- source: content/docs/contributor/repositories/index.mdx -->

# 📄 File: content/docs/contributor/repositories/index.mdx

> The index page provides a high-level overview of all CyanPrint repositories. Cross-referencing against individual repository documentation reveals mostly consistent information with minor discrepancies.

### 🔴 Source Code Inaccuracies

1. **Argon Framework**: Documented as "React, Next.js" | Actual: Source documentation confirms React, Next.js, Tailwind CSS, and tRPC - Next.js is used but React is the primary framework (not React AND Next.js as separate frameworks) | index.mdx:82
2. **Helium Languages**: Documented as "TypeScript, Python, C#" | Actual: Source confirms all three languages with correct package names | No discrepancy

### 🟡 Documentation Issues

1. **Incomplete Tech Stack for Argon**: The table lists only "TypeScript, React" but the detailed Argon documentation also mentions Tailwind CSS and tRPC which are significant parts of the stack | index.mdx:41 | Add "Tailwind CSS, tRPC" to tech stack column
2. **Missing Framework Details for Iridium**: The table lists "Rust, Clap" but the detailed Iridium documentation also mentions Tokio and Reqwest which are important for async operations and API calls | index.mdx:38 | Consider adding "Tokio" to tech stack column
3. **Incomplete Tech Stack for Boron**: The table lists "Rust, Tokio" but the detailed Boron documentation also mentions Tonic (gRPC), Docker/bollard, and SQLx | index.mdx:39 | Consider adding "Tonic, SQLx" to tech stack column
4. **Incomplete Tech Stack for Zinc**: The table lists "Rust, Axum" but the detailed Zinc documentation also mentions SQLx, Tower, and JWT | index.mdx:40 | Consider adding "SQLx" to tech stack column

### 🟠 Other Problems

1. **Inconsistent Detail Level**: The tech stack column varies in detail - some entries list only 2 technologies while the source docs show 4-5 significant technologies. Consider standardizing to include the most important 3-4 technologies per repository.
2. **Mermaid Diagram Labeling**: The architecture diagram shows "Zinc<br/>Registry API" but the detailed docs refer to it as "Registry API server" - terminology is consistent enough but could be clearer.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 4     |
| 🟠       | 2     |

### Detailed Analysis

**Verified Accurate Claims:**

- All repository GitHub links are correct format (sulfone.{name})
- Repository purposes match detailed documentation
- Iridium: Rust with Clap confirmed
- Boron: Rust with Tokio confirmed
- Zinc: Rust with Axum confirmed
- Argon: TypeScript with React confirmed
- Helium: TypeScript, Python, C# confirmed
- All internal documentation links are properly formatted

**Minor Inconsistencies:**

- Tech stack columns in the overview table are abbreviated versions of the full tech stacks documented in individual repository pages. This is acceptable for an overview but could be more complete.

**Recommendations:**

1. Expand tech stack columns to include key infrastructure technologies (Tokio for async, SQLx for databases, tRPC for type-safe APIs)
2. Consider adding a "Key Dependencies" column or expanding the existing "Tech Stack" column to be more comprehensive
