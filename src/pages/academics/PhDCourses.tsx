import React from 'react'
import { BookOpen, CheckCircle2, Clock } from 'lucide-react'

const departments = [
  { dept: 'Computer Engineering', areas: 'Machine Learning, NLP, Cybersecurity, Cloud Computing' },
  { dept: 'Information Technology', areas: 'Data Mining, IoT, Network Security, Big Data' },
  { dept: 'Civil Engineering', areas: 'Structural Engineering, Geotechnical, Water Resources, Transportation' },
  { dept: 'Mechanical Engineering', areas: 'Thermal, Manufacturing, Tribology, Robotics, CAD/CAM' },
  { dept: 'Electrical Engineering', areas: 'Power Systems, Control, Renewable Energy, Smart Grid' },
  { dept: 'Electronics & Telecomm', areas: 'VLSI, Signal Processing, Embedded Systems, Communication' },
  { dept: 'Electronics & Instrumentation', areas: 'Sensors, MEMS, Biomedical Instrumentation, Control' },
  { dept: 'Industrial & Production', areas: 'Supply Chain, Lean Manufacturing, Quality, Industrial Automation' },
  { dept: 'Applied Mathematics', areas: 'Operations Research, Fluid Mechanics, Mathematical Modelling' },
  { dept: 'Applied Physics', areas: 'Optoelectronics, Nanomaterials, Plasma Physics, Photonics' },
  { dept: 'Applied Chemistry', areas: 'Green Chemistry, Polymer Science, Electrochemistry, Nanochemistry' },
  { dept: 'Management Studies', areas: 'Finance, Marketing, HR, Operations Research, Entrepreneurship' },
  { dept: 'Pharmacy', areas: 'Drug Delivery, Pharmacology, Pharmaceutical Analysis, Herbal Medicine' },
]

const processSteps = [
  { step: 'Notification', desc: 'SGSITS publishes PhD admission notification (typically July-August and January-February)' },
  { step: 'Application', desc: 'Apply online/offline with academic documents, research proposal, and application fee' },
  { step: 'Written Test', desc: 'Departmental written test (research aptitude + subject knowledge). GATE/NET holders may be exempt' },
  { step: 'Interview', desc: 'Shortlisted candidates appear for interview before departmental research committee' },
  { step: 'Admission', desc: 'Selected candidates register and identify thesis supervisor (co-guide optional)' },
  { step: 'Course Work', desc: '1-year compulsory course work followed by comprehensive viva and research work' },
]

const PhDCourses: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Academics</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Ph.D. Programs</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Doctoral Research Programs — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          SGSITS offers <strong>Ph.D. (Doctor of Philosophy)</strong> programs across all 13 academic departments through
          <strong> Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</strong> and <strong>Devi Ahilya Vishwavidyalaya (DAVV)</strong>.
          The institute has 200+ active research scholars and 100+ faculty supervisors with funded research projects
          from DST, AICTE, SERB, and other government bodies.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: '200+', label: 'Active Scholars' },
          { value: '100+', label: 'PhD Supervisors' },
          { value: '13', label: 'Departments' },
          { value: '3–6 Yrs', label: 'Program Duration' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-2xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Departments & Research Areas */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Research</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Departments & Research Areas</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th className="text-left text-white px-4 py-3 font-semibold">Department</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Key Research Areas</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, i) => (
                <tr key={i} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 border-b border-slate-100 font-medium text-primary">{dept.dept}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600 text-xs">{dept.areas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Eligibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 border border-slate-200 rounded p-5">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
            <BookOpen size={16} className="text-accent" />
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Eligibility Criteria</h4>
          </div>
          <div className="space-y-2 text-sm text-slate-600 font-sans">
            {[
              'M.Tech/ME with 55% marks (50% for SC/ST)',
              'M.Sc./MCA/MBA with 55% for respective departments',
              'GATE/NET qualified candidates may be exempt from written test',
              'Full-time and Part-time (sponsored) PhD options available',
              'Industry professionals with 5+ years experience eligible for Part-time',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-slate-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded p-5">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
            <Clock size={16} className="text-accent" />
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Fellowship & Funding</h4>
          </div>
          <div className="space-y-2 text-sm text-slate-600 font-sans">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span>GATE/NET Scholars (Full-time)</span>
              <span className="font-semibold text-[#bfa15f]">₹12,400/month</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span>Sponsored/Industry Scholars</span>
              <span className="font-semibold text-slate-700">Employer Funded</span>
            </div>
            <div className="flex justify-between py-1">
              <span>DST/SERB Project Scholars</span>
              <span className="font-semibold text-slate-700">As per project grant</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">SGSITS also offers fee waivers for sponsored students</p>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Admission</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Admission Process</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {processSteps.map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded p-4 shadow-sm">
              <span className="text-2xl font-display font-bold text-accent/30">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="font-bold text-sm text-primary mt-1">{s.step}</h4>
              <p className="text-xs text-slate-500 font-medium font-sans mt-1 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhDCourses
