<!-- source: content/docs/user/explanation/3-way-merge.mdx -->
# 📄 File: content/docs/user/explanation/3-way-merge.mdx

> Brief user-facing explanation of 3-way merge feature. The documentation is largely accurate but could benefit from more detail about the Git-based merge implementation and conflict markers.

### 🔴 Source Code Inaccuracies
None found. The documented behavior matches the actual implementation in `iridium/cyancoordinator/src/fs/merger.rs`.

### 🟡 Documentation Issues

1. **Missing detail on conflict marker format** | Conflict Resolution section | The documentation states conflicts will be left for manual resolution but does not mention that Git-style conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) are inserted into files. Consider adding: "Conflicts are marked with standard Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) in the affected files."
   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:262-268` shows conflicts leave markers in working directory

2. **Missing terminology alignment** | Throughout document | The source code uses `base`, `current`, and `incoming` terminology, while the documentation uses "Base", "Yours", "Theirs". While semantically correct, the developer documentation uses `current` for user's local files, which may cause confusion. Consider clarifying or using consistent terminology.
   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:134-139` uses parameter names `base`, `current`, `incoming`

3. **Missing fast-forward behavior** | Conflict Resolution section | The merge can result in fast-forward (when incoming descends from current), which automatically applies all changes without conflict. This behavior is not documented.
   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:249-252` shows fast-forward handling path exists

4. **Missing "up-to-date" case** | How It Works section | When current and incoming are identical, the merge returns current unchanged without any operation. This edge case could be documented.
   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:242-248` shows up-to-date detection

5. **Missing rename detection feature** | Document | The 3-way merge supports configurable rename detection with a similarity threshold, which helps track file renames across versions. This advanced feature is not mentioned.
   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:231-233` enables rename detection with threshold

### 🟠 Other Problems

1. **Missing link to related how-to** | Related section | Consider adding a link to [Update a Project](/docs/user/how-to/update-project) as the primary use case for 3-way merge. Currently only lists "Update a Project" as "Update a Project" but the slug is `/docs/user/how-to/update-project` which matches.

2. **Very brief for a concept page** | Overall structure | This explanation page is quite short (31 lines) compared to other explanation pages. Consider expanding with:
   - Visual diagram of the merge process
   - Example scenario showing before/after
   - More concrete examples of when conflicts occur

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 5 |
| 🟠 | 2 |
