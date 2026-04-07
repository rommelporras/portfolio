import type { HomelabService, HomelabStats, TimelineRelease } from '@/types/homelab'

export const HOMELAB_STATS: HomelabStats = {
  nodes: 3,
  services: '50+',
  releases: 67,
  uptime: '99.9%',
  exposedPorts: 0,
}

export const PLATFORM_INFRASTRUCTURE: HomelabService[] = [
  {
    name: 'Kubernetes',
    version: 'v1.35.0',
    desc: '3-node HA control plane with stacked etcd',
  },
  { name: 'Cilium', version: 'v1.19.2', desc: 'eBPF-based CNI replacing kube-proxy' },
  {
    name: 'Longhorn',
    version: 'v1.11.1',
    desc: 'Distributed block storage (2x replication on NVMe)',
  },
  {
    name: 'kube-vip',
    version: 'v1.0.4',
    desc: 'HA virtual IP for API server (ARP mode)',
  },
  {
    name: 'Gateway API',
    version: 'v1.4.1',
    desc: 'Kubernetes-native ingress with Cilium',
  },
  {
    name: 'cert-manager',
    version: 'v1.19.2',
    desc: "Automated Let's Encrypt wildcard TLS certificates",
  },
  {
    name: 'Metrics Server',
    version: 'v0.8.1',
    desc: 'Resource metrics for HPA and kubectl top',
  },
  { name: 'ArgoCD', version: 'v3.3.6', desc: 'GitOps continuous delivery (app-of-apps pattern)' },
  {
    name: 'HashiCorp Vault',
    version: 'v1.21.4',
    desc: 'Secrets management (Raft storage, auto-unseal)',
  },
  { name: 'External Secrets Operator', version: 'v2.1.0', desc: 'Syncs K8s Secrets from Vault' },
  { name: 'Vault Auto-Unsealer', version: 'custom', desc: 'Automatic Vault unsealing deployment' },
  { name: 'Velero', version: 'v1.18.0', desc: 'Cluster backup and restore' },
  {
    name: 'Garage S3',
    version: 'v2.2.0',
    desc: 'Self-hosted S3-compatible object store (Velero backend)',
  },
  { name: 'version-checker', version: 'v0.10.0', desc: 'Container/K8s version drift detection' },
  { name: 'Node Feature Discovery', version: 'v0.18.3', desc: 'Auto-labels GPU nodes' },
  {
    name: 'Intel Device Plugins',
    version: 'v0.35.0',
    desc: 'GPU plugin for Intel QSV transcoding',
  },
  { name: 'kube-bench', version: 'CronJob', desc: 'Weekly CIS Kubernetes benchmark scans' },
  {
    name: 'Cluster Janitor',
    version: 'custom',
    desc: 'Automated failed pod + stopped replica cleanup',
  },
]

export const NETWORKING_ACCESS: HomelabService[] = [
  {
    name: 'Cloudflare Tunnel',
    version: '2026.3.0',
    desc: 'HA tunnel (2 replicas) — zero exposed ports',
  },
  {
    name: 'Tailscale Operator',
    version: 'v1.94.2',
    desc: 'WireGuard subnet router for private remote access',
  },
  {
    name: 'AdGuard Home',
    version: 'v0.107.73',
    desc: 'Primary DNS server for all VLANs (10.10.30.53)',
  },
]

