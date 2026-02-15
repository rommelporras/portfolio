# Deployment Guide

This portfolio runs on a self-hosted Kubernetes cluster with GitLab CI/CD.

## Architecture

```
Internet --> Cloudflare (CDN/WAF) --> Cloudflare Tunnel --> K8s Cluster
                                      (zero exposed ports)
                                             |
                   +--------------------------+--------------------------+
                   v                          v                          v
             portfolio-dev           portfolio-staging            portfolio-prod
             (2 replicas)             (2 replicas)               (2 replicas)
```

**Infrastructure:**

- 3-node HA Kubernetes cluster (kubeadm v1.35.0)
- Cilium CNI with Gateway API
- Longhorn distributed storage
- cert-manager + Let's Encrypt (automatic TLS)

## Environments

| Environment | Namespace         | URL                   | Trigger           |
| ----------- | ----------------- | --------------------- | ----------------- |
| Dev         | portfolio-dev     | Internal (Tailscale)  | Push to `develop` |
| Staging     | portfolio-staging | beta.rommelporras.com | Manual            |
| Prod        | portfolio-prod    | www.rommelporras.com  | Merge to `main`   |

## CI/CD Pipeline

### Branching Model

```
feature/* --> develop --------------------------> main
                 |                                  |
            [validate + test + build]          [build only]
                 |                                  |
                 v                                  v
            deploy:dev                         deploy:prod
              [auto]                              [auto]
                 |
                 v
          deploy:staging
             [manual]
```

Main branch skips validate and test stages -- those already passed in the merge request pipeline.

### Pipeline Stages

| Stage    | Jobs                                      | Runs On            |
| -------- | ----------------------------------------- | ------------------ |
| validate | lint, type-check, security-audit          | `develop` + MRs    |
| test     | unit, e2e:smoke (auto), e2e:full (manual) | `develop` + MRs    |
| build    | Docker multi-stage build                  | `develop` + `main` |
| deploy   | kubectl rolling update                    | `develop` + `main` |

### How Deployment Works

1. **Feature development**: Branch from `develop`, push triggers lint + test only
2. **Deploy to dev**: Merge to `develop` triggers build + auto-deploy
3. **Deploy to staging**: Manually trigger `deploy:staging` from GitLab CI/CD
4. **Deploy to prod**: Create MR `develop` --> `main`, merge triggers build + auto-deploy

## Container Image

Multi-stage Docker build:

1. **deps**: Install dependencies with Bun
2. **builder**: Build Next.js static export (`bun run build`)
3. **runner**: Minimal nginx image serving static files from `/out`

Images are pushed to the GitLab Container Registry:

```
$CI_REGISTRY_IMAGE:$CI_COMMIT_SHA        # Immutable, used by deployments
$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG   # Branch name (e.g., "develop")
$CI_REGISTRY_IMAGE:latest                 # Most recent build
```

## Local Development

### Prerequisites

- [Bun](https://bun.sh/) v1.2+
- Git

### Setup

```bash
bun install
bun run dev          # http://localhost:3000
bun run build        # Static export to /out
```

### Quality Checks

```bash
bun run lint         # ESLint
bun run typecheck    # TypeScript strict
bun run test:unit    # Vitest
bun run test:e2e     # Playwright (requires dev server or build)
```

See [Testing Guide](TESTING.md) for full test documentation.

## Kubernetes Operations

### Check Status

```bash
kubectl get deploy -n portfolio-prod
kubectl get pods -n portfolio-prod
kubectl get events -n portfolio-prod --sort-by='.lastTimestamp' | tail -10
```

### Rollback

```bash
# View rollout history
kubectl rollout history deploy/portfolio -n portfolio-prod

# Rollback to previous version
kubectl rollout undo deploy/portfolio -n portfolio-prod

# Rollback to specific revision
kubectl rollout undo deploy/portfolio -n portfolio-prod --to-revision=2
```

### Force Restart

```bash
kubectl rollout restart deploy/portfolio -n portfolio-prod
kubectl rollout status deploy/portfolio -n portfolio-prod
```

## Health Checks

| Probe     | Path      | Interval | Initial Delay |
| --------- | --------- | -------- | ------------- |
| Liveness  | `/health` | 10s      | 5s            |
| Readiness | `/health` | 5s       | 5s            |

## Resource Limits

| Resource | Request | Limit |
| -------- | ------- | ----- |
| CPU      | 50m     | 200m  |
| Memory   | 64Mi    | 128Mi |

Rolling updates: `maxSurge: 1, maxUnavailable: 0` (zero-downtime).

## Monitoring

| Tool           | Purpose                | Access   |
| -------------- | ---------------------- | -------- |
| Prometheus     | Metrics collection     | Internal |
| Grafana        | Dashboards             | Internal |
| Alloy --> Loki | Log aggregation        | Internal |
| Uptime Kuma    | External uptime checks | Internal |

Alerts go to Discord and Email for critical issues (pod restarts, health check failures).

## Security

- **Zero exposed ports**: All traffic through Cloudflare Tunnel
- **TLS everywhere**: cert-manager provisions Let's Encrypt certificates automatically
- **Network policies**: Cilium restricts pod-to-pod communication
- **RBAC**: CI/CD uses least-privilege service accounts per namespace
- **Protected branches**: Production registry tokens only available on `main`
- **Dependency scanning**: OSV-Scanner runs on every MR (see `.osv-scanner.toml` for ignored CVEs)

## Troubleshooting

### Pod not starting

```bash
kubectl describe pod -n portfolio-prod -l app=portfolio
kubectl logs -n portfolio-prod -l app=portfolio --tail=50
```

### Image pull errors

```bash
kubectl get deploy portfolio -n portfolio-prod -o yaml | grep -A5 imagePullSecrets
```

### DNS / TLS issues

```bash
kubectl get httproute -n portfolio-prod
kubectl get certificate -A | grep portfolio
```
