import React from 'react'
import { Shield, CheckCircle2, Award, Phone, Mail } from 'lucide-react'

const activities = [
  'Weekly parade and drill practice (Army & Navy wings)',
  'Annual Training Camp (ATC) — 10 days',
  'Combined Annual Training Camp (CATC) — 28 days',
  'Republic Day Parade preparation and participation (Delhi)',
  'Trekking, rock climbing, and adventure camps',
  'Shooting range practice (with .22 bore rifles)',
  'First Aid and disaster management training',
  'Social service activities in adopted villages',
  'National Integration Camp (NIC) participation',
  'RDC (Republic Day Camp) selection trials',
]

const benefits = [
  { cert: 'A Certificate', desc: 'After 1st year — basic eligibility for government benefits' },
  { cert: 'B Certificate', desc: 'After 2nd year with camp — provides bonus marks in IPS/IFS selection, entry to PSBs' },
  { cert: 'C Certificate', desc: 'After 3rd year — direct entry into armed forces (officer level), bonus in government exams' },
]

const NCC: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Student Welfare</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">NCC Wing</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">National Cadet Corps — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          SGSITS has an active <strong>NCC unit</strong> (Army Wing) under the <strong>NCC Directorate, Madhya Pradesh & Chhattisgarh</strong>.
          The unit provides military training, character-building, and national integration exposure to students who
          wish to develop leadership, discipline, and patriotism alongside their technical education.
          The unit has a sanctioned strength of <strong>100 cadets</strong> across all years.
        </p>
      </div>

      {/* Key Info */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: '100', label: 'Cadets Strength' },
          { value: 'Army Wing', label: 'Wing Type' },
          { value: '1960s', label: 'Established' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Activities */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Activities</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">NCC Activities & Training</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {activities.map((act) => (
            <div key={act} className="flex items-start gap-2.5 bg-white border border-slate-200 rounded p-3 text-sm">
              <Shield size={14} className="text-slate-600 shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium font-sans">{act}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Certification</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">NCC Certificates & Benefits</h3>
        <div className="space-y-3">
          {benefits.map((b) => (
            <div key={b.cert} className="flex items-start gap-3 bg-white border border-slate-200 rounded p-4">
              <Award size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-primary">{b.cert}</h4>
                <p className="text-sm text-slate-600 font-medium font-sans mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enrollment */}
      <div className="bg-slate-50 border border-slate-200 rounded p-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
          <CheckCircle2 size={16} className="text-accent" />
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider">How to Enroll</h4>
        </div>
        <div className="text-sm text-slate-600 space-y-2 font-sans">
          <p>• Open to all 1st and 2nd year students (UG only)</p>
          <p>• Physical fitness test and interview conducted at beginning of academic year</p>
          <p>• Weekly parade scheduled on Wednesday & Friday (5:00 PM – 7:00 PM)</p>
          <p>• Uniform provided by NCC. Stipend and allowances during camps as per Govt. norms</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 text-sm font-sans">
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-accent" />
            <span className="text-slate-600">Contact Dean Student Welfare: 0731-2582105</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={13} className="text-accent" />
            <a href="mailto:dsw@sgsits.ac.in" className="text-accent-blue hover:underline">dsw@sgsits.ac.in</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NCC