export const OBSERVABILITY_STACK: HomelabService[] = [
  {
    name: 'Prometheus',
    version: 'v0.89.0',
    desc: 'Metrics collection with 177+ default alerting rules',
  },
  {
    name: 'Grafana',
    version: 'v11.6.0',
    desc: 'Dashboards for every service + infrastructure',
  },
  { name: 'Loki', version: 'v3.6.7', desc: 'Log aggregation (paired with Grafana)' },
  {
    name: 'Alloy',
    version: 'v1.15.0',
    desc: 'Log collector (Grafana agent, replaces Promtail)',
  },
  {
    name: 'Alertmanager',
    version: 'v0.31.1',
    desc: 'Alert routing to Discord + Email',
  },
  {
    name: 'Blackbox Exporter',
    version: 'v0.28.0',
    desc: 'HTTP/TCP probes for endpoint monitoring',
  },
  {
    name: 'Uptime Kuma',
    version: 'v2.2.1',
    desc: 'Public status page at status.rommelporras.com',
  },
  {
    name: 'NUT Exporter',
    version: '3.2.5',
    desc: 'UPS monitoring (CyberPower CP1600EPFCLCD)',
  },
  {
    name: 'OTel Collector',
    version: 'custom',
    desc: 'OpenTelemetry data collection (Claude Code metrics)',
  },
  {
    name: 'smartctl-exporter',
    version: 'v0.14.0',
    desc: 'NVMe S.M.A.R.T. disk monitoring (DaemonSet)',
  },
  { name: 'Scraparr', version: '3.0.3', desc: 'Prometheus metrics for ARR apps' },
  { name: 'tdarr-exporter', version: '1.4.3', desc: 'Prometheus metrics for Tdarr' },
  { name: 'qbittorrent-exporter', version: 'v1.6.0', desc: 'Prometheus metrics for qBittorrent' },
]

export const CICD_SERVICES: HomelabService[] = [
  {
    name: 'GitLab CE',
    version: 'v18.8.2',
    desc: 'Self-hosted DevOps platform (web, sidekiq, gitaly)',
  },
  {
    name: 'GitLab Runner',
    version: 'v18.8.0',
    desc: 'Kubernetes executor for CI/CD jobs',
  },
  {
    name: 'Container Registry',
    version: 'via GitLab',
    desc: 'Docker image registry at registry.k8s.rommelporras.com',
  },
]

export const APPLICATIONS: HomelabService[] = [
  {
    name: 'Ghost Blog',
    version: '6.26.0',
    desc: 'Blog with MySQL + Tinybird analytics',
    url: 'blog.rommelporras.com',
  },
  {
    name: 'Ghost Blog (dev)',
    version: '6.26.0',
    desc: 'Theme development environment',
  },
  {
    name: 'Portfolio',
    version: 'Next.js 16.1.0',
    desc: 'This website (3-env CI/CD: dev/staging/prod)',
    url: 'www.rommelporras.com',
  },
  {
    name: 'Invoicetron',
    version: 'Next.js 16.1.0',
    desc: 'Invoice processing (Bun + Prisma + PostgreSQL)',
    url: 'invoicetron.rommelporras.com',
  },
  {
    name: 'Ollama',
    version: '0.20.2',
    desc: 'Local LLM inference (CPU): qwen2.5:3b, qwen3:1.7b, moondream, gemma3:1b',
  },
  {
    name: 'Karakeep',
    version: '0.31.0',
    desc: 'AI bookmark manager (Chrome crawler + Meilisearch + Ollama)',
  },
  { name: 'Homepage', version: 'v1.11.0', desc: 'Internal dashboard (2 replicas)' },
  {
    name: 'MySpeed',
    version: '1.0.9',
    desc: 'Internet speed test tracker (historical)',
  },
  {
    name: 'Firefox Browser',
    version: '139.0',
    desc: 'Persistent browser via KasmVNC',
  },
  { name: 'Atuin', version: '18.12.0', desc: 'Self-hosted shell history sync (E2E encrypted)' },
  {
    name: 'TrafficAnalytics',
    version: '1.0.175',
    desc: 'Ghost analytics proxy (browser to Tinybird)',
  },
]

