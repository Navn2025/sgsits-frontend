import React from 'react'

const CIDI: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>CIDI Center</h2>
        <p className="text-sm text-gray-500 mt-1">Centre for Innovation, Design & Incubation</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The <strong>Centre for Innovation, Design & Incubation (CIDI)</strong> at SGSITS supports student startups and innovation projects. It provides a complete ecosystem for idea-to-prototype conversion.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Facilities:</strong> Coworking space, prototyping lab, 3D printing, electronics workstation, mentorship from industry experts, and seed funding assistance through various government schemes.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Programs:</strong> Idea pitching sessions, startup bootcamps, IPR awareness workshops, and hackathons. CIDI has incubated 10+ student startups to date.</p>
      </div>
    </div>
  )
}

export default CIDI
