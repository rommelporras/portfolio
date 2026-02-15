# Create Release

GitFlow release: MR from develop→main, wait for pipeline, tag, create GitHub + GitLab releases.

## Usage

```
/release                      → Auto-determine version from commits
/release v1.0.1               → Explicit version, auto-generate title
/release v1.0.1 "Title Here"  → Explicit version AND title
```

## Pipeline-Aware Workflow

```
main is protected on GitLab — no direct push.
Releases go through MR with pipeline gate:

  develop → MR → pipeline passes → auto-merge → tag → release
```

## Instructions

1. **Check Current State**

   ```bash
   git branch --show-current   # Must be on develop
   git status                  # Must be clean working tree
   git log --oneline -10       # Recent commits
   git describe --tags --abbrev=0 2>/dev/null || echo "No tags yet"
   ```

   - **Must be on `develop`** branch — abort if on any other branch
   - Working tree **must** be clean — abort if dirty

2. **Remote Tag Collision Check**

   Fetch latest tags from both remotes and verify the target version doesn't already exist:

   ```bash
   git fetch origin --tags
   git fetch github --tags
   git tag -l "v<VERSION>"
   ```

   If the tag already exists:
   - **ABORT** immediately
   - Show: `"Error: Tag v<VERSION> already exists."`
   - Suggest the next available version

3. **Determine Version and Title**

   **If user provided version and title** (e.g., `/release v1.0.1 "Title Here"`):
   - Use the provided version
   - Use the provided title in tag and release

   **If user provided version only** (e.g., `/release v1.0.1`):
   - Use the provided version
   - Auto-generate title from commit analysis

   **If no version provided** (`/release`):
   - Find last tag
   - Analyze commits since last tag
   - Auto-bump based on commit types:
     - `feat:` → **minor** bump (v0.1.0 → v0.2.0)
     - `fix:` only → **patch** bump (v0.1.0 → v0.1.1)
     - `BREAKING CHANGE` → **major** bump (v0.1.0 → v1.0.0)
     - `docs:`, `chore:` only → **patch** bump
   - Auto-generate title from commit analysis

   **First release** (no previous tags):
   - Default to `v0.1.0` unless user specifies

4. **Analyze Changes for Release Notes**

   Get commits since last tag (or all commits for first release):

   ```bash
   git log <last-tag>..HEAD --oneline   # or git log --oneline for first release
   ```

   Group commits by category:
   - Features
   - Bug fixes
   - Documentation changes
   - CI/CD changes
   - Infrastructure changes
   - Chores

   Understand the PURPOSE, not just list commits.

5. **Write Release Notes**

   **Tag annotation format:**

   ```
   v<VERSION> - <Short Title>

   <One sentence summary of this release>

   <Category 1>:
   - Specific item
   - Specific item

   <Category 2>:
   - Specific item
   ```

   **GitHub/GitLab release format (markdown):**

   ```markdown
   ## Summary

   <One paragraph describing what this release contains>

   ## What's Included

   ### <Category 1>

   - Item 1
   - Item 2

   ### <Category 2>

   - Item 1
   - Item 2

   ## Commits

   - `abc1234` commit message 1
   - `def5678` commit message 2
   ```

6. **Show Release Plan**

   Present the plan and **wait for user confirmation**:

   ```
   Release Plan:
   - Version: v1.0.1
   - Title: "Title Here"
   - Method: MR from develop → main (pipeline-gated)
   - Commits: 5

   Pre-release checks:
   - Remote tag collision: ✓ No conflict

   Will do:
   - Bump package.json version to <VERSION>
   - Update docs/CHANGELOG.md on develop
   - Commit and push develop to both remotes
   - Create MR on GitLab (develop → main)
   - Set auto-merge (waits for pipeline to pass)
   - After merge: create annotated tag v1.0.1
   - Push tag to both remotes
   - Sync main to GitHub
   - Create GitHub + GitLab releases

   Proceed with release? (waiting for confirmation)
   ```

   **Do NOT proceed until user confirms.**

7. **Bump Version and Update CHANGELOG on develop**

   Before creating the MR, bump the project version and update the changelog.

   **Bump package.json version:**

   ```bash
   bun run npm version <VERSION_WITHOUT_V> --no-git-tag-version
   ```

   This updates `package.json` without creating a git tag.

   **Update docs/CHANGELOG.md:**

   Read the existing docs/CHANGELOG.md (create if first release), then prepend the new version
   entry **after the header lines** (title, blank line, format description, semver
   description, and blank line) but **before the first `## [v` entry**.

   **CHANGELOG entry format** (Keep a Changelog):

   ```markdown
   ## [v<VERSION>](https://github.com/rommelporras/portfolio/releases/tag/v<VERSION>) - <YYYY-MM-DD>

   <One sentence summary of this release>

   ### Added

   - New features from `feat:` commits

   ### Fixed

   - Bug fixes from `fix:` commits

   ### Changed

   - Changes from `refactor:`, `chore:`, `infra:`, `ci:` commits

   ### Removed

   - Anything removed (if applicable)
   ```

   Rules:
   - Only include sections (Added/Fixed/Changed/Removed) that have items
   - Date is today's date in YYYY-MM-DD format
   - Descriptions should be human-readable, not raw commit messages
   - Link the version heading to the GitHub release

   **Commit and push all pre-release changes:**

   ```bash
   git add package.json bun.lock docs/CHANGELOG.md
   git commit -m "chore: release v<VERSION>"
   git push origin develop
   git push github develop
   ```

