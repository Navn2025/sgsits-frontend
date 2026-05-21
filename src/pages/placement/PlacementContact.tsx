import React from 'react'

const PlacementContact: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Placement Contacts</h2>
        <p className="text-sm text-gray-500 mt-1">Contact details of Training & Placement Cell</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Training & Placement Officer:</strong> Prof. V.K. Sharma | Department of Computer Engineering | Email: tpo@sgsits.ac.in | Phone: 0731-2582150</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Office Location:</strong> Training & Placement Cell, Ground Floor, Administrative Block, SGSITS Campus, 23 Park Road, Indore - 452003</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Office Hours:</strong> Monday to Friday, 9:30 AM to 5:30 PM | Saturday: 9:30 AM to 1:00 PM</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>For Companies:</strong> Companies interested in campus recruitment may contact the TPO via email at tpo@sgsits.ac.in or visit the campus for a pre-placement presentation.</p>
      </div>
    </div>
  )
}

export default PlacementContact
