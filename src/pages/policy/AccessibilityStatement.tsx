import React from 'react'

const AccessibilityStatement: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Accessibility Statement</h2>
        <p className="text-sm text-gray-500 mt-1">SGSITS Indore — Official Policy</p>
      </div>

      <div className="prose max-w-none text-gray-700 text-[15px] leading-relaxed space-y-4">
        <p>SGSITS is committed to ensuring that its website is accessible to all users, including those with disabilities. We strive to conform to WCAG 2.1 Level AA accessibility guidelines.</p>
        <p><strong>Accessibility Features:</strong> Adjustable font sizes (A-/A/A+), high contrast mode, keyboard-navigable interface, screen reader compatibility, descriptive alt text for images, and skip-to-content links.</p>
        <p>If you experience any difficulty accessing content on this website, please contact the Web Information Manager at wadmin@sgsits.ac.in with details of the issue. We will make every effort to provide the information in an accessible format.</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm mt-4">
        <p className="text-xs text-slate-500">Last updated: April 2026 | Website: www.sgsits.ac.in</p>
      </div>
    </div>
  )
}

export default AccessibilityStatement
