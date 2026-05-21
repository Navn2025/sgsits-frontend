import React from 'react'

const Dispensary: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Health Center / Dispensary</h2>
        <p className="text-sm text-gray-500 mt-1">On-campus medical facility for students and staff</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS has an on-campus health center staffed with a <strong>full-time medical officer</strong> and nursing attendants, providing primary healthcare services to students and staff.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Services:</strong> First-aid treatment, routine medical checkups, prescription services, health counseling, and emergency care. Free medical checkup for all new students.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Emergency:</strong> Ambulance service available 24/7 for emergencies. Tie-up with MY Hospital, CHL Hospital, and other leading hospitals in Indore for referral cases.</p>
      </div>
    </div>
  )
}

export default Dispensary
