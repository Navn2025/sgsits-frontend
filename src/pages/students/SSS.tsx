import React from 'react'

const SSS: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Sports & Student Society</h2>
        <p className="text-sm text-gray-500 mt-1">Student Sports Society at SGSITS</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The Student Sports Society (SSS) of SGSITS organizes and coordinates all sports and games activities on campus. An annual sports meet is held featuring inter-department competitions.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Facilities:</strong> Cricket ground, football field, basketball courts, volleyball courts, athletic track, badminton courts, table tennis rooms, chess room, and gymnasium.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Achievements:</strong> SGSITS teams regularly participate and win medals in inter-college tournaments organized by RGPV, DAVV, and other agencies. Our athletes have represented MP at national-level university games.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Annual Sports Day:</strong> A week-long celebration with track and field events, team sports, and prize distribution ceremony graced by eminent sportspersons.</p>
      </div>
    </div>
  )
}

export default SSS
