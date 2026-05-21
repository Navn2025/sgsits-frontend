import React from 'react'
import { Award, DollarSign, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Entrance Exam (JEE Main)',
    desc: 'Candidates must appear for the national level Joint Entrance Examination (JEE Main) conducted by NTA.'
  },
  {
    num: '02',
    title: 'DTE Online Registration',
    desc: 'Register on the DTE Madhya Pradesh Online counseling portal and complete online document verification.'
  },
  {
    num: '03',
    title: 'Choice Filling & Locking',
    desc: 'Log in to the counseling dashboard, select SGSITS Indore as the primary choice, lock branch preferences.'
  },
  {
    num: '04',
    title: 'Allotment & Campus Reporting',
    desc: 'Check DTE seat allotment, report to the SGSITS campus, verify physical documents, and pay the first-year fee.'
  }
]

const eligibilityList = [
  'Successful completion of 10+2 (or equivalent) with Physics, Chemistry, and Mathematics (PCM).',
  'Minimum 45% aggregate marks in PCM (40% aggregate for SC/ST/OBC category candidates).',
  'A valid, non-zero JEE Main score card for the current academic session.',
  'Domicile certificates of MP for claiming state-level category reserves.'
]

const UGAdmission: React.FC = () => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto py-2">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[11px] uppercase font-serif tracking-widest text-accent font-semibold">Admissions</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-1 text-primary font-display">
          UG Admissions (B.Tech / B.Pharm)
        </h2>
        <p className="text-sm text-slate-500 mt-2 font-sans font-medium">
          Undergraduate entry pathways, eligibility frameworks, and enrollment fees
        </p>
      </div>

      {/* Central Notification / Intro Card */}
      <div className="bg-white rounded-md p-6 border-l-4 border-l-accent border-y border-r border-slate-200 shadow-sm">
        <div className="space-y-3">
          <span className="bg-primary/5 text-primary border border-primary/10 px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider inline-block">
            Centralized Counseling
          </span>
          <h3 className="text-xl font-medium text-primary font-display">
            Admission via DTE MP Counseling
          </h3>
          <p className="text-[14px] text-slate-650 leading-relaxed font-sans font-medium">
            Admissions to all undergraduate engineering (B.Tech) and pharmacy (B.Pharm) courses at SGSITS Indore are strictly handled through centralized online counseling regulated by the <strong>Directorate of Technical Education (DTE), Madhya Pradesh</strong>.
          </p>
        </div>
      </div>

      {/* Process Timeline Steps */}
      <div className="space-y-6">
        <div>
          <span className="text-[11px] uppercase font-serif tracking-widest text-accent font-semibold">Step-by-step Guide</span>
          <h3 className="text-2xl font-medium text-primary font-display mt-0.5">Counseling & Entry Process</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-md p-5 shadow-sm flex flex-col justify-between hover:border-accent transition-colors duration-200"
            >
              <div className="space-y-3">
                <span className="text-3xl font-semibold text-accent/40 font-display block">
                  {item.num}
                </span>
                <h4 className="text-[15px] font-semibold text-primary font-display leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-550 font-medium font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Eligibility and Fee Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Eligibility Card */}
        <div className="bg-white rounded-md p-6 border border-slate-200 space-y-5 shadow-sm">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary shrink-0">
              <Award size={20} className="stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-medium text-primary font-display">Eligibility Criteria</h4>
          </div>

          <div className="space-y-4">
            {eligibilityList.map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5 stroke-[2]" />
                <span className="text-[13px] font-medium text-slate-650 leading-relaxed font-sans">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fees Structure Card styled like a printed bulletin table */}
        <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
              <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <DollarSign size={20} className="stroke-[1.5]" />
              </div>
              <h4 className="text-lg font-medium text-primary font-display">Fee & Expenses</h4>
            </div>

            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="py-2.5 font-bold uppercase tracking-wider text-slate-550 text-[10px] w-2/3">Fee Component</th>
                  <th className="py-2.5 text-right font-bold uppercase tracking-wider text-slate-550 text-[10px]">Amount & Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                <tr>
                  <td className="py-3">
                    <span className="font-semibold text-slate-800 block text-[13px]">Annual Tuition Fee</span>
                    <span className="text-[10px] text-slate-450 font-medium block mt-0.5">Approximate first-year academic fee</span>
                  </td>
                  <td className="py-3 text-right">
                    <span className="text-[15px] font-semibold text-primary font-display block">₹45,000 - ₹55,000</span>
                    <span className="text-[9px] text-slate-450 uppercase font-bold block mt-0.5">per annum</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">
                    <span className="font-semibold text-slate-800 block text-[13px]">Hostel & Mess Charges</span>
                    <span className="text-[10px] text-slate-450 font-medium block mt-0.5">Subject to room availability</span>
                  </td>
                  <td className="py-3 text-right">
                    <span className="text-[13px] font-semibold text-slate-650 block">Charged Separately</span>
                    <span className="text-[9px] text-slate-450 uppercase font-bold block mt-0.5">on allotment</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-200 pt-3.5 mt-5">
            <p className="text-[10px] text-slate-450 font-medium leading-relaxed italic">
              *All fee configurations are subject to direct revisions and amendments by the State Fee Regulatory Committee (SFRC), Madhya Pradesh.
            </p>
          </div>
        </div>
      </div>

      {/* Redirection DTE Action CTA Banner */}
      <div className="bg-primary text-white rounded-md p-6 border-l-4 border-l-accent shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center text-accent shrink-0">
            <ExternalLink size={24} className="stroke-[1.5]" />
          </div>
          <div>
            <h4 className="font-semibold text-base font-display">DTE MP Counseling Portal</h4>
            <p className="text-xs text-slate-300 mt-1 font-sans">Register, fill choices, and check official counseling schedules on DTE</p>
          </div>
        </div>

        <a 
          href="https://dte.mponline.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-5 py-2.5 rounded text-xs font-bold transition-all shrink-0 active:scale-95 shadow-sm"
        >
          <span>Visit DTE Portal</span>
          <ArrowRight size={14} className="stroke-[2.5]" />
        </a>
      </div>
    </div>
  )
}

export default UGAdmission
