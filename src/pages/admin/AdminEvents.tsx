import React from 'react'

const AdminEvents: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="pb-3 border-b border-slate-200">
        <h2 className="font-display text-2xl font-extrabold text-slate-800">
          Admin Events
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Official resource gateway for SGSITS Institute portal.
        </p>
      </div>

      <div className="p-6 bg-[#f7f8fa] rounded-md border border-slate-200 space-y-4">
        <p className="text-sm text-slate-600 leading-relaxed">
          Welcome to the <strong>Admin Events</strong> portal. This content area serves as the direct migration interface for dynamic articles, downloadable schemes, syllabus sheets, and administrative records.
        </p>
        
        <div className="p-4 bg-brand-burgundy/5 rounded-md border border-brand-burgundy/10">
          <p className="text-xs font-semibold text-brand-burgundy">
            ℹ️ Notice for Students & Staff
          </p>
          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
            All details rendered on this sub-page are pulled dynamically from the central academic databases. Please verify official schedules via notice boards for late updates.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminEvents
