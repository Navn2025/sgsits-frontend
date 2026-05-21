import React from 'react'

const Activities: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Student Activities</h2>
        <p className="text-sm text-gray-500 mt-1">Cultural, technical, and social activities</p>
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS provides a vibrant platform for student activities beyond academics. Various clubs and organizations operate under the Dean Student Welfare office.</p>
      <div className="grid gap-4 md:grid-cols-2">
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Rhythm — Annual Cultural Festival</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">A 3-day extravaganza featuring music, dance, drama, fashion show, literary events, and guest performances by renowned artists.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Technosearch — Annual Technical Festival</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Inter-college technical competition with events like robotics, coding contests, paper presentations, and project exhibitions.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>IEEE Student Branch</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Active IEEE student branch organizing workshops, hackathons, and guest lectures on emerging technologies.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Coding Club</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Weekly coding sessions, competitive programming practice, and participation in ICPC, CodeChef, and HackerRank contests.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Robotics Club</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Hands-on robotics projects, participation in national-level robotics competitions like Robocon and Yantra.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Literary & Debate Society</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Regular debates, elocution competitions, quiz contests, and publication of the institute magazine.</p>
      </div>
      </div>
    </div>
  )
}

export default Activities
