import React from 'react'
import { Award, BookOpen, GraduationCap } from 'lucide-react'

const PGAdmission: React.FC = () => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto py-2">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[11px] uppercase font-serif tracking-widest text-accent font-semibold">Admissions</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-1 text-primary font-display">
          PG Admissions
        </h2>
        <p className="text-sm text-slate-500 mt-2 font-sans font-medium">
          Postgraduate entry pathways, qualification criteria, and program frameworks (M.Tech / MBA / MCA)
        </p>
      </div>

      {/* Central Announcement */}
      <div className="bg-white rounded-md p-6 border-l-4 border-l-accent border-y border-r border-slate-200 shadow-sm">
        <div className="space-y-3">
          <span className="bg-primary/5 text-primary border border-primary/10 px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider inline-block">
            Entrance-Based Selections
          </span>
          <h3 className="text-xl font-medium text-primary font-display">
            Comprehensive Eligibility & Counseling
          </h3>
          <p className="text-[14px] text-slate-650 leading-relaxed font-sans font-medium">
            Admission to postgraduate programs at SGSITS Indore is strictly based on national/state-level qualifying entrance examinations and centralized counseling conducted by the <strong>Directorate of Technical Education (DTE), Madhya Pradesh</strong> and the institute.
          </p>
        </div>
      </div>

      {/* PG Programs Matrix */}
      <div className="space-y-6">
        <div>
          <span className="text-[11px] uppercase font-serif tracking-widest text-accent font-semibold">Program Categories</span>
          <h3 className="text-2xl font-medium text-primary font-display mt-0.5">Postgraduate Offerings</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* M.Tech */}
          <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm flex flex-col justify-between hover:border-accent transition-colors duration-200">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <GraduationCap size={20} className="stroke-[1.5]" />
              </div>
              <h4 className="text-lg font-semibold text-primary font-display">Master of Technology (M.Tech)</h4>
              <p className="text-xs text-slate-550 font-medium font-sans leading-relaxed">
                Specialized technical streams designed for engineering professionals aiming for advanced R&D or corporate engineering careers.
              </p>
              <div className="border-t border-slate-100 pt-3 space-y-2">
                <span className="text-[10px] text-slate-450 uppercase font-bold block">Selection Basis</span>
                <span className="text-[13px] font-semibold text-slate-700 font-sans">GATE Score + DTE Counseling</span>
              </div>
            </div>
          </div>

          {/* MBA */}
          <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm flex flex-col justify-between hover:border-accent transition-colors duration-200">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <BookOpen size={20} className="stroke-[1.5]" />
              </div>
              <h4 className="text-lg font-semibold text-primary font-display">Master of Business Administration (MBA)</h4>
              <p className="text-xs text-slate-550 font-medium font-sans leading-relaxed">
                Strategic management tracks focusing on leadership, decision analysis, operational excellence, and enterprise innovation.
              </p>
              <div className="border-t border-slate-100 pt-3 space-y-2">
                <span className="text-[10px] text-slate-450 uppercase font-bold block">Selection Basis</span>
                <span className="text-[13px] font-semibold text-slate-700 font-sans">CMAT Score + GD/PI Selection</span>
              </div>
            </div>
          </div>

          {/* MCA */}
          <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm flex flex-col justify-between hover:border-accent transition-colors duration-200">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <Award size={20} className="stroke-[1.5]" />
              </div>
              <h4 className="text-lg font-semibold text-primary font-display">Master of Computer Applications (MCA)</h4>
              <p className="text-xs text-slate-550 font-medium font-sans leading-relaxed">
                Advanced software engineering, database systems, and application paradigms designed for modern IT landscapes.
              </p>
              <div className="border-t border-slate-100 pt-3 space-y-2">
                <span className="text-[10px] text-slate-450 uppercase font-bold block">Selection Basis</span>
                <span className="text-[13px] font-semibold text-slate-700 font-sans">MP Pre-MCA / NIMCET + Counseling</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Details Table (Printed Bulletin style) */}
      <div className="space-y-6">
        <div>
          <span className="text-[11px] uppercase font-serif tracking-widest text-accent font-semibold">Technical Framework</span>
          <h3 className="text-2xl font-medium text-primary font-display mt-0.5">Program Framework & Fees</h3>
        </div>

        <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-2.5 font-bold uppercase tracking-wider text-slate-550 text-[10px] w-1/4">Program</th>
                <th className="py-2.5 font-bold uppercase tracking-wider text-slate-550 text-[10px] w-1/3">Academic Eligibility</th>
                <th className="py-2.5 font-bold uppercase tracking-wider text-slate-550 text-[10px] w-1/4">Approximate Fee</th>
                <th className="py-2.5 text-right font-bold uppercase tracking-wider text-slate-550 text-[10px]">Financial Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-150">
              <tr>
                <td className="py-4">
                  <span className="font-semibold text-slate-800 text-[13px] block">M.Tech</span>
                  <span className="text-[10px] text-slate-450 font-semibold uppercase mt-0.5 block">Regular / Full-Time</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-650 leading-relaxed block text-xs">
                    B.E. / B.Tech or equivalent degree in relevant branch with at least 50% marks (45% for SC/ST/OBC category candidates).
                  </span>
                </td>
                <td className="py-4">
                  <span className="font-semibold text-primary font-display text-[14.5px] block">₹30,000 - ₹40,000</span>
                  <span className="text-[9px] text-slate-450 uppercase font-bold mt-0.5 block">per annum</span>
                </td>
                <td className="py-4 text-right">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 inline-block font-sans">
                    AICTE Stipend (GATE)
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <span className="font-semibold text-slate-800 text-[13px] block">MBA</span>
                  <span className="text-[10px] text-slate-450 font-semibold uppercase mt-0.5 block">Management Studies</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-650 leading-relaxed block text-xs">
                    Bachelor's degree of minimum 3 years duration with at least 50% marks (45% for reserved category candidates).
                  </span>
                </td>
                <td className="py-4">
                  <span className="font-semibold text-primary font-display text-[14.5px] block">₹50,000 - ₹60,000</span>
                  <span className="text-[9px] text-slate-450 uppercase font-bold mt-0.5 block">per annum</span>
                </td>
                <td className="py-4 text-right text-slate-400 italic">
                  Not Applicable
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <span className="font-semibold text-slate-800 text-[13px] block">MCA</span>
                  <span className="text-[10px] text-slate-450 font-semibold uppercase mt-0.5 block">Computer Applications</span>
                </td>
                <td className="py-4">
                  <span className="text-slate-650 leading-relaxed block text-xs">
                    BCA / Bachelor Degree in Computer Science or B.Sc./B.Com./B.A. with Mathematics at 10+2 level or Graduate level, with at least 50% marks.
                  </span>
                </td>
                <td className="py-4">
                  <span className="font-semibold text-primary font-display text-[14.5px] block">₹50,000 - ₹60,000</span>
                  <span className="text-[9px] text-slate-450 uppercase font-bold mt-0.5 block">per annum</span>
                </td>
                <td className="py-4 text-right text-slate-400 italic">
                  Not Applicable
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PGAdmission
