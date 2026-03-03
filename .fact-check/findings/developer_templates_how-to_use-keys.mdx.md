<!-- source: content/docs/developer/templates/how-to/use-keys.mdx -->
# 📄 File: content/docs/developer/templates/how-to/use-keys.mdx

> Documentation explaining how keys work for answer reuse across questions and templates, including namespacing conventions and cross-template key sharing. The documentation accurately describes the key mechanism implemented in the SDK, with a few documentation issues in the code examples.

### 🔴 Source Code Inaccuracies
(None found - all API signatures and key behavior claims are accurate)

### 🟡 Documentation Issues

1. **Problem**: The "Confirming Values" example (lines 124-134) has a logic error. Using the same key `'user.email'` for both `i.text()` and `i.confirm()` means the confirm call will retrieve the cached string answer, not prompt the user, and attempt to cast a string to boolean. The `confirm()` method expects a boolean answer in cache, not a string.
   **Location**: Lines 124-134
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:62-65` shows `confirm()` checks `isBoolAnswer(answer)` and would throw if given a string answer.
   **Fix**: Use a different key for the confirm question:
   ```ts
   const email = await i.text('Email?', 'user.email', 'Your email');
   const confirmed = await i.confirm(
     `Use ${email} for notifications?`,
     'user.email.confirm',  // Different key - will prompt user
     'Confirm email'
   );
   ```

2. **Problem**: The "Step-by-Step Collection" example (lines 139-146) uses the same key for both `projectName` and `componentName`. The comment "Defaults to project name" is misleading - the value doesn't default, it's identical because they share the same key.
   **Location**: Lines 139-146
   **Fix**: Either use a different key pattern or clarify that this forces the same value:
   ```ts
   const projectName = await i.text('Project name?', 'project.name', '...');
   const componentName = await i.text(
     'Main component name?',
     'project.name',  // Same key = identical value, no prompt
     'Uses project name (same as project name)'
   );
   // componentName === projectName (identical, not default)
   ```

3. **Problem**: In the "Intentional Sharing" section (lines 80-87), both code blocks declare `const name` which would be a variable shadowing issue in real code. While these represent separate templates, this may confuse readers.
   **Location**: Lines 82 and 85
   **Fix**: Add a comment explaining these are in separate templates, or use different variable names like `nameA` and `nameB`.

### 🟠 Other Problems

1. **Problem**: The documentation states "Every question has an `id` parameter" (line 14), but technically the `id` is a parameter in shorthand form and a property in object form.
   **Recommendation**: Clarify the distinction: "In shorthand form, the `id` is the second parameter. In object form, it's the `id` property."

2. **Problem**: Related documentation (`/developer/templates/reference/sdk/inquirer.mdx`) incorrectly states `dateSelect()` returns `Date` when it actually returns `string`.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:147-148` shows `dateSelect` returns string via `isStringAnswer()`.
   **Recommendation**: Fix the related documentation file.

## Verification Summary

### Verified Accurate Claims

1. **API Signature**: The shorthand form `i.text('message', 'id', 'help')` is correctly documented.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:22`
   - `text(q: string, id: string, help?: string | null): Promise<string>;`

2. **Key Behavior**: The `id` parameter is used as a key for answer lookup.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:15-21`
   ```ts
   private getAnswer(q: Question): Answer {
     if (!this.#answers[q.id]) {
       throw new OutOfAnswerException('', q);
     }
     return this.#answers[q.id];
   }
   ```

3. **Cross-Template Key Sharing**: Real-world evidence shows template2 using template1's key.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template2/cyan/index.ts:4`
   ```ts
   const name = await i.text('What is your name?', 'ernest/template1/name');
   ```

4. **Namespacing Pattern**: The examples in iridium templates follow the namespacing convention documented (e.g., `'ernest/template1/color'`, `'ernest/template2/investmentType'`).

5. **Confirm Method Signature**: The `confirm()` method signature is accurate.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:10`
   - `confirm(q: string, id: string, help?: string | null): Promise<boolean>;`

6. **Related Links**: All three related links exist and are valid.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 3 |
| 🟠 | 2 |
