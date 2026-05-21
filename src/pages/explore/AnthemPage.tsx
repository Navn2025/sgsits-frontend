import React from 'react'

const AnthemPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>SGSITS Anthem</h2>
        <p className="text-sm text-gray-500 mt-1">Institute anthem — a song of pride and tradition</p>
      </div>

      <div className="bg-white rounded-md p-8 border border-slate-200 shadow-sm text-center">
        <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        </div>
        <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>SGSITS Anthem</h3>
        <p className="text-sm text-gray-500 mt-2">Audio/Video player will be available here</p>
      </div>
      <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm mt-4">
        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>About the Anthem</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          The SGSITS anthem embodies the spirit, values, and aspirations of the institute. It celebrates over seven decades of excellence in engineering education and the contributions of alumni, faculty, and students to society.
        </p>
      </div>
    </div>
  )
}

export default AnthemPage
