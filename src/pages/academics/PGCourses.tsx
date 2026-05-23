import React from 'react'
import { GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react'

const mTechPrograms = [
  { program: 'M.Tech — Computer Engineering', dept: 'Computer Engineering', intake: 18, eligibility: 'B.E./B.Tech in CS/IT, GATE' },
  { program: 'M.Tech — Information Technology', dept: 'Information Technology', intake: 18, eligibility: 'B.E./B.Tech in IT/CS, GATE' },
  { program: 'M.Tech — Structural Engineering', dept: 'Civil Engineering', intake: 18, eligibility: 'B.E./B.Tech Civil Engg, GATE' },
  { program: 'M.Tech — Power Systems', dept: 'Electrical Engineering', intake: 18, eligibility: 'B.E./B.Tech Electrical, GATE' },
  { program: 'M.Tech — Machine Design', dept: 'Mechanical Engineering', intake: 18, eligibility: 'B.E./B.Tech Mechanical, GATE' },
  { program: 'M.Tech — VLSI Design', dept: 'Electronics & Telecomm', intake: 18, eligibility: 'B.E./B.Tech EC/EI/EE, GATE' },
  { program: 'M.Tech — Signal Processing', dept: 'Electronics & Instrumentation', intake: 18, eligibility: 'B.E./B.Tech EC/EI, GATE' },
  { program: 'M.Tech — Thermal Engineering', dept: 'Mechanical Engineering', intake: 18, eligibility: 'B.E./B.Tech Mechanical, GATE' },
  { program: 'M.Pharm — Pharmaceutical Sciences', dept: 'Pharmacy', intake: 15, eligibility: 'B.Pharm, GPAT' },
  { program: 'MBA — Business Administration', dept: 'Management Studies', intake: 120, eligibility: 'Any Graduate, MAT/CAT/MP PET' },
  { program: 'MCA — Computer Applications', dept: 'CTA', intake: 60, eligibility: 'B.Sc. with Maths, NIMCET/MP PET' },
]

const PGCourses: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Academics</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Postgraduate Programs</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">M.Tech / M.Pharm / MBA / MCA Programs — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          SGSITS offers a comprehensive range of <strong>postgraduate programs</strong> across engineering, management, and pharmacy disciplines.
          M.Tech programs are primarily GATE-based with seats filled through CCMT (Centralized Counselling for M.Tech/M.Arch/M.Plan)
          or RGPV counseling. MBA and MCA admissions are through MP PET or national-level entrance examinations.
          All programs are 2 years (4 semesters) in duration.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: '11+', label: 'PG Programs' },
          { value: '2 Years', label: 'Program Duration' },
          { value: 'GATE/MAT', label: 'Primary Entrance' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Programs Table */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Programs Offered</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Complete Program List</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th className="text-left text-white px-4 py-3 font-semibold">Program</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Department</th>
                <th className="text-center text-white px-4 py-3 font-semibold">Intake</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {mTechPrograms.map((prog, i) => (
                <tr key={i} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 border-b border-slate-100 font-medium text-primary">{prog.program}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">{prog.dept}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-center font-bold text-slate-700">{prog.intake}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-500 text-xs">{prog.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Eligibility & Fee */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 border border-slate-200 rounded p-5">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
            <GraduationCap size={16} className="text-accent" />
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">General Eligibility</h4>
          </div>
          <div className="space-y-2 text-sm text-slate-600 font-sans">
            {[
              'M.Tech: Relevant B.E./B.Tech degree with GATE score',
              'M.Pharm: B.Pharm with GPAT score',
              'MBA: Any graduate with MAT/CAT score ≥60 percentile',
              'MCA: B.Sc. with Mathematics, NIMCET / MP PET',
              'Minimum 55% marks in qualifying degree (50% for SC/ST)',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-slate-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded p-5">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">Fee Structure</h4>
          <div className="text-sm space-y-2 font-sans text-slate-600">
            <div className="flex justify-between">
              <span>M.Tech Annual Fee</span>
              <span className="font-semibold text-slate-800">₹30,000 – ₹40,000</span>
            </div>
            <div className="flex justify-between">
              <span>MBA Annual Fee</span>
              <span className="font-semibold text-slate-800">₹50,000 – ₹70,000</span>
            </div>
            <div className="flex justify-between">
              <span>GATE Scholars (Full-time)</span>
              <span className="font-semibold text-[#bfa15f]">₹12,400/month stipend</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 italic">*Fee subject to SFRC revision</p>
          </div>
        </div>
      </div>

      {/* Admission Portal */}
      <div className="bg-primary text-white rounded p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold font-display text-base">CCMT — Centralized Counselling for M.Tech</h4>
          <p className="text-sm text-slate-300 mt-1">M.Tech admissions at SGSITS are through CCMT portal</p>
        </div>
        <a href="https://ccmt.admissions.nic.in" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded text-xs font-bold hover:bg-accent/90 transition-colors shrink-0">
          CCMT Portal <ExternalLink size={12} />
        </a>
      </div>
    </div>
  )
}

export default PGCourses
