import React from 'react'

const CopyrightPolicy: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Copyright Policy</h2>
        <p className="text-sm text-gray-500 mt-1">SGSITS Indore — Official Policy</p>
      </div>

      <div className="prose max-w-none text-gray-700 text-[15px] leading-relaxed space-y-4">
        <p>All content on the SGSITS website including text, images, logos, and design elements is the intellectual property of SGSITS Indore and is protected under copyright law.</p>
        <p>Material from this website may be reproduced for non-commercial, educational, or personal purposes, provided that the source is properly cited and SGSITS is acknowledged.</p>
        <p>Commercial use of any content from this website requires prior written permission from the SGSITS administration.</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm mt-4">
        <p className="text-xs text-slate-500">Last updated: April 2026 | Website: www.sgsits.ac.in</p>
      </div>
    </div>
  )
}

export default CopyrightPolicy
