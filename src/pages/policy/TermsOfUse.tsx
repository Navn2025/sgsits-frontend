import React from 'react'

const TermsOfUse: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Terms of Use</h2>
        <p className="text-sm text-gray-500 mt-1">SGSITS Indore — Official Policy</p>
      </div>

      <div className="prose max-w-none text-gray-700 text-[15px] leading-relaxed space-y-4">
        <p>By accessing and using the SGSITS website (www.sgsits.ac.in), you agree to comply with and be bound by these terms of use.</p>
        <p>The content on this website is provided for informational purposes only. While we strive for accuracy, SGSITS does not guarantee that the information is complete, accurate, or current.</p>
        <p>Users may not reproduce, distribute, or modify content from this website without prior written permission from SGSITS administration.</p>
        <p>SGSITS reserves the right to modify these terms at any time without prior notice. Continued use of the website constitutes acceptance of the updated terms.</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm mt-4">
        <p className="text-xs text-slate-500">Last updated: April 2026 | Website: www.sgsits.ac.in</p>
      </div>
    </div>
  )
}

export default TermsOfUse
