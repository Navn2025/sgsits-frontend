import React from 'react'

const PGCourses: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Postgraduate Programs</h2>
        <p className="text-sm text-gray-500 mt-1">M.Tech / MBA / MCA programs at SGSITS</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS offers a wide range of postgraduate programs including M.Tech in Computer Science, Civil, Electrical, Mechanical, Electronics & Telecommunication, Electronics & Instrumentation, Information Technology, Applied Mathematics, and Applied Physics (18 seats each).</p>
      <p className="text-gray-700 text-[15px] leading-relaxed">Additionally, MBA (120 seats) and MCA (60 seats) programs are offered through the Department of Management Studies and Computer Technology & Applications respectively. All PG programs have a duration of 2 years.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Eligibility:</strong> M.Tech — GATE score + departmental counseling. MBA — MAT/CAT/MP PET. MCA — MP PET / NIMCET. Fee: Approx. ₹30,000 – ₹40,000 per year.</p>
      </div>
    </div>
  )
}

export default PGCourses
