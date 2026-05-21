import React from 'react'

const PTDCCourses: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>PTDC Courses</h2>
        <p className="text-sm text-gray-500 mt-1">Part-Time Degree Courses for working professionals</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS offers Part Time Degree Courses (PTDC) for working professionals who wish to obtain a B.E. degree while continuing their employment. These courses are available in select engineering departments.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed">The PTDC program has a duration of 5 years and classes are conducted during evenings and weekends. Candidates must be working professionals with a minimum of 2 years of work experience.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Eligibility:</strong> Diploma in Engineering + 2 years work experience. <strong>Admission:</strong> Through MP DTE counseling.</p>
      </div>
    </div>
  )
}

export default PTDCCourses
