<!-- source: content/docs/contributor/repositories/index.mdx -->
# 📄 File: content/docs/contributor/repositories/index.mdx

> Index page listing all CyanPrint repositories with tech stack overview and links to detailed documentation.

### 🔴 Source Code Inaccuracies
1. **Boron Tech Stack** | Documented: "Rust, Tokio, Tonic, SQLx" | Actual: "Go 1.24, Gin, urfave/cli, Docker" | boron.mdx:16-22
2. **Zinc Tech Stack** | Documented: "Rust, Axum, SQLx" | Actual: "F#/.NET 8, ASP.NET Core with Kestrel, Entity Framework Core" | zinc.mdx:16-21
3. **Argon Tech Stack** | Documented: "TypeScript, React, Tailwind CSS, tRPC" | Actual: "TypeScript, Svelte, SvelteKit, Tailwind CSS, swagger-typescript-api" | argon.mdx:16-22
4. **Argon Framework** | Documented: "React, Next.js" in Repository Details section | Actual: "Svelte, SvelteKit" | argon.mdx:19-20

### 🟡 Documentation Issues
1. **Inconsistent Framework naming** | The Repository Details section for Argon says "React, Next.js" but the Tech Stack table says "React" - both are incorrect per argon.mdx | Line 82-83 | Update to "Svelte, SvelteKit"
2. **Iridium Framework** | Table says "Clap" which is correct but could be clearer as "Clap (CLI framework)" for consistency | Line 38 | Consider more descriptive naming

### 🟠 Other Problems
1. **Helium SDK package name inconsistency** | Index says "SDKs for template development" but helium.mdx shows different package names per language (@atomicloud/cyan-sdk, cyanprintsdk, AtomiCloud.CyanPrint) | Consider adding package names for clarity
2. **Link to development setup** | The link `/docs/contributor/development/setup` is correct and the page exists | No action needed

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 2 |
| 🟠 | 1 |
