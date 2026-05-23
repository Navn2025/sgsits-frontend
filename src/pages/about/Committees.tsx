import React, { useState } from 'react'
import { Users, X } from 'lucide-react'

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

const committeeMembersData: Record<string, { role: string; name: string; dept?: string }[]> = {
  'Academic Council': [
    { role: 'Chairman', name: 'Director, SGSITS' },
    { role: 'Member Secretary', name: 'Dean (Academics)' },
    { role: 'Member', name: 'Deputy Director' },
    { role: 'Member', name: 'Dean (R&D)' },
    { role: 'Member', name: 'All Heads of Departments' },
    { role: 'Member', name: 'Controller of Examinations' },
    { role: 'Member', name: 'Registrar' },
    { role: 'Member', name: 'Dr. Smita Verma', dept: 'Applied Mathematics' },
    { role: 'Member', name: 'Dr. Urjita Thakar', dept: 'Computer Engineering' },
    { role: 'Member', name: 'Three Senior Professors (Nominated)' }
  ],
  'Board of Governors': [
    { role: 'Chairman', name: 'Nominee of Govt. of Madhya Pradesh' },
    { role: 'Member Secretary', name: 'Director, SGSITS Indore' },
    { role: 'Member', name: 'Nominee of RGPV, Bhopal' },
    { role: 'Member', name: 'Nominee of DAVV, Indore' },
    { role: 'Member', name: 'Nominee of AICTE, New Delhi' },
    { role: 'Member', name: 'Nominee of DTE, Madhya Pradesh' },
    { role: 'Member', name: 'Industry Representative – I' },
    { role: 'Member', name: 'Industry Representative – II' },
    { role: 'Member', name: 'Senior Professor – I' },
    { role: 'Member', name: 'Senior Professor – II' }
  ],
  'IQAC (Internal Quality Assurance Cell)': [
    { role: 'Chairperson', name: 'Director, SGSITS' },
    { role: 'Coordinator', name: 'Dr. Smita Verma', dept: 'Applied Mathematics' },
    { role: 'Member (Teacher)', name: 'Dr. Nitish Gupta', dept: 'Applied Chemistry' },
    { role: 'Member (Teacher)', name: 'Dr. Urjita Thakar', dept: 'Computer Engineering' },
    { role: 'Member (Teacher)', name: 'Dr. R.K. Khare', dept: 'Civil Engineering' },
    { role: 'Member (Admin)', name: 'Registrar, SGSITS' },
    { role: 'Member (Industry)', name: 'Mr. Alok Sethi', dept: 'Tata Consultancy Services' },
    { role: 'Member (Alumni)', name: 'Er. Sanjay Sharma', dept: 'Alumni Association' }
  ],
  'Anti-Ragging Committee': [
    { role: 'Chairman', name: 'Director, SGSITS' },
    { role: 'Member (Faculty)', name: 'Prof. S.K. Jain', dept: 'Applied Physics' },
    { role: 'Member (Faculty)', name: 'Dr. Sunita Varma', dept: 'CTA' },
    { role: 'Member (Warden)', name: 'Boys Hostel Warden' },
    { role: 'Member (Warden)', name: 'Girls Hostel Warden' },
    { role: 'Member (Civil Admin)', name: 'Sub-Divisional Magistrate, Indore' },
    { role: 'Member (Police)', name: 'Station House Officer, MG Road Police Station' },
    { role: 'Student Representative', name: 'Rahul Sharma', dept: 'B.Tech IV Year' },
    { role: 'Student Representative', name: 'Ananya Vyas', dept: 'B.Tech II Year' }
  ],
  'ICC (Internal Complaint Committee)': [
    { role: 'Presiding Officer', name: 'Dr. Urjita Thakar', dept: 'Computer Engineering' },
    { role: 'Member (Faculty)', name: 'Ms. Vibha Bhatnagar', dept: 'Biomedical Engg' },
    { role: 'Member (Faculty)', name: 'Dr. Sunita Varma', dept: 'CTA' },
    { role: 'Member (Staff)', name: 'Smt. Rekha Tiwari', dept: 'Establishment Section' },
    { role: 'Member (NGO)', name: 'Mrs. Shobha Shah', dept: 'Social Welfare Society' },
    { role: 'Student Representative (PG)', name: 'Megha Patidar', dept: 'M.Tech II Year' }
  ],
  'Institute Discipline Committee': [
    { role: 'Chairman', name: 'Dean (Student Welfare)' },
    { role: 'Co-Chairman', name: 'Dr. R.K. Khare', dept: 'Civil Engineering' },
    { role: 'Member (Faculty)', name: 'Dr. Satish Jain', dept: 'Electronics & Telecomm' },
    { role: 'Member (Faculty)', name: 'Dr. H.K. Verma', dept: 'Electrical Engineering' },
    { role: 'Member (Warden)', name: 'Chief Warden (Boys)' },
    { role: 'Member (Warden)', name: 'Chief Warden (Girls)' }
  ],
  'Examination Committee': [
    { role: 'Chairman', name: 'Director, SGSITS' },
    { role: 'Controller', name: 'Prof. S.K. Jain', dept: 'Exam Office' },
    { role: 'Member (Faculty)', name: 'Dr. R.C. Gurjar', dept: 'Electronics & Instru' },
    { role: 'Member (Faculty)', name: 'Dr. Nitish Gupta', dept: 'Applied Chemistry' },
    { role: 'Member (Faculty)', name: 'Dr. Vineet Singh', dept: 'Pharmacy' }
  ],
  'Library Committee': [
    { role: 'Chairman', name: 'Dean (Academics)' },
    { role: 'Member Secretary', name: 'Librarian, SGSITS' },
    { role: 'Member (Faculty)', name: 'Dr. Joseph Thomas Andrews', dept: 'Applied Physics' },
    { role: 'Member (Faculty)', name: 'Dr. Girish Thakar', dept: 'Industrial & Prod' },
    { role: 'Member (Faculty)', name: 'Dr. K.K. Sharma', dept: 'Information Tech' }
  ],
  'Sports Committee': [
    { role: 'Chairman', name: 'Dean (Student Welfare)' },
    { role: 'Secretary', name: 'Director of Physical Education' },
    { role: 'Member (Faculty)', name: 'Dr. R.C. Gupta', dept: 'MBA' },
    { role: 'Member (Faculty)', name: 'Dr. B.R. Rawal', dept: 'Mechanical Engineering' }
  ],
  'Student Grievance Redressal': [
    { role: 'Chairman', name: 'Director, SGSITS' },
    { role: 'Ombudsman', name: 'Retired High Court Judge (External)' },
    { role: 'Member (Faculty)', name: 'Dean (Student Welfare)' },
    { role: 'Member (Faculty)', name: 'Dr. Urjita Thakar', dept: 'Computer Engineering' },
    { role: 'Special Invitee (Student)', name: 'Student Council President' }
  ],
  'Website Committee': [
    { role: 'Coordinator', name: 'Dr. K.K. Sharma', dept: 'Information Tech' },
    { role: 'Member (Faculty)', name: 'Dr. Nitish Gupta', dept: 'Applied Chemistry' },
    { role: 'System Analyst', name: 'Shri G.S. Solanki', dept: 'Computer Center' },
    { role: 'Web Developer', name: 'Shri Amit Kumar', dept: 'Information Tech' }
  ],
  'Training & Placement Committee': [
    { role: 'Chairman', name: 'Director, SGSITS' },
    { role: 'T&P Officer', name: 'Dr. Devendra S. Mehta', dept: 'T&P Cell' },
    { role: 'Faculty Coordinator', name: 'Dr. Girish Thakar', dept: 'Industrial & Prod' },
    { role: 'Faculty Coordinator', name: 'Dr. Urjita Thakar', dept: 'Computer Engineering' },
    { role: 'Faculty Coordinator', name: 'Dr. K.K. Sharma', dept: 'Information Tech' }
  ]
}

