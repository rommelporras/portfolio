import type { Tool } from '@/types/tools'

export type { Tool } from '@/types/tools'
export type { ToolCategory } from '@/types/tools'

export const categories = [
  'All',
  'Cloud',
  'IaC',
  'Containers',
  'CI/CD',
  'Monitoring',
  'Languages',
] as const

export const toolbox: Tool[] = [
  {
    name: 'AWS',
    category: 'Cloud',
    icon: '☁️',
    logo: '/logos/aws-logo.svg',
    tier: 'Daily Driver',
    yearsUsed: 10,
    description: 'Cloud infrastructure, EKS, ECS, EC2, RDS, S3, etc.',
    realWorldExample:
      'Manage production EKS and ECS clusters, EC2 infrastructure, and AWS services across multiple environments',
    certifications: ['Solutions Architect Associate', 'AI Practitioner', 'Developer Associate'],
  },
  {
    name: 'Terraform',
    category: 'IaC',
    icon: '🏗️',
    logo: '/logos/terraform-logo.svg',
    tier: 'Proficient',
    yearsUsed: 7,
    description:
      'Infrastructure as code for provisioning and managing AWS cloud resources at scale',
    realWorldExample:
      'Convert manual EC2 provisioning to Terraform modules for repeatable infrastructure deployment',
  },
  {
    name: 'Ansible',
    category: 'IaC',
    icon: '⚙️',
    logo: '/logos/ansible-logo.svg',
    tier: 'Familiar',
    yearsUsed: 2,
    description: 'Configuration management, server provisioning, and automated deployments',
    realWorldExample:
      'Used for server configuration at Eastvantage and Kubernetes node bootstrap in personal homelab',
  },
  {
    name: 'Docker',
    category: 'Containers',
    icon: '🐳',
    logo: '/logos/docker-logo.svg',
    tier: 'Proficient',
    yearsUsed: 9,
    description:
      'Containerization with multi-stage builds, Docker Compose, and registry management',
    realWorldExample:
      'Containerize applications for production deployment, manage Docker Compose stacks for development and homelab environments',
  },
  {
    name: 'Kubernetes',
    category: 'Containers',
    icon: '⎈',
    logo: '/logos/kubernetes-logo.svg',
    tier: 'Proficient',
    yearsUsed: 7,
    description: 'Container orchestration on EKS and bare metal',
    realWorldExample:
      'Manage production EKS clusters at work and self-hosted 3-node bare metal cluster in homelab running 20+ services',
  },
  {
    name: 'AWS EKS',
    category: 'Containers',
    icon: '📦',
    logo: '/logos/aws-eks-logo.svg',
    tier: 'Proficient',
    yearsUsed: 7,
    description: 'Managed Kubernetes on AWS',
    realWorldExample:
      'Manage production EKS clusters for global manufacturing workloads at Hexagon',
  },
  {
    name: 'AWS ECS',
    category: 'Containers',
    icon: '📦',
    logo: '/logos/aws-ecs-logo.svg',
    tier: 'Proficient',
    yearsUsed: 7,
    description: 'AWS managed container orchestration',
    realWorldExample: 'Manage production ECS clusters alongside EKS at Hexagon',
  },
  {
    name: 'GitLab CI',
    category: 'CI/CD',
    icon: '🦊',
    logo: '/logos/gitlab-ci-logo.svg',
    tier: 'Daily Driver',
    yearsUsed: 7,
    description: 'CI/CD pipelines and self-hosted DevOps platform',
    realWorldExample:
      'Build and maintain CI/CD pipelines handling 50-100 jobs per day across multiple projects',
  },
  {
    name: 'AWS CodePipeline',
    category: 'CI/CD',
    icon: '🚀',
    logo: '/logos/aws-codepipeline-logo.svg',
    tier: 'Proficient',
    yearsUsed: 3,
    description: 'AWS native CI/CD with CodeBuild and CodeDeploy',
    realWorldExample:
      'Built deployment pipelines at Eastvantage using CodePipeline + CodeBuild for automated releases',
  },
  {
    name: 'Kube Prometheus Stack',
    category: 'Monitoring',
    icon: '📊',
    logo: '/logos/prometheus-logo.svg',
    tier: 'Proficient',
    yearsUsed: 7,
    description: 'Prometheus, Grafana, Alertmanager, Loki, Alloy, etc.',
    realWorldExample:
      'Full observability stack in homelab and production: metrics, dashboards, alerting, and log aggregation',
  },
  {
    name: 'Elastic Stack',
    category: 'Monitoring',
    icon: '🔍',
    logo: '/logos/elk-stack-logo.svg',
    tier: 'Familiar',
    yearsUsed: 1,
    description: 'Elasticsearch, Logstash, Kibana (ELK) for log analytics',
    realWorldExample:
      'Deploy and manage EFK stack (Elasticsearch, Fluentd, Kibana) for centralized log aggregation and analysis',
  },
  {
    name: 'Sumo Logic',
    category: 'Monitoring',
    icon: '📡',
    logo: '/logos/sumo-logic-logo.svg',
    tier: 'Daily Driver',
    yearsUsed: 6,
    description: 'Cloud-native log analytics and monitoring',
    realWorldExample: 'Centralized log analytics and monitoring for production services at Hexagon',
  },
  {
    name: 'CloudWatch',
    category: 'Monitoring',
    icon: '👁️',
    logo: '/logos/cloudwatch-logo.svg',
    tier: 'Proficient',
    yearsUsed: 10,
    description: 'AWS native monitoring, logs, and alerting',
    realWorldExample: 'Set up CloudWatch alarms and dashboards for production AWS infrastructure',
  },
  {
    name: 'Python',
    category: 'Languages',
    icon: '🐍',
    logo: '/logos/python-logo.svg',
    tier: 'Proficient',
    yearsUsed: 10,
    description: 'Automation scripts and DevOps tooling',
    realWorldExample:
      'Write automation scripts for infrastructure management, deployment tooling, and operational tasks',
  },
  {
    name: 'Bash',
    category: 'Languages',
    icon: '💻',
    logo: '/logos/bash-logo.svg',
    tier: 'Daily Driver',
    yearsUsed: 12,
    description: 'Shell scripting and system automation',
    realWorldExample:
      'Daily shell scripting for infrastructure automation, CI/CD helpers, and system administration',
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    icon: '🟨',
    logo: '/logos/javascript-logo.svg',
    tier: 'Experienced',
    yearsUsed: 10,
    description: 'Frontend and backend web development',
    realWorldExample:
      'Built web applications and APIs throughout career from early web development to modern React and Next.js projects',
  },
  {
    name: 'Node.js',
    category: 'Languages',
    icon: '🟢',
    logo: '/logos/nodejs-logo.svg',
    tier: 'Experienced',
    yearsUsed: 6,
    description: 'Server-side JavaScript runtime',
    realWorldExample:
      'Built backend APIs and automation tooling at Eastvantage and Yondu using Node.js and Express',
  },
  {
    name: 'PHP',
    category: 'Languages',
    icon: '🐘',
    logo: '/logos/php-logo.svg',
    tier: 'Familiar',
    yearsUsed: 4,
    description: 'Web development with Laravel and CakePHP',
    realWorldExample:
      'Built web applications with Laravel and CakePHP at Graphic Studio Central and Londa Tech early in career',
  },
]
