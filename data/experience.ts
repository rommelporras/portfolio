import type { Experience } from '@/types/experience'

export type { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    company: 'Hexagon AB',
    role: 'DevOps Consultant',
    period: 'October 2021 - Present',
    location: 'Permanent WFH',
    year: 2021,
    description:
      'DevOps consultant for a global manufacturing software company. Continuation of same team from Infor after acquisition by Hexagon.',
    highlights: [
      'Manage AWS EKS and ECS clusters for production workloads',
      'Build and maintain GitLab CI/CD pipelines for deployment automation',
      'Write Python automation scripts for infrastructure and operations',
      'Participate in SRE on-call rotation for production incident response',
      'Perform AWS infrastructure investigations and troubleshooting',
      'Monitor systems using Sumo Logic, Prometheus, and Grafana',
    ],
    techStack:
      'AWS (EKS, ECS, EC2, RDS, S3, CloudWatch), GitLab CI/CD, Python, Kubernetes, Docker, Terraform, Sumo Logic, Prometheus, Grafana',
    tags: ['AWS', 'Kubernetes', 'Python', 'GitLab', 'DevOps', 'SRE', 'Terraform'],
  },
  {
    company: 'Infor Inc.',
    role: 'DevOps Engineer',
    period: 'May 2020 - October 2021',
    location: 'Permanent WFH (Seven NEO Bldg, BGC)',
    year: 2020,
    description:
      'DevOps engineer on the same team and product that was later acquired by Hexagon AB. Managed AWS infrastructure and DevOps operations.',
    highlights: [
      'AWS DevOps engineering with focus on Kubernetes and CI/CD',
      'GitLab CI/CD pipeline development and maintenance',
      'Python scripting for infrastructure automation',
      'SRE on-call rotation for production support',
      'Monitoring with EFK stack (Elasticsearch, Fluentd, Kibana)',
    ],
    techStack:
      'AWS (EKS, EC2, RDS), GitLab CI/CD, Python, Kubernetes, Docker, EFK Stack, Prometheus, Grafana',
    tags: ['AWS', 'Kubernetes', 'Python', 'GitLab', 'DevOps', 'SRE'],
  },
  {
    company: 'Eastvantage',
    role: 'Lead DevOps Engineer',
    period: 'September 2019 - June 2020',
    location: 'Fort Legend, BGC',
    year: 2019,
    description:
      'Led DevOps initiatives and cloud infrastructure management. Drove adoption of modern DevOps practices and ensured high availability of production systems.',
    highlights: [
      'Lead DevOps initiatives and team operations',
      'AWS DevOps engineering with Python, Kubernetes, and GitLab CI/CD',
      'Automation scripting for infrastructure and deployment processes',
      'SRE on-call rotation for production support',
      'Cloud monitoring and observability implementation',
      'Mentored team members on best practices',
    ],
    techStack:
      'Kubernetes, Docker, AWS (EC2, EKS, CodePipeline), Terraform, Ansible, Node.js, LAMP, EFK Stack, Prometheus, Grafana',
    tags: ['AWS', 'Kubernetes', 'Python', 'GitLab', 'Terraform', 'DevOps', 'Leadership'],
  },
  {
    company: 'Yondu Inc',
    role: 'DevOps / Software Engineer',
    period: 'August 2017 - September 2019',
    location: 'Panorama Bldg, BGC',
    year: 2017,
    description:
      'Contributed to DevOps activities, focusing on custom API development and automation scripting. Designed and implemented CI/CD pipelines to improve deployment efficiency.',
    highlights: [
      'DevOps activities and custom API development',
      'CI/CD pipeline design and implementation',
      'Infrastructure automation scripting',
      'Production troubleshooting and system stability',
      'Kubernetes and Docker containerization',
    ],
    techStack: 'AWS (EC2), Kubernetes, Docker, LAMP, Node.js, Python',
    tags: ['AWS', 'Kubernetes', 'Docker', 'Node.js', 'Python', 'DevOps'],
  },
  {
    company: 'Londa Tech. Inc',
    role: 'Software Engineer / System Administrator',
    period: 'March 2016 - August 2017',
    location: 'BGC, Taguig',
    year: 2016,
    description:
      'Monitored servers and performed system administration tasks to ensure optimal performance. Developed and designed APIs, enhancing system functionality.',
    highlights: [
      'Server monitoring and system administration',
      'API development and design',
      'Front-end development (Vue.js, jQuery, Angular)',
      'Production troubleshooting and maintenance',
    ],
    techStack: 'AWS, GoDaddy, EC2, LAMP, Laravel',
    tags: ['AWS', 'Laravel', 'Vue.js', 'Angular', 'API Development'],
  },
  {
    company: 'Graphic Studio Central',
    role: 'Web Developer',
    period: 'March 2014 - December 2015',
    location: 'Pioneer, Mandaluyong',
    year: 2014,
    description:
      'Served as a technical lead and developer, overseeing website development projects.',
    highlights: [
      'Technical lead and developer role',
      'Website development using PHP frameworks',
      'PayPal IPN payment integration',
      'WordPress theme development',
    ],
    techStack: 'PHP, CakePHP, Laravel, JavaScript, jQuery, WordPress, Bootstrap CSS',
    tags: ['PHP', 'Laravel', 'WordPress', 'JavaScript', 'Web Development'],
  },
]
