import React from 'react'
import { CheckCircle2, Users } from 'lucide-react'

const equipment = [
  'Treadmills (6 units)', 'Elliptical Cross Trainers (4 units)', 'Exercise Bikes (4 units)',
  'Multi-Station Gym Machine', 'Free Weights & Dumbbells (5 kg – 40 kg)', 'Barbell & Squat Rack',
  'Rowing Machine', 'Pull-up / Dip Station', 'Yoga Mats & Stretching Area',
  'Abdomen Bench & Leg Press', 'Boxing Bag', 'Battle Ropes',
]

const timings = [
  { slot: 'Boys — Morning', time: '6:00 AM – 8:00 AM' },
  { slot: 'Girls — Morning', time: '8:00 AM – 9:00 AM' },
  { slot: 'All — Afternoon', time: '1:00 PM – 3:00 PM' },
  { slot: 'Boys — Evening', time: '5:00 PM – 8:00 PM' },
  { slot: 'Girls — Evening', time: '3:00 PM – 5:00 PM' },
]

const Gymnasium: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Facilities</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Gymnasium</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Fitness & Wellness Centre — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          The <strong>SGSITS Gymnasium</strong> is a well-equipped fitness and wellness facility available free of charge to all
          enrolled students and at nominal charges to staff members. A qualified and certified physical trainer is
          present during all operating hours to guide students in their fitness journey and prevent injuries.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: '3,000 sq ft', label: 'Gym Area' },
          { value: '12+', label: 'Cardio Machines' },
          { value: '5 AM – 8 PM', label: 'Open Daily' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-lg font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Equipment */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Equipment</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Available Equipment</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {equipment.map((item) => (
            <div key={item} className="flex items-center gap-2.5 bg-white border border-slate-200 rounded px-3 py-2.5 text-sm">
              <CheckCircle2 size={14} className="text-slate-600 shrink-0" />
              <span className="text-slate-700 font-medium font-sans">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timings */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Schedule</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Daily Time Slots</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th className="text-left text-white px-4 py-3 font-semibold">Time Slot</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Timing</th>
              </tr>
            </thead>
            <tbody>
              {timings.map((row, i) => (
                <tr key={i} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 border-b border-slate-100 font-medium text-slate-800">{row.slot}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Membership */}
      <div className="bg-slate-50 border border-slate-200 rounded p-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
          <Users size={16} className="text-accent" />
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Membership & Registration</h4>
        </div>
        <div className="text-sm text-slate-600 space-y-2 font-sans">
          <p>• <strong>Students:</strong> Free access with valid student ID card</p>
          <p>• <strong>Staff / Faculty:</strong> Nominal annual fee applicable (contact Sports Committee)</p>
          <p>• Registration form available at the Sports Office (Main Building, Ground Floor)</p>
          <p>• Proper sportswear (T-shirt, shorts/track pants, sports shoes) mandatory at all times</p>
          <p>• Sports Committee contact: sports@sgsits.ac.in | 0731-2582310</p>
        </div>
      </div>
    </div>
  )
}

export default Gymnasium
