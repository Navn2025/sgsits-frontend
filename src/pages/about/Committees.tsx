import React from 'react'
import { Users } from 'lucide-react'

const committees = [
  { name: 'Academic Council', desc: 'Oversees academic policies, curriculum design, and examination standards.', members: '30+' },
  { name: 'Board of Governors', desc: 'Strategic governance and major institutional decisions.', members: '11' },
  { name: 'IQAC (Internal Quality Assurance Cell)', desc: 'Quality enhancement, academic audits, and best practices.', members: '15' },
  { name: 'Anti-Ragging Committee', desc: 'Ensures a ragging-free campus environment and addresses complaints.', members: '12' },
  { name: 'ICC (Internal Complaint Committee)', desc: 'Addresses complaints related to sexual harassment and workplace safety.', members: '8' },
  { name: 'Institute Discipline Committee', desc: 'Maintains discipline and handles violations of the code of conduct.', members: '10' },
  { name: 'Examination Committee', desc: 'Manages examination schedules, question paper moderation, and result processing.', members: '12' },
  { name: 'Library Committee', desc: 'Acquisition of books and journals, digital resource management.', members: '8' },
  { name: 'Sports Committee', desc: 'Organization of sports events, inter-college tournaments, and athletics.', members: '6' },
  { name: 'Student Grievance Redressal', desc: 'Addresses academic and administrative grievances of students.', members: '8' },
  { name: 'Website Committee', desc: 'Management and updation of the institute website and digital presence.', members: '5' },
  { name: 'Training & Placement Committee', desc: 'Coordinates campus placements, internships, and industry interactions.', members: '10' },
]

const Committees: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Administrative Committees</h2>
        <p className="text-sm text-gray-500 mt-1">Committees constituted for effective governance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {committees.map((c) => (
          <div key={c.name} className="bg-white rounded-md border border-gray-200 p-5 hover:border-slate-400 transition-colors group">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Users size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>{c.name}</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{c.desc}</p>
                <p className="text-xs mt-2 font-medium" style={{ color: 'var(--color-accent)' }}>{c.members} Members</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Committees
