<!-- source: content/docs/user/explanation/3-way-merge.mdx -->
# 📄 File: content/docs/user/explanation/3-way-merge.mdx

> Brief user-focused explanation of 3-way merge for template updates. The documentation is high-level and conceptually accurate but lacks detail about what actually happens during conflict resolution.

### 🔴 Source Code Inaccuracies

1. **"You'll be prompted to resolve them manually"**
   - **Documented**: "If conflicts occur, you'll be prompted to resolve them manually"
   - **Actual**: The source code shows that conflicts are NOT interactively prompted. Instead, conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) are left in the files, and the merged VFS with conflict markers is written to disk. Users must resolve conflicts after the update completes by editing the files.
   - **Evidence**: `iridium/cyancoordinator/src/fs/merger.rs:262-268` - When `repo.index()?.has_conflicts()` is true, the code only logs debug output and does NOT prompt the user. The files with conflict markers are included in the result VFS and written to disk via `read_vfs_from_dir()`.

### 🟡 Documentation Issues

1. **Oversimplified terminology**
   - **Problem**: The document uses "Yours" and "Theirs" but the actual codebase uses "current" (local) and "incoming" (new template). This differs from the developer documentation which uses consistent terminology.
   - **Location**: Lines 15-16
   - **Fix**: Consider aligning terminology with the developer docs (Base/Current/Incoming) or at least acknowledge the mapping.

2. **Missing conflict marker information**
   - **Problem**: Document states conflicts occur but doesn't explain what the user will see. Users need to know that conflict markers appear in their files.
   - **Location**: "Conflict Resolution" section
   - **Fix**: Add information about Git-style conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) being inserted into conflicting files.

3. **Missing practical guidance**
   - **Problem**: No guidance on how to actually resolve conflicts after they occur.
   - **Location**: "Conflict Resolution" section
   - **Fix**: Add a brief note explaining that users need to edit files containing conflict markers and remove the markers after deciding which changes to keep.

4. **Missing edge case information**
   - **Problem**: Doesn't mention that binary files or large reorganizations may not merge well.
   - **Location**: Entire document
   - **Fix**: Consider adding a "Limitations" section similar to the developer-facing 3-way-merge documentation.

### 🟠 Other Problems

1. **Inconsistent detail level with related documentation**
   - **Problem**: The developer documentation (`content/docs/developer/templates/explanation/3-way-merge.mdx`) is much more comprehensive and includes examples, conflict detection samples, and limitations. This user-facing doc is very minimal.
   - **Recommendation**: Consider expanding this document to include at least one concrete example of a conflict scenario and how to resolve it, similar to the developer version.

2. **Missing link to practical guidance**
   - **Problem**: The related links point to conceptual pages but not to any troubleshooting or conflict resolution guide.
   - **Recommendation**: Add a link or section about what to do when conflicts actually occur.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 4 |
| 🟠 | 2 |

### Verification Sources

**Verified Accurate Claims:**
1. **3-way merge concept** - Verified in `iridium/cyancoordinator/src/fs/merger.rs:134-139` - The `perform_git_merge` function takes `base`, `current`, and `incoming` parameters
2. **Base = Original template** - Verified in `iridium/docs/developer/algorithms/02-three-way-merge.md:16` - "Original template output"
3. **Yours/Current = User's modified files** - Verified in `merger.rs:137` - parameter named `current` with comment representing user changes
4. **Theirs/Incoming = New template version** - Verified in `merger.rs:138` - parameter named `incoming` representing "New template output"
5. **Automatic merge combining changes** - Verified in `merger.rs:255-259` - `repo.merge()` is called to combine changes
6. **Conflict detection** - Verified in `merger.rs:262-268` - `repo.index()?.has_conflicts()` check with conflict markers left in files

**Verified Inaccurate Claims:**
1. **"You'll be prompted to resolve them manually"** - The code at `merger.rs:262-268` shows no interactive prompting. Conflicts are left as markers in files, and users must manually edit files after the update command completes.
