import { Metadata } from 'next'
import Link from 'next/link'
import ArchitectureDiagram from '@/components/homelab/ArchitectureDiagram'
import HomelabTOC from '@/components/homelab/HomelabTOC'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'My Homelab - 3-Node Kubernetes Cluster | Rommel Porras',
  description:
    'Self-hosted 3-node HA Kubernetes cluster with Cilium, Longhorn, GitLab CI/CD. Zero exposed ports, 99.9% uptime. Demonstrating production-grade DevOps skills.',
  openGraph: {
    title: 'My Homelab - Self-Hosted Kubernetes Infrastructure',
    description:
      '3-node K8s cluster, 20+ services, 39 releases. Zero-trust with Cloudflare Tunnel. GitLab CI/CD with 3 environments.',
    type: 'website',
  },
}

export default function HomelabPage() {
  return (
    <>
      <main id="main-content" className="min-h-screen pt-24 pb-16 bg-ghd-bg">
        <HomelabTOC />
        {/* Hero Section */}
        <section id="hero" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-6">🏠</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-ghd-text-primary">
              My{' '}
              <span className="bg-linear-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Homelab
              </span>
            </h1>
            <p className="text-xl text-ghd-text-body mb-8 max-w-3xl mx-auto">
              This website runs on a <strong>self-hosted Kubernetes cluster</strong> I designed,
              built, and maintain. It&apos;s not hosted on Vercel or AWS—it&apos;s running on
              enterprise-level hardware in my home, demonstrating real-world DevOps skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/rommelporras/homelab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ghd-text-primary text-ghd-bg rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
              <a
                href="https://status.rommelporras.com/status/homelab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Live Status
              </a>
              <a
                href="https://blog.rommelporras.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ghd-border text-ghd-text-primary rounded-lg font-medium hover:border-cyan-500 transition-colors"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <Card variant="glass" padding="sm">
              <div className="text-3xl font-bold text-violet-400 mb-1">3</div>
              <div className="text-sm text-ghd-text-muted">K8s Nodes</div>
            </Card>
            <Card variant="glass" padding="sm">
              <div className="text-3xl font-bold text-sky-400 mb-1">20+</div>
              <div className="text-sm text-ghd-text-muted">Services</div>
            </Card>
            <Card variant="glass" padding="sm">
              <div className="text-3xl font-bold text-amber-400 mb-1">39</div>
              <div className="text-sm text-ghd-text-muted">Releases</div>
            </Card>
            <Card variant="glass" padding="sm">
              <div className="text-3xl font-bold text-emerald-400 mb-1">99.9%</div>
              <div className="text-sm text-ghd-text-muted">Uptime</div>
            </Card>
            <Card variant="glass" padding="sm">
              <div className="text-3xl font-bold text-rose-400 mb-1">0</div>
              <div className="text-sm text-ghd-text-muted">Exposed Ports</div>
            </Card>
          </div>

          {/* Live Status Badge - Embedded */}
          <Card variant="glass" padding="md" className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">📡</span>
              <h3 className="text-2xl font-bold text-ghd-text-primary">
                Live Infrastructure Status
              </h3>
            </div>
            <p className="text-center text-ghd-text-muted mb-6">
              Self-hosted monitoring powered by Uptime Kuma
            </p>

            {/* Embedded Status Badges */}
            <div className="bg-linear-to-br from-ghd-surface to-ghd-elevated p-6 rounded-lg mb-4 border border-ghd-border">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Portfolio Site Status */}
                <div className="text-center bg-ghd-bg p-4 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-ghd-text-primary mb-3">Portfolio Site</p>
                  <div className="space-y-3">
                    {/* Status Badge - Custom Design */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700 rounded-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-sm font-bold text-green-400">OPERATIONAL</span>
                    </div>

                    {/* 7-Day Uptime */}
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-ghd-text-primary mb-1">99.9%</div>
                      <div className="text-xs text-ghd-text-muted">7-Day Uptime</div>
                    </div>
                  </div>
                </div>

                {/* Overall Infrastructure */}
                <div className="text-center bg-ghd-bg p-4 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-ghd-text-primary mb-3">
                    Overall Infrastructure
                  </p>
                  <div className="space-y-3">
                    {/* Status Indicator */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-700 rounded-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                      <span className="text-sm font-bold text-blue-400">ALL SYSTEMS GO</span>
                    </div>

                    {/* Services Count */}
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-ghd-text-primary mb-1">20+</div>
                      <div className="text-xs text-ghd-text-muted">Services Running</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href="https://status.rommelporras.com/status/homelab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                View Full Status Dashboard
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <div className="text-sm text-ghd-text-muted">
                Monitored 24/7 • 1-minute intervals • self-hosted
              </div>
              <p className="text-xs text-ghd-text-muted mt-3 italic text-center">
                If you&apos;re viewing this page, the infrastructure is running. For detailed uptime
                history and service-level monitoring, visit the live status dashboard above.
              </p>
            </div>
          </Card>
        </section>

        {/* Why Homelab? Section */}
        <section id="why-homelab" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
              WHY HOMELAB
            </span>
            <h2 className="text-4xl font-mono font-bold text-ghd-text-primary mb-4">
              Why Homelab?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="glass" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">📚</span>
                <h3 className="text-2xl font-bold text-ghd-text-primary">Learning</h3>
              </div>
              <p className="text-ghd-text-body mb-4">
                You can&apos;t truly understand Kubernetes by reading docs. Breaking things at 2am
                and fixing them teaches more than any certification course.
              </p>
              <div className="p-4 bg-purple-900/20 rounded-lg">
                <p className="text-sm font-semibold text-purple-300">
                  🎯 Target: CKA certification by September 2026
                </p>
              </div>
            </Card>

            <Card variant="glass" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🔒</span>
                <h3 className="text-2xl font-bold text-ghd-text-primary">Data Privacy</h3>
              </div>
              <p className="text-ghd-text-body mb-4">
                Cloud providers have access to your data. Self-hosted means photos, documents, and
                services stay on hardware you physically control.
              </p>
              <div className="p-4 bg-green-900/20 rounded-lg">
                <p className="text-sm font-semibold text-green-300">
                  ✓ No vendor lock-in, no surprise pricing changes
                </p>
              </div>
            </Card>
          </div>

          <Card variant="glass" padding="md" className="mt-6 text-center">
            <p className="text-lg text-ghd-text-body italic">
              &quot;If a company can host it on AWS, I can host it on three mini PCs in my closet —
              for a fraction of the cost and 100% of the learning.&quot;
            </p>
          </Card>
        </section>

        {/* Performance Metrics */}
        <section id="performance" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
              PERFORMANCE
            </span>
            <h2 className="text-4xl font-mono font-bold text-ghd-text-primary mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-ghd-text-muted max-w-3xl mx-auto">
              Real-world performance benchmarks from production deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Lighthouse Scores */}
            <Card
              variant="glass"
              padding="lg"
              className="bg-linear-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl font-bold text-ghd-text-primary">Lighthouse Scores</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-ghd-surface rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-400">98</span>
                    </div>
                    <div>
                      <div className="font-semibold text-ghd-text-primary">Performance</div>
                      <div className="text-xs text-ghd-text-muted">
                        First Contentful Paint: 0.9s
                      </div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold">✅</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-ghd-surface rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-400">100</span>
                    </div>
                    <div>
                      <div className="font-semibold text-ghd-text-primary">Accessibility</div>
                      <div className="text-xs text-ghd-text-muted">WCAG 2.1 AA compliant</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold">✅</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-ghd-surface rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-400">100</span>
                    </div>
                    <div>
                      <div className="font-semibold text-ghd-text-primary">Best Practices</div>
                      <div className="text-xs text-ghd-text-muted">Security & standards</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold">✅</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-ghd-surface rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-400">100</span>
                    </div>
                    <div>
                      <div className="font-semibold text-ghd-text-primary">SEO</div>
                      <div className="text-xs text-ghd-text-muted">Search engine optimized</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold">✅</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-900/30 rounded-lg">
                <p className="text-sm text-green-300 font-semibold text-center">
                  ⭐ Average Score: 99.5 / 100
                </p>
              </div>
            </Card>

            {/* Core Web Vitals */}
            <Card
              variant="glass"
              padding="lg"
              className="bg-linear-to-br from-blue-900/20 to-indigo-900/20 border-2 border-blue-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📊</span>
                <h3 className="text-2xl font-bold text-ghd-text-primary">Core Web Vitals</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-ghd-text-body">
                      Largest Contentful Paint (LCP)
                    </span>
                    <span className="text-lg font-bold text-green-400">1.2s</span>
                  </div>
                  <div className="w-full bg-ghd-border rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '52%' }}></div>
                  </div>
                  <p className="text-xs text-ghd-text-muted mt-1">Target: &lt; 2.5s ✅ Good</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-ghd-text-body">
                      First Input Delay (FID)
                    </span>
                    <span className="text-lg font-bold text-green-400">8ms</span>
                  </div>
                  <div className="w-full bg-ghd-border rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                  <p className="text-xs text-ghd-text-muted mt-1">Target: &lt; 100ms ✅ Good</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-ghd-text-body">
                      Cumulative Layout Shift (CLS)
                    </span>
                    <span className="text-lg font-bold text-green-400">0.02</span>
                  </div>
                  <div className="w-full bg-ghd-border rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <p className="text-xs text-ghd-text-muted mt-1">Target: &lt; 0.1 ✅ Good</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-ghd-text-body">
                      Time to First Byte (TTFB)
                    </span>
                    <span className="text-lg font-bold text-green-400">180ms</span>
                  </div>
                  <div className="w-full bg-ghd-border rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                  <p className="text-xs text-ghd-text-muted mt-1">Target: &lt; 600ms ✅ Good</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-300 text-center">
                  <span className="font-semibold">
                    All metrics pass Google&apos;s &quot;Good&quot; thresholds
                  </span>
                  <br />
                  <span className="text-xs">Measured on Cloudflare&apos;s global CDN network</span>
                </p>
              </div>
            </Card>
          </div>

          {/* Additional Performance Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card variant="glass" padding="md" className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">146 kB</div>
              <div className="text-sm text-ghd-text-muted font-semibold">First Load JS</div>
              <div className="text-xs text-ghd-text-muted mt-1">Next.js optimized bundle</div>
            </Card>

            <Card variant="glass" padding="md" className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">&lt; 1s</div>
              <div className="text-sm text-ghd-text-muted font-semibold">Page Load Time</div>
              <div className="text-xs text-ghd-text-muted mt-1">With Cloudflare CDN caching</div>
            </Card>

            <Card variant="glass" padding="md" className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-sm text-ghd-text-muted font-semibold">Static Pages</div>
              <div className="text-xs text-ghd-text-muted mt-1">Home + Homelab</div>
            </Card>
          </div>
        </section>

        {/* Architecture Overview */}
        <section id="architecture" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <span className="block text-center font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
            ARCHITECTURE
          </span>
          <h2 className="text-4xl font-mono font-bold mb-8 text-ghd-text-primary text-center">
            Architecture Overview
          </h2>

          {/* Network Flow Diagram Placeholder */}
          <Card variant="glass" padding="lg" className="mb-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-ghd-text-primary mb-2">Network Flow</h3>
              <p className="text-ghd-text-muted mb-6">From your browser to my homelab</p>
            </div>

            {/* Modern Architecture Diagram */}
            <ArchitectureDiagram />
          </Card>
        </section>

        {/* Security Layers Section */}
        <section id="security" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
              SECURITY
            </span>
            <h2 className="text-4xl font-mono font-bold text-ghd-text-primary mb-4">
              Defense in Depth
            </h2>
            <p className="text-xl text-ghd-text-muted">
              Three layers of security protecting the infrastructure
            </p>
          </div>

          <div className="space-y-4">
            {/* Layer 1: Network Perimeter */}
            <Card variant="glass" padding="lg" className="border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌐</span>
                <div>
                  <h3 className="text-xl font-bold text-ghd-text-primary">
                    Layer 1: Network Perimeter
                  </h3>
                  <p className="text-sm text-ghd-text-muted">Cloudflare Edge Protection</p>
                </div>
              </div>
              <ul className="space-y-2 text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>DDoS protection and WAF at Cloudflare edge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Zero exposed ports — all traffic through encrypted Cloudflare Tunnel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Zero-trust access model (no direct connections)</span>
                </li>
              </ul>
            </Card>

            {/* Layer 2: VLAN Segmentation */}
            <Card variant="glass" padding="lg" className="border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔥</span>
                <div>
                  <h3 className="text-xl font-bold text-ghd-text-primary">
                    Layer 2: VLAN Segmentation
                  </h3>
                  <p className="text-sm text-ghd-text-muted">OPNsense Firewall</p>
                </div>
              </div>
              <ul className="space-y-2 text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>8 VLANs with strict inter-VLAN firewall rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>IoT and Guest networks isolated from server VLAN</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Stateful inspection with IDS/IPS (Suricata)</span>
                </li>
              </ul>
            </Card>

            {/* Layer 3: Cilium Micro-Segmentation */}
            <Card variant="glass" padding="lg" className="border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🐝</span>
                <div>
                  <h3 className="text-xl font-bold text-ghd-text-primary">
                    Layer 3: Cilium Micro-Segmentation
                  </h3>
                  <p className="text-sm text-ghd-text-muted">eBPF Network Policies</p>
                </div>
              </div>
              <ul className="space-y-2 text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>CiliumNetworkPolicy controls pod-to-pod traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>L3/L4/L7 filtering (IP, port, HTTP path)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>eBPF enforcement at kernel level (faster than iptables)</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* CI/CD Pipeline Section */}
        <section id="cicd" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
              CI/CD PIPELINE
            </span>
            <h2 className="text-4xl font-mono font-bold text-ghd-text-primary mb-4">
              CI/CD Pipeline
            </h2>
            <p className="text-xl text-ghd-text-muted">
              GitFlow branching with multi-environment deployment
            </p>
          </div>

          {/* Pipeline Flow Diagram */}
          <Card variant="glass" padding="lg" className="mb-6">
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm font-mono">
              <span className="px-3 py-1 bg-ghd-border text-ghd-text-body rounded border border-ghd-border">
                feature/*
              </span>
              <span className="text-ghd-text-muted">→</span>
              <span className="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded border border-yellow-700">
                develop
              </span>
              <span className="text-ghd-text-muted">→</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded border border-blue-700">
                [build]
              </span>
              <span className="text-ghd-text-muted">→</span>
              <span className="px-3 py-1 bg-green-900/50 text-green-200 rounded border border-green-700">
                deploy:dev
              </span>
              <span className="text-ghd-text-muted">→</span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded border border-purple-700">
                deploy:staging
              </span>
              <span className="text-ghd-text-muted">→</span>
              <span className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded border border-orange-700">
                main
              </span>
              <span className="text-ghd-text-muted">→</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded font-semibold">
                deploy:prod
              </span>
            </div>
          </Card>

          {/* Environment Table */}
          <Card variant="glass" padding="md" className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-ghd-border">
                  <th className="pb-3 pr-4 font-bold text-ghd-text-primary">Environment</th>
                  <th className="pb-3 pr-4 font-bold text-ghd-text-primary">Namespace</th>
                  <th className="pb-3 pr-4 font-bold text-ghd-text-primary">Trigger</th>
                  <th className="pb-3 font-bold text-ghd-text-primary">URL</th>
                </tr>
              </thead>
              <tbody className="text-ghd-text-body">
                <tr className="border-b border-ghd-border">
                  <td className="py-3 pr-4">
                    <span className="px-2 py-1 bg-green-900/30 text-green-300 rounded text-sm">
                      Dev
                    </span>
                  </td>
                  <td className="py-3 pr-4 font-mono text-sm">portfolio-dev</td>
                  <td className="py-3 pr-4">Push to develop</td>
                  <td className="py-3 text-gray-500">(internal only)</td>
                </tr>
                <tr className="border-b border-ghd-border">
                  <td className="py-3 pr-4">
                    <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-sm">
                      Staging
                    </span>
                  </td>
                  <td className="py-3 pr-4 font-mono text-sm">portfolio-staging</td>
                  <td className="py-3 pr-4">Manual trigger</td>
                  <td className="py-3">
                    <a
                      href="https://beta.rommelporras.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline"
                    >
                      beta.rommelporras.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">
                    <span className="px-2 py-1 bg-red-900/30 text-red-300 rounded text-sm">
                      Prod
                    </span>
                  </td>
                  <td className="py-3 pr-4 font-mono text-sm">portfolio-prod</td>
                  <td className="py-3 pr-4">Merge to main</td>
                  <td className="py-3">
                    <a
                      href="https://www.rommelporras.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline"
                    >
                      www.rommelporras.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </section>

        {/* Hardware Stack */}
        <section id="hardware" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
              HARDWARE
            </span>
            <h2 className="text-4xl font-mono font-bold text-ghd-text-primary mb-4">
              Hardware Stack
            </h2>
          </div>

          {/* K8s Nodes - Featured */}
          <Card variant="glass" padding="lg" className="mb-6 border-2 border-purple-700">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">☸️</span>
              <div>
                <h3 className="text-2xl font-bold text-ghd-text-primary">Kubernetes Nodes (x3)</h3>
                <p className="text-sm text-ghd-text-muted">Lenovo ThinkCentre M80q</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-ghd-surface rounded-lg">
                <div className="text-2xl font-bold text-purple-400">i5-10400T</div>
                <div className="text-sm text-ghd-text-muted">6 cores / 12 threads</div>
              </div>
              <div className="text-center p-4 bg-ghd-surface rounded-lg">
                <div className="text-2xl font-bold text-blue-400">16GB</div>
                <div className="text-sm text-ghd-text-muted">DDR4 RAM</div>
              </div>
              <div className="text-center p-4 bg-ghd-surface rounded-lg">
                <div className="text-2xl font-bold text-green-400">512GB</div>
                <div className="text-sm text-ghd-text-muted">NVMe SSD</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-ghd-text-muted text-center">
              <strong>Why M80q?</strong> Enterprise-grade reliability, uniform cores (important for
              K8s scheduling), low power (~35W TDP), excellent value on the used market.
            </p>
          </Card>

          {/* Other Hardware Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card variant="glass" padding="md">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-bold text-ghd-text-primary">Topton N100</h4>
              <p className="text-sm text-ghd-text-muted">Intel N100, 16GB RAM</p>
              <p className="text-xs text-gray-500 mt-2">Proxmox + OPNsense</p>
            </Card>
            <Card variant="glass" padding="md">
              <div className="text-2xl mb-2">💾</div>
              <h4 className="font-bold text-ghd-text-primary">Dell OptiPlex 3090</h4>
              <p className="text-sm text-ghd-text-muted">i5-10500T, 32GB RAM</p>
              <p className="text-xs text-gray-500 mt-2">Proxmox + OMV NAS</p>
            </Card>
            <Card variant="glass" padding="md">
              <div className="text-2xl mb-2">📡</div>
              <h4 className="font-bold text-ghd-text-primary">LIANGUO LG-SG5T1</h4>
              <p className="text-sm text-ghd-text-muted">5x 2.5GbE + 10G SFP+</p>
              <p className="text-xs text-gray-500 mt-2">Managed, VLAN support</p>
            </Card>
            <Card variant="glass" padding="md">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-bold text-ghd-text-primary">CyberPower UPS</h4>
              <p className="text-sm text-ghd-text-muted">1600VA / 1000W</p>
              <p className="text-xs text-gray-500 mt-2">~45 min runtime</p>
            </Card>
          </div>
        </section>

        {/* Services Running */}
        <section id="services" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
              SERVICES
            </span>
            <h2 className="text-4xl font-mono font-bold text-ghd-text-primary mb-4">
              Services Running
            </h2>
            <p className="text-xl text-ghd-text-muted">
              20+ services across 18 namespaces — all real, all running
            </p>
          </div>

          {/* Platform Infrastructure */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">⚙️</span> Platform Infrastructure
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: 'Kubernetes',
                  version: 'v1.35.0',
                  desc: '3-node HA control plane with stacked etcd',
                },
                { name: 'Cilium', version: 'v1.18.6', desc: 'eBPF-based CNI replacing kube-proxy' },
                {
                  name: 'Longhorn',
                  version: 'v1.10.1',
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
                  version: 'v0.8.0',
                  desc: 'Resource metrics for HPA and kubectl top',
                },
              ].map((svc) => (
                <Card key={svc.name} variant="glass" padding="sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-ghd-text-primary">{svc.name}</span>
                    <span className="text-xs font-mono text-violet-400">{svc.version}</span>
                  </div>
                  <p className="text-sm text-ghd-text-muted">{svc.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Networking & Access */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">🌐</span> Networking & Access
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: 'Cloudflare Tunnel',
                  version: '2026.1.1',
                  desc: 'HA tunnel (2 replicas) — zero exposed ports',
                },
                {
                  name: 'Tailscale Operator',
                  version: 'v1.94.1',
                  desc: 'WireGuard subnet router for private remote access',
                },
                {
                  name: 'AdGuard Home',
                  version: 'v0.107.71',
                  desc: 'Primary DNS server for all VLANs (10.10.30.53)',
                },
              ].map((svc) => (
                <Card key={svc.name} variant="glass" padding="sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-ghd-text-primary">{svc.name}</span>
                    <span className="text-xs font-mono text-cyan-400">{svc.version}</span>
                  </div>
                  <p className="text-sm text-ghd-text-muted">{svc.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Observability Stack */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">📊</span> Observability Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: 'Prometheus',
                  version: 'v0.88.0',
                  desc: 'Metrics collection with 177+ default alerting rules',
                },
                {
                  name: 'Grafana',
                  version: 'kube-prometheus-stack',
                  desc: 'Dashboards for every service + infrastructure',
                },
                { name: 'Loki', version: 'v3.6.3', desc: 'Log aggregation (paired with Grafana)' },
                {
                  name: 'Alloy',
                  version: 'v1.12.2',
                  desc: 'Log collector (Grafana agent, replaces Promtail)',
                },
                {
                  name: 'Alertmanager',
                  version: 'v0.30.1',
                  desc: 'Alert routing to Discord + Email',
                },
                {
                  name: 'Blackbox Exporter',
                  version: 'v0.28.0',
                  desc: 'HTTP/TCP probes for endpoint monitoring',
                },
                {
                  name: 'Uptime Kuma',
                  version: 'v2.0.2',
                  desc: 'Public status page at status.rommelporras.com',
                },
                {
                  name: 'NUT Exporter',
                  version: '3.1.1',
                  desc: 'UPS monitoring (CyberPower CP1500)',
                },
                {
                  name: 'OTel Collector',
                  version: 'custom',
                  desc: 'OpenTelemetry data collection (Claude Code metrics)',
                },
              ].map((svc) => (
                <Card key={svc.name} variant="glass" padding="sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-ghd-text-primary">{svc.name}</span>
                    <span className="text-xs font-mono text-emerald-400">{svc.version}</span>
                  </div>
                  <p className="text-sm text-ghd-text-muted">{svc.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CI/CD */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">🦊</span> CI/CD
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
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
              ].map((svc) => (
                <Card key={svc.name} variant="glass" padding="sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-ghd-text-primary">{svc.name}</span>
                    <span className="text-xs font-mono text-orange-400">{svc.version}</span>
                  </div>
                  <p className="text-sm text-ghd-text-muted">{svc.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">🚀</span> Applications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(() => {
                const apps: { name: string; version: string; desc: string; url?: string }[] = [
                  {
                    name: 'Ghost Blog',
                    version: '6.14.0',
                    desc: 'Blog with MySQL + Tinybird analytics',
                    url: 'blog.rommelporras.com',
                  },
                  {
                    name: 'Ghost Blog (dev)',
                    version: '6.14.0',
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
                    version: '0.15.6',
                    desc: 'Local LLM inference (CPU): qwen3, moondream, gemma3',
                  },
                  {
                    name: 'Karakeep',
                    version: '0.30.0',
                    desc: 'AI bookmark manager (Chrome crawler + Meilisearch + Ollama)',
                  },
                  { name: 'Homepage', version: 'v1.9.0', desc: 'Internal dashboard (2 replicas)' },
                  {
                    name: 'MySpeed',
                    version: '1.0.9',
                    desc: 'Internet speed test tracker (historical)',
                  },
                  {
                    name: 'Firefox Browser',
                    version: 'latest',
                    desc: 'Persistent browser via KasmVNC',
                  },
                ]
                return apps.map((svc) => (
                  <Card key={svc.name} variant="glass" padding="sm">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-ghd-text-primary">{svc.name}</span>
                      <span className="text-xs font-mono text-sky-400">{svc.version}</span>
                    </div>
                    <p className="text-sm text-ghd-text-muted">{svc.desc}</p>
                    {svc.url && (
                      <a
                        href={`https://${svc.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple-400 hover:underline mt-1 inline-block"
                      >
                        {svc.url}
                      </a>
                    )}
                  </Card>
                ))
              })()}
            </div>
          </div>

          {/* Databases */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">💾</span> Databases
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'MySQL', version: '8.4.8', desc: 'Ghost Blog (dev + prod)' },
                { name: 'PostgreSQL', version: '18-alpine', desc: 'Invoicetron' },
                { name: 'Meilisearch', version: 'v1.13.3', desc: 'Karakeep (full-text search)' },
                { name: 'SQLite', version: 'embedded', desc: 'Uptime Kuma, Karakeep' },
              ].map((db) => (
                <Card key={db.name} variant="glass" padding="sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-ghd-text-primary">{db.name}</span>
                    <span className="text-xs font-mono text-amber-400">{db.version}</span>
                  </div>
                  <p className="text-sm text-ghd-text-muted">{db.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Infrastructure (Non-K8s) */}
          <div>
            <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
              <span className="text-2xl">🖥️</span> Additional Infrastructure
            </h3>
            <p className="text-sm text-ghd-text-muted mb-4">
              These services run outside Kubernetes but are part of the homelab ecosystem.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Proxmox VE', version: '9.1.4', desc: 'Hypervisor on Dell 3090' },
                { name: 'OPNsense', version: '25.7.5', desc: 'Firewall / router (Proxmox VM)' },
                { name: 'OpenMediaVault', version: '7.6.0', desc: 'NAS / NFS storage' },
                { name: 'Immich', version: 'latest', desc: 'Photo management' },
              ].map((svc) => (
                <Card key={svc.name} variant="glass" padding="sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-ghd-text-primary">{svc.name}</span>
                    <span className="text-xs font-mono text-slate-400">{svc.version}</span>
                  </div>
                  <p className="text-sm text-ghd-text-muted">{svc.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Release Timeline */}
        <section id="timeline" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
              TIMELINE
            </span>
            <h2 className="text-4xl font-mono font-bold text-ghd-text-primary mb-4">
              Release Timeline
            </h2>
            <p className="text-xl text-ghd-text-muted mb-6">
              39 releases in ~1 month — from empty repo to full production stack
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Card variant="glass" padding="sm" className="inline-flex">
                <span className="text-2xl font-bold text-violet-400 mr-2">39</span>
                <span className="text-sm text-ghd-text-muted self-center">Total Releases</span>
              </Card>
              <Card variant="glass" padding="sm" className="inline-flex">
                <span className="text-2xl font-bold text-sky-400 mr-2">~1 mo</span>
                <span className="text-sm text-ghd-text-muted self-center">Time Span</span>
              </Card>
              <Card variant="glass" padding="sm" className="inline-flex">
                <span className="text-2xl font-bold text-emerald-400 mr-2">15</span>
                <span className="text-sm text-ghd-text-muted self-center">Major Milestones</span>
              </Card>
            </div>
          </div>

          {/* Phase Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs">
            {[
              { phase: 'Foundation', color: 'bg-violet-500' },
              { phase: 'Infrastructure', color: 'bg-slate-500' },
              { phase: 'Monitoring', color: 'bg-emerald-500' },
              { phase: 'Networking', color: 'bg-cyan-500' },
              { phase: 'CI/CD', color: 'bg-orange-500' },
              { phase: 'Applications', color: 'bg-amber-500' },
              { phase: 'AI/ML', color: 'bg-rose-500' },
            ].map(({ phase, color }) => (
              <span key={phase} className="flex items-center gap-1.5 text-ghd-text-muted">
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${color}`} />
                {phase}
              </span>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-ghd-border -translate-x-1/2" />

            <div className="space-y-6">
              {(() => {
                const phaseColors: Record<string, { dot: string; text: string }> = {
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
                }

                const releases = [
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
                ]

                return releases.map((release, index) => {
                  const colors = phaseColors[release.phase] || phaseColors['Foundation']
                  return (
                    <div
                      key={release.version}
                      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      <div
                        className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full ${colors.dot} border-2 border-ghd-bg -translate-x-1/2 z-10`}
                      />
                      <div
                        className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
                      >
                        <Card variant="glass" padding="sm">
                          <div
                            className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                          >
                            <span className={`font-mono text-sm font-bold ${colors.text}`}>
                              {release.version}
                            </span>
                            <span className="text-xs text-ghd-text-muted">
                              {release.date}, 2026
                            </span>
                          </div>
                          <div className="font-semibold text-ghd-text-primary">{release.title}</div>
                          <span className={`text-xs ${colors.text}`}>{release.phase}</span>
                        </Card>
                      </div>
                    </div>
                  )
                })
              })()}
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/rommelporras/homelab/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
            >
              View all releases on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Network Architecture - VLAN Table */}
        <section id="network" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <span className="block text-center font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
            NETWORK
          </span>
          <h2 className="text-4xl font-mono font-bold mb-8 text-ghd-text-primary text-center">
            Network Segmentation
          </h2>
          <p className="text-center text-ghd-text-muted mb-8 max-w-3xl mx-auto">
            Enterprise-level network design with <strong>8 isolated VLANs</strong> for security,
            performance, and separation of concerns. Each VLAN has custom firewall rules enforcing
            the principle of least privilege.
          </p>

          <Card variant="glass" padding="md" className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-ghd-border">
                  <th className="pb-3 pr-4 font-bold text-ghd-text-primary">VLAN</th>
                  <th className="pb-3 pr-4 font-bold text-ghd-text-primary">Name</th>
                  <th className="pb-3 pr-4 font-bold text-ghd-text-primary">Subnet</th>
                  <th className="pb-3 pr-4 font-bold text-ghd-text-primary">Purpose</th>
                  <th className="pb-3 font-bold text-ghd-text-primary">Security</th>
                </tr>
              </thead>
              <tbody className="text-ghd-text-body">
                <tr className="border-b border-ghd-border">
                  <td className="py-3 pr-4 font-mono text-sm">10</td>
                  <td className="py-3 pr-4 font-semibold">LAN</td>
                  <td className="py-3 pr-4 font-mono text-sm">10.10.10.0/24</td>
                  <td className="py-3 pr-4">Trusted wired devices</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded bg-green-900/30 text-green-300">
                      High (Full Access)
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-ghd-border">
                  <td className="py-3 pr-4 font-mono text-sm">20</td>
                  <td className="py-3 pr-4 font-semibold">TRUSTED_WIFI</td>
                  <td className="py-3 pr-4 font-mono text-sm">10.10.20.0/24</td>
                  <td className="py-3 pr-4">Trusted wireless (SSID: Mugiwara)</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded bg-green-900/30 text-green-300">
                      High (Full Access)
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-ghd-border">
                  <td className="py-3 pr-4 font-mono text-sm">30</td>
                  <td className="py-3 pr-4 font-semibold">SERVERS</td>
                  <td className="py-3 pr-4 font-mono text-sm">10.10.30.0/24</td>
                  <td className="py-3 pr-4">Internal VMs and LXCs</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded bg-green-900/30 text-green-300">
                      High (Backend)
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-ghd-border">
                  <td className="py-3 pr-4 font-mono text-sm">40</td>
                  <td className="py-3 pr-4 font-semibold">IOT</td>
                  <td className="py-3 pr-4 font-mono text-sm">10.10.40.0/24</td>
                  <td className="py-3 pr-4">IoT devices (SSID: Mugiwara-IOT)</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded bg-red-900/30 text-red-300">
                      Low (Internet-Only)
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-ghd-border">
                  <td className="py-3 pr-4 font-mono text-sm">50</td>
                  <td className="py-3 pr-4 font-semibold">DMZ</td>
                  <td className="py-3 pr-4 font-mono text-sm">10.10.50.0/24</td>
                  <td className="py-3 pr-4">Public-facing services (Cloudflare Tunnel)</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded bg-yellow-900/30 text-yellow-300">
                      Medium (DMZ)
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-ghd-border">
                  <td className="py-3 pr-4 font-mono text-sm">60</td>
                  <td className="py-3 pr-4 font-semibold">GUEST</td>
                  <td className="py-3 pr-4 font-mono text-sm">192.168.0.0/24</td>
                  <td className="py-3 pr-4">Guest devices (SSID: Mugiwara-Guest)</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded bg-red-900/30 text-red-300">
                      Low (Internet-Only)
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-ghd-border">
                  <td className="py-3 pr-4 font-mono text-sm">69</td>
                  <td className="py-3 pr-4 font-semibold">MGMT</td>
                  <td className="py-3 pr-4 font-mono text-sm">10.10.69.0/24</td>
                  <td className="py-3 pr-4">Proxmox host management</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded bg-purple-900/30 text-purple-300">
                      Critical (Admin-Only)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-mono text-sm">70</td>
                  <td className="py-3 pr-4 font-semibold">AP_TRUNK</td>
                  <td className="py-3 pr-4 font-mono text-sm">10.10.70.0/24</td>
                  <td className="py-3 pr-4">OpenWRT AP management</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded bg-yellow-900/30 text-yellow-300">
                      Medium (AP Config)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>

          <Card variant="glass" padding="sm" className="mt-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-ghd-text-primary mb-1">Defense in Depth</div>
                <div className="text-sm text-ghd-text-body">
                  Compromised IoT or Guest devices cannot access internal services (SERVERS VLAN) or
                  management interfaces (MGMT VLAN). Firewall rules enforce strict inter-VLAN
                  policies.
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Technology Stack */}
        <section id="tech-stack" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <span className="block text-center font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
            TECH STACK
          </span>
          <h2 className="text-4xl font-mono font-bold mb-8 text-ghd-text-primary text-center">
            Technology Stack
          </h2>
          <p className="text-center text-ghd-text-muted mb-8 max-w-3xl mx-auto">
            A modern DevOps stack running 24/7, organized by architectural layer.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Layer 1: Hypervisor */}
            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">📦</span>
                Layer 1: Hypervisor
              </h3>
              <ul className="space-y-2 text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 font-bold">•</span>
                  <span>
                    <strong>Proxmox VE 9.1.4</strong> - Type-1 bare-metal hypervisor
                  </span>
                </li>
                <li className="pl-4 text-sm text-ghd-text-muted">
                  KVM for VMs, LXC for containers, web-based management
                </li>
              </ul>
            </Card>

            {/* Layer 2: Networking & Firewall */}
            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                Layer 2: Firewall & Routing
              </h3>
              <ul className="space-y-2 text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>
                    <strong>OPNsense 25.7.5</strong> - Enterprise firewall/router
                  </span>
                </li>
                <li className="pl-4 text-sm text-ghd-text-muted">
                  Dual WAN, 8 VLANs, IDS/IPS (Suricata), WireGuard VPN
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>
                    <strong>OpenWRT</strong> - Custom WiFi firmware
                  </span>
                </li>
              </ul>
            </Card>

            {/* Layer 3: DNS & Ad Blocking */}
            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Layer 3: DNS & Ad Blocking
              </h3>
              <ul className="space-y-2 text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>
                    <strong>AdGuard Home</strong> - Network-wide ad blocking
                  </span>
                </li>
                <li className="pl-4 text-sm text-ghd-text-muted">
                  DoH/DoT encryption, local DNS rewrites, DNSSEC validation
                </li>
              </ul>
            </Card>

            {/* Layer 4: Reverse Proxy */}
            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">🔀</span>
                Layer 4: Reverse Proxy
              </h3>
              <ul className="space-y-2 text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>
                    <strong>Cilium Gateway API</strong> - Kubernetes-native ingress
                  </span>
                </li>
                <li className="pl-4 text-sm text-ghd-text-muted">
                  cert-manager + Let&apos;s Encrypt DNS-01, wildcard certs (*.k8s.rommelporras.com)
                </li>
              </ul>
            </Card>

            {/* Layer 5: Tunneling & CDN */}
            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">🚇</span>
                Layer 5: Tunneling & CDN
              </h3>
              <ul className="space-y-2 text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>
                    <strong>Cloudflare Tunnel</strong> - Zero-trust tunnel (cloudflared)
                  </span>
                </li>
                <li className="pl-4 text-sm text-ghd-text-muted">
                  Global CDN (200+ PoPs), DDoS protection, WAF, automatic SSL
                </li>
              </ul>
            </Card>

            {/* Layer 6: Applications */}
            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">☸️</span>
                Layer 6: Applications
              </h3>
              <ul className="space-y-2 text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>
                    <strong>Kubernetes-managed apps</strong> - Portfolio, Ghost blog, GitLab CI/CD,
                    Homepage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>
                    <strong>Monitoring & Status</strong> - Uptime Kuma (public status page),
                    Cloudflare Tunnel (HA)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>
                    <strong>DNS</strong> - AdGuard Home (primary for all VLANs)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>
                    <strong>NAS services</strong> - Immich, OMV (on Dell 3090, running on Proxmox)
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* The Meta-Project */}
        <section id="meta-project" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <Card variant="glass" padding="lg">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-4xl font-mono font-bold text-ghd-text-primary mb-4">
                The Meta-Project
              </h2>
              <p className="text-xl text-ghd-text-muted">You&apos;re looking at it right now.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-ghd-text-body mb-6">
                This portfolio website (<strong>rommelporras.com</strong>) is not hosted on Vercel,
                Netlify, or AWS. It runs on the exact infrastructure described above.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 bg-violet-900/30 rounded-lg flex items-center justify-center font-bold text-violet-400">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-ghd-text-primary">Development</div>
                    <div className="text-sm text-ghd-text-muted">
                      Local WSL2 environment → git push to develop branch
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 bg-sky-900/30 rounded-lg flex items-center justify-center font-bold text-sky-400">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-ghd-text-primary">CI Pipeline</div>
                    <div className="text-sm text-ghd-text-muted">
                      GitLab Runner builds Docker image with DinD, pushes to registry
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 bg-emerald-900/30 rounded-lg flex items-center justify-center font-bold text-emerald-400">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-ghd-text-primary">Deploy</div>
                    <div className="text-sm text-ghd-text-muted">
                      Automated{' '}
                      <code className="px-1 py-0.5 bg-ghd-border rounded text-xs">
                        kubectl apply
                      </code>{' '}
                      to K8s namespace (dev/staging/prod)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 bg-orange-900/30 rounded-lg flex items-center justify-center font-bold text-orange-400">
                    4
                  </div>
                  <div>
                    <div className="font-bold text-ghd-text-primary">Serve</div>
                    <div className="text-sm text-ghd-text-muted">
                      nginx pod serves static files, Cilium Gateway API handles routing
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 bg-cyan-900/30 rounded-lg flex items-center justify-center font-bold text-cyan-400">
                    5
                  </div>
                  <div>
                    <div className="font-bold text-ghd-text-primary">Expose</div>
                    <div className="text-sm text-ghd-text-muted">
                      Cloudflare Tunnel → rommelporras.com (SSL, CDN, DDoS protection)
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-linear-to-r from-violet-900/20 to-sky-900/20 rounded-lg">
                <div>
                  <div className="text-2xl font-bold text-violet-400">~3 min</div>
                  <div className="text-sm text-ghd-text-muted">Automated Pipeline Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">$0/mo</div>
                  <div className="text-sm text-ghd-text-muted">Hosting Cost</div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Skills Demonstrated */}
        <section id="skills" className="scroll-mt-24 max-w-6xl mx-auto px-6 mb-16">
          <span className="block text-center font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
            SKILLS
          </span>
          <h2 className="text-4xl font-mono font-bold mb-8 text-ghd-text-primary text-center">
            Skills Demonstrated
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">☸️</span>
                Kubernetes / Container Orchestration
              </h3>
              <ul className="space-y-2 text-sm text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-violet-400">✓</span>
                  <span>kubeadm cluster bootstrap (HA, stacked etcd)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400">✓</span>
                  <span>Cilium CNI with eBPF kube-proxy replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400">✓</span>
                  <span>Gateway API (replacing deprecated Ingress)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400">✓</span>
                  <span>Longhorn distributed storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400">✓</span>
                  <span>RBAC and ServiceAccount security</span>
                </li>
              </ul>
            </Card>

            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                DevOps / SRE
              </h3>
              <ul className="space-y-2 text-sm text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">✓</span>
                  <span>GitFlow branching with environment promotion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">✓</span>
                  <span>Multi-environment CI/CD (dev → staging → prod)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">✓</span>
                  <span>Docker multi-stage builds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">✓</span>
                  <span>Kubernetes rolling deployments</span>
                </li>
              </ul>
            </Card>

            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Observability
              </h3>
              <ul className="space-y-2 text-sm text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Prometheus metrics and alerting rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Grafana dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Loki centralized logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Multi-channel alerting (Discord + Email)</span>
                </li>
              </ul>
            </Card>

            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Networking
              </h3>
              <ul className="space-y-2 text-sm text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>VLAN segmentation (8 VLANs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Cilium NetworkPolicy (L3/L4/L7)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Cloudflare Tunnel (zero-trust)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>TLS automation (cert-manager + Let&apos;s Encrypt)</span>
                </li>
              </ul>
            </Card>

            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                High Availability
              </h3>
              <ul className="space-y-2 text-sm text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>3-node control plane with kube-vip VIP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>etcd quorum (3-node)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Longhorn 2x replication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>UPS with graceful shutdown</span>
                </li>
              </ul>
            </Card>

            <Card variant="glass" padding="md">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                Security
              </h3>
              <ul className="space-y-2 text-sm text-ghd-text-body">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">✓</span>
                  <span>Zero exposed ports (Cloudflare Tunnel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">✓</span>
                  <span>CiliumNetworkPolicy for egress control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">✓</span>
                  <span>Environment-scoped RBAC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">✓</span>
                  <span>Pod Security Standards enforcement</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Cost Comparison */}
        <section id="cost" className="scroll-mt-24 max-w-6xl mx-auto px-6 mt-20">
          <div className="text-center mb-8">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
              COST COMPARISON
            </span>
            <h2 className="text-4xl font-mono font-bold text-ghd-text-primary mb-4">
              Cost Comparison
            </h2>
            <p className="text-xl text-ghd-text-muted">
              Enterprise infrastructure at homelab prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AWS Column */}
            <Card variant="glass" padding="lg" className="border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4">☁️ AWS Equivalent</h3>
              <p className="text-xs text-ghd-text-muted mb-3 font-mono">
                Region: ap-southeast-1 (Singapore)
              </p>
              <ul className="space-y-2 text-ghd-text-body text-sm">
                <li className="flex justify-between">
                  <span>3x t3.xlarge EC2</span>
                  <span>$463/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>1.5TB EBS gp3</span>
                  <span>$144/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>2TB S3 Standard</span>
                  <span>$50/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>ALB + ACM</span>
                  <span>$21/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>EKS Control Plane</span>
                  <span>$73/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>ECR</span>
                  <span>$1/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>CodePipeline + CodeBuild</span>
                  <span>$6/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>CloudWatch</span>
                  <span>$8/mo</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-ghd-border">
                <div className="flex justify-between text-xl font-bold text-orange-400">
                  <span>Total</span>
                  <span>~$766/mo</span>
                </div>
              </div>
            </Card>

            {/* Homelab Column */}
            <Card variant="glass" padding="lg" className="border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-ghd-text-primary mb-4">🏠 Homelab</h3>
              <ul className="space-y-2 text-ghd-text-body text-sm">
                <li className="flex justify-between">
                  <span>Electricity (~100W)</span>
                  <span>~$17/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>Cloudflare (free tier)</span>
                  <span>$0/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>Tailscale (free personal)</span>
                  <span>$0/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>Domain</span>
                  <span>~$1/mo</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-ghd-text-muted">
                ~100W covers all devices: 3 K8s nodes, Dell 3090 NAS, firewall, UPS, switch, 2 WiFi
                APs, 2 modems
              </p>
              <div className="mt-4 pt-4 border-t border-ghd-border">
                <div className="flex justify-between text-xl font-bold text-green-400">
                  <span>Total</span>
                  <span>~$17/mo</span>
                </div>
              </div>
            </Card>
          </div>

          {/* ROI Highlights */}
          <Card variant="glass" padding="md" className="mt-6">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-slate-400">$1,028</div>
                <div className="text-sm text-ghd-text-muted">Hardware Investment</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sky-400">~1.4 months</div>
                <div className="text-sm text-ghd-text-muted">Break-even</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">$749/mo</div>
                <div className="text-sm text-ghd-text-muted">Monthly Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">$8,988/yr</div>
                <div className="text-sm text-ghd-text-muted">Annual Savings</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-ghd-border">
              <p className="text-xs text-ghd-text-muted text-center">
                Hardware: 3x Lenovo M80q (~$310) + Dell 3090 NAS (~$302) + Topton N100 firewall
                (~$164) + CyberPower UPS (~$149) + TP-Link Archer A6 (~$34) + TP-Link AX1500 (~$45)
                + LIANGUO 2.5GbE switch (~$24)
              </p>
            </div>
          </Card>

          {/* Why This Matters */}
          <Card
            variant="glass"
            padding="lg"
            className="mt-8 bg-linear-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-700"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 text-4xl">💡</div>
              <div>
                <h3 className="text-2xl font-bold text-green-300 mb-3">
                  Why This Comparison Matters for DevOps Work
                </h3>
                <div className="space-y-2 text-ghd-text-body">
                  <p>
                    <strong>For Personal Projects:</strong> Running services at home eliminates
                    monthly cloud bills while providing hands-on experience with production-grade
                    infrastructure.
                  </p>
                  <p>
                    <strong>For Enterprise Work:</strong> Understanding cloud costs deeply helps me
                    make informed infrastructure decisions for clients. Managing physical hardware,
                    networking, and virtualization provides comprehensive knowledge that pure
                    cloud-only engineers often lack.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 mt-20">
          <Card variant="glass" padding="lg" className="text-center">
            <h2 className="text-3xl font-mono font-bold mb-4 text-ghd-text-primary">
              Want to discuss my homelab setup?
            </h2>
            <p className="text-ghd-text-body mb-6">
              I&apos;m happy to talk about architecture decisions, security strategies, lessons
              learned, and how this experience translates to enterprise environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Card
                  variant="glass"
                  padding="none"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 hover:bg-ghd-elevated text-ghd-text-primary rounded-lg font-medium transition-colors duration-200"
                >
                  Get in Touch
                </Card>
              </Link>
            </div>
          </Card>
        </section>
      </main>
    </>
  )
}
