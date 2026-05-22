import React from 'react'
import { Heart, CheckCircle2, Award, Phone, Mail } from 'lucide-react'

const activities = [
  { category: 'Health & Medical', items: ['Blood donation drives (500+ units annually)', 'Eye checkup camps', 'Dental health awareness drives', 'COVID vaccination assistance (during pandemic)'] },
  { category: 'Environment', items: ['Tree plantation drives (1000+ trees planted annually)', 'Campus cleanliness — Swachh Bharat Abhiyan', 'Water conservation awareness campaigns', 'No Plastic Zone drives'] },
  { category: 'Community Service', items: ['Village adoption — sustained development program', '7-day special camp in rural areas', 'Adult literacy and digital literacy programs', 'Road safety and voter awareness drives'] },
  { category: 'Civic & Cultural', items: ['Independence Day & Republic Day celebrations', 'Disaster management training', 'Youth parliament and leadership workshops', 'NSS Annual Day — showcase of volunteer activities'] },
]

const NSS: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Student Welfare</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">NSS Wing</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">National Service Scheme — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          The <strong>NSS Unit of SGSITS</strong> operates under the University Grants Commission (UGC) and Ministry of Youth Affairs & Sports.
          With the motto <em>"Not Me But You"</em>, NSS instills in students a sense of social responsibility and community
          engagement. SGSITS has <strong>2 NSS units</strong> with a combined volunteer strength of <strong>200+ students</strong>.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: '2', label: 'NSS Units' },
          { value: '200+', label: 'Active Volunteers' },
          { value: '500+', label: 'Blood Units/Year' },
          { value: '1000+', label: 'Trees Planted' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-2xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Activities by Category */}
      <div className="space-y-6">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block">Activities</span>
        <h3 className="text-xl font-display font-bold text-slate-900 -mt-4">NSS Activities & Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {activities.map((cat) => (
            <div key={cat.category} className="bg-white border border-slate-200 rounded p-4 shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-3">
                <Heart size={15} className="text-accent shrink-0" />
                <h4 className="font-bold text-sm text-primary">{cat.category}</h4>
              </div>
              <div className="space-y-1.5">
                {cat.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={13} className="text-slate-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits & Special Camp */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 border border-slate-200 rounded p-5">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
            <Award size={16} className="text-accent" />
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">NSS Benefits</h4>
          </div>
          <div className="space-y-2 text-sm text-slate-600 font-sans">
            <p>• NSS Certificate awarded after 2 years of active service</p>
            <p>• Grace marks in university examinations (as per RGPV/DAVV norms)</p>
            <p>• Priority in hostel allotment for active NSS volunteers</p>
            <p>• Award certificates at state and national level for outstanding volunteers</p>
            <p>• Eligibility for NSS Republic Day Camp (National Level)</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded p-5">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">How to Join NSS</h4>
          <div className="space-y-2 text-sm text-slate-600 font-sans">
            <p>• Open to all UG/PG students of SGSITS</p>
            <p>• Registration at beginning of academic year through DSW office</p>
            <p>• Minimum 120 hours of service per year required for certificate</p>
            <p>• No prior experience required — training provided</p>
          </div>
          <div className="mt-4 space-y-2 text-sm font-sans">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-accent" />
              <span className="text-slate-600">0731-2582105 (DSW Office)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-accent" />
              <a href="mailto:nss@sgsits.ac.in" className="text-accent-blue hover:underline">nss@sgsits.ac.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NSS
