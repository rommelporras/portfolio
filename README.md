# Rommel Porras - Portfolio

Personal portfolio and homelab showcase, built with Next.js 16 and self-hosted on a bare metal Kubernetes cluster.

**[www.rommelporras.com](https://www.rommelporras.com)**

## Quick Start

```bash
git clone https://github.com/rommelporras/portfolio.git
cd portfolio

bun install
bun run dev          # http://localhost:3000
bun run build        # Static export to /out
```

## Tech Stack

| Layer     | Technology                                        |
| --------- | ------------------------------------------------- |
| Framework | Next.js 16 (App Router, Static Export, Turbopack) |
| UI        | React 19, TypeScript 5, Tailwind CSS 4            |
| Animation | Framer Motion 12                                  |
| Testing   | Playwright (E2E), Vitest (Unit), Testing Library  |
| Quality   | ESLint 9, Prettier, Husky + lint-staged           |
| Runtime   | Bun                                               |
| Hosting   | 3-node bare metal Kubernetes, GitLab CI/CD        |

## Documentation

- [Deployment Guide](docs/DEPLOYMENT.md) -- Kubernetes setup and CI/CD pipeline
- [Testing Guide](docs/TESTING.md) -- Vitest and Playwright configuration
- [Changelog](docs/CHANGELOG.md) -- Release history

## Claude Code

This project uses [Claude Code](https://claude.ai/code) with a shared global config — see [rommelporras/claude-config](https://github.com/rommelporras/claude-config) for setup instructions before working on a new machine.
