import React from 'react'

const StartupCellPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate-850">Startup & Incubation Cell</h2>
        <p className="text-sm text-gray-500 mt-1">Fostering innovation and entrepreneurship at SGSITS</p>
      </div>

      <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
        <p>The <strong>Startup & Incubation Cell</strong> of SGSITS was established to nurture entrepreneurship among students and faculty. The cell provides mentorship, infrastructure, and networking support to aspiring entrepreneurs.</p>
        <p><strong>Vision:</strong> To create a vibrant ecosystem for innovation, startups, and social entrepreneurship within the institute.</p>
        <p><strong>Facilities:</strong> Co-working space, prototyping lab, seed funding assistance, industry mentorship, IPR guidance, and access to government startup schemes (Startup MP, Startup India).</p>
        <p><strong>Activities:</strong> Idea pitching sessions, startup bootcamps, entrepreneurship development programs (EDPs), hackathons, and industry connect sessions.</p>
        <p><strong>Coordinator:</strong> Dr. S.K. Jain | Email: startup@sgsits.ac.in | Phone: 0731-2582160</p>
      </div>
    </div>
  )
}

export default StartupCellPage
