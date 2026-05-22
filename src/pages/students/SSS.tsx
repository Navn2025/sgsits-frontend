import React from 'react'
import { Link } from 'react-router-dom'
import { Award, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react'

const sportsOffered = [
  'Cricket', 'Football', 'Basketball', 'Volleyball', 'Athletic & Track Events',
  'Badminton', 'Table Tennis', 'Tennis', 'Chess', 'Carrom',
  'Kabaddi', 'Kho-Kho', 'Weight Lifting', 'Yoga', 'Squash',
]

const achievements = [
  'RGPV Inter-College Tournament — Cricket Champions (2022-23)',
  'MP State University Games — 3 Gold Medals in Athletics',
  'DAVV Inter-College Badminton — Runner-up (2023)',
  'All India Technical Institute Games — Basketball Quarterfinals',
  'MP Yoga Championship — 2 State Level Medals',
  'AICTE Yoga Olympiad — Zone Champions (MP)',
]

const SSS: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Student Welfare</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Students' Sports Society (SSS)</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">Sports Governance & Athletics — SGSITS Indore</p>
      </div>

      <div className="border-l-2 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          The <strong>Students' Sports Society (SSS)</strong> is the premier student body responsible for organizing and coordinating
          all sports and athletic activities at SGSITS. The SSS manages inter-department tournaments, represents the
          institute in RGPV, DAVV, and national university games, and ensures that every student has access to
          sports facilities and coaching. The SSS is governed by elected student representatives under the faculty
          <strong> Sports Officer / Dean Student Welfare</strong>.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: '15+', label: 'Sports Offered' },
          { value: '20+', label: 'Tournaments/Year' },
          { value: '52 Acres', label: 'Campus Sports Area' },
          { value: 'Coaches', label: 'For Major Sports' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded p-4 text-center shadow-sm">
            <p className="text-xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider font-sans mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Sports Offered */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Sports</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Sports & Games Offered</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {sportsOffered.map((sport) => (
            <div key={sport} className="bg-white border border-slate-200 rounded px-3 py-2.5 text-xs font-semibold text-slate-700 text-center hover:border-primary hover:bg-primary/5 transition-colors">
              {sport}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-2 font-medium">
          Full facilities available — see <Link to="/facilities/sports" className="text-accent-blue hover:underline">Sports Complex page</Link> for details
        </p>
      </div>

      {/* Annual Sports Day */}
      <div className="bg-primary text-white rounded p-5">
        <h4 className="font-display font-bold text-base mb-2">Annual Sports Day — SGSITS</h4>
        <p className="text-sm text-slate-300 font-sans leading-relaxed">
          The Annual Sports Day is a week-long celebration held every January/February. It features inter-department
          tournaments across all sports disciplines, track & field events, and a grand prize distribution ceremony.
          Outstanding athletes receive trophies, certificates, and priority in placement/scholarship decisions.
        </p>
      </div>

      {/* Achievements */}
      <div className="bg-slate-50 border border-slate-200 rounded p-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
          <Award size={16} className="text-accent" />
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Recent Achievements</h4>
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

      {/* Registration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white border border-slate-200 rounded p-5">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">How to Participate</h4>
          <div className="space-y-2 text-sm text-slate-600 font-sans">
            {[
              'All enrolled students can participate in SSS events',
              'Register for sports through Dean Student Welfare office',
              'Annual sports registration at beginning of each semester',
              'Students selected for inter-college teams get additional practice support',
              'Outstanding performers receive sports scholarships and fee concessions',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-slate-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded p-5">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">Contact — Sports Office</h4>
          <div className="space-y-2 text-sm font-sans">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-accent" />
              <span className="text-slate-600">0731-2582310 (Sports Officer)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-accent" />
              <a href="mailto:sports@sgsits.ac.in" className="text-accent-blue hover:underline">sports@sgsits.ac.in</a>
            </div>
            <Link to="/facilities/sports" className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-3 hover:underline">
              View Sports Complex Details <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SSS
