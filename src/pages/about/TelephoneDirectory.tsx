import React, { useState } from 'react'
import { Search, Phone } from 'lucide-react'

const directory = [
  { department: 'Director Office', name: 'Director', phone: '0731-2582100', ext: '100' },
  { department: 'Registrar Office', name: 'Registrar', phone: '0731-2582124', ext: '124' },
  { department: 'Dean Academics', name: 'Dean (Academics)', phone: '0731-2582103', ext: '103' },
  { department: 'Dean Student Welfare', name: 'Dean (SW)', phone: '0731-2582104', ext: '104' },
  { department: 'Computer Engineering', name: 'HOD', phone: '0731-2582401', ext: '401' },
  { department: 'Civil Engineering', name: 'HOD', phone: '0731-2582301', ext: '301' },
  { department: 'Electrical Engineering', name: 'HOD', phone: '0731-2582201', ext: '201' },
  { department: 'Mechanical Engineering', name: 'HOD', phone: '0731-2582501', ext: '501' },
  { department: 'Electronics & Telecomm', name: 'HOD', phone: '0731-2582601', ext: '601' },
  { department: 'Electronics & Instrumentation', name: 'HOD', phone: '0731-2582602', ext: '602' },
  { department: 'Information Technology', name: 'HOD', phone: '0731-2582403', ext: '403' },
  { department: 'Applied Mathematics', name: 'HOD', phone: '0731-2582701', ext: '701' },
  { department: 'Applied Physics', name: 'HOD', phone: '0731-2582435', ext: '435' },
  { department: 'Applied Chemistry', name: 'HOD', phone: '0731-2582181', ext: '181' },
  { department: 'Biomedical Engineering', name: 'HOD', phone: '0731-2582471', ext: '471' },
  { department: 'Industrial & Production', name: 'HOD', phone: '0731-2582450', ext: '450' },
  { department: 'Management Studies (MBA)', name: 'HOD', phone: '0731-2582801', ext: '801' },
  { department: 'Pharmacy', name: 'HOD', phone: '0731-2582850', ext: '850' },
  { department: 'Humanities & Social Sciences', name: 'HOD', phone: '0731-2582750', ext: '750' },
  { department: 'Central Library', name: 'Librarian', phone: '0731-2582700', ext: '700' },
  { department: 'Computer Center', name: 'In-charge', phone: '0731-2582402', ext: '402' },
  { department: 'Boys Hostel', name: 'Warden', phone: '0731-2582800', ext: '800' },
  { department: 'Girls Hostel', name: 'Warden', phone: '0731-2582802', ext: '802' },
  { department: 'Exam Cell', name: 'COE', phone: '0731-2582106', ext: '106' },
  { department: 'T&P Cell', name: 'TPO', phone: '0731-2582150', ext: '150' },
]

const TelephoneDirectory: React.FC = () => {
  const [search, setSearch] = useState('')

  const filtered = directory.filter(d =>
    d.department.toLowerCase().includes(search.toLowerCase()) ||
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.phone.includes(search)
  )

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Telephone Directory</h2>
        <p className="text-sm text-gray-500 mt-1">Department-wise contact numbers</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by department, name, or phone number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:border-transparent"
          style={{ '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: 'var(--color-primary)' }}>
              <th className="text-left text-white px-4 py-3 font-semibold">#</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Department / Office</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Contact Person</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Phone Number</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Ext.</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d, i) => (
              <tr key={d.department} className="bg-white hover:bg-slate-50 transition-colors duration-150">
                <td className="px-4 py-3 border-b border-gray-100 text-gray-500">{i + 1}</td>
                <td className="px-4 py-3 border-b border-gray-100 font-medium" style={{ color: 'var(--color-primary)' }}>{d.department}</td>
                <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{d.name}</td>
                <td className="px-4 py-3 border-b border-gray-100 text-gray-700">
                  <span className="flex items-center gap-1.5"><Phone size={13} style={{ color: 'var(--color-accent)' }} /> {d.phone}</span>
                </td>
                <td className="px-4 py-3 border-b border-gray-100 text-gray-500">{d.ext}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center py-8 text-gray-500 text-sm">No results found for "{search}"</p>
        )}
      </div>
    </div>
  )
}

export default TelephoneDirectory