export const MEDIA_STACK: HomelabService[] = [
  {
    name: 'Jellyfin',
    version: '10.11.8',
    desc: 'Media server with Intel QSV hardware transcoding',
  },
  { name: 'Sonarr', version: '4.0.16', desc: 'TV show management and automation' },
  { name: 'Radarr', version: '6.0.4', desc: 'Movie management and automation' },
  { name: 'Prowlarr', version: '2.3.0', desc: 'Indexer manager for Sonarr/Radarr' },
  { name: 'qBittorrent', version: '5.1.4', desc: 'Download client' },
  { name: 'Bazarr', version: 'v1.5.5', desc: 'Subtitle management for Sonarr/Radarr' },
  { name: 'Seerr', version: 'v3.1.0', desc: 'Media requests and discovery' },
  {
    name: 'Tdarr',
    version: '2.64.02',
    desc: 'Library transcoding (Intel QSV hardware acceleration)',
  },
  { name: 'Recommendarr', version: 'v1.4.4', desc: 'AI media recommendations (powered by Ollama)' },
  { name: 'Configarr', version: '1.24.0', desc: 'TRaSH Guide quality profile sync (CronJob)' },
  { name: 'Unpackerr', version: 'v0.15.2', desc: 'RAR archive extraction daemon' },
  { name: 'Byparr', version: '2.1.0', desc: 'Cloudflare bypass proxy for indexers' },
]

export const DATABASES: HomelabService[] = [
  { name: 'MySQL', version: '8.4.8', desc: 'Ghost Blog (dev + prod)' },
  { name: 'PostgreSQL', version: '18.3-alpine', desc: 'Invoicetron' },
  { name: 'Meilisearch', version: 'v1.41.0', desc: 'Karakeep (full-text search)' },
  { name: 'SQLite', version: 'embedded', desc: 'Uptime Kuma, Karakeep' },
  { name: 'PostgreSQL (Atuin)', version: '18.3-alpine', desc: 'Atuin dedicated database' },
]

export const ADDITIONAL_INFRASTRUCTURE: HomelabService[] = [
  { name: 'Proxmox VE', version: '9.1.4', desc: 'Hypervisor (2 nodes: Dell 3090 + Topton N100)' },
  { name: 'OPNsense', version: '25.7.5', desc: 'Firewall / router (Proxmox VM)' },
  { name: 'OpenMediaVault', version: '7.6.0', desc: 'NAS / NFS storage' },
  { name: 'Immich', version: 'v2.6.3', desc: 'Photo management' },
]

