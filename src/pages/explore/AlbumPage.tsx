import React from 'react'
import { useParams } from 'react-router-dom'

const AlbumPage: React.FC = () => {
  const { albumSlug } = useParams<{ albumSlug: string }>()
  const title = (albumSlug || 'album').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>{title}</h2>
        <p className="text-sm text-gray-500 mt-1">Photo album</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square bg-white rounded-md border border-slate-200 flex items-center justify-center shadow-sm hover:border-slate-400 hover:bg-slate-50 transition-colors">
            <p className="text-gray-400 text-xs">Photo {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlbumPage
