# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.0](https://github.com/rommelporras/portfolio/releases/tag/v1.1.0) - 2026-04-07

Homelab page accuracy audit and UX improvements. Updated to reflect actual cluster state (67 releases, 50+ services, ArgoCD GitOps).

### Added

- **Collapsible service categories** — Accordion sections with WAI-ARIA keyboard support; first 3 expanded, 5 collapsed by default with service count badges
- **ARR Stack flow diagram** — Visual pipeline showing media automation flow (Prowlarr → Jellyfin) with Intel QSV badges
- **30+ missing services** — ArgoCD, Vault, ESO, Velero, Garage S3, Jellyfin, Sonarr, Radarr, and full ARR stack
- **ArgoCD CI/CD workflow** — New GitOps section alongside existing GitLab CI/CD pipeline
- **3 new skill cards** — GitOps, Secrets Management, Backup & DR
- **"Last verified" footer** — April 2026 timestamp on homelab page

### Changed

- **Data extraction** — All service data moved from page.tsx to `data/homelab.ts` with types in `types/homelab.ts`
- **18 version updates** — Meilisearch, Ghost, Ollama, Cilium, Longhorn, and 13 others brought to current versions
- **6 factual corrections** — Immich version, UPS model, Proxmox description, release count (39→67), service count (20+→50+), timeline span (~1 mo→~3 mo)
- **16 timeline releases** — v0.23.0 through v0.38.0 with Media, Security, Backup, and GitOps phases
- **Cost comparison refresh** — AWS pricing updated for April 2026 ap-southeast-1; electricity updated to 110W at ₱13.82/kWh
- **Architecture diagram** — Private access layer expanded from 5 to 10 service cards
- **Tech Stack Layer 6** — Updated from 4-bullet to 6-category list for 50+ services
- **OG metadata** — Updated descriptions with current service/release counts
- **About section** — Added "ArgoCD GitOps" and "50+ Services" to features

### Updated

- **Dependencies** — Next.js 16.2.2, Tailwind 4.2.2, Framer Motion 12.38.0, Vitest 4.1.3, Playwright 1.59.1, and 9 others

## [v1.0.0](https://github.com/rommelporras/portfolio/releases/tag/v1.0.0) - 2026-02-15

Initial public release of my portfolio and homelab showcase. Self-hosted on bare metal Kubernetes.

### Added

- **Homepage** — Hero with animated stats, About with career timeline, Work Experience with tech filters, Toolbox with category tabs and AWS certification badges, Featured Work, and Contact with Web3Forms integration
- **Homelab page** — Architecture diagram, hardware specs, running services, release timeline, network segmentation, CI/CD pipeline visualization, and AWS cost comparison
- **Navigation** — Auto-hide header, command palette (Ctrl+K), mobile drawer, scroll progress bar, and table of contents sidebar on both pages
- **Design system** — GitHub Dark theme, CVA component primitives (Card, Badge, Button), Framer Motion scroll animations, and Geist/Inter/JetBrains Mono font stack
- **Accessibility** — WCAG 2.1 AA compliance: semantic landmarks, heading hierarchy, keyboard focus indicators, reduced-motion support, and ARIA labels throughout
- **SEO** — OpenGraph, Twitter Cards, JSON-LD Person schema, sitemap, robots.txt, canonical URLs, and Google Analytics
- **Testing** — Playwright E2E tests (smoke + full suites, multi-browser), Vitest unit tests with coverage, and JUnit/Cobertura reporting for GitLab MR visualization
- **CI/CD** — GitLab pipeline with four stages (validate, test, build, deploy), OSV-Scanner security audits, DAG parallelization, and bun/Next.js build caching
- **Infrastructure** — Three environments (dev/staging/prod), Docker multi-stage build (bun + nginx), Kubernetes deployment via kubectl, Cloudflare Tunnel for zero-trust access, and dual-remote workflow (GitLab + GitHub)
