import React from 'react'
import { Heart, Phone, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

const services = [
  'Free OPD consultation by registered medical officer',
  'First-aid treatment for injuries and accidents',
  'Routine medical checkup for all new students',
  'Prescription medicines (common ailments) from dispensary stock',
  'Health counseling and wellness advisory',
  'Blood pressure, pulse, and temperature monitoring',
  'Health certificate issuance for sports/NCC/NSS activities',
  'Referral letters for specialized hospital treatment',
]

const hospitals = [
  { name: 'MY Hospital (MGM Medical College)', type: 'Government — 500m from campus' },
  { name: 'CHL Apollo Hospital', type: 'Private — 2 km from campus' },
  { name: 'Bombay Hospital', type: 'Private — 3 km from campus' },
  { name: 'CARE Hospital', type: 'Private — 4 km from campus' },
]

const Dispensary: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Facilities</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Health Centre / Dispensary</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">On-Campus Medical Facility — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          The <strong>SGSITS Health Centre</strong> (Dispensary) provides primary healthcare services to all students, faculty, and
          staff members on campus. Staffed by a full-time Medical Officer and nursing attendants, the dispensary
          ensures prompt medical attention and also maintains health records of all students.
        </p>
      </div>

      {/* Emergency Banner */}
      <div className="bg-[#bfa15f]/10 border border-[#bfa15f]/30 rounded p-4 flex items-center gap-3">
        <AlertCircle size={20} className="text-[#bfa15f] shrink-0" />
        <div>
          <p className="text-sm font-bold text-[#0b2545]">24×7 Emergency Ambulance</p>
          <p className="text-xs text-[#0b2545] font-medium mt-0.5">Campus emergency helpline: <strong>0731-2582100</strong> (Operator) | Ambulance available round the clock</p>
        </div>
      </div>

      {/* Services */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Medical Services</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Services Available</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((svc) => (
            <div key={svc} className="flex items-start gap-2.5 bg-white border border-slate-200 rounded p-3 text-sm">
              <CheckCircle2 size={15} className="text-slate-600 shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium font-sans">{svc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hospital Tie-ups */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Referral Network</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Hospital Tie-ups</h3>
        <div className="space-y-3">
          {hospitals.map((h) => (
            <div key={h.name} className="flex items-center justify-between bg-white border border-slate-200 rounded p-4">
              <div className="flex items-center gap-3">
                <Heart size={15} className="text-accent shrink-0" />
                <span className="text-sm font-semibold text-slate-800">{h.name}</span>
              </div>
              <span className="text-xs text-slate-500 font-medium font-sans">{h.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timings & Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-slate-50 border border-slate-200 rounded p-5">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
            <Clock size={16} className="text-accent" />
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">OPD Timings</h4>
          </div>
          <div className="text-sm space-y-2 font-sans">
            <div className="flex justify-between">
              <span className="text-slate-600">Monday – Friday</span>
              <span className="font-semibold">10:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Saturday</span>
              <span className="font-semibold">10:00 AM – 1:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Emergency (All days)</span>
              <span className="font-semibold text-[#bfa15f]">24 × 7</span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded p-5">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
            <Phone size={16} className="text-accent" />
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Contact</h4>
          </div>
          <div className="space-y-2 text-sm font-sans">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-accent shrink-0" />
              <span className="text-slate-600">0731-2582210 (Dispensary)</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Location: Ground Floor, Hostel Administration Block, SGSITS Campus</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dispensary
