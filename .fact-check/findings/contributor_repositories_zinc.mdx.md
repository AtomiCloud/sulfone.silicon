# File: content/docs/contributor/repositories/zinc.mdx

> This documentation describes Zinc as the CyanPrint registry API built with Rust/Axum, storing template metadata with PostgreSQL and Elasticsearch. The documentation covers tech stack, key files, architecture, API endpoints, data model, building, and configuration.

### Source Code Inaccuracies

1. **Tech Stack - Programming Language**
   - Documented: Rust as primary language with Axum web framework, SQLx for database access, Tower for middleware
   - Actual: .NET 8 (C#) with ASP.NET Core, Entity Framework Core, FluentValidation
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj:4` shows `<TargetFramework>net8.0</TargetFramework>`. The project uses ASP.NET Core packages like `Microsoft.AspNetCore.Authentication.JwtBearer`, `Npgsql.EntityFrameworkCore.PostgreSQL`, etc. No Rust/Cargo files exist in the repository.

2. **Tech Stack - Web Framework**
   - Documented: Axum
   - Actual: ASP.NET Core with API versioning (`Asp.Versioning.Http`)
   - Evidence: Controllers in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/` use `[ApiController]` and `[Route]` attributes from ASP.NET Core.

3. **Tech Stack - Database Access**
   - Documented: SQLx
   - Actual: Entity Framework Core with Npgsql PostgreSQL provider
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj:36` shows `Npgsql.EntityFrameworkCore.PostgreSQL` package.

4. **Tech Stack - Middleware**
   - Documented: Tower
   - Actual: ASP.NET Core built-in middleware pipeline
   - Evidence: No Tower or Rust middleware libraries exist. Configuration in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/StartUp/` shows .NET middleware patterns.

5. **Key Files - Directory Structure**
   - Documented: `src/main.rs`, `src/api/`, `src/models/`, `src/auth/`, `src/storage/`
   - Actual: No `src/` directory exists. Actual structure is `App/Program.cs`, `App/Modules/Cyan/API/V1/Controllers/`, `App/Modules/Cyan/Data/Models/`, `App/StartUp/Options/Auth/`, `App/StartUp/BlockStorage/`
   - Evidence: `ls /Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/src/` returns "No such file or directory". Entry point is `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Program.cs`.

6. **Architecture - Search Service with Elasticsearch**
   - Documented: Search Service connecting to Elasticsearch (ES)
   - Actual: No Elasticsearch integration. Search is done via PostgreSQL full-text search (`NpgsqlTsVector`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Models/TemplateData.cs:26` shows `NpgsqlTsVector SearchVector` for full-text search. No Elasticsearch packages or configuration found.

7. **API Endpoints - Templates**
   - Documented: `GET /api/v1/templates`, `GET /api/v1/templates/{id}`, `GET /api/v1/templates/search?q={query}`, `GET /api/v1/templates/{id}/versions`
   - Actual: Endpoints use different patterns: `GET /api/v1/template` (search), `GET /api/v1/template/id/{userId}/{templateId:guid}`, `GET /api/v1/template/slug/{username}/{name}`, `GET /api/v1/template/slug/{username}/{templateName}/versions`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:24` shows `[Route("api/v{version:apiVersion}/[controller]")]` which resolves to `/api/v1/template` (singular).

8. **API Endpoints - Authentication**
   - Documented: `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh`, `POST /api/v1/auth/logout`
   - Actual: No auth controller or these endpoints exist. Authentication is handled via JWT bearer tokens validated by external identity provider. No login/refresh/logout endpoints in the codebase.
   - Evidence: Grep for "auth/login", "auth/refresh", "auth/logout" returns no matching controller endpoints. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/StartUp/Options/Auth/AuthOption.cs` shows JWT bearer authentication configuration.

9. **API Endpoints - Users**
   - Documented: `GET /api/v1/users/me`, `PATCH /api/v1/users/me`
   - Actual: `GET /api/v1/user/Me`, `GET /api/v1/user/{id}`, `PUT /api/v1/user/{id}` (not PATCH)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/API/V1/UserController.cs:21` shows `[Route("api/v{version:apiVersion}/[controller]")]` resolving to `/api/v1/user`. Line 45 shows `[HttpGet("Me")]`, line 118 shows `[HttpPut("{id}")]` not PATCH.

10. **Data Model - USERS table**
    - Documented: `uuid id PK`, `string email`, `string password_hash`, `timestamp created_at`
    - Actual: `string Id` (not uuid), `string Username` - no email, no password_hash, no created_at fields
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/User.cs:20-24` shows `UserPrincipal` with `string Id` and `UserRecord` with `Username` only. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/Data/UserData.cs:6-9` confirms no email, password_hash, or created_at.

11. **Data Model - TEMPLATES table**
    - Documented: `uuid id PK`, `string name`, `string description`, `uuid author_id FK`, `jsonb input_schema`, `timestamp created_at`
    - Actual: Has `Guid Id`, `string Name`, `string Description`, `string UserId`, but NO `input_schema` field, and created_at is in versions not templates. Additional fields: `Project`, `Source`, `Email`, `Tags`, `Readme`, `Downloads`, `SearchVector`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Models/TemplateData.cs:6-35` shows all fields.

12. **Data Model - VERSIONS table**
    - Documented: `uuid id PK`, `uuid template_id FK`, `string version`, `string container_image`, `timestamp created_at`
    - Actual: `Guid Id`, `Guid TemplateId`, `ulong Version` (not string), `string BlobDockerReference`, `string BlobDockerTag`, `string TemplateDockerReference`, `string TemplateDockerTag`, `DateTime CreatedAt`, `string Description`, `bool Empty`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Models/TemplateVersionData.cs:3-37` shows actual fields.

13. **Building - Commands**
    - Documented: `cargo build`, `cargo build --release`, `cargo test`, `sqlx migrate run`, `cargo run -- --config config/local.yaml`
    - Actual: `dotnet build`, `dotnet test`, `dotnet ef migrations`, `dotnet run` or `dotnet watch run`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml:37-40` shows `dotnet build --no-restore`. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml:17-18` shows `dotnet ef migrations`.

14. **Configuration - File Name**
    - Documented: `zinc-config.yaml`
    - Actual: `settings.yaml`, `settings.{landscape}.yaml`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Program.cs:15-16` shows configuration loading.

15. **Configuration - Structure**
    - Documented: `server.http_addr`, `database.url`, `auth.jwt_secret`, `auth.token_expiry`, `storage.type`, `storage.bucket`, `storage.region`
    - Actual: Different structure: `Kestrel.Endpoints.Http.Url`, `Database.Main.Host/Port/User/Password/Database`, `Auth.Settings.Domain/Audience/TokenValidation`, `BlockStorage.Main.Host/Port/Bucket/Policy` (no region)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml:1-200` shows actual configuration structure.

### Documentation Issues

1. **Missing Entity Types**
   - Problem: Documentation only mentions Templates, Versions, Tags, and Users. The actual system has Plugins, Processors, and Resolvers as first-class entities with their own versioning.
   - Location: Architecture diagram and Data Model sections
   - Fix: Add Plugin, Processor, Resolver entities and their relationships to the architecture diagram and data model

2. **Missing Controllers/APIs**
   - Problem: Documentation only covers Template and User endpoints. Missing PluginController, ProcessorController, ResolverController with their full API surface.
   - Location: API Endpoints section
   - Fix: Document `/api/v1/plugin`, `/api/v1/processor`, `/api/v1/resolver` endpoints

3. **Missing Token Management**
   - Problem: Documentation doesn't mention API token management which is a significant feature (`/api/v1/user/{userId}/tokens`)
   - Location: API Endpoints section
   - Fix: Add token CRUD endpoints: GET/POST/PUT/DELETE tokens, POST revoke token

4. **Incorrect Route Naming**
   - Problem: Controller name is singular (`TemplateController` -> `/api/v1/template`, `UserController` -> `/api/v1/user`)
   - Location: API Endpoints section
   - Fix: Change all `/api/v1/templates` to `/api/v1/template` and `/api/v1/users` to `/api/v1/user`

5. **Missing Like Functionality**
   - Problem: Templates, Plugins, Processors, Resolvers all support like/unlike functionality which is not documented
   - Location: API Endpoints section
   - Fix: Add like endpoints for each entity type

6. **Missing Push Endpoints**
   - Problem: All entity types have a `/push/{username}` endpoint for atomic create-or-update operations
   - Location: API Endpoints section
   - Fix: Document push endpoints

### Other Problems

1. **Repository Description**
   - Problem: Documentation describes Zinc as "CyanPrint registry API" but README.MD says "App API - Microservice written in .NET 8"
   - Recommendation: Update documentation title and description to accurately reflect the .NET implementation

2. **Architecture Diagram Mismatch**
   - Problem: Architecture diagram shows Rust-based services (Auth Middleware, API Routes, Template/User/Search Services) but actual architecture uses ASP.NET Core middleware pipeline and different service structure
   - Recommendation: Redraw architecture diagram to show .NET ASP.NET Core architecture with actual modules (Cyan, Users, System)

3. **Clients Section**
   - Problem: Diagram shows "Iridium CLI" and "Argon Web UI" as clients, but this should be verified against those codebases
   - Recommendation: Verify client names and connections are accurate

4. **Configuration Schema**
   - Problem: Configuration example shows a simplified YAML that doesn't match the actual complex nested structure with OpenTelemetry, tracing, metrics, etc.
   - Recommendation: Either provide a simplified example that clearly indicates it's simplified, or show the full configuration structure

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 15 |
| Documentation Issues | 6 |
| Other Problems | 4 |
