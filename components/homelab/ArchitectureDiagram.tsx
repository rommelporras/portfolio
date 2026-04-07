'use client'

import { motion } from 'framer-motion'

const ArchitectureDiagram = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <motion.div
      className="relative max-w-5xl mx-auto space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* ── Layer 1: Public Access ── */}
      <motion.div variants={itemVariants}>
        <div className="rounded-xl border-2 border-cyan-600 bg-linear-to-br from-cyan-950/40 to-sky-950/30 p-6">
          {/* Layer Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-cyan-800/50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-ghd-text-primary">Public Access</h3>
              <p className="text-xs text-ghd-text-muted">
                Internet &rarr; Cloudflare Tunnel &rarr; Gateway API &rarr; Services
              </p>
            </div>
          </div>

          {/* Flow: Internet -> Cloudflare -> Gateway -> Services */}
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            {/* Internet */}
            <div className="shrink-0 flex items-center justify-center px-4 py-3 rounded-lg bg-ghd-surface border border-cyan-700 shadow-sm">
              <div className="text-center">
                <svg
                  className="w-7 h-7 text-cyan-400 mx-auto mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span className="text-xs font-semibold text-ghd-text-body">Internet</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center lg:py-0 py-1">
              <span className="text-cyan-500 font-mono text-lg hidden lg:block">&rarr;</span>
              <span className="text-cyan-500 font-mono text-lg lg:hidden">&darr;</span>
            </div>

            {/* Cloudflare Tunnel */}
            <div className="shrink-0 flex items-center justify-center px-4 py-3 rounded-lg bg-orange-900/20 border border-orange-700 shadow-sm">
              <div className="text-center">
                <svg
                  className="w-7 h-7 text-orange-400 mx-auto mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-xs font-semibold text-ghd-text-body">Cloudflare</span>
                <span className="block text-xs text-ghd-text-muted">Tunnel</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center lg:py-0 py-1">
              <span className="text-cyan-500 font-mono text-lg hidden lg:block">&rarr;</span>
              <span className="text-cyan-500 font-mono text-lg lg:hidden">&darr;</span>
            </div>

            {/* Gateway API */}
            <div className="shrink-0 flex items-center justify-center px-4 py-3 rounded-lg bg-cyan-800/30 border border-cyan-700 shadow-sm">
              <div className="text-center">
                <svg
                  className="w-7 h-7 text-cyan-400 mx-auto mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs font-semibold text-ghd-text-body">Gateway</span>
                <span className="block text-xs text-ghd-text-muted">API</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center lg:py-0 py-1">
              <span className="text-cyan-500 font-mono text-lg hidden lg:block">&rarr;</span>
              <span className="text-cyan-500 font-mono text-lg lg:hidden">&darr;</span>
            </div>

            {/* Public Services Grid */}
            <div className="flex-1 grid grid-cols-2 gap-2">
              <ServiceCard name="Ghost Blog" url="blog.rommelporras.com" color="cyan" />
              <ServiceCard name="Portfolio" url="www.rommelporras.com" color="cyan" />
              <ServiceCard name="Invoicetron" url="invoicetron.rommelporras.com" color="cyan" />
              <ServiceCard name="Status Page" url="status.rommelporras.com" color="cyan" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Layer 2: Private Access ── */}
      <motion.div variants={itemVariants}>
        <div className="rounded-xl border-2 border-amber-600 bg-linear-to-br from-amber-950/40 to-orange-950/30 p-6">
          {/* Layer Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-amber-800/50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-ghd-text-primary">Private Access</h3>
              <p className="text-xs text-ghd-text-muted">Tailscale VPN &rarr; Internal Services</p>
            </div>
          </div>

          {/* Flow: Tailscale -> Services */}
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            {/* Tailscale */}
            <div className="shrink-0 flex items-center justify-center px-4 py-3 rounded-lg bg-ghd-surface border border-amber-700 shadow-sm">
              <div className="text-center">
                <svg
                  className="w-7 h-7 text-amber-400 mx-auto mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span className="text-xs font-semibold text-ghd-text-body">Tailscale</span>
                <span className="block text-xs text-ghd-text-muted">VPN Mesh</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center lg:py-0 py-1">
              <span className="text-amber-500 font-mono text-lg hidden lg:block">&rarr;</span>
              <span className="text-amber-500 font-mono text-lg lg:hidden">&darr;</span>
            </div>

            {/* Private Services Grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              <ServiceCard name="Grafana" subtitle="Dashboards" color="amber" />
              <ServiceCard name="ArgoCD" subtitle="GitOps" color="amber" />
              <ServiceCard name="Jellyfin" subtitle="Media" color="amber" />
              <ServiceCard name="AdGuard" subtitle="DNS" color="amber" />
              <ServiceCard name="Vault" subtitle="Secrets" color="amber" />
              <ServiceCard name="Homepage" subtitle="Dashboard" color="amber" />
              <ServiceCard name="Ollama" subtitle="AI" color="amber" />
              <ServiceCard name="ARR Stack" subtitle="12 services" color="amber" />
              <ServiceCard name="Monitoring" subtitle="5 exporters" color="amber" />
              <ServiceCard name="+20 more" subtitle="via Tailscale" color="amber" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Layer 3: Infrastructure ── */}
      <motion.div variants={itemVariants}>
        <div className="rounded-xl border-2 border-zinc-600 bg-linear-to-br from-zinc-900/60 to-slate-900/40 p-6">
          {/* Layer Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-zinc-700/50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-ghd-text-primary">Infrastructure</h3>
              <p className="text-xs text-ghd-text-muted">3-node bare metal Kubernetes cluster</p>
            </div>
          </div>

          {/* Hardware Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            {[
              { name: 'k8s-cp1', ip: '10.10.30.11' },
              { name: 'k8s-cp2', ip: '10.10.30.12' },
              { name: 'k8s-cp3', ip: '10.10.30.13' },
            ].map((node) => (
              <div
                key={node.name}
                className="rounded-lg border border-zinc-600 bg-zinc-800 p-4 text-center shadow-sm"
              >
                <div className="text-sm font-bold text-ghd-text-primary mb-1">Lenovo M80q</div>
                <div className="text-xs font-mono text-zinc-400">{node.name}</div>
                <div className="text-xs font-mono text-zinc-500">{node.ip}</div>
              </div>
            ))}
          </div>

          {/* Cluster Components */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <InfraCard label="Control Plane" detail="kubeadm + stacked etcd" />
            <InfraCard label="Networking" detail="Cilium CNI (eBPF)" />
            <InfraCard label="Storage" detail="Longhorn NVMe, 2x replication" />
            <InfraCard label="VIP" detail="kube-vip 10.10.30.10" />
          </div>
        </div>
      </motion.div>

      {/* ── Legend ── */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-ghd-text-muted">
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm bg-cyan-500" />
            Public path (Cloudflare Tunnel)
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm bg-amber-500" />
            Private path (Tailscale)
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm bg-zinc-500" />
            Infrastructure
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Sub-components ── */

interface ServiceCardProps {
  name: string
  url?: string
  subtitle?: string
  color: 'cyan' | 'amber' | 'slate'
}

const colorMap = {
  cyan: {
    bg: 'bg-ghd-surface',
    border: 'border-cyan-700',
    text: 'text-cyan-300',
    sub: 'text-cyan-400',
  },
  amber: {
    bg: 'bg-ghd-surface',
    border: 'border-amber-700',
    text: 'text-amber-300',
    sub: 'text-amber-400',
  },
  slate: {
    bg: 'bg-ghd-surface',
    border: 'border-slate-600',
    text: 'text-slate-300',
    sub: 'text-slate-400',
  },
}

const ServiceCard = ({ name, url, subtitle, color }: ServiceCardProps) => {
  const c = colorMap[color]
  return (
    <div className={`rounded-lg border ${c.border} ${c.bg} px-3 py-2 shadow-sm text-center`}>
      <div className={`text-xs font-semibold ${c.text}`}>{name}</div>
      {url && <div className={`text-[10px] font-mono ${c.sub} truncate mt-0.5`}>{url}</div>}
      {subtitle && <div className="text-[10px] text-ghd-text-muted mt-0.5">{subtitle}</div>}
    </div>
  )
}

interface InfraCardProps {
  label: string
  detail: string
}

const InfraCard = ({ label, detail }: InfraCardProps) => (
  <div className="rounded-lg border border-zinc-600 bg-zinc-800/50 px-3 py-3 text-center">
    <div className="text-xs font-bold text-gray-200 mb-1">{label}</div>
    <div className="text-[10px] text-zinc-400 font-mono leading-tight">{detail}</div>
  </div>
)

export default ArchitectureDiagram
