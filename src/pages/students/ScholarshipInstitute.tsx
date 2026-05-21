import React from 'react'

const ScholarshipInstitute: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Institute Scholarships</h2>
        <p className="text-sm text-gray-500 mt-1">Merit and need-based scholarships by SGSITS</p>
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS provides various scholarships and financial assistance to deserving students from its own funds and through alumni contributions.</p>
      <div className="grid gap-4 md:grid-cols-2">
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Merit Scholarship</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Top 5% students of each branch receive merit scholarship covering 50% of tuition fee. Based on previous semester CGPA.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Need-Based Financial Aid</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Financial assistance for economically weaker students. Covers partial tuition fee. Apply through Dean Student Welfare office.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Alumni-Funded Scholarships</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Various scholarships funded by distinguished alumni of SGSITS. Criteria include academic merit and financial need.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Fee Concession</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Full or partial fee concession for students from families below poverty line. Documentation required from district authorities.</p>
      </div>
      </div>
    </div>
  )
}

export default ScholarshipInstitute
