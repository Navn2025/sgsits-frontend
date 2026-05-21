import React from 'react'

const HyperlinkPolicy: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Hyperlink Policy</h2>
        <p className="text-sm text-gray-500 mt-1">SGSITS Indore — Official Policy</p>
      </div>

      <div className="prose max-w-none text-gray-700 text-[15px] leading-relaxed space-y-4">
        <p>SGSITS does not object to other websites linking to pages on the SGSITS website, provided that such links do not mislead or misrepresent the content.</p>
        <p>Links should open in a new browser window and clearly indicate that they lead to the SGSITS website. Deep-linking to internal pages is permitted for non-commercial purposes.</p>
        <p>SGSITS reserves the right to revoke permission for any link if it determines that the link is misleading, defamatory, or violates any applicable law.</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm mt-4">
        <p className="text-xs text-slate-500">Last updated: April 2026 | Website: www.sgsits.ac.in</p>
      </div>
    </div>
  )
}

export default HyperlinkPolicy
