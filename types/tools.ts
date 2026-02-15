export interface Tool {
  name: string
  category: ToolCategory
  icon: string
  logo?: string
  tier: 'Daily Driver' | 'Proficient' | 'Experienced' | 'Familiar'
  yearsUsed: number
  description: string
  realWorldExample: string
  certifications?: string[]
}

export type ToolCategory = 'Cloud' | 'IaC' | 'Containers' | 'CI/CD' | 'Monitoring' | 'Languages'
