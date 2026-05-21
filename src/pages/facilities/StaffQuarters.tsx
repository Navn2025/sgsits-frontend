import React from 'react'

const StaffQuarters: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Staff Quarters</h2>
        <p className="text-sm text-gray-500 mt-1">On-campus residential quarters for faculty and staff</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS provides on-campus residential quarters for faculty and staff members. The quarters are located within the campus providing convenient access to the workplace.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Types:</strong> Type A (Class IV employees), Type B (Ministerial staff), Type C (Faculty/Officers), Type D (Senior faculty/Director). All quarters have basic amenities with maintenance support.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Allocation:</strong> Quarters are allocated based on seniority, designation, and availability. Rent is deducted from salary as per government norms.</p>
      </div>
    </div>
  )
}

export default StaffQuarters
