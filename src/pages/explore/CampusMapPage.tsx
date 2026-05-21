import React from 'react'

const CampusMapPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Campus Map</h2>
        <p className="text-sm text-gray-500 mt-1">SGSITS Campus Location — 23, Park Road, Indore</p>
      </div>

      <div className="rounded-md overflow-hidden border border-gray-200 mb-6">
        <iframe
          src="https://maps.google.com/maps?q=SGSITS+Indore&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" title="SGSITS Campus Map"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-md p-5 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50 transition-colors">
          <h3 className="font-bold mb-2" style={{ color: 'var(--color-primary)' }}>By Air</h3>
          <p className="text-sm text-gray-600">Devi Ahilya Bai Holkar Airport, Indore (12 km from campus)</p>
        </div>
        <div className="bg-white rounded-md p-5 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50 transition-colors">
          <h3 className="font-bold mb-2" style={{ color: 'var(--color-primary)' }}>By Rail</h3>
          <p className="text-sm text-gray-600">Indore Junction Railway Station (3 km from campus)</p>
        </div>
        <div className="bg-white rounded-md p-5 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50 transition-colors">
          <h3 className="font-bold mb-2" style={{ color: 'var(--color-primary)' }}>By Road</h3>
          <p className="text-sm text-gray-600">Well-connected via NH-3 and NH-59. ISBT Gangwal Bus Stand (2 km)</p>
        </div>
      </div>
    </div>
  )
}

export default CampusMapPage
