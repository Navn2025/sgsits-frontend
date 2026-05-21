import React from 'react'

const Workshop: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Central Workshop</h2>
        <p className="text-sm text-gray-500 mt-1">Hands-on manufacturing and fabrication facility</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The Central Workshop provides practical training in basic manufacturing processes to all first-year engineering students. It spans multiple sections covering traditional and modern fabrication techniques.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Sections:</strong> Carpentry Shop, Fitting Shop, Welding Shop (Arc & Gas), Foundry, Machine Shop (Lathe, Milling, Drilling), Sheet Metal Shop, and Smithy.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Modern Equipment:</strong> CNC machines, 3D printers (FDM & SLA), laser cutting machines, and computer-aided manufacturing systems for advanced projects and research.</p>
      </div>
    </div>
  )
}

export default Workshop
