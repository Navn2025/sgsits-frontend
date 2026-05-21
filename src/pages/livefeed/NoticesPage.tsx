import React from 'react'

const NoticesPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Notices</h2>
        <p className="text-sm text-gray-500 mt-1">Official notices and circulars</p>
      </div>

      <div className="space-y-3">
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>End Semester Examination Schedule — Even Sem 2025-26</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Examination cell notice for all UG and PG students</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">May 15, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Holiday on account of Republic Day</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Institute will remain closed on 26th January</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Jan 25, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Fee Payment Deadline Extended</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Last date for fee payment extended to 31st January</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Jan 10, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Workshop on AI/ML — Registration Open</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Computer Engineering department organizing 3-day workshop</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Dec 20, 2025</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Anti-Ragging Awareness Program</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Mandatory attendance for all first-year students</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Dec 5, 2025</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>NPTEL Exam Registration</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Last date to register for NPTEL Jan 2026 certification exams</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Nov 28, 2025</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Campus Placement Drive — TCS</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">TCS pre-placement talk and registration details</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Nov 15, 2025</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Mid-Semester Exam Timetable Published</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Download timetable from examination cell portal</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Oct 20, 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticesPage
