const PIPELINE_NODES = [
  { name: 'Prowlarr', desc: 'Indexers', qsv: false },
  { name: 'Sonarr / Radarr', desc: 'TV & Movies', qsv: false },
  { name: 'qBittorrent', desc: 'Downloads', qsv: false },
  { name: 'Unpackerr', desc: 'Extraction', qsv: false },
  { name: 'Tdarr', desc: 'Transcode', qsv: true },
  { name: 'Jellyfin', desc: 'Streaming', qsv: true },
]

const SUPPORTING_SERVICES = [
  { name: 'Seerr', role: 'Requests' },
  { name: 'Bazarr', role: 'Subtitles' },
  { name: 'Configarr', role: 'Quality profiles' },
  { name: 'Recommendarr', role: 'AI recommendations' },
  { name: 'Byparr', role: 'CF bypass' },
]

export function MediaFlowDiagram() {
  return (
    <div
      className="mb-4 rounded-xl border-2 border-rose-700 bg-linear-to-br from-rose-950/40 to-pink-950/30 p-6"
      aria-label="Media automation pipeline: Prowlarr finds content, Sonarr and Radarr manage TV and movies, qBittorrent downloads, Unpackerr extracts, Tdarr transcodes with Intel QSV, Jellyfin serves media"
    >
      <div className="flex flex-col lg:flex-row items-stretch gap-3 mb-6">
        {PIPELINE_NODES.map((node, i) => (
          <div key={node.name} className="contents">
            <div className="flex-1 rounded-lg border border-rose-700 bg-ghd-surface px-4 py-3 text-center shadow-sm">
              <div className="text-sm font-bold text-ghd-text-primary">{node.name}</div>
              <div className="text-xs text-ghd-text-muted">{node.desc}</div>
              {node.qsv && (
                <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-800">
                  Intel QSV
                </span>
              )}
            </div>
            {i < PIPELINE_NODES.length - 1 && (
              <div className="flex items-center justify-center lg:py-0 py-1">
                <span className="text-rose-500 font-mono text-lg hidden lg:block">&rarr;</span>
                <span className="text-rose-500 font-mono text-lg lg:hidden">&darr;</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {SUPPORTING_SERVICES.map((svc) => (
          <span
            key={svc.name}
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-ghd-surface border border-rose-800 text-rose-300"
          >
            <span className="font-semibold">{svc.name}</span>
            <span className="text-ghd-text-muted">&rarr;</span>
            <span className="text-ghd-text-muted">{svc.role}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
