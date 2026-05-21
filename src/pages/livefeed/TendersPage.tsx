import React from 'react'

const TendersPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Tenders</h2>
        <p className="text-sm text-gray-500 mt-1">Procurement tenders and quotations</p>
      </div>

      <div className="space-y-3">
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Supply of Laboratory Equipment for ECE Dept</h3>
              <p className="text-xs text-gray-500 mt-1">Ref: SGSITS/Tender/2026/045 | Status: Open | Last Date: May 30, 2026</p>
            </div>
            <span className="text-xs text-gray-450 font-medium whitespace-nowrap flex-shrink-0">May 10, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Annual Maintenance Contract for Computer Center</h3>
              <p className="text-xs text-gray-500 mt-1">Ref: SGSITS/Tender/2026/039 | Status: Open | Last Date: May 15, 2026</p>
            </div>
            <span className="text-xs text-gray-450 font-medium whitespace-nowrap flex-shrink-0">Apr 25, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Mess Catering Services for Hostels</h3>
              <p className="text-xs text-gray-500 mt-1">Ref: SGSITS/Tender/2026/032 | Status: Closed</p>
            </div>
            <span className="text-xs text-gray-450 font-medium whitespace-nowrap flex-shrink-0">Apr 10, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Civil Works — Renovation of Administrative Block</h3>
              <p className="text-xs text-gray-500 mt-1">Ref: SGSITS/Tender/2026/028 | Status: Closed</p>
            </div>
            <span className="text-xs text-gray-450 font-medium whitespace-nowrap flex-shrink-0">Mar 20, 2026</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Purchase of Books for Central Library</h3>
              <p className="text-xs text-gray-500 mt-1">Ref: SGSITS/Tender/2026/022 | Status: Closed</p>
            </div>
            <span className="text-xs text-gray-450 font-medium whitespace-nowrap flex-shrink-0">Mar 5, 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TendersPage
