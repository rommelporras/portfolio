export interface StoryArc {
  period: string
  periodColor: string
  gradientFrom: string
  story: string
}

export interface AboutStats {
  value: string
  label: string
  color: string
}

export interface HomelabFeature {
  label: string
}

export interface AboutContent {
  sectionTitle: {
    line1: string
    line2: string
  }
  storyArcs: StoryArc[]
  homelabSection: {
    title: string
    emoji: string
    description: string
    features: HomelabFeature[]
    ctaText: string
    ctaUrl: string
    remoteWorkNote: string
  }
  location: {
    city: string
    timezone: string
  }
  stats: AboutStats[]
  githubActivity: {
    title: string
    username: string
    caption: string
  }
  quickLinks: {
    contact: {
      text: string
      url: string
    }
    homelab: {
      text: string
      url: string
    }
  }
}
