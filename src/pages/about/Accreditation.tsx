import React from 'react'
import { Award, Star, TrendingUp } from 'lucide-react'

const accreditations = [
  {
    icon: Award,
    title: 'NAAC Accreditation',
    grade: 'Grade A',
    status: 'Valid',
    validTill: '2026',
    color: '#0b2545',
    bgColor: '#ffffff',
    desc: 'National Assessment and Accreditation Council has accredited SGSITS with Grade A, recognizing the institute\'s commitment to quality education.'
  },
  {
    icon: Star,
    title: 'NBA Accreditation',
    grade: 'Accredited',
    status: 'Active',
    validTill: '2025-2027',
    color: '#bfa15f',
    bgColor: '#ffffff',
    desc: 'Multiple programs accredited by the National Board of Accreditation (NBA) under the Washington Accord.'
  },
  {
    icon: TrendingUp,
    title: 'NIRF Ranking',
    grade: 'Top 200',
    status: 'Engineering',
    validTill: '2024',
    color: '#0b2545',
    bgColor: '#f7f8fa',
    desc: 'Ranked among the top engineering institutes in India by the National Institutional Ranking Framework (NIRF), MHRD.'
  },
]

const nbaPrograms = [
  'Computer Engineering', 'Information Technology', 'Civil Engineering',
  'Mechanical Engineering', 'Electrical Engineering',
  'Electronics & Telecommunication Engineering', 'Electronics & Instrumentation Engineering',
]

const Accreditation: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Accreditation</h2>
        <p className="text-sm text-gray-500 mt-1">NAAC, NBA, and NIRF recognition</p>
      </div>

      {/* Accreditation Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {accreditations.map((a) => (
          <div key={a.title} className="rounded-md border overflow-hidden hover:border-slate-400 transition-colors" style={{ borderColor: a.color }}>
            <div className="p-2 text-center text-white text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: a.color }}>
              {a.status}
            </div>
            <div className="p-6 text-center" style={{ backgroundColor: a.bgColor }}>
              <a.icon size={40} style={{ color: a.color }} className="mx-auto mb-3" />
              <h3 className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>{a.title}</h3>
              <p className="text-3xl font-extrabold mt-2" style={{ color: a.color }}>{a.grade}</p>
              <p className="text-xs text-gray-500 mt-2">Valid till: {a.validTill}</p>
            </div>
            <div className="p-4 bg-white border-t border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* NBA Programs */}
      <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-primary)' }}>NBA Accredited Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {nbaPrograms.map((prog) => (
            <div key={prog} className="flex items-center gap-3 bg-white rounded-md p-3 border border-slate-200 shadow-sm">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
              <span className="text-sm font-medium text-gray-700">{prog}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accreditation
