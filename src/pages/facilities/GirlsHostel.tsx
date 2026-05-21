import React from 'react'

const GirlsHostel: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Girls Hostel</h2>
        <p className="text-sm text-gray-500 mt-1">Residential facilities for female students</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS has <strong>2 girls hostels</strong> with a total capacity of 400+ students, located within the campus with dedicated security arrangements.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Amenities:</strong> Furnished rooms (double/triple sharing), separate mess facility, Wi-Fi connectivity, common room with TV, recreation room, indoor games, and laundry service.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Security:</strong> 24/7 security with CCTV surveillance. Female warden residence within the hostel premises. Entry/exit register maintained. Visitor timings regulated.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Fee:</strong> Hostel fee approximately ₹15,000–20,000 per year (excluding mess charges). Mess charges collected monthly.</p>
      </div>
    </div>
  )
}

export default GirlsHostel
