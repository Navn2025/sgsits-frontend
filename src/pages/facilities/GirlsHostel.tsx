import React from 'react'
import { Shield, CheckCircle2, Phone, Mail, AlertCircle } from 'lucide-react'

const amenities = [
  'Furnished rooms with bed, wardrobe, study table & chair',
  'Wi-Fi connectivity in all rooms (campus network)',
  'Dedicated girls mess — hygienic veg and non-veg menu',
  'Common room with TV, indoor games (TT, Carrom, Chess)',
  'Recreation room with yoga space',
  'Laundry facility within premises',
  '24×7 CCTV surveillance — entire premises monitored',
  'Female warden resident in hostel (round the clock)',
  'Hot water supply (solar-powered geysers)',
  'Generator backup for uninterrupted power supply',
]

const securityRules = [
  'Hostel entry/exit register mandatory for all students',
  'Late night out permission (after 10 PM) requires prior approval from warden',
  'Visitors (including parents) allowed in designated areas only during visitor hours (3–6 PM)',
  'Male visitors not permitted inside hostel wings at any time',
  'Emergency helpline number displayed at all entry points',
]

const GirlsHostel: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Facilities</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Girls Hostel</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Residential Facilities for Female Students — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          SGSITS provides <strong>2 separate girls hostel blocks</strong> with a total capacity of <strong>400+ female students</strong>,
          located within the campus with dedicated security. The girls hostel is managed by a female Chief Warden
          and resident lady wardens. Safety and comfort are top priorities with round-the-clock security, CCTV
          monitoring, and strict visitor protocols.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: '2', label: 'Hostel Blocks' },
          { value: '400+', label: 'Capacity (Students)' },
          { value: '24×7', label: 'Lady Warden Presence' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-2xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Hostel Blocks */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: 'var(--color-primary)' }}>
              <th className="text-left text-white px-4 py-3 font-semibold">Hostel Block</th>
              <th className="text-center text-white px-4 py-3 font-semibold">Capacity</th>
              <th className="text-left text-white px-4 py-3 font-semibold">Room Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-slate-50">
              <td className="px-4 py-3 border-b border-slate-100 font-bold text-primary">Girls Hostel-1</td>
              <td className="px-4 py-3 border-b border-slate-100 text-center font-medium">220 students</td>
              <td className="px-4 py-3 border-b border-slate-100 text-slate-600">Double & Triple Sharing</td>
            </tr>
            <tr className="bg-white hover:bg-slate-50">
              <td className="px-4 py-3 border-b border-slate-100 font-bold text-primary">Girls Hostel-2 (New)</td>
              <td className="px-4 py-3 border-b border-slate-100 text-center font-medium">200 students</td>
              <td className="px-4 py-3 border-b border-slate-100 text-slate-600">Double Sharing</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Amenities */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Amenities</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Facilities & Amenities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {amenities.map((item) => (
            <div key={item} className="flex items-start gap-2.5 bg-white border border-slate-200 rounded p-3 text-sm">
              <CheckCircle2 size={14} className="text-slate-600 shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium font-sans">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-slate-50 border border-slate-200 rounded p-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
          <Shield size={16} className="text-accent" />
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Safety & Security Rules</h4>
        </div>
        <div className="space-y-2">
          {securityRules.map((rule, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <AlertCircle size={14} className="text-slate-500 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium font-sans">{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fee & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded p-5">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">Fee Structure</h4>
          <div className="text-sm space-y-2 font-sans">
            <div className="flex justify-between">
              <span className="text-slate-600">Hostel Rent (Annual)</span>
              <span className="font-semibold">₹15,000 – ₹20,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Mess Charges</span>
              <span className="font-semibold">₹2,500 – ₹3,000/month</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 italic">*Fee subject to Institute Committee revision</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded p-5">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">Contact — Girls Hostel Office</h4>
          <div className="space-y-2 text-sm font-sans">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-accent shrink-0" />
              <span className="text-slate-600">0731-2582230 (Girls Hostel)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-accent shrink-0" />
              <a href="mailto:girlshostel@sgsits.ac.in" className="text-accent-blue hover:underline">girlshostel@sgsits.ac.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GirlsHostel
