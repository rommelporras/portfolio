# Smart Conventional Commit

Analyze the current git changes and create a well-structured conventional commit.

## Usage

```
/commit              → Auto-analyze and auto-generate commit message
```

No arguments needed. The command analyzes git diff and generates the appropriate message.

## Instructions

1. **Check Git Status**
   - Run `git status` to see ALL modified AND untracked files
   - Run `git diff` to see actual changes (or `git diff --cached` if staged)
   - **IMPORTANT:** Untracked files are part of the commit scope — do NOT ignore them

2. **Junk File Check**

   Review untracked files for anything that shouldn't be committed:
   - Random screenshots (`.png`, `.jpg` in project root)
   - Temp files (`.tmp`, `.bak`, `.backup`)
   - Editor artifacts (`.swp`, `.swo`, `*~`)
   - OS files (`.DS_Store`, `Thumbs.db`)

   **If junk found:** Warn the user and suggest adding to `.gitignore`. Do NOT silently skip them — either commit them or `.gitignore` them. Never selectively stage to work around it.

3. **Detect Commit Type**
   Analyze the changes and determine the appropriate type:
   - `feat:` - New feature or functionality
   - `fix:` - Bug fix or correction
   - `docs:` - Documentation changes
   - `style:` - Formatting, whitespace (no logic change)
   - `refactor:` - Code restructuring without behavior change
   - `perf:` - Performance improvements
   - `test:` - Adding or updating tests
   - `chore:` - Build process, dependencies, tooling
   - `ci:` - CI/CD pipeline changes (GitLab, GitHub Actions)
   - `infra:` - Infrastructure changes (K8s manifests, configs, deployment)

4. **Analyze and Group Changes**
   - Identify what categories of files changed (components, configs, styles, etc.)
   - Group related changes together
   - Understand the PURPOSE of changes, not just what files changed

5. **Write Commit Message**
   Format (NO AI attribution):

   ```
   <type>: <short summary (50 chars max)>

   <One sentence context - what is this change about?>

   <Category 1>:
   - Specific change 1
   - Specific change 2

   <Category 2>:
   - Specific change 1
   - Specific change 2
   ```

   **Structure rules:**
   - Title: 50 chars max, imperative mood ("Add" not "Added")
   - Context: One sentence explaining the purpose
   - Categories: Group changes logically (Components, Styles, etc.)
   - Bullets: Specific items under each category

6. **Execute Commit**

   **CRITICAL: Always use `git add .` to stage EVERYTHING — modified files AND untracked files.**
   Never cherry-pick specific files. Only exclude files via `.gitignore`.

   ```bash
   git add .
   git commit -m "$(cat <<'EOF'
   [commit message here]
   EOF
   )"
   ```

7. **Show Status**
   Run `git status` and `git log --oneline -1` to confirm

## Examples

**Simple (few changes):**

```
fix: correct mobile navigation close behavior

Hamburger menu now closes when clicking nav links.
Prevents scroll lock persisting after navigation.
```

**Medium (single category):**

```
feat: add dark mode toggle to navigation

Implement theme switcher with localStorage persistence.

Changes:
- Add ThemeToggle component with sun/moon icons
- Persist theme preference in localStorage
- Apply system preference on first visit
- Add smooth transition between themes
```

**Complex (multiple categories):**

```
refactor: update infrastructure for K8s deployment

Migrate from Proxmox VM to Kubernetes cluster deployment.

Commands:
- Update deploy.md for GitLab CI/CD workflow
- Update health.md for kubectl pod checks
- Update logs.md for K8s pod logging
- Update rollback.md for kubectl rollout undo

Agents:
- Update deploy-validator.md for K8s context
- Update seo-auditor.md to remove blog references

Documentation:
- Update CLAUDE.md with environment URLs
- Simplify sitemap.xml for 2-page site
```

**Infrastructure:**

```
ci: add multi-environment GitLab CI/CD pipeline

Configure automated deployment for dev/staging/prod.

Pipeline:
- Validate stage (lint, type-check, security audit)
- Test stage (unit tests, E2E smoke tests)
- Build stage (Docker image to GitLab registry)
- Deploy stage (kubectl to K8s namespaces)

Environments:
- dev: auto-deploy on develop branch
- staging: manual trigger from develop
- prod: auto-deploy on main branch
```

## Quality Checklist

Before committing, verify:

- [ ] No junk files in untracked list (or added to .gitignore)
- [ ] Title is under 50 characters
- [ ] Title uses imperative mood (Add, Fix, Update)
- [ ] Context sentence explains the "why"
- [ ] Changes are grouped by category (if multiple types)
- [ ] Each bullet is specific and meaningful
- [ ] NO AI attribution anywhere

## Important Notes

- NEVER commit if there are no changes
- ALWAYS use `git add .` — never cherry-pick files. Include ALL modified and untracked files.
- Only exclude files via `.gitignore`, never by selectively staging
- If junk files are untracked, warn the user and suggest `.gitignore` — don't silently skip
- Use present tense ("Add" not "Added")
- Group changes by category for multi-file commits
- Simple commits don't need categories - just context + bullets
- NO AI attribution (no "Generated with Claude" or "Co-Authored-By")
