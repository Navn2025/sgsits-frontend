import React from 'react'

const PhDCourses: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Ph.D. Programs</h2>
        <p className="text-sm text-gray-500 mt-1">Doctoral research programs at SGSITS</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS offers Ph.D. programs in all engineering departments as well as in Applied Mathematics, Applied Physics, Applied Chemistry, and Management Studies. The doctoral program aims to develop high-quality researchers.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed">Research areas include Computer Science & AI, Structural Engineering, Power Systems, Machine Design, VLSI Design, Signal Processing, Data Science, Optical Physics, Biomedical Devices, and more.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Eligibility:</strong> M.Tech/ME/M.Sc. with 55% marks. <strong>Selection:</strong> Departmental entrance test + interview. <strong>Duration:</strong> 3 to 6 years. Fellowship available for full-time GATE/NET qualified scholars.</p>
      </div>
    </div>
  )
}

export default PhDCourses
