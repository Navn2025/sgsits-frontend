import React from 'react'

const members = [
  { role: 'Chairman', name: 'Nominee of Govt. of Madhya Pradesh', category: 'Government' },
  { role: 'Member Secretary', name: 'Director, SGSITS Indore', category: 'Institute' },
  { role: 'Member', name: 'Nominee of RGPV, Bhopal', category: 'University' },
  { role: 'Member', name: 'Nominee of DAVV, Indore', category: 'University' },
  { role: 'Member', name: 'Nominee of AICTE, New Delhi', category: 'Regulatory' },
  { role: 'Member', name: 'Nominee of DTE, Madhya Pradesh', category: 'Government' },
  { role: 'Member', name: 'Industry Representative – I', category: 'Industry' },
  { role: 'Member', name: 'Industry Representative – II', category: 'Industry' },
  { role: 'Member', name: 'Senior Professor – I', category: 'Faculty' },
  { role: 'Member', name: 'Senior Professor – II', category: 'Faculty' },
  { role: 'Member', name: 'Registrar, SGSITS (Ex-Officio)', category: 'Institute' },
]

const GoverningBody: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Governing Body</h2>
        <p className="text-sm text-gray-500 mt-1">Board of Governors — SGSITS Indore</p>
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed">
        The Governing Body is the highest decision-making authority of the institute. It comprises representatives 
        from the government, affiliated universities, regulatory bodies, industry, and the institute faculty. The 
        body provides strategic direction and oversees the overall administration and academic affairs.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: 'var(--color-primary)' }}>
              <th className="text-left text-white px-4 py-3 font-semibold">#</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Designation / Role</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Representative</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Category</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="bg-white hover:bg-slate-50 transition-colors duration-150">
                <td className="px-4 py-3 border-b border-gray-100 text-gray-500">{i + 1}</td>
                <td className="px-4 py-3 border-b border-gray-100 font-medium" style={{ color: 'var(--color-primary)' }}>{m.role}</td>
                <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{m.name}</td>
                <td className="px-4 py-3 border-b border-gray-100">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-semibold ${
                    m.category === 'Government' ? 'border border-blue-200 text-blue-700 bg-white' :
                    m.category === 'University' ? 'border border-purple-200 text-purple-700 bg-white' :
                    m.category === 'Industry' ? 'border border-green-200 text-green-700 bg-white' :
                    m.category === 'Regulatory' ? 'border border-orange-200 text-orange-700 bg-white' :
                    m.category === 'Faculty' ? 'border border-teal-200 text-teal-700 bg-white' :
                    'border border-slate-200 text-gray-700 bg-white'
                  }`}>{m.category}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GoverningBody
