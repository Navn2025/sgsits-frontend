import React from 'react'
import { CheckCircle2, Phone, Mail, Calendar } from 'lucide-react'

const TransitHostel: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Facilities</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Transit Hostel</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Guest Accommodation Facility — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          The <strong>Transit Hostel</strong> at SGSITS provides comfortable short-term accommodation for visiting faculty,
          guest lecturers, external experts for viva/inspection, parents of students, and official visitors to the institute.
          It is managed by the Estate Office under the Registrar and operates on advance booking basis.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: '20', label: 'Rooms Available' },
          { value: '₹500–800', label: 'Per Night (approx.)' },
          { value: '24×7', label: 'Housekeeping Support' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Amenities */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Room Facilities</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Room Amenities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'AC and non-AC room options available',
            'Attached bathrooms with running hot & cold water',
            'Wi-Fi internet connectivity',
            'Bed, wardrobe, writing desk and chair',
            'Television (select rooms)',
            'Housekeeping and room service',
            'Common dining area (meals on request)',
            'Parking facility for vehicles',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2.5 bg-white border border-slate-200 rounded p-3 text-sm">
              <CheckCircle2 size={14} className="text-slate-600 shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium font-sans">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Procedure */}
      <div className="bg-slate-50 border border-slate-200 rounded p-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
          <Calendar size={16} className="text-accent" />
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Booking Procedure</h4>
        </div>
        <ol className="space-y-2 text-sm font-sans text-slate-600">
          <li className="flex gap-2"><span className="font-bold text-primary shrink-0">1.</span> Contact the Registrar Office or Estate Section by phone or email to check availability</li>
          <li className="flex gap-2"><span className="font-bold text-primary shrink-0">2.</span> Submit a booking request with purpose of visit, dates, and number of persons</li>
          <li className="flex gap-2"><span className="font-bold text-primary shrink-0">3.</span> Receive confirmation and room allocation from Estate Section</li>
          <li className="flex gap-2"><span className="font-bold text-primary shrink-0">4.</span> Check-in at the transit hostel gate with identity proof and confirmation letter</li>
        </ol>
        <p className="text-[11px] text-slate-400 mt-3 font-medium italic">Priority: Official visitors, visiting faculty, NBA/NAAC inspectors, and parents during admission/exams</p>
      </div>

      {/* Contact */}
      <div className="bg-white border border-slate-200 rounded p-5">
        <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">Booking Contact</h4>
        <div className="flex flex-wrap gap-6 text-sm font-sans">
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-accent" />
            <span className="text-slate-600">0731-2582124 (Registrar Office)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={13} className="text-accent" />
            <a href="mailto:registrar@sgsits.ac.in" className="text-accent-blue hover:underline">registrar@sgsits.ac.in</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransitHostel
