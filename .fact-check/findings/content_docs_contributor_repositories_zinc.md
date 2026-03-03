<!-- source: content/docs/contributor/repositories/zinc.mdx -->

# 📄 File: content/docs/contributor/repositories/zinc.mdx

> Major documentation inaccuracies found. The documentation describes Zinc as a Rust/Axum project, but it is actually an F#/.NET 8 project. API endpoints, data models, key files structure, configuration format, and build commands are all incorrect.

### 🔴 Source Code Inaccuracies

1. **Tech Stack - Primary Language**

   - Documented: Rust as primary language
   - Actual: F#/.NET 8 (microservice written in .NET 8)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/README.MD:3` - "Microservice written in .NET 8"; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Domain.csproj` exist; `App.sln` solution file present

2. **Tech Stack - Web Framework**

   - Documented: Axum web framework
   - Actual: ASP.NET Core with Kestrel
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:14` - uses `Microsoft.AspNetCore.Mvc`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.yaml:5-7` - Kestrel configuration

3. **Tech Stack - Database Access**

   - Documented: SQLx for PostgreSQL
   - Actual: Entity Framework Core
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.yaml:63-64` - "EFCore: Enabled: true"; Repository files in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Repositories/`

4. **Tech Stack - Authentication**

   - Documented: JWT for authentication tokens
   - Actual: Descope authentication service
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.yaml:143-145` - "Domain: api.descope.com/P2Wskb04HSJQRfckShfhtWXwUiUd"

5. **Key Files Structure**

   - Documented: `src/main.rs`, `src/api/`, `src/models/`, `src/auth/`, `src/storage/`
   - Actual: `App/Program.cs`, `App/Modules/Cyan/API/V1/Controllers/`, `Domain/Model/`, `App/Modules/Users/API/Auth/`, no direct storage directory
   - Evidence: Directory listing shows `App/`, `Domain/` structure with `.csproj` files, not Rust `src/` structure

6. **API Endpoints - Templates**

   - Documented: `GET /api/v1/templates`, `GET /api/v1/templates/{id}`, `GET /api/v1/templates/search?q={query}`, `GET /api/v1/templates/{id}/versions`
   - Actual: `GET /api/v{version}/template` (search), `GET /api/v{version}/template/id/{userId}/{templateId:guid}`, `GET /api/v{version}/template/slug/{username}/{name}`, `GET /api/v{version}/template/slug/{username}/{templateName}/versions`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:24` - Route is `[controller]` (template, not templates); lines 38-49, 51-69, 159-171

7. **API Endpoints - Authentication (Missing)**

   - Documented: `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh`, `POST /api/v1/auth/logout`
   - Actual: No such endpoints exist. Authentication is handled via Descope external service with API key authentication
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/API/Auth/ApiKeyAuthenticationOptions.cs` - API key auth, not login endpoints

8. **API Endpoints - Users**

   - Documented: `GET /api/v1/users/me`, `PATCH /api/v1/users/me`
   - Actual: `GET /api/v{version}/user/Me`, `PUT /api/v{version}/user/{id}` (not PATCH, requires id)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/API/V1/UserController.cs:45-49` - `HttpGet("Me")`; lines 118-138 - `HttpPut("{id}")` not PATCH

9. **API Endpoints - Missing Entity Types**

   - Documented: Only Templates mentioned
   - Actual: Plugins, Processors, and Resolvers also exist as first-class entities with full CRUD and versioning
   - Evidence: Controllers exist at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/PluginController.cs`, `ProcessorController.cs`, `ResolverController.cs`

10. **Data Model - User Fields**

    - Documented: `uuid id PK`, `string email`, `string password_hash`, `timestamp created_at`
    - Actual: `string Id`, `Username` in UserRecord; no email, password_hash, or created_at fields
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/User.cs:20-29` - UserPrincipal has Id (string, not uuid) and UserRecord; UserRecord only has Username

