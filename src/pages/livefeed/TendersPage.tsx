import React from 'react'
import { Download, FileText } from 'lucide-react'

const tenders = [
  {
    title: 'Supply of Laboratory Equipment for ECE Department',
    ref: 'SGSITS/Tender/2026/045',
    status: 'Open',
    publishDate: 'May 10, 2026',
    lastDate: 'May 30, 2026',
    dept: 'Electronics & Telecomm',
  },
  {
    title: 'Annual Maintenance Contract for Computer Center (2026–27)',
    ref: 'SGSITS/Tender/2026/039',
    status: 'Open',
    publishDate: 'Apr 25, 2026',
    lastDate: 'May 20, 2026',
    dept: 'Computer Center',
  },
  {
    title: 'Supply of Scientific Equipment for Chemistry Lab',
    ref: 'SGSITS/Tender/2026/036',
    status: 'Open',
    publishDate: 'Apr 18, 2026',
    lastDate: 'May 10, 2026',
    dept: 'Applied Chemistry',
  },
  {
    title: 'Mess Catering Services for Boys & Girls Hostels',
    ref: 'SGSITS/Tender/2026/032',
    status: 'Closed',
    publishDate: 'Apr 10, 2026',
    lastDate: 'Apr 30, 2026',
    dept: 'Hostel Administration',
  },
  {
    title: 'Civil Works — Renovation of Administrative Block, Phase II',
    ref: 'SGSITS/Tender/2026/028',
    status: 'Closed',
    publishDate: 'Mar 20, 2026',
    lastDate: 'Apr 10, 2026',
    dept: 'Estate Office',
  },
  {
    title: 'Purchase of Books, Journals & Reference Materials for Central Library',
    ref: 'SGSITS/Tender/2026/022',
    status: 'Closed',
    publishDate: 'Mar 5, 2026',
    lastDate: 'Mar 25, 2026',
    dept: 'Central Library',
  },
  {
    title: 'Provision of Security Services for SGSITS Campus (2026–27)',
    ref: 'SGSITS/Tender/2026/018',
    status: 'Closed',
    publishDate: 'Feb 22, 2026',
    lastDate: 'Mar 15, 2026',
    dept: 'Estate Office',
  },
  {
    title: 'Purchase of Furniture for New Faculty Rooms',
    ref: 'SGSITS/Tender/2026/012',
    status: 'Closed',
    publishDate: 'Feb 10, 2026',
    lastDate: 'Mar 01, 2026',
    dept: 'Estate Office',
  },
]

const TendersPage: React.FC = () => {
  const open = tenders.filter(t => t.status === 'Open')
  const closed = tenders.filter(t => t.status === 'Closed')

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Procurement</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Tenders</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Procurement tenders, quotations and works notices — SGSITS Indore</p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded p-4 text-sm text-slate-600 font-sans">
        <p>All tender documents are available for download. Interested vendors must submit bids before the last date. For queries: <a href="mailto:purchase@sgsits.ac.in" className="text-accent-blue hover:underline">purchase@sgsits.ac.in</a> | 0731-2582115</p>
      </div>

      {/* Open Tenders */}
      {open.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold bg-green-50 text-green-700 border border-green-200 px-2.5 py-0.5 rounded">Active Tenders</span>
            <div className="flex-grow h-px bg-slate-200"></div>
          </div>
          <div className="space-y-3">
            {open.map((tender) => (
              <div key={tender.ref} className="bg-white rounded border border-slate-200 border-l-4 border-l-green-500 p-4 shadow-sm hover:border-slate-400 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-grow">
                    <FileText size={18} className="text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm text-primary">{tender.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500 font-medium">
                        <span>Ref: {tender.ref}</span>
                        <span>Dept: {tender.dept}</span>
                        <span className="text-red-600 font-bold">Last Date: {tender.lastDate}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-primary border border-primary/20 bg-primary/5 px-3 py-1.5 rounded hover:bg-primary hover:text-white transition-colors shrink-0">
                    <Download size={12} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Closed Tenders */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-0.5 rounded">Closed / Archived</span>
          <div className="flex-grow h-px bg-slate-200"></div>
        </div>
        <div className="space-y-3">
          {closed.map((tender) => (
            <div key={tender.ref} className="bg-white rounded border border-slate-200 p-4 shadow-sm hover:bg-slate-50 transition-colors opacity-75">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-grow">
                  <FileText size={18} className="text-slate-300 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm text-slate-700">{tender.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-400 font-medium">
                      <span>Ref: {tender.ref}</span>
                      <span>Published: {tender.publishDate}</span>
                      <span className="text-slate-500">Closed: {tender.lastDate}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 shrink-0">Closed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TendersPage
