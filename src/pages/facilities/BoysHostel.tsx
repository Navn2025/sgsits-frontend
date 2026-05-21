import React from 'react'

const BoysHostel: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Boys Hostel</h2>
        <p className="text-sm text-gray-500 mt-1">Residential facilities for male students</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS has <strong>4 boys hostels</strong> with a total capacity of 800+ students. The hostels are located within the campus and provide a safe and comfortable living environment.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Amenities:</strong> Furnished rooms (double/triple sharing), common mess with hygienic food (veg & non-veg options), Wi-Fi connectivity, common room with TV, reading room, indoor games, and laundry service.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Administration:</strong> Each hostel has a resident warden (faculty member) and support staff available 24/7. Hostel Committee comprising student representatives ensures smooth functioning.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Fee:</strong> Hostel fee approximately ₹15,000–20,000 per year (excluding mess charges). Mess charges collected monthly.</p>
      </div>
    </div>
  )
}

export default BoysHostel
