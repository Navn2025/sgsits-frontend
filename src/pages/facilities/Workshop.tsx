import React from 'react'
import { Wrench, CheckCircle2, Clock, Phone, Mail } from 'lucide-react'

const shops = [
  { name: 'Fitting Shop', desc: 'Filing, chipping, drilling, and surface finishing using hand tools and bench vices' },
  { name: 'Carpentry Shop', desc: 'Wood working, joints, furniture construction and pattern making' },
  { name: 'Welding Shop', desc: 'Arc welding (MIG, TIG), gas welding, soldering, and brazing' },
  { name: 'Foundry & Smithy', desc: 'Sand casting, pattern making, forging and heat treatment processes' },
  { name: 'Machine Shop', desc: 'Lathe, milling, drilling, shaping, and grinding machines' },
  { name: 'Sheet Metal Shop', desc: 'Sheet metal cutting, bending, punching, and forming' },
]

const Workshop: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Facilities</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Central Workshop</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Hands-on Manufacturing & Fabrication Facility — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          The <strong>Central Workshop</strong> of SGSITS is a mandatory practical training facility for all first-year engineering students.
          It spans 6 fully equipped shop sections covering traditional and modern manufacturing processes.
          The workshop instills fundamental understanding of materials, tools, and fabrication techniques essential for
          every engineer — regardless of specialization.
        </p>
      </div>

      {/* Workshop Sections */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Workshop Sections</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Shop Sections & Facilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shops.map((shop) => (
            <div key={shop.name} className="bg-white border border-slate-200 rounded p-4 flex items-start gap-3 hover:border-slate-400 transition-colors">
              <Wrench size={16} className="text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
              <div>
                <h4 className="font-bold text-sm text-slate-800">{shop.name}</h4>
                <p className="text-[12px] text-slate-500 mt-1 font-medium font-sans leading-relaxed">{shop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Equipment */}
      <div className="bg-slate-50 border border-slate-200 rounded p-5">
        <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">Modern & CNC Equipment</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            'CNC Turning Centre (2 machines)',
            'CNC Milling Machine',
            '3D FDM Printers',
            'Laser Cutting Machine',
            'Computer-Aided Manufacturing (CAM) workstations',
            'Universal Testing Machine (UTM)',
            'Tool Room with precision measurement instruments',
            'Metrology Lab with CMM (Coordinate Measuring Machine)',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 size={14} className="text-slate-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium font-sans">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Safety & Timings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded p-5">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
            <Clock size={16} className="text-accent" />
            <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Timings</h4>
          </div>
          <div className="text-sm space-y-2 font-sans">
            <div className="flex justify-between">
              <span className="text-slate-600">Working Days</span>
              <span className="font-semibold">9:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Saturday</span>
              <span className="font-semibold">9:00 AM – 1:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Sunday & Holidays</span>
              <span className="font-semibold">Closed</span>
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
              <span className="text-slate-600">0731-2582320 (Workshop Incharge)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-accent shrink-0" />
              <a href="mailto:workshop@sgsits.ac.in" className="text-accent-blue hover:underline">workshop@sgsits.ac.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workshop
