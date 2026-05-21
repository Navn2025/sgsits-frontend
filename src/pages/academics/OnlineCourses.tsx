import React from 'react'

const OnlineCourses: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Online Courses</h2>
        <p className="text-sm text-gray-500 mt-1">MOOC, NPTEL & SWAYAM courses at SGSITS</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS is an active participant in the NPTEL (National Programme on Technology Enhanced Learning) initiative and serves as a <strong>Local Chapter</strong> for NPTEL online certification courses.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed">Students and faculty are encouraged to enroll in MOOC courses through platforms like SWAYAM, NPTEL, Coursera, and edX. Several courses are integrated into the curriculum as electives.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed">Popular courses include Machine Learning, Data Structures, IoT, Cloud Computing, Digital Marketing, and Financial Management. Credits earned through NPTEL can be transferred to the academic record.</p>
      </div>
    </div>
  )
}

export default OnlineCourses
