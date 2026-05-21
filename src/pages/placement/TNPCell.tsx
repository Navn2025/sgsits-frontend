import React from 'react'

const TNPCell: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Training & Placement Cell</h2>
        <p className="text-sm text-gray-500 mt-1">Campus placement and career development</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The <strong>Training & Placement Cell</strong> of SGSITS coordinates campus recruitment drives, internships, and career development activities. The cell works year-round to connect students with leading organizations.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Placement Process:</strong> Pre-placement talks → Online/Offline Written Test → Group Discussion → Technical Interview → HR Interview → Final Selection. Companies visit campus from August to March.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Placement Stats (2023-24):</strong> Highest Package: ₹50 LPA | Average Package: ₹12 LPA | Placement Rate: 95%+ | 150+ companies visited campus | 100+ students received pre-placement offers.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Training Programs:</strong> Aptitude training, soft skills development, mock interviews, resume building workshops, and industry readiness programs conducted regularly.</p>
      </div>
    </div>
  )
}

export default TNPCell
