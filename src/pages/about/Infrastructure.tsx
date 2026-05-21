import React from 'react'
import { Building, Monitor, BookOpen, Dumbbell, Home, Wifi, FlaskConical } from 'lucide-react'

const facilities = [
  { icon: Building, name: 'Campus Area', value: '52 Acres', desc: 'Lush green campus in the heart of Indore city' },
  { icon: BookOpen, name: 'Central Library', value: '50,000+ Books', desc: 'Digital library with IEEE, Springer, Elsevier access' },
  { icon: Monitor, name: 'Computer Center', value: '500+ Systems', desc: 'High-speed internet with modern software labs' },
  { icon: FlaskConical, name: 'Central Workshop', value: 'Multi-section', desc: 'Carpentry, Welding, Foundry, Machine Shop, CNC' },
  { icon: Dumbbell, name: 'Gymnasium', value: 'Modern Equipment', desc: 'Qualified trainers, indoor & outdoor sports facilities' },
  { icon: Home, name: 'Hostels', value: '1200+ Capacity', desc: 'Separate boys & girls hostels with mess facility' },
  { icon: Wifi, name: 'Wi-Fi Campus', value: '100 Mbps', desc: 'Complete campus covered with high-speed Wi-Fi' },
  { icon: FlaskConical, name: 'AICTE IDEA Lab', value: 'Innovation Hub', desc: '3D printing, IoT, robotics, drone lab' },
]

const Infrastructure: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Infrastructure</h2>
        <p className="text-sm text-gray-500 mt-1">World-class facilities for holistic development</p>
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed">
        SGSITS boasts a sprawling 52-acre campus equipped with state-of-the-art infrastructure to support academic, 
        research, and extracurricular activities. The campus features modern classrooms, well-equipped laboratories, 
        a comprehensive library, hostels, sports facilities, and much more.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {facilities.map((f) => (
          <div key={f.name} className="bg-white rounded-md border border-slate-200 p-5 hover:border-slate-400 transition-colors shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}>
                <f.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[15px]" style={{ color: 'var(--color-primary)' }}>{f.name}</h3>
                <p className="text-lg font-bold mt-0.5" style={{ color: 'var(--color-accent)' }}>{f.value}</p>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>Additional Facilities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
          <div className="flex items-center gap-2"><span style={{ color: 'var(--color-accent)' }}>✓</span> Dispensary / Health Center</div>
          <div className="flex items-center gap-2"><span style={{ color: 'var(--color-accent)' }}>✓</span> Auditorium (500 capacity)</div>
          <div className="flex items-center gap-2"><span style={{ color: 'var(--color-accent)' }}>✓</span> Seminar Halls</div>
          <div className="flex items-center gap-2"><span style={{ color: 'var(--color-accent)' }}>✓</span> Canteen & Cafeteria</div>
          <div className="flex items-center gap-2"><span style={{ color: 'var(--color-accent)' }}>✓</span> ATM on Campus</div>
          <div className="flex items-center gap-2"><span style={{ color: 'var(--color-accent)' }}>✓</span> Solar Power Plant</div>
          <div className="flex items-center gap-2"><span style={{ color: 'var(--color-accent)' }}>✓</span> Rainwater Harvesting</div>
          <div className="flex items-center gap-2"><span style={{ color: 'var(--color-accent)' }}>✓</span> CCTV Surveillance</div>
          <div className="flex items-center gap-2"><span style={{ color: 'var(--color-accent)' }}>✓</span> Parking Facilities</div>
        </div>
      </div>
    </div>
  )
}

export default Infrastructure
