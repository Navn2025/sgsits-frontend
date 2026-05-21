import React from 'react'

const NSS: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>NSS Wing</h2>
        <p className="text-sm text-gray-500 mt-1">National Service Scheme at SGSITS</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The <strong>NSS unit</strong> of SGSITS engages students in community service and social awareness activities. The motto is "Not Me But You" — reflecting selfless service.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Regular Activities:</strong> Blood donation drives (500+ units annually), cleanliness campaigns (Swachh Bharat), tree plantation drives, voter awareness campaigns, health awareness programs.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Special Camps:</strong> 7-day special camps in adopted villages focusing on education, health, sanitation, and digital literacy. Village adoption programs for sustained community development.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Volunteers:</strong> 200+ active NSS volunteers participate in regular activities. NSS volunteers receive certificates and grace marks. Distinguished NSS volunteers receive state and national-level awards.</p>
      </div>
    </div>
  )
}

export default NSS
