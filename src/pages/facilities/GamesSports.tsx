import React from 'react'
import { Award, CheckCircle2, Phone, Mail } from 'lucide-react'

const outdoorFacilities = [
  { sport: 'Cricket', detail: 'Full-size ground with practice nets (4 nets), pitch, and pavilion' },
  { sport: 'Football', detail: 'FIFA standard grass field with goal posts and floodlights' },
  { sport: 'Basketball', detail: '2 concrete courts with standard ring and backboards' },
  { sport: 'Volleyball', detail: '2 courts — one indoor, one outdoor with nets' },
  { sport: 'Athletics', detail: '400m synthetic running track, long jump pit, high jump area' },
  { sport: 'Tennis', detail: '2 hard-surface courts with nets and boundary markings' },
  { sport: 'Kabaddi / Kho-Kho', detail: 'Dedicated ground for traditional Indian games' },
]

const indoorFacilities = [
  'Badminton — 4 courts (indoor sports hall)',
  'Table Tennis — 6 tables in dedicated TT hall',
  'Chess — Competition-grade boards and clocks',
  'Carrom — 10 boards available',
  'Gymnasium — fully equipped fitness center',
  'Squash Court — 1 court (Main building)',
]

const achievements = [
  'RGPV Inter-College Tournament — Cricket Champions (2023)',
  'MP State University Games — 3 gold medals in Athletics',
  'All India Inter-NIT Sports Meet — Badminton finalists',
  'AICTE Yoga Olympiad — 1st place in MP zone',
  'National Basketball Championship (Technical Institutes) — Quarterfinals',
]

const GamesSports: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Facilities</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Games & Sports</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Sports Complex & Recreation Centre — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          SGSITS promotes a culture of physical fitness and sporting excellence through its well-maintained sports complex
          spread over a large portion of the 52-acre campus. The <strong>Students' Sports Society (SSS)</strong> administers all
          sports activities, organizes inter-department tournaments, and represents the institute at RGPV, state, and national competitions.
          Dedicated sports coaches are appointed for major sports disciplines.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: '7+', label: 'Outdoor Sports' },
          { value: '6+', label: 'Indoor Games' },
          { value: '400m', label: 'Athletic Track' },
          { value: '20+', label: 'Tournaments/Year' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-2xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Outdoor Facilities */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Outdoor</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Outdoor Sports Facilities</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th className="text-left text-white px-4 py-3 font-semibold">Sport</th>
                <th className="text-left text-white px-4 py-3 font-semibold">Facility Details</th>
              </tr>
            </thead>
            <tbody>
              {outdoorFacilities.map((row, i) => (
                <tr key={i} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 border-b border-slate-100 font-bold text-primary">{row.sport}</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600 font-medium">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Indoor Facilities */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Indoor</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Indoor Games & Gymnasium</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {indoorFacilities.map((item) => (
            <div key={item} className="flex items-center gap-2.5 bg-white border border-slate-200 rounded px-3 py-2.5 text-sm">
              <CheckCircle2 size={14} className="text-slate-600 shrink-0" />
              <span className="text-slate-700 font-medium font-sans">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-slate-50 border border-slate-200 rounded p-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
          <Award size={16} className="text-accent" />
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Notable Achievements</h4>
        </div>
        <div className="space-y-2">
          {achievements.map((ach, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="text-accent font-bold shrink-0">🏆</span>
              <span className="text-slate-700 font-medium font-sans">{ach}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white border border-slate-200 rounded p-5">
        <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">Sports Committee Contact</h4>
        <div className="flex flex-wrap gap-6 text-sm font-sans">
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-accent" />
            <span className="text-slate-600">0731-2582310 (Sports Office)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={13} className="text-accent" />
            <a href="mailto:sports@sgsits.ac.in" className="text-accent-blue hover:underline">sports@sgsits.ac.in</a>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-3">Sports Office: Main Building, Ground Floor, Near Main Entrance</p>
      </div>
    </div>
  )
}

export default GamesSports
