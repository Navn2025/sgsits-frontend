import React from 'react'

const companies = [
  'TCS', 'Infosys', 'Wipro', 'Cognizant', 'L&T Infotech', 'Amazon', 'Microsoft',
  'Capgemini', 'Accenture', 'Tech Mahindra', 'HCL Technologies', 'Oracle',
  'Samsung', 'Deloitte', 'Goldman Sachs', 'JP Morgan', 'Persistent Systems',
  'Mphasis', 'Mindtree', 'ZS Associates', 'DE Shaw', 'Byju\'s',
  'PhonePe', 'Flipkart', 'Zomato', 'Paytm', 'Adobe', 'Qualcomm',
  'Texas Instruments', 'Bosch', 'Siemens', 'ABB', 'Schneider Electric',
  'Tata Motors', 'Mahindra & Mahindra', 'Reliance Industries',
]

const LeadingCompanies: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Leading Recruiters</h2>
        <p className="text-sm text-gray-500 mt-1">Top companies that recruit from SGSITS</p>
      </div>
      <p className="text-gray-700 text-[15px] leading-relaxed">
        Over <strong>150+ companies</strong> visit SGSITS campus every year for recruitment. Our students are placed in leading IT, core engineering, consulting, and finance companies across India and abroad.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {companies.map((c) => (
          <div key={c} className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow hover:border-gray-300">
            <p className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>{c}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeadingCompanies
