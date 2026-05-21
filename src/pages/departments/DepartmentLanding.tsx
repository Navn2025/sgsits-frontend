import React from 'react'
import { Link } from 'react-router-dom'
import { departmentsList } from '../../constants/departmentsList'

const DepartmentLanding: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-8">
      <div className="border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Departments</h2>
        <p className="text-sm text-gray-500 mt-1">17 departments offering diverse programs in engineering, science, and management</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {departmentsList.map((dept) => (
          <Link
            key={dept.slug}
            to={`/departments/${dept.slug}`}
            className="rounded-md border border-slate-200 p-5 hover:border-slate-400 transition-colors group bg-white"
          >
            <h3 className="font-bold text-sm group-hover:underline" style={{ color: 'var(--color-primary)' }}>{dept.name}</h3>
            <p className="text-sm text-gray-500 mt-2">HOD: {dept.hodName}</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-50 text-slate-700 border border-slate-200">
                {dept.programsOffered.join(' · ')}
              </span>
              <span className="text-xs text-gray-400">{dept.facultyCount} Faculty</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DepartmentLanding
