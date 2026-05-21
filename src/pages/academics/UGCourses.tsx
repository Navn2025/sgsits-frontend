import React from 'react'
import { GraduationCap } from 'lucide-react'

const courses = [
  { name: 'Computer Engineering', seats: 120, code: 'CSE' },
  { name: 'Civil Engineering & Applied Mechanics', seats: 120, code: 'CE' },
  { name: 'Electrical Engineering', seats: 120, code: 'EE' },
  { name: 'Mechanical Engineering', seats: 120, code: 'ME' },
  { name: 'Electronics & Telecommunication Engg', seats: 60, code: 'ETC' },
  { name: 'Electronics & Instrumentation Engg', seats: 60, code: 'EI' },
  { name: 'Information Technology', seats: 60, code: 'IT' },
  { name: 'Biomedical Engineering', seats: 30, code: 'BM' },
  { name: 'Industrial & Production Engineering', seats: 30, code: 'IP' },
  { name: 'B.Pharm (Pharmacy)', seats: 60, code: 'PH' },
]

const UGCourses: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Undergraduate Programs</h2>
        <p className="text-sm text-gray-500 mt-1">B.Tech / B.Pharm programs offered at SGSITS</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-md p-4 text-center border border-slate-200 shadow-sm">
          <p className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>10</p>
          <p className="text-xs text-gray-500 mt-1">Programs</p>
        </div>
        <div className="bg-white rounded-md p-4 text-center border border-slate-200 shadow-sm">
          <p className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>780</p>
          <p className="text-xs text-gray-500 mt-1">Total Seats</p>
        </div>
        <div className="bg-white rounded-md p-4 text-center border border-slate-200 shadow-sm">
          <p className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>4 Years</p>
          <p className="text-xs text-gray-500 mt-1">Duration</p>
        </div>
        <div className="bg-white rounded-md p-4 text-center border border-slate-200 shadow-sm">
          <p className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>8</p>
          <p className="text-xs text-gray-500 mt-1">Semesters</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: 'var(--color-primary)' }}>
              <th className="text-left text-white px-4 py-3 font-semibold">#</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Program</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Code</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Intake</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => (
              <tr key={c.code} className="bg-white hover:bg-slate-50 transition-colors duration-150">
                <td className="px-4 py-3 border-b border-gray-100 text-gray-500">{i + 1}</td>
                <td className="px-4 py-3 border-b border-gray-100 font-medium flex items-center gap-2">
                  <GraduationCap size={16} style={{ color: 'var(--color-accent)' }} />
                  <span style={{ color: 'var(--color-primary)' }}>{c.name}</span>
                </td>
                <td className="px-4 py-3 border-b border-gray-100 text-gray-500 font-mono">{c.code}</td>
                <td className="px-4 py-3 border-b border-gray-100 font-semibold" style={{ color: 'var(--color-primary)' }}>{c.seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>Eligibility & Admission</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><span style={{ color: 'var(--color-accent)' }}>•</span> <strong>Eligibility:</strong> 10+2 with Physics, Chemistry, Mathematics (minimum 45% marks)</li>
          <li><span style={{ color: 'var(--color-accent)' }}>•</span> <strong>Admission:</strong> Through JEE Main score + MP DTE Online Counseling</li>
          <li><span style={{ color: 'var(--color-accent)' }}>•</span> <strong>Fee Structure:</strong> Approx. ₹45,000 – ₹55,000 per year (subject to revision)</li>
        </ul>
      </div>
    </div>
  )
}

export default UGCourses