const Committees: React.FC = () => {
  const [selectedCommittee, setSelectedCommittee] = useState<typeof committees[0] | null>(null)

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (selectedCommittee) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedCommittee])

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Administrative Committees</h2>
        <p className="text-sm text-gray-500 mt-1">Committees constituted for effective governance — Click any card to view members</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {committees.map((c) => (
          <div
            key={c.name}
            onClick={() => setSelectedCommittee(c)}
            className="bg-white rounded-md border border-gray-200 p-5 hover:border-slate-400 hover:shadow-sm cursor-pointer transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}>
                <Users size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>{c.name}</h3>
                <p className="text-sm text-gray-650 mt-1 leading-relaxed">{c.desc}</p>
              </div>
            </div>
            
            <p className="text-xs mt-4 font-medium flex items-center justify-between border-t pt-3" style={{ color: 'var(--color-accent)', borderColor: 'rgba(0,0,0,0.06)' }}>
              <span>{c.members} Members</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary group-hover:text-accent transition-colors flex items-center gap-0.5">
                View Members &rarr;
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* --- Committee Members Modal Popup --- */}
      {selectedCommittee && (
        <div className="fixed inset-0 z-[120] overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="text-white px-6 py-4 flex items-center justify-between shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}>
              <div>
                <h3 className="font-display font-bold text-lg">{selectedCommittee.name}</h3>
                <p className="text-white/70 text-xs mt-0.5 font-medium">Committee Members List</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCommittee(null)}
                className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              <p className="text-xs text-slate-550 leading-relaxed font-sans border-b pb-3">
                {selectedCommittee.desc}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Constituted Members</h4>
                <div className="overflow-hidden border border-slate-200 rounded">
                  <table className="w-full text-xs text-left font-sans border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="px-4 py-2.5">Role</th>
                        <th className="px-4 py-2.5">Name</th>
                        <th className="px-4 py-2.5">Department / Affiliation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-650 font-medium">
                      {(committeeMembersData[selectedCommittee.name] || [
                        { role: 'Chairman', name: 'Director, SGSITS', dept: 'Administration' },
                        { role: 'Member Secretary', name: 'Dean (Academics)', dept: 'Academics' }
                      ]).map((m, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-4 py-3 font-bold text-primary">{m.role}</td>
                          <td className="px-4 py-3 text-slate-800 font-semibold">{m.name}</td>
                          <td className="px-4 py-3 text-slate-500">{m.dept || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-150 flex justify-end shrink-0">
              <button
                type="button"
                onClick={() => setSelectedCommittee(null)}
                className="px-4 py-2 bg-white border border-slate-250 hover:bg-slate-50 text-slate-700 font-bold text-xs rounded shadow-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Committees
