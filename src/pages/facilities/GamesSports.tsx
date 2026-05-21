import React from 'react'

const GamesSports: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Games & Sports</h2>
        <p className="text-sm text-gray-500 mt-1">Sports facilities and achievements</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS has extensive sports facilities spread across the campus. The Sports Committee organizes regular inter-department tournaments and selects teams for inter-college competitions.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Outdoor Facilities:</strong> Cricket ground with practice nets, football field, basketball courts (2), volleyball courts (2), athletic track (400m), and tennis court.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Indoor Facilities:</strong> Badminton courts, table tennis hall, chess room, carrom room, and gymnasium. Coaching available for cricket, basketball, and athletics.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Achievements:</strong> Regular medal winners at RGPV inter-college meets, MP state university games, and national-level technical institute tournaments.</p>
      </div>
    </div>
  )
}

export default GamesSports
