import React from 'react'

const EventsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Upcoming Events</h2>
        <p className="text-sm text-gray-500 mt-1">Events and programs at SGSITS</p>
      </div>

      <div className="space-y-3">
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Annual Convocation 2025-26</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Degree distribution ceremony at SGSITS auditorium</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Mar 15, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Rhythm 2026 — Annual Cultural Festival</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">3-day cultural extravaganza with celebrity performances</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Feb 20-22, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Technosearch 2026 — Technical Festival</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Inter-college technical competition with 50+ events</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Feb 5-7, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>National Conference on Sustainable Engineering</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Two-day conference by Mechanical Engineering department</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Jan 28, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Annual Sports Day</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Week-long sports events across all departments</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Jan 15-20, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Alumni Meet 2026</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Annual reunion of SGSITS alumni, all batches welcome</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Jan 5, 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsPage
