import React from 'react'

const councilMembers = [
  { role: 'Chairman', name: 'Director, SGSITS', category: 'Ex-Officio' },
  { role: 'Member', name: 'Deputy Director', category: 'Ex-Officio' },
  { role: 'Member', name: 'Dean (Academics)', category: 'Ex-Officio' },
  { role: 'Member', name: 'Dean (R&D)', category: 'Ex-Officio' },
  { role: 'Member', name: 'All Heads of Departments', category: 'Ex-Officio' },
  { role: 'Member', name: 'Controller of Examinations', category: 'Ex-Officio' },
  { role: 'Member', name: 'Registrar', category: 'Ex-Officio' },
  { role: 'Member', name: 'Three Senior Professors (Nominated)', category: 'Nominated' },
  { role: 'Member', name: 'Two External Experts from Academia', category: 'External' },
  { role: 'Member', name: 'One Industry Expert', category: 'External' },
  { role: 'Member', name: 'RGPV Nominee', category: 'University' },
  { role: 'Member Secretary', name: 'Dean (Academics)', category: 'Ex-Officio' },
]

const AcademicCouncil: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Academic Council</h2>
        <p className="text-sm text-gray-500 mt-1">Apex academic body of the institute</p>
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed">
        The <strong>Academic Council</strong> is the apex academic body responsible for maintaining standards of instruction, 
        education, and examination within the institute. Being an autonomous institution, the Academic Council has the 
        authority to approve new programs, modify curricula, set examination standards, and ensure academic quality.
      </p>

      <div>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Council Composition</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th className="text-left text-white px-4 py-3 font-semibold">#</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Designation</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Member</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Category</th>
              </tr>
            </thead>
            <tbody>
              {councilMembers.map((m, i) => (
                <tr key={i} className="bg-white hover:bg-slate-50 transition-colors duration-150">
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-500">{i + 1}</td>
                  <td className="px-4 py-3 border-b border-gray-100 font-medium" style={{ color: 'var(--color-primary)' }}>{m.role}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{m.name}</td>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      m.category === 'Ex-Officio' ? 'border border-[#0b2545]/30 text-[#0b2545] bg-white shadow-sm' :
                      m.category === 'External' ? 'border border-[#bfa15f]/40 text-[#bfa15f] bg-white shadow-sm' :
                      m.category === 'Nominated' ? 'border border-[#0b2545]/40 text-[#0b2545] bg-white shadow-sm' :
                      'border border-[#bfa15f]/50 text-[#bfa15f] bg-white shadow-sm'
                    }`}>{m.category}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>Key Functions</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2"><span style={{ color: 'var(--color-accent)' }}>•</span> Approval of new academic programs and courses</li>
          <li className="flex items-start gap-2"><span style={{ color: 'var(--color-accent)' }}>•</span> Curriculum design, revision, and updation</li>
          <li className="flex items-start gap-2"><span style={{ color: 'var(--color-accent)' }}>•</span> Setting examination rules and evaluation standards</li>
          <li className="flex items-start gap-2"><span style={{ color: 'var(--color-accent)' }}>•</span> Academic calendar planning</li>
          <li className="flex items-start gap-2"><span style={{ color: 'var(--color-accent)' }}>•</span> OBE and NEP 2020 implementation oversight</li>
        </ul>
      </div>
    </div>
  )
}

export default AcademicCouncil
