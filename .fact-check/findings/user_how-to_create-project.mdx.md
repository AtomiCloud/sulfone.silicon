<!-- source: content/docs/user/how-to/create-project.mdx -->
# 📄 File: content/docs/user/how-to/create-project.mdx

> This documentation describes the `cyanprint create` command. All documented commands, options, and behaviors were verified against source code in iridium/cyanprint/src/commands.rs. No inaccuracies found.

### 🔴 Source Code Inaccuracies
None found.

### 🟡 Documentation Issues
None found.

### 🟠 Other Problems
None found.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 0 |
| 🟠 | 0 |

---

## Verification Details

### CLI Command Verified
- **Documented**: `cyanprint create <TEMPLATE_REF> [PATH]`
- **Source**: `iridium/cyanprint/src/commands.rs:32-46` - `Create` subcommand with `template_ref: String` and `path: Option<String>`
- **Status**: ✅ Correct

### Template Reference Format Verified
- **Documented**: `<username>/<template-name>[:<version>]`
- **Source**: `iridium/cyanprint/src/util.rs:13-29` - `parse_ref_internal()` parses `<username>/<name>[:version]` format where version is parsed as `i64`
- **Status**: ✅ Correct

### Version Parameter Verified
- **Documented**: "An integer version number"
- **Source**: `iridium/cyanprint/src/util.rs:25` - `v.parse::<i64>().ok()`
- **Status**: ✅ Correct

### Coordinator Endpoint Option Verified
- **Documented**: `-c, --coordinator-endpoint` with default `http://coord.cyanprint.dev:9000`
- **Source**: `iridium/cyanprint/src/commands.rs:38-45`
  ```rust
  #[arg(
      short,
      long,
      value_name = "COORDINATOR_ENDPOINT",
      default_value = "http://coord.cyanprint.dev:9000",
      env = "CYANPRINT_COORDINATOR"
  )]
  coordinator_endpoint: String,
  ```
- **Status**: ✅ Correct

### Environment Variable Verified
- **Documented**: `CYANPRINT_COORDINATOR` environment variable
- **Source**: `iridium/cyanprint/src/commands.rs:43` - `env = "CYANPRINT_COORDINATOR"`
- **Status**: ✅ Correct

### Binary Name Verified
- **Documented**: `cyanprint` (not `cyan`)
- **Source**: The crate is named `cyanprint` in the project structure
- **Status**: ✅ Correct

### Behavior Claims Verified
1. "CLI fetches template from registry" - Confirmed in `main.rs:138-158`
2. "Target directory is created if needed" - Confirmed in `run.rs:183`: `fs::create_dir_all(target_dir)`
3. "Coordinator runs the template" - Confirmed via `CyanCoordinatorClient` usage
4. "Handles compositions automatically" - Confirmed in `run.rs:209-216` with `CompositionOperator`
5. "You answer questions interactively" - Confirmed through `TemplateOperator` execution flow
6. "Project files are generated" - Confirmed via `operator.write_to_disk()` in `run.rs:120`
