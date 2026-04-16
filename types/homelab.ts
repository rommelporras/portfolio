export interface HomelabService {
  name: string
  version: string
  desc: string
  url?: string
}

export interface TimelineRelease {
  version: string
  date: string
  title: string
  phase: string
}

export interface HomelabStats {
  nodes: number
  services: string
  releases: number
  uptime: string
  exposedPorts: number
}
