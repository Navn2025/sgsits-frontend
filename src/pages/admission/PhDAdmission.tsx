import React from 'react'
import { ClipboardList, GraduationCap, Calendar } from 'lucide-react'

const PhDAdmission: React.FC = () => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto py-2">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[11px] uppercase font-serif tracking-widest text-accent font-semibold">Admissions</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-1 text-primary font-display">
          Ph.D. Admissions
        </h2>
        <p className="text-sm text-slate-500 mt-2 font-sans font-medium">
          Doctoral research pathways, enrollment schedules, and selection frameworks
        </p>
      </div>

      {/* Central Notification */}
      <div className="bg-white rounded-md p-6 border-l-4 border-l-accent border-y border-r border-slate-200 shadow-sm">
        <div className="space-y-3">
          <span className="bg-primary/5 text-primary border border-primary/10 px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider inline-block">
            Research Admissions
          </span>
          <h3 className="text-xl font-medium text-primary font-display">
            Bi-Annual Doctoral Intake
          </h3>
          <p className="text-[14px] text-slate-650 leading-relaxed font-sans font-medium">
            Ph.D. admissions at SGSITS Indore are conducted twice a year for the <strong>January and July academic terms</strong>. Selections are determined through a comprehensive departmental entrance test followed by an interview before the research committee.
          </p>
        </div>
      </div>

      {/* Doctoral Framework Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Intake Schedule */}
        <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm flex flex-col justify-between hover:border-accent transition-colors duration-200">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary shrink-0">
              <Calendar size={20} className="stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-semibold text-primary font-display">Doctoral Cycles</h4>
            <p className="text-xs text-slate-550 font-medium font-sans leading-relaxed">
              Applications are invited bi-annually. The selection cycles operate systematically to onboard dedicated scholars.
            </p>
            <div className="border-t border-slate-100 pt-3 space-y-2">
              <span className="text-[10px] text-slate-450 uppercase font-bold block">Admissions Cycle</span>
              <span className="text-[13px] font-semibold text-slate-700 font-sans">January & July Cohorts</span>
            </div>
          </div>
        </div>

        {/* Evaluation Pattern */}
        <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm flex flex-col justify-between hover:border-accent transition-colors duration-200">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary shrink-0">
              <ClipboardList size={20} className="stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-semibold text-primary font-display">Evaluation Framework</h4>
            <p className="text-xs text-slate-550 font-medium font-sans leading-relaxed">
              Comprises a screening of academic credentials, a written department test, and a detailed research presentation.
            </p>
            <div className="border-t border-slate-100 pt-3 space-y-2">
              <span className="text-[10px] text-slate-450 uppercase font-bold block">Exemption Rule</span>
              <span className="text-[13px] font-semibold text-slate-700 font-sans">GATE/NET Scholars Exempted</span>
            </div>
          </div>
        </div>

        {/* Financial Support */}
        <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm flex flex-col justify-between hover:border-accent transition-colors duration-200">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary shrink-0">
              <GraduationCap size={20} className="stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-semibold text-primary font-display">Research Fellowship</h4>
            <p className="text-xs text-slate-550 font-medium font-sans leading-relaxed">
              Full-time GATE or UGC/CSIR-NET qualified scholars are eligible to receive monthly stipends and institutional fellowships.
            </p>
            <div className="border-t border-slate-100 pt-3 space-y-2">
              <span className="text-[10px] text-slate-450 uppercase font-bold block">Fellowship Guidelines</span>
              <span className="text-[13px] font-semibold text-slate-700 font-sans">Per AICTE / UGC Norms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Program Details Table (Printed Bulletin style) */}
      <div className="space-y-6">
        <div>
          <span className="text-[11px] uppercase font-serif tracking-widest text-accent font-semibold">Technical Framework</span>
          <h3 className="text-2xl font-medium text-primary font-display mt-0.5">Eligibility & Selection Framework</h3>
        </div>

        <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-2.5 font-bold uppercase tracking-wider text-slate-550 text-[10px] w-1/4">Metric</th>
                <th className="py-2.5 font-bold uppercase tracking-wider text-slate-550 text-[10px] w-3/4">Institutional Guidelines & Norms</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-150">
              <tr>
                <td className="py-4">
                  <span className="font-semibold text-slate-800 text-[13px] block">Academic Eligibility</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-650 leading-relaxed block text-xs">
                    M.Tech / M.E. / M.Pharm / M.Sc. / MBA or equivalent post-graduate degree in a relevant discipline with at least 55% aggregate marks (50% aggregate marks for SC/ST/OBC category candidates).
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <span className="font-semibold text-slate-800 text-[13px] block">Selection Pipeline</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-650 leading-relaxed block text-xs">
                    Application Screening & Verification &rarr; Departmental Written Entrance Test &rarr; Presentation of Research Proposal &rarr; Interview before the Departmental Research Committee (DRC).
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <span className="font-semibold text-slate-800 text-[13px] block">Research Modes</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-650 leading-relaxed block text-xs font-sans">
                    <strong>Full-time Scholars:</strong> Actively engage in departmental laboratories and receive institutional fellowships. <br />
                    <strong>Part-time Scholars:</strong> Available for working professionals or faculty members, subject to submitting a valid No Objection Certificate (NOC) from their employer.
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PhDAdmission
