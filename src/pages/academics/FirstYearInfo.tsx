import React from 'react'

const FirstYearInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>First Year Information</h2>
        <p className="text-sm text-gray-500 mt-1">Guide for first-year B.Tech students</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">All B.Tech students at SGSITS undergo a <strong>common first year</strong> program. Core subjects include Engineering Mathematics, Physics, Chemistry, Basic Electrical Engineering, Basic Mechanical Engineering, Engineering Drawing, and Programming in C.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed">The first year also includes workshop practice, laboratory sessions, and a communication skills course. Students are assigned faculty mentors for academic and personal guidance.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Anti-Ragging:</strong> SGSITS maintains a strict anti-ragging policy. All students must submit anti-ragging affidavits. A 24/7 helpline is available for reporting incidents. <strong>Mentorship:</strong> Each student is assigned a faculty mentor who provides guidance throughout the academic journey.</p>
      </div>
    </div>
  )
}

export default FirstYearInfo
