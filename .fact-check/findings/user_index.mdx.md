<!-- source: content/docs/user/index.mdx -->
# 📄 File: content/docs/user/index.mdx

> This is a minimal index/landing page for user documentation that links to four main sections (Tutorials, How-To Guides, Reference, Explanation). The document itself is accurate as a navigation hub. Factual verification was performed against source code in argon (registry UI), boron (coordinator), helium (prompt service), iridium (CLI), and zinc (registry). However, issues were found in the linked documentation files that the index points to.

### 🔴 Source Code Inaccuracies
1. **Documented**: `cyanprint push template --token <TOKEN> <BLOB_IMG> <BLOB_TAG> <TEMPLATE_IMG> <TEMPLATE_TAG>` (content/docs/user/reference/cli-commands.mdx:72)
   **Actual**: The push command requires `--config` and `--message` flags. Correct signature: `cyanprint push template --token <TOKEN> --config <CONFIG_PATH> --message <MSG> <BLOB_IMG> <BLOB_TAG> <TEMPLATE_IMG> <TEMPLATE_TAG>`. The `--config` flag defaults to "cyan.yaml" and `--message` defaults to "No description" per iridium/cyanprint/src/commands.rs:105-114.
   **Evidence**: iridium/cyanprint/src/commands.rs:100-118

2. **Documented**: `cyanprint push processor --token <TOKEN> <IMAGE> <TAG>` (content/docs/user/reference/cli-commands.mdx:75)
   **Actual**: Same issue - missing `--config` and `--message` flags. Correct: `cyanprint push processor --token <TOKEN> --config <CONFIG_PATH> --message <MSG> <IMAGE> <TAG>`.
   **Evidence**: iridium/cyanprint/src/commands.rs:100-118

3. **Documented**: `cyanprint push plugin --token <TOKEN> <IMAGE> <TAG>` (content/docs/user/reference/cli-commands.mdx:78)
   **Actual**: Same issue - missing `--config` and `--message` flags. Correct: `cyanprint push plugin --token <TOKEN> --config <CONFIG_PATH> --message <MSG> <IMAGE> <TAG>`.
   **Evidence**: iridium/cyanprint/src/commands.rs:100-118

4. **Documented**: Global option `-r, --registry <URL>` with description "Registry endpoint" (content/docs/user/reference/cli-commands.mdx:12)
   **Actual**: The flag value name is `REGISTRY_ENDPOINT` and default value is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`, not simply "Registry endpoint". Additionally, it can be set via environment variable `CYANPRINT_REGISTRY`.
   **Evidence**: iridium/cyanprint/src/commands.rs:9-16

5. **Documented**: `-c, --coordinator-endpoint` default is "http://coord.cyanprint.dev:9000" for create command (content/docs/user/reference/cli-commands.mdx:35)
   **Actual**: While the default value is correct, the documentation omits the environment variable `CYANPRINT_COORDINATOR` that can also be used to set this value.
   **Evidence**: iridium/cyanprint/src/commands.rs:38-45

6. **Documented**: `cyanprint daemon [VERSION]` description "Start the CyanPrint daemon for local development" (content/docs/user/reference/cli-commands.mdx:52-64)
   **Actual**: The argument name is `COORDINATOR_VERSION` not just `VERSION`. Additionally, the daemon command has a `--registry` option that is not documented, which accepts a registry endpoint URL for the coordinator to use (with environment variable `CYANPRINT_REGISTRY`). The image used is `ghcr.io/atomicloud/sulfone.boron/sulfone-boron:<VERSION>`.
   **Evidence**: iridium/cyanprint/src/commands.rs:74-97, iridium/cyanprint/src/main.rs:240-241

7. **Documented**: Push command subcommands are template, processor, plugin (content/docs/user/reference/cli-commands.mdx:66-79)
   **Actual**: There is an undocumented fourth subcommand `group` for pushing template groups. This is implemented in the CLI: `cyanprint push group --token <TOKEN> --config <CONFIG_PATH> --message <MSG>`.
   **Evidence**: iridium/cyanprint/src/commands.rs:131-132, iridium/cyanprint/src/main.rs:89-109

### 🟡 Documentation Issues
1. **Problem**: The `-V, --version` flag description "Print version" is incomplete.
   **Location**: content/docs/user/reference/cli-commands.mdx:14
   **Fix**: The flag is automatically provided by clap's `#[command(author, version, about)]` directive. Consider noting this outputs both version and author information per the CLI definition.

2. **Problem**: Description for the `create` command options table is inconsistent - only shows the coordinator-endpoint option but the column headers suggest multiple options could be shown.
   **Location**: content/docs/user/reference/cli-commands.mdx:33-35
   **Fix**: The table shows only one option but the column headers suggest multiple. Either add more options or clarify this is the primary option.

3. **Problem**: The `update` command options table is incomplete.
   **Location**: content/docs/user/reference/cli-commands.mdx:46-51
   **Fix**: The `-c, --coordinator-endpoint` option is also available for update (with same default and env var as create). Add this to match the create command structure.

4. **Problem**: The installation description says "6 platforms" but the tabs show "Nix Shell" and "Nix Profile" as separate options.
   **Location**: content/docs/user/how-to/install.mdx:2
   **Fix**: The count is technically correct (Nix Shell, Nix Profile, Brew, Scoop, APT, YUM = 6), but "Nix Shell" and "Nix Profile" are both Nix variants. Consider clarifying that Nix has two installation modes.

### 🟠 Other Problems
1. **Problem**: The registry UI reference claims the registry is at "registry.cyanprint.dev" but the actual API endpoint in the CLI source code is "https://api.zinc.sulfone.raichu.cluster.atomi.cloud".
   **Recommendation**: Clarify the distinction between the user-facing web UI (registry.cyanprint.dev) and the API endpoint used by the CLI. Users may be confused if they try to configure a custom registry endpoint.

2. **Problem**: The 3-way merge documentation is simplified and doesn't mention the `similarity_threshold` parameter used for rename detection in the actual implementation.
   **Recommendation**: While not strictly inaccurate, consider adding a note that the merge uses git-style rename detection with a configurable similarity threshold.

3. **Problem**: The "under a minute" claim in get-started.mdx is marketing language that may not hold true for all users depending on network conditions and template complexity.
   **Recommendation**: Consider softening this claim to "quickly" or similar to avoid potential user frustration if it takes longer.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 7 |
| 🟡 | 4 |
| 🟠 | 3 |
