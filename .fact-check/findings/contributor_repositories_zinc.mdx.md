<!-- source: content/docs/contributor/repositories/zinc.mdx -->
# 📄 File: content/docs/contributor/repositories/zinc.mdx

> The documentation for Zinc (registry API) is generally accurate but contains several inaccuracies regarding API endpoints, configuration structure, build commands, and Like endpoint signatures. Key files and tech stack are correctly documented.

### 🔴 Source Code Inaccuracies

1. **Like Endpoint Signature** | Documented: `POST /api/v{version}/{entityType}/like/{username}/{name}` | Actual: `POST /api/v{version}/{entityType}/slug/{username}/{name}/like/{likerId}/{like:bool}` (e.g., line 119 in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs`)

2. **Token Get by ID Endpoint** | Documented: `GET /api/v{version}/user/{userId}/tokens/{tokenId}` | Actual: No such endpoint exists - only list, create, update, revoke, and delete endpoints are available (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/API/V1/UserController.cs`)

3. **Token Update Endpoint** | Documented: `PUT /api/v{version}/user/{userId}/tokens/{tokenId}` | Actual: Correct, but there is also an undocumented `POST /api/v{version}/user/{userId}/tokens/{tokenId}/revoke` endpoint

4. **Token Delete Method** | Documented: `DELETE /api/v{version}/user/{userId}/tokens/{tokenId}` | Actual: Correct, this endpoint exists

5. **User Me Endpoint** | Documented: `GET /api/v{version}/user/Me` | Actual: The route is `GET /api/v{version}/user/Me` (case-sensitive "Me") - this is accurate but the documented path shows it correctly

6. **Configuration Kestrel URL** | Documented: `Url: "http://0.0.0.0:8080"` | Actual: `Url: http://+:9001` (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` line 6)

7. **Configuration Database Structure** | Documented: `Database.MAIN.Host`, `Database.MAIN.Port`, `Database.MAIN.UserId`, `Database.MAIN.Password` | Actual: Uses `Database.Main.Host`, `Database.Main.Port`, `Database.Main.User`, `Database.Main.Password` (note: `User` not `UserId`) (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` lines 141-148)

8. **Configuration Auth Domain** | Documented: `Domain: "api.descope.com/YOUR_PROJECT_ID"` | Actual: `Domain: sulfone` (local auth, not Descope-specific) (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` line 182)

9. **Configuration EFCore Setting** | Documented: `EFCore.Enabled: true` | Actual: No such top-level `EFCore` key exists in configuration; EF Core settings are under `Trace.Instrument.EFCore.Enabled` (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` lines 51-55)

10. **Build Commands** | Documented: `pls setup`, `pls start` | Actual: Taskfile shows `task setup` (runs `dotnet restore --use-lock-file`, `dotnet tool restore`, `./scripts/local/secrets.sh`), no `start` task exists - use `task dev` for development (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` lines 31-52)

### 🟡 Documentation Issues

1. **Incomplete Like Endpoint Documentation** | Location: "Likes (Social Features)" section | Fix: The Like endpoint requires `{likerId}` and `{like}` boolean parameters, not just `{username}/{name}`. The full pattern is `/slug/{username}/{name}/like/{likerId}/{like}`

2. **Missing Token Endpoints** | Location: "Token Management" section | Fix: Add the `POST /api/v{version}/user/{userId}/tokens/{tokenId}/revoke` endpoint for revoking tokens

3. **Missing Version Endpoints by ID** | Location: Template/Plugin/Processor/Resolver sections | Fix: Each entity type has an undocumented `GET /api/v{version}/{entity}/versions/{versionId:guid}` endpoint to get a specific version by its GUID

4. **Auth Configuration Misleading** | Location: "Configuration" section | Fix: The example configuration shows Descope-style domain but actual config uses local auth settings. Either update the example to reflect actual config structure or clarify that this is a placeholder

5. **Missing Configuration Sections** | Location: "Configuration" section | Fix: Configuration includes many more settings (Logging, Trace, Metrics, Swagger, Cors, ErrorPortal, BlockStorage, Cache, HttpClient) that are not documented

6. **Build Section Uses Wrong Tool Name** | Location: "Building" section | Fix: Change `pls setup` to `task setup` and `pls start` to `task dev` (or clarify that `pls` is the project alias for `task`)

### 🟠 Other Problems

1. **Language Discrepancy** | The tech stack table says "F#/.NET 8" but the codebase is entirely C# (`.cs` files), not F# (`.fs` files). No F# files were found in the repository. Recommend correcting to "C#/.NET 8".

2. **Key Files Path Inaccuracy** | `App/Modules/Users/API/Auth/` is listed but actual auth-related files are in `App/Modules/Users/API/V1/` (UserController.cs) and `App/Modules/Users/API/Auth/ApiKeyAuthenticationOptions.cs`. The path is partially correct but the main auth logic is in the controllers.

3. **Architecture Diagram Client Names** | The diagram shows "Iridium CLI" and "Argon Web UI" as clients but doesn't mention that other services may also call the API. Consider adding any internal service consumers if applicable.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 10 |
| 🟡 | 6 |
| 🟠 | 3 |
