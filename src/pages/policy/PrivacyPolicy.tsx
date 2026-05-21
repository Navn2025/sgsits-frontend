import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Privacy Policy</h2>
        <p className="text-sm text-gray-500 mt-1">SGSITS Indore — Official Policy</p>
      </div>

      <div className="prose max-w-none text-gray-700 text-[15px] leading-relaxed space-y-4">
        <p>SGSITS Indore is committed to protecting the privacy of visitors to this website. This privacy policy explains how we collect, use, and safeguard your personal information.</p>
        <p>We collect only the information necessary to provide our services — primarily contact details submitted through forms, feedback, or inquiries. We do not sell, trade, or share your personal information with third parties.</p>
        <p>Cookies may be used to enhance your browsing experience. You can choose to disable cookies in your browser settings. However, this may affect the functionality of certain features.</p>
        <p>Any personal information collected through this website is stored securely and accessed only by authorized personnel for legitimate institutional purposes.</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm mt-4">
        <p className="text-xs text-slate-500">Last updated: April 2026 | Website: www.sgsits.ac.in</p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
