# File: content/docs/contributor/index.mdx

> This is an overview page for contributors to the CyanPrint platform. It provides a high-level introduction to the platform's components and links to more detailed documentation sections (Architecture, Repositories, Development).

### Source Code Inaccuracies

1. **Argon Repository Purpose - Incorrect Name Reference**
   - **Documented**: Argon repository is "sulfone.argon" with purpose "Registry Web UI"
   - **Actual**: The README in the argon repository refers to itself as "Sulfone Carbon" and the package.json shows `"name": "carbon"`. While it is indeed a SvelteKit frontend for the CyanPrint Registry, the internal naming uses "Carbon" not "Argon".
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.md:1` - "Sulfone Carbon", `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` - `"name": "carbon"`

2. **Helium SDK Languages - Missing C# Naming**
   - **Documented**: Helium provides "SDKs (TypeScript, Python, C#)"
   - **Actual**: The SDKs are correctly listed, but the .NET SDK is more accurately described as ".NET" rather than "C#" in the source documentation. The source uses ".NET" terminology.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/docs/developer/00-README.md:7-11` - Lists ".NET" not "C#"

3. **Helium Package Names Not Documented**
   - **Documented**: Just says "SDKs (TypeScript, Python, C#)"
   - **Actual**: The actual package names are:
     - Node.js: `@atomicloud/cyan-sdk` (v2.1.0)
     - Python: `cyanprintsdk` (v2.1.0)
     - .NET: `AtomiCloud.CyanPrint` (v2.1.0)
   - **Evidence**:
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2` - `"name": "@atomicloud/cyan-sdk"`
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/pyproject.toml:2` - `name = "cyanprintsdk"`
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/sulfone-helium.csproj:14` - `<PackageId>AtomiCloud.CyanPrint</PackageId>`

### Documentation Issues

1. **Argon Description Ambiguity**
   - **Problem**: The Argon component is described as "Registry Web UI" but the source code refers to itself as "Carbon" which could cause confusion for contributors trying to navigate the codebase.
   - **Location**: Line 29 - Argon table row
   - **Fix**: Either note that Argon is internally named "Carbon" in the source, or update to clarify the naming convention (e.g., "Argon (internally 'Carbon') - Registry Web UI")

2. **Missing SDK Package Information**
   - **Problem**: The Helium row mentions "SDKs (TypeScript, Python, C#)" but does not provide the actual package names that developers would need to use or reference.
   - **Location**: Line 30 - Helium table row
   - **Fix**: Include the actual package names (`@atomicloud/cyan-sdk`, `cyanprintsdk`, `AtomiCloud.CyanPrint`) or link to the Helium documentation where these are listed

3. **Helium Version Mismatch in Source**
   - **Problem**: The helium source documentation (`docs/developer/00-README.md`) lists SDK versions as 2.0.1, but the actual packages are at version 2.1.0. This is a source code documentation issue that could mislead contributors.
   - **Location**: Not directly in contributor/index.mdx, but related to Helium documentation
   - **Fix**: Update helium docs/developer/00-README.md to reflect actual versions (2.1.0)

### Other Problems

1. **Inconsistent Repository Naming Convention**
   - **Problem**: The documentation uses the naming pattern "sulfone.{component}" (e.g., sulfone.iridium, sulfone.boron) for GitHub repository references, but the actual GitHub URLs use a mix of patterns. The Zinc docs reference links like `https://github.com/AtomiCloud/argon` (without sulfone prefix), `https://github.com/AtomiCloud/iridium`, etc.
   - **Recommendation**: Verify the actual GitHub repository URLs and update the documentation to use consistent naming or clarify the relationship between the internal "sulfone.{component}" naming and the public GitHub repository names.

2. **Silicon Repository Purpose Could Be More Descriptive**
   - **Problem**: Silicon is described only as "Documentation site" without mentioning it's built with Fumadocs/Next.js which could be useful context for contributors.
   - **Recommendation**: Consider adding technology context (e.g., "Documentation site (Fumadocs/Next.js)") to help contributors understand the tech stack.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 3 |
| Documentation Issues | 3 |
| Other Problems | 2 |
