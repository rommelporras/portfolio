import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MediaFlowDiagram } from '@/components/homelab/MediaFlowDiagram'

describe('MediaFlowDiagram', () => {
  it('renders all 6 primary pipeline nodes', () => {
    render(<MediaFlowDiagram />)
    const expectedNodes = [
      'Prowlarr',
      'Sonarr / Radarr',
      'qBittorrent',
      'Unpackerr',
      'Tdarr',
      'Jellyfin',
    ]
    for (const node of expectedNodes) {
      expect(screen.getByText(node)).toBeInTheDocument()
    }
  })

  it('renders supporting service badges', () => {
    render(<MediaFlowDiagram />)
    expect(screen.getByText('Seerr')).toBeInTheDocument()
    expect(screen.getByText('Bazarr')).toBeInTheDocument()
    expect(screen.getByText('Configarr')).toBeInTheDocument()
    expect(screen.getByText('Recommendarr')).toBeInTheDocument()
    expect(screen.getByText('Byparr')).toBeInTheDocument()
  })

  it('has aria-label on diagram container', () => {
    render(<MediaFlowDiagram />)
    expect(screen.getByLabelText(/media automation pipeline/i)).toBeInTheDocument()
  })

  it('shows Intel QSV badges on Tdarr and Jellyfin', () => {
    render(<MediaFlowDiagram />)
    const qsvBadges = screen.getAllByText('Intel QSV')
    expect(qsvBadges).toHaveLength(2)
  })
})
