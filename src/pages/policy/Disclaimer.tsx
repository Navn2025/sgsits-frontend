import React from 'react'

const Disclaimer: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Disclaimer</h2>
        <p className="text-sm text-gray-500 mt-1">SGSITS Indore — Official Policy</p>
      </div>

      <div className="prose max-w-none text-gray-700 text-[15px] leading-relaxed space-y-4">
        <p>The information contained in this website is for general informational purposes only. SGSITS makes no representations or warranties of any kind regarding the completeness, accuracy, or reliability of the information.</p>
        <p>Links to external websites are provided for convenience and do not imply endorsement. SGSITS is not responsible for the content or availability of linked external sites.</p>
        <p>In no event shall SGSITS be liable for any damages arising from the use of or inability to use this website or the information contained herein.</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm mt-4">
        <p className="text-xs text-slate-500">Last updated: April 2026 | Website: www.sgsits.ac.in</p>
      </div>
    </div>
  )
}

export default Disclaimer
