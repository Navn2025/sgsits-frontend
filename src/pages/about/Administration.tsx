import React from 'react'
import { Mail, Phone } from 'lucide-react'

const admins = [
  { title: 'Director', name: 'Prof. (Dr.) Rakesh Kumar Bajaj', email: 'director@sgsits.ac.in', phone: '0731-2582100' },
  { title: 'Deputy Director', name: 'Prof. S.K. Jain', email: 'deputydirector@sgsits.ac.in', phone: '0731-2582102' },
  { title: 'Dean (Academics)', name: 'Prof. R.K. Pandit', email: 'deanacademics@sgsits.ac.in', phone: '0731-2582103' },
  { title: 'Dean (Student Welfare)', name: 'Prof. M.L. Sharma', email: 'deansw@sgsits.ac.in', phone: '0731-2582104' },
  { title: 'Dean (R&D)', name: 'Prof. A.K. Tripathi', email: 'deanrd@sgsits.ac.in', phone: '0731-2582105' },
  { title: 'Registrar', name: 'Shri P.K. Verma', email: 'registrar@sgsits.ac.in', phone: '0731-2582124' },
  { title: 'Controller of Examinations', name: 'Prof. V.K. Gupta', email: 'coe@sgsits.ac.in', phone: '0731-2582106' },
  { title: 'Chief Warden', name: 'Prof. N.K. Joshi', email: 'chiefwarden@sgsits.ac.in', phone: '0731-2582800' },
  { title: 'Head Librarian', name: 'Dr. S.P. Singh', email: 'library@sgsits.ac.in', phone: '0731-2582700' },
  { title: 'Estate Officer', name: 'Shri R.S. Patel', email: 'estate@sgsits.ac.in', phone: '0731-2582110' },
]

const Administration: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Administration</h2>
        <p className="text-sm text-gray-500 mt-1">Key administrative positions at SGSITS</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {admins.map((admin) => (
          <div key={admin.title} className="bg-white rounded-md border border-gray-200 p-5 hover:border-slate-400 transition-colors">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-accent)' }}>{admin.title}</p>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{admin.name}</h3>
            <div className="mt-3 space-y-1.5 text-sm text-gray-600">
              <p className="flex items-center gap-2"><Mail size={14} style={{ color: 'var(--color-accent)' }} /> {admin.email}</p>
              <p className="flex items-center gap-2"><Phone size={14} style={{ color: 'var(--color-accent)' }} /> {admin.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Administration
