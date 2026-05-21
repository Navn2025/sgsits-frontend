import React from 'react'

const TransitHostel: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Transit Hostel</h2>
        <p className="text-sm text-gray-500 mt-1">Guest accommodation facility</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The Transit Hostel at SGSITS provides temporary accommodation for visiting faculty, guest lecturers, parents, and other official visitors to the institute.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Facilities:</strong> 20 rooms with attached bathrooms, common dining area, Wi-Fi connectivity, and housekeeping services. Rooms are available on advance booking basis.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Booking:</strong> Reservations can be made through the Registrar office. Priority given to official visitors and parents during examination/admission periods.</p>
      </div>
    </div>
  )
}

export default TransitHostel
