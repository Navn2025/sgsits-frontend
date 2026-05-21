import React from 'react'

const Library: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Central Library</h2>
        <p className="text-sm text-gray-500 mt-1">Knowledge resource center of SGSITS</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The Central Library of SGSITS is a comprehensive knowledge resource center housing <strong>50,000+ books</strong>, 5,000+ bound journals, and extensive digital resources for students and faculty.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Digital Library:</strong> Access to IEEE Xplore, Springer, Elsevier ScienceDirect, ASCE Library, ASME Digital Collection, DELNET, and NPTEL video lectures. OPAC (Online Public Access Catalog) for easy book search.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Reading Hall:</strong> Spacious reading hall with capacity for 300 students. Separate sections for reference books, textbooks, periodicals, newspapers, and competitive exam preparation materials.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Timings:</strong> 8:00 AM to 10:00 PM on all working days. Extended hours during examination period. Book issue limit: 4 books for UG, 6 books for PG, 10 books for faculty.</p>
      </div>
    </div>
  )
}

export default Library
