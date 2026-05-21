import React from 'react'

const NewsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Campus News</h2>
        <p className="text-sm text-gray-500 mt-1">Latest news and updates from SGSITS</p>
      </div>

      <div className="space-y-3">
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>SGSITS Students Win Smart India Hackathon 2025</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Team of 6 students won the grand finale held at IIT Bombay</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Dec 18, 2025</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>NAAC Peer Team Visit Completed Successfully</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">NAAC peer team completed 3-day visit for re-accreditation</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Nov 25, 2025</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>MoU Signed with German University for Student Exchange</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Collaboration with TU Munich for research exchange program</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Nov 10, 2025</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>New AICTE IDEA Lab Inaugurated</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">State-of-the-art innovation lab inaugurated by AICTE Chairman</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Oct 30, 2025</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Faculty Paper Published in Nature Communications</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Prof. from Applied Physics publishes groundbreaking research</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Oct 15, 2025</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 border border-slate-200 shadow-sm hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>SGSITS Ranks in Top 200 in NIRF 2025</h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">Improved ranking in engineering category</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0 font-semibold">Sep 20, 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
