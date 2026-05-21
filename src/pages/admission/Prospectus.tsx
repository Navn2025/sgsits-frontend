import React from 'react'
import { FileText, Download, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const Prospectus: React.FC = () => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto py-2">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[11px] uppercase font-serif tracking-widest text-accent font-semibold">Downloads</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-1 text-primary font-display">
          Academic Prospectus
        </h2>
        <p className="text-sm text-slate-500 mt-2 font-sans font-medium">
          Comprehensive institutional brochures, academic directives, and campus profiles
        </p>
      </div>

      {/* Main Overview */}
      <div className="space-y-4 font-sans text-[14.5px] text-slate-650 leading-relaxed font-medium">
        <p>
          The SGSITS Academic Prospectus compiles vital institutional information outlining educational policies, degree requirements, program architectures, laboratory profiles, and placement benchmarks. 
        </p>
        <p>
          Designed for prospective candidates, currently enrolled students, and academic partners, it functions as the authoritative guide for the upcoming academic session.
        </p>
      </div>

      {/* Download Alert Card */}
      <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded bg-primary/5 flex items-center justify-center text-primary shrink-0 mt-0.5">
            <FileText size={24} className="stroke-[1.5]" />
          </div>
          <div>
            <h4 className="font-semibold text-[16px] text-primary font-display">SGSITS Institutional Prospectus</h4>
            <p className="text-xs text-slate-450 mt-1">Official comprehensive bulletin outlining curriculum, research profiles, and code of conduct.</p>
          </div>
        </div>

        <button 
          disabled
          className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-400 px-5 py-2.5 rounded text-xs font-bold transition-all shrink-0 cursor-not-allowed"
        >
          <Download size={14} className="stroke-[2.5]" />
          <span>Available Soon</span>
        </button>
      </div>

      {/* Printed Bulletin Guide Map */}
      <div className="space-y-6">
        <div>
          <span className="text-[11px] uppercase font-serif tracking-widest text-accent font-semibold">Immediate Information</span>
          <h3 className="text-2xl font-medium text-primary font-display mt-0.5">Direct Information Links</h3>
        </div>

        <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-2.5 font-bold uppercase tracking-wider text-slate-550 text-[10px] w-1/3">Target Segment</th>
                <th className="py-2.5 font-bold uppercase tracking-wider text-slate-550 text-[10px] w-1/2">Focus Area</th>
                <th className="py-2.5 text-right font-bold uppercase tracking-wider text-slate-550 text-[10px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-150">
              <tr>
                <td className="py-4">
                  <span className="font-semibold text-slate-800 text-[13px] block">Undergraduate Pathway</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-650 leading-relaxed block text-xs">
                    B.Tech and B.Pharm counseling procedures, JEE benchmarks, state domicile reserves, and fee setups.
                  </span>
                </td>
                <td className="py-4 text-right">
                  <Link 
                    to="/admission/ug" 
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-accent font-serif"
                  >
                    <span>View UG Details</span>
                    <ExternalLink size={12} />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <span className="font-semibold text-slate-800 text-[13px] block">Postgraduate Programs</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-650 leading-relaxed block text-xs">
                    M.Tech specialization tracks, GATE score structures, MBA management courses, and MCA program entries.
                  </span>
                </td>
                <td className="py-4 text-right">
                  <Link 
                    to="/admission/pg" 
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-accent font-serif"
                  >
                    <span>View PG Details</span>
                    <ExternalLink size={12} />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <span className="font-semibold text-slate-800 text-[13px] block">Doctoral Framework</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-650 leading-relaxed block text-xs font-sans">
                    Ph.D. research cycles, departmental entrance parameters, DRC presentations, and AICTE fellowship guidelines.
                  </span>
                </td>
                <td className="py-4 text-right">
                  <Link 
                    to="/admission/phd" 
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-accent font-serif"
                  >
                    <span>View Doctoral Details</span>
                    <ExternalLink size={12} />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Prospectus