11. **Data Model - Template Fields**

    - Documented: `uuid id PK`, `string name`, `string description`, `uuid author_id FK`, `jsonb input_schema`, `timestamp created_at`
    - Actual: `Guid Id`, `string UserId`, `TemplateMetadata` (Project, Source, Email, Tags, Description, Readme), `TemplateRecord` (Name only), `TemplateInfo` (Downloads, Stars)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Template.cs:23-55` - no input_schema field

12. **Data Model - Version Fields**

    - Documented: `uuid id PK`, `uuid template_id FK`, `string version`, `string container_image`, `timestamp created_at`
    - Actual: `Guid Id`, `ulong Version` (numeric, not string), `DateTime CreatedAt`, `TemplateVersionRecord` (Description), `TemplateVersionProperty` (BlobDockerReference, BlobDockerTag, TemplateDockerReference, TemplateDockerTag)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:29-56` - Version is ulong, has multiple docker reference fields

13. **Architecture - Search Service**

    - Documented: Search Service connects to Elasticsearch
    - Actual: No Elasticsearch integration; search is done via database queries
    - Evidence: No ES configuration in settings.yaml; search endpoints use service.Search() which queries the database via repositories

14. **Building Commands**

    - Documented: `cargo build`, `cargo build --release`, `cargo test`, `sqlx migrate run`, `cargo run -- --config config/local.yaml`
    - Actual: `pls setup`, `pls start`, `dotnet build`, `dotnet test`, Entity Framework migrations
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/README.MD:15-26` - "pls setup", "pls start"

15. **Configuration Format**
    - Documented: YAML with `server.http_addr`, `database.url`, `auth.jwt_secret`, `auth.token_expiry`, `storage.type`, `storage.bucket`, `storage.region`
    - Actual: YAML with `Kestrel.Endpoints.Http.Url`, `Database.MAIN.*`, `Auth.Settings.*` (Descope config), no storage configuration
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.yaml` - completely different structure

### 🟡 Documentation Issues

1. **Repository Description Incomplete**

   - Problem: Description mentions "handles authentication" but authentication is delegated to Descope
   - Location: Line 8
   - Fix: Clarify that authentication is handled by external Descope service

2. **Missing Entity Documentation**

   - Problem: Documentation only covers Templates but the registry also manages Plugins, Processors, and Resolvers
   - Location: API Endpoints section
   - Fix: Add documentation for Plugin, Processor, and Resolver endpoints

3. **Incorrect Description**
   - Problem: Describes as "CyanPrint registry API" but it's more accurately described as the "Sulfone-Zinc: Registry API for CyanPrint" per the actual Swagger description
   - Location: Line 3-4 (description)
   - Fix: Update description to match actual service description from settings.yaml

### 🟠 Other Problems

1. **Elasticsearch Mentioned but Not Implemented**

   - Problem: Architecture diagram shows Elasticsearch for Search Service but it's not actually used
   - Recommendation: Either remove ES from architecture diagram or implement it

2. **Token Management Not Documented**

   - Problem: The actual API has extensive token management endpoints (`GET/POST/PUT/DELETE /api/v{version}/user/{userId}/tokens/*`) not mentioned in documentation
   - Recommendation: Document the token management API for API key access

3. **Versioning Scheme Not Documented**

   - Problem: Versions are numeric (ulong) not semantic version strings
   - Recommendation: Document the version numbering scheme

4. **Like/Stars Feature Not Documented**

   - Problem: Controllers show Like endpoints for templates, plugins, processors, resolvers but this is not documented
   - Recommendation: Document the social features (liking/starring)

5. **Push Endpoint Not Documented**
   - Problem: All entity types have a `POST /push/{username}` endpoint for atomic create-or-update operations
   - Recommendation: Document the push endpoints for CI/CD workflows

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 15    |
| 🟡       | 3     |
| 🟠       | 5     |
