'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'

const Featured = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section id="featured" className="py-24 bg-ghd-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-ghd-accent-green">
            FEATURED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-ghd-text-primary font-mono mb-4 mt-3">
            Featured Work
          </h2>
          <p className="text-xl text-ghd-text-muted max-w-2xl mx-auto">
            Proof of expertise: real business impact and production infrastructure
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* DevOps Expertise card */}
          <motion.div variants={cardVariants} className="h-full">
            <a href="#about" className="block h-full">
              <Card
                variant="elevated"
                padding="lg"
                className="h-full flex flex-col bg-ghd-surface border border-ghd-border rounded-xl hover:border-ghd-border-hover hover:shadow-glow-cyan group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs bg-ghd-bg border border-ghd-border text-ghd-text-muted px-2 py-0.5 rounded">
                    DEVOPS EXPERTISE
                  </span>
                  <span className="text-2xl text-ghd-text-muted group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-ghd-text-primary mb-4 group-hover:text-cyan-400 transition-colors duration-200">
                  10+ Years Building Infrastructure
                </h3>

                <div className="space-y-4 mb-6 grow">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-sm font-semibold text-ghd-text-muted uppercase tracking-wide">
                        CI/CD Pipelines
                      </span>
                    </div>
                    <p className="text-ghd-text-body pl-4">
                      Automated CI/CD pipelines across multiple enterprise environments
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-sm font-semibold text-ghd-text-muted uppercase tracking-wide">
                        Kubernetes
                      </span>
                    </div>
                    <p className="text-ghd-text-body pl-4">
                      Production Kubernetes clusters running on AWS EKS and bare metal
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-sm font-semibold text-ghd-text-muted uppercase tracking-wide">
                        SRE Operations
                      </span>
                    </div>
                    <p className="text-ghd-text-body pl-4">
                      SRE on-call rotation ensuring production reliability
                    </p>
                  </div>
                </div>

                <div className="mb-4 p-4 bg-ghd-bg border border-ghd-border rounded-lg">
                  <div className="text-xs font-semibold text-ghd-text-muted mb-2 uppercase tracking-wide">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Kubernetes', 'Terraform', 'GitLab CI'].map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-ghd-surface border border-ghd-border text-ghd-text-muted px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  Learn More About Me
                  <span className="text-lg">&rarr;</span>
                </div>
              </Card>
            </a>
          </motion.div>

          {/* Homelab Infrastructure card */}
          <motion.div variants={cardVariants} className="h-full">
            <Link href="/homelab" className="block h-full">
              <Card
                variant="elevated"
                padding="lg"
                className="h-full flex flex-col bg-ghd-surface border border-ghd-border rounded-xl hover:border-ghd-border-hover hover:shadow-glow-cyan group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs bg-ghd-bg border border-ghd-border text-ghd-text-muted px-2 py-0.5 rounded">
                    LIVE INFRASTRUCTURE
                  </span>
                  <span className="text-2xl text-ghd-text-muted group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-ghd-text-primary mb-4 group-hover:text-cyan-400 transition-colors duration-200">
                  This Site Is a Live DevOps Project
                </h3>

                <p className="text-lg font-medium text-ghd-text-body mb-6">
                  This portfolio isn&apos;t just a site--it&apos;s a production-grade homelab
                  infrastructure running 24/7 with enterprise-level architecture.
                </p>

                <div className="space-y-3 mb-6 grow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-ghd-bg border border-ghd-border flex items-center justify-center">
                      <span className="font-mono text-xl font-bold text-cyan-400">3</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ghd-text-primary">
                        Node Cluster
                      </div>
                      <div className="text-xs text-ghd-text-muted">Bare metal Kubernetes HA</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-ghd-bg border border-ghd-border flex items-center justify-center">
                      <span className="font-mono text-xl font-bold text-cyan-400">3</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ghd-text-primary">
                        Environments
                      </div>
                      <div className="text-xs text-ghd-text-muted">Dev, staging, production</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-ghd-bg border border-ghd-border flex items-center justify-center">
                      <span className="font-mono text-sm font-bold text-cyan-400">99.9</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ghd-text-primary">
                        99.9% Uptime
                      </div>
                      <div className="text-xs text-ghd-text-muted">Monitored with Uptime Kuma</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-ghd-bg border border-ghd-border flex items-center justify-center">
                      <span className="font-mono text-xl font-bold text-cyan-400">0</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ghd-text-primary">
                        Exposed Ports
                      </div>
                      <div className="text-xs text-ghd-text-muted">
                        Zero-trust Cloudflare Tunnel
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 p-4 bg-ghd-bg border border-ghd-border rounded-lg">
                  <div className="text-xs font-semibold text-ghd-text-muted mb-2 uppercase tracking-wide">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Kubernetes', 'Cilium CNI', 'Longhorn', 'Cloudflare'].map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-ghd-surface border border-ghd-border text-ghd-text-muted px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  Explore Full Architecture
                  <span className="text-lg">&rarr;</span>
                </div>
              </Card>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Featured