8. **Create MR and Auto-Merge**

   **Create MR on GitLab:**

   ```bash
   glab mr create \
     --source-branch develop \
     --target-branch main \
     --title "release: v<VERSION> - <Title>" \
     --description "<release notes markdown>" \
     --assignee @me
   ```

   **Set auto-merge (merges when pipeline passes):**

   ```bash
   glab mr merge <MR_NUMBER> --when-pipeline-succeeds --no-squash
   ```

   **Wait for merge to complete:**

   ```bash
   # Poll until MR is merged (check every 30s, timeout 10min)
   for i in $(seq 1 20); do
     STATE=$(glab mr view <MR_NUMBER> --output json | python3 -c "import sys,json; print(json.load(sys.stdin)['state'])")
     if [ "$STATE" = "merged" ]; then break; fi
     echo "Waiting for pipeline + merge... ($i/20)"
     sleep 30
   done
   ```

   If merge doesn't complete within 10 minutes:
   - Report the MR URL and status
   - Tell user to check pipeline and merge manually
   - Provide remaining steps to run after merge

9. **Tag and Release (after MR merge)**

   **Update local main:**

   ```bash
   git checkout main
   git pull origin main
   ```

   **Create annotated tag on main:**

   ```bash
   git tag -a v<VERSION> -m "<tag annotation>"
   ```

   **Push tag to both remotes:**

   ```bash
   git push origin v<VERSION>
   git push github v<VERSION>
   ```

   **Sync main to GitHub:**

   ```bash
   git push github main
   ```

   **Create GitHub release:**

   ```bash
   gh release create v<VERSION> \
     --repo rommelporras/portfolio \
     --title "v<VERSION> - <Title>" \
     --notes "<release notes markdown>"
   ```

   **Create GitLab release:**

   ```bash
   glab release create v<VERSION> \
     --name "v<VERSION> - <Title>" \
     --notes "<release notes markdown>"
   ```

   **Switch back to develop:**

   ```bash
   git checkout develop
   ```

10. **Report Results**

    Show a summary:

    ```
    Release Complete:
    - Version: v1.0.1
    - Method: MR #<N> merged (pipeline-gated)
    - Tag: v1.0.1 on main
    - docs/CHANGELOG.md: ✓ updated on develop
    - origin (GitLab): ✓ tag + release created
    - github (GitHub): ✓ main synced + tag + release created
    - Current branch: develop
    - GitLab release: <URL>
    - GitHub release: <URL>
    ```

## Examples

### Feature Release (v1.6.0)

**Tag annotation:**

```
v1.6.0 - Homelab Infrastructure Showcase

Added comprehensive homelab page showcasing Kubernetes infrastructure.

Features:
- Interactive infrastructure diagrams
- Network topology visualization
- Hardware specifications display

UI/UX:
- Responsive design for all viewports
- Dark mode support
- Smooth scroll animations
```

### Content Update Release (v1.5.1)

**Tag annotation:**

```
v1.5.1 - Content Accuracy Rewrite

Replaced fabricated metrics with verified, honest content.

Fixes:
- Hero stats updated with real numbers
- Toolbox tier system replaces fake percentages
- Experience data rewritten with actual highlights

Content:
- Homelab page expanded with full services inventory
- Cost comparison updated with complete hardware inventory
```

### Major Release (v2.0.0)

**Tag annotation:**

```
v2.0.0 - Public Portfolio Release

Cleaned repository for public GitHub release.

Breaking Changes:
- Removed blog system (migrated to Ghost CMS)
- Removed case studies and projects sections

Infrastructure:
- Updated for Kubernetes deployment
- GitLab CI/CD pipeline
- Multi-environment support (dev/staging/prod)
```

## Quality Checklist

Before releasing, verify:

- [ ] On `develop` branch
- [ ] Working tree is clean (no uncommitted changes)
- [ ] Remote tags fetched and no version collision
- [ ] All commits are meaningful and well-formatted
- [ ] Version number follows SemVer
- [ ] Release notes are categorized and specific
- [ ] Tag annotation has context sentence
- [ ] package.json version bumped to match release
- [ ] docs/CHANGELOG.md updated and committed on develop
- [ ] MR created and auto-merge set
- [ ] Pipeline passes and MR merges successfully
- [ ] Tag pushed to both remotes
- [ ] GitHub release created with formatted notes
- [ ] GitLab release created with formatted notes
- [ ] Back on `develop` branch after release

## Important Notes

- NEVER release with uncommitted changes
- NEVER release without meaningful release notes
- NEVER release without user confirmation of the release plan
- NEVER push directly to main — always use MR (main is protected on GitLab)
- MR pipeline must pass before merge (enforced by GitLab)
- `--when-pipeline-succeeds` auto-merges after pipeline passes
- `--no-squash` preserves individual commit history on main
- Always fetch remote tags before creating a new tag
- Always use annotated tags (`git tag -a`)
- Follow semantic versioning (MAJOR.MINOR.PATCH)
- First release defaults to v0.1.0
- Release notes should explain "what's in this release" not just list commits
- NO AI attribution in release notes or tag annotations
- Always switch back to `develop` after release completes
- Push tags and main to both `origin` (GitLab) and `github` (GitHub) remotes
- If any step fails, report clearly and provide remaining manual steps
