/**
 * About Section Content
 *
 * Content data for the About section on the homepage.
 * Separated from component logic for easier content updates.
 */

import type { AboutContent } from '@/types/about'

export type { StoryArc, AboutStats, HomelabFeature, AboutContent } from '@/types/about'

export const aboutContent: AboutContent = {
  sectionTitle: {
    line1: 'From Web Developer to',
    line2: 'DevOps Engineer',
  },
  storyArcs: [
    {
      period: '2014-2016',
      periodColor: 'text-violet-400',
      gradientFrom: 'from-violet-400',
      story: `Started as a web developer at Graphic Studio Central, building WordPress sites and custom
        PHP applications (CakePHP, Laravel) for clients. While troubleshooting server issues and
        deployment problems, I discovered I was more fascinated by the infrastructure and automation
        than just the application code. This sparked my transition into system administration at
        Londa Tech, where I began managing AWS servers and building APIs.`,
    },
    {
      period: '2016-2019',
      periodColor: 'text-cyan-400',
      gradientFrom: 'from-cyan-400',
      story: `Made the full transition to DevOps at Yondu Inc, where I began designing CI/CD pipelines,
        containerizing applications with Docker, and managing Kubernetes clusters on AWS. This was
        followed by a Lead DevOps Engineer role at Eastvantage, where I drove the adoption of modern
        DevOps practices, implemented robust CI/CD pipelines with GitLab and AWS CodePipeline, and
        mentored developers on containerization best practices.`,
    },
    {
      period: '2020-Present',
      periodColor: 'text-emerald-400',
      gradientFrom: 'from-emerald-400',
      story: `Continued DevOps engineering at Infor Inc, managing AWS infrastructure, Kubernetes clusters,
  and participating in SRE on-call rotations. When the team was acquired by Hexagon AB in
  October 2021, transitioned to a DevOps Consultant role, managing production EKS and ECS
  clusters for global manufacturing solutions. Working remotely from the Philippines,
  collaborating across timezones with teams in Europe, North America, and Asia-Pacific.`,
    },
  ],
  homelabSection: {
    title: 'Beyond the Terminal: Production Infrastructure at Home',
    emoji: '🏠',
    description: `This portfolio isn't hosted on Vercel or AWS—it's running on enterprise-grade
      infrastructure in my homelab. A 3-node bare metal Kubernetes cluster with Cilium CNI,
      Longhorn storage, GitLab CI/CD, and 99.9% uptime monitoring.`,
    features: [
      { label: '3-Node K8s Cluster' },
      { label: 'ArgoCD GitOps' },
      { label: '50+ Services' },
      { label: '99.9% Uptime' },
      { label: 'Zero Exposed Ports' },
    ],
    ctaText: 'Explore My Homelab Infrastructure',
    ctaUrl: '/homelab',
    remoteWorkNote: `I work remotely from Santa Rosa, Laguna, Philippines (UTC+8), with availability for
      overlapping hours across US, EU, and APAC timezones. Open to full-time roles, contract
      work, and consulting engagements with global teams.`,
  },
  location: {
    city: 'Santa Rosa, Laguna, Philippines',
    timezone: 'UTC+8 (Flexible Hours)',
  },
  stats: [
    {
      value: '10+',
      label: 'Years in Tech',
      color: 'text-violet-400',
    },
    {
      value: '3',
      label: 'AWS Certifications',
      color: 'text-cyan-400',
    },
    {
      value: '30+',
      label: 'Pipelines Built',
      color: 'text-emerald-400',
    },
    {
      value: '6',
      label: 'Companies Helped',
      color: 'text-cyan-400',
    },
  ],
  githubActivity: {
    title: 'GitHub Activity',
    username: 'rommelporras',
    caption: 'Consistent coding activity across personal projects and open source contributions',
  },
  quickLinks: {
    contact: {
      text: "Let's Talk →",
      url: '#contact',
    },
    homelab: {
      text: 'View Homelab',
      url: '/homelab',
    },
  },
}