export const TIMELINE_RELEASES: TimelineRelease[] = [
  {
    version: 'v0.1.0',
    date: 'Jan 12',
    title: 'Project Setup',
    phase: 'Foundation',
  },
  {
    version: 'v0.2.0',
    date: 'Jan 16',
    title: 'Kubernetes Cluster Bootstrap',
    phase: 'Bootstrap',
  },
  {
    version: 'v0.3.0',
    date: 'Jan 17',
    title: 'Storage Infrastructure',
    phase: 'Storage',
  },
  {
    version: 'v0.4.0',
    date: 'Jan 20',
    title: 'Observability Stack',
    phase: 'Monitoring',
  },
  {
    version: 'v0.5.0',
    date: 'Jan 20',
    title: 'Alerting (Discord + Email)',
    phase: 'Alerting',
  },
  { version: 'v0.6.0', date: 'Jan 22', title: 'Home Services', phase: 'Workloads' },
  {
    version: 'v0.7.0',
    date: 'Jan 23',
    title: 'Cloudflare Tunnel HA',
    phase: 'Networking',
  },
  {
    version: 'v0.8.0',
    date: 'Jan 24',
    title: 'GitLab CI/CD Platform',
    phase: 'CI/CD',
  },
  {
    version: 'v0.10.0',
    date: 'Jan 28',
    title: 'Portfolio CI/CD (3-env)',
    phase: 'CI/CD',
  },
  { version: 'v0.11.0', date: 'Feb 1', title: 'Ghost Blog', phase: 'Applications' },
  {
    version: 'v0.14.0',
    date: 'Feb 5',
    title: 'Invoicetron',
    phase: 'Applications',
  },
  {
    version: 'v0.17.0',
    date: 'Feb 9',
    title: 'Ghost Web Analytics',
    phase: 'Enhancement',
  },
  { version: 'v0.20.0', date: 'Feb 11', title: 'Ollama Local AI', phase: 'AI/ML' },
  {
    version: 'v0.21.0',
    date: 'Feb 12',
    title: 'Karakeep Migration',
    phase: 'Applications',
  },
  {
    version: 'v0.22.0',
    date: 'Feb 13',
    title: 'Tailscale Operator',
    phase: 'Networking',
  },
  { version: 'v0.23.0', date: 'Feb 18', title: 'ARR Stack Foundation', phase: 'Media' },
  { version: 'v0.24.0', date: 'Feb 20', title: 'Jellyfin Media Server', phase: 'Media' },
  { version: 'v0.25.0', date: 'Feb 22', title: 'Intel QSV Hardware Transcoding', phase: 'Media' },
  {
    version: 'v0.26.0',
    date: 'Feb 25',
    title: 'ARR Expansion (Bazarr, Seerr, Tdarr)',
    phase: 'Media',
  },
  { version: 'v0.27.0', date: 'Feb 28', title: 'UPS Monitoring (NUT)', phase: 'Monitoring' },
  { version: 'v0.28.0', date: 'Mar 3', title: 'Atuin Shell History', phase: 'Applications' },
  { version: 'v0.29.0', date: 'Mar 7', title: 'Vault + External Secrets', phase: 'Security' },
  { version: 'v0.30.0', date: 'Mar 10', title: 'Namespace & Pod Security', phase: 'Security' },
  { version: 'v0.31.0', date: 'Mar 13', title: 'Control Plane Hardening', phase: 'Security' },
  { version: 'v0.32.0', date: 'Mar 16', title: 'RBAC & Secrets Hardening', phase: 'Security' },
  {
    version: 'v0.33.0',
    date: 'Mar 19',
    title: 'Network Policies (132 CiliumNPs)',
    phase: 'Networking',
  },
  { version: 'v0.34.0', date: 'Mar 22', title: 'Velero Backup + Garage S3', phase: 'Backup' },
  {
    version: 'v0.35.0',
    date: 'Mar 25',
    title: 'Observability & Version Hardening',
    phase: 'Monitoring',
  },
  { version: 'v0.36.0', date: 'Mar 28', title: 'Pre-GitOps Validation', phase: 'Enhancement' },
  { version: 'v0.37.0', date: 'Apr 1', title: 'ArgoCD Installation', phase: 'GitOps' },
  { version: 'v0.38.0', date: 'Apr 4', title: 'GitOps Migration (Full ArgoCD)', phase: 'GitOps' },
]

export const PHASE_COLORS: Record<string, { dot: string; text: string }> = {
  Foundation: { dot: 'bg-violet-400', text: 'text-violet-400' },
  Bootstrap: { dot: 'bg-violet-400', text: 'text-violet-400' },
  Storage: { dot: 'bg-slate-400', text: 'text-slate-400' },
  Monitoring: { dot: 'bg-emerald-400', text: 'text-emerald-400' },
  Alerting: { dot: 'bg-emerald-400', text: 'text-emerald-400' },
  Workloads: { dot: 'bg-sky-400', text: 'text-sky-400' },
  Networking: { dot: 'bg-cyan-400', text: 'text-cyan-400' },
  'CI/CD': { dot: 'bg-orange-400', text: 'text-orange-400' },
  Applications: { dot: 'bg-amber-400', text: 'text-amber-400' },
  Enhancement: { dot: 'bg-amber-400', text: 'text-amber-400' },
  'AI/ML': { dot: 'bg-rose-400', text: 'text-rose-400' },
  Media: { dot: 'bg-rose-400', text: 'text-rose-400' },
  Security: { dot: 'bg-red-400', text: 'text-red-400' },
  Backup: { dot: 'bg-slate-400', text: 'text-slate-400' },
  GitOps: { dot: 'bg-purple-400', text: 'text-purple-400' },
}
