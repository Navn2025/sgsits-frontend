import React from 'react'

const ScholarshipGovt: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Government Scholarships</h2>
        <p className="text-sm text-gray-500 mt-1">State and central government scholarship schemes</p>
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed">Various government scholarship schemes are available for eligible students of SGSITS. The scholarship cell assists students with application process and documentation.</p>
      <div className="grid gap-4 md:grid-cols-2">
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Post-Matric Scholarship (SC/ST)</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">For SC/ST students. Covers tuition fee, maintenance allowance, and book grant. Apply through the State Scholarship Portal.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>Post-Matric Scholarship (OBC)</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">For OBC students with family income below ₹8 lakh per annum. Partial fee waiver and maintenance allowance.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>National Scholarship Portal (NSP)</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Central government scholarships through the National Scholarship Portal. Multiple schemes based on category, income, and merit.</p>
      </div>
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
        <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>State Merit Scholarship</h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">For meritorious students from MP who scored above 85% in board examinations. Merit-based monthly stipend.</p>
      </div>
      </div>
    </div>
  )
}

export default ScholarshipGovt
