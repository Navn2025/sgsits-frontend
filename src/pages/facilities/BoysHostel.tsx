import React from 'react'
import { CheckCircle2, Phone, Mail } from 'lucide-react'

const hostels = [
  { name: 'Hostel-1 (Old Block)', capacity: 200, rooms: 'Double & Triple Sharing', year: 'Established 1965' },
  { name: 'Hostel-2', capacity: 200, rooms: 'Double Sharing (preferred)', year: 'Established 1980' },
  { name: 'Hostel-3 (New Block)', capacity: 250, rooms: 'Double & Triple Sharing', year: 'Established 2005' },
  { name: 'Hostel-4 (PG Hostel)', capacity: 150, rooms: 'Single & Double for PG scholars', year: 'Established 2010' },
]

const amenities = [
  'Furnished rooms with bed, table, chair, and cupboard',
  'Wi-Fi connectivity in all rooms (BSNL campus network)',
  'Common mess with veg and non-veg options (hygienic, FSSAI compliant)',
  'Reading room — open till 11:00 PM',
  'Common room with TV and indoor games (TT, Carrom, Chess)',
  'Laundry facility within premises',
  '24×7 security with CCTV surveillance',
  'Generator backup for power cuts',
  'Hot water facility in bathrooms (solar-powered)',
  'Medical first-aid kit in each hostel',
]

const BoysHostel: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Facilities</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Boys Hostel</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Residential Facilities for Male Students — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          SGSITS provides <strong>4 boys hostels</strong> with a total accommodation capacity of <strong>800+ students</strong> within the campus.
          The hostels are managed by the Hostel Administration under the Dean Student Welfare. Each hostel has a
          resident warden (faculty member), support staff, and a student Hostel Committee for day-to-day operations.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: '4', label: 'Hostel Blocks' },
          { value: '800+', label: 'Capacity (Students)' },
          { value: '24×7', label: 'Security & Support' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-2xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Hostel Details */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Hostel Blocks</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Hostel Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th className="text-left text-white px-4 py-3 font-semibold">Hostel</th>
                <th className="text-center text-white px-4 py-3 font-semibold">Capacity</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Room Type</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody>
              {hostels.map((h, i) => (
                <tr key={i} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 border-b border-slate-100 font-bold text-primary">{h.name}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-center font-medium">{h.capacity}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">{h.rooms}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-500 text-xs">{h.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Amenities */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Amenities</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Hostel Amenities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {amenities.map((item) => (
            <div key={item} className="flex items-start gap-2.5 bg-white border border-slate-200 rounded p-3 text-sm">
              <CheckCircle2 size={14} className="text-slate-600 shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium font-sans">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fee & Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 border border-slate-200 rounded p-5">
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
            <div className="flex justify-between">
              <span className="text-slate-600">Security Deposit</span>
              <span className="font-semibold">₹2,000 (refundable)</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 italic">*Fee subject to revision by Institute Committee</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded p-5">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">Contact — Hostel Administration</h4>
          <div className="space-y-2 text-sm font-sans">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-accent shrink-0" />
              <span className="text-slate-600">0731-2582220 (Hostel Office)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-accent shrink-0" />
              <a href="mailto:hostel@sgsits.ac.in" className="text-accent-blue hover:underline">hostel@sgsits.ac.in</a>
            </div>
            <p className="text-xs text-slate-500 mt-2">Hostel Office: Near Main Hostel Gate, SGSITS Campus</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoysHostel
