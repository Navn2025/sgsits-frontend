import React from 'react'
import { Cpu, CheckCircle2, Phone, Mail, ExternalLink } from 'lucide-react'

const equipment = [
  { name: '3D Printer (FDM)', qty: '3 units', desc: 'Creality Ender, Ultimaker-class — PLA, PETG, ABS printing' },
  { name: '3D Printer (SLA/Resin)', qty: '1 unit', desc: 'High-resolution resin printing for intricate prototypes' },
  { name: 'Laser Cutting Machine', qty: '2 units', desc: 'CO₂ laser cutter for wood, acrylic, leather, and fabric' },
  { name: 'CNC Router', qty: '1 unit', desc: 'Computer-controlled precision routing for wood and plastics' },
  { name: 'IoT Dev Kits', qty: '50+ sets', desc: 'Arduino Uno/Mega, Raspberry Pi 4, ESP32, NodeMCU, sensors' },
  { name: 'Robotics Kits', qty: '20 sets', desc: 'LEGO Mindstorm, custom robot chassis with servo motors' },
  { name: 'AR/VR Headsets', qty: '5 units', desc: 'Meta Quest 2 for AR/VR design and experience development' },
  { name: 'Drone Assembly Station', qty: '1 station', desc: 'FPV racing and surveillance drone kits with flight controller' },
  { name: 'Soldering & PCB Station', qty: '20 stations', desc: 'SMD soldering, PCB etching and testing equipment' },
  { name: 'Oscilloscopes & DMMs', qty: '10 units', desc: 'Digital 4-channel oscilloscopes for circuit analysis' },
]

const IDEALab: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Facilities</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">AICTE IDEA Lab</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Innovation, Design, Entrepreneurship & Artisan Lab — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          The <strong>AICTE IDEA Lab</strong> (Innovation, Design, Entrepreneurship & Artisan Lab) at SGSITS is established under the
          AICTE initiative with a grant of ₹20 Lakhs. It serves as the institute's premier <strong>makerspace and
          prototyping hub</strong>, open to students of ALL departments and ALL years — no prior technical experience required.
          Lab assistants and faculty mentors are available to guide students in their making journey.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: '₹20L', label: 'AICTE Grant' },
          { value: '10+', label: 'Equipment Types' },
          { value: 'All Depts', label: 'Open Access' },
          { value: '500+', label: 'Student Projects' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Equipment */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Equipment</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Available Equipment & Tools</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th className="text-left text-white px-4 py-3 font-semibold">Equipment</th>
                <th className="text-center text-white px-4 py-3 font-semibold">Qty</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((eq, i) => (
                <tr key={i} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 border-b border-slate-100 font-bold text-primary">{eq.name}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-center text-slate-600">{eq.qty}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600 text-xs">{eq.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How to Use */}
      <div className="bg-slate-50 border border-slate-200 rounded p-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
          <Cpu size={16} className="text-accent" />
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider">How to Access IDEA Lab</h4>
        </div>
        <div className="space-y-2">
          {[
            'Any enrolled SGSITS student (UG/PG/PhD) can use the IDEA Lab',
            'Fill the access request form at the lab entrance or online portal',
            'Attend one-time orientation/safety briefing (45 minutes)',
            'Book equipment slots via the lab scheduling board (walk-in or online)',
            'Faculty project groups get dedicated project mentoring sessions',
            'Open hours: 9:00 AM to 6:00 PM on all working days',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 size={14} className="text-slate-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium font-sans">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white rounded p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold font-display text-base mb-1">AICTE IDEA Lab Initiative</h4>
          <p className="text-sm text-slate-300 font-sans">Learn more about the national AICTE IDEA Lab program and SGSITS participation</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm">
            <div className="flex items-center gap-1.5">
              <Phone size={13} className="text-accent" />
              <span>0731-2582360 (Lab Incharge)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={13} className="text-accent" />
              <a href="mailto:idealab@sgsits.ac.in" className="hover:underline">idealab@sgsits.ac.in</a>
            </div>
          </div>
        </div>
        <a
          href="https://www.aicte-india.org/bureaus/idea-lab"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded text-xs font-bold hover:bg-accent/90 transition-colors shrink-0"
        >
          AICTE IDEA Lab <ExternalLink size={12} />
        </a>
      </div>
    </div>
  )
}

export default IDEALab
