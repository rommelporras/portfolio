# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
