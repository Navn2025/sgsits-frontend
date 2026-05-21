import React from 'react'
import { Briefcase, Award, TrendingUp, Target, Building2 } from 'lucide-react'

const stats = [
  { icon: Award, label: 'Highest Package', value: '50 LPA', desc: 'Core Engineering / CS' },
  { icon: TrendingUp, label: 'Average Package', value: '12 LPA', desc: 'Consistent yearly growth' },
  { icon: Target, label: 'Placement Rate', value: '95%', desc: 'Across top branches' },
  { icon: Building2, label: 'Total Recruiter Partners', value: '150+', desc: 'National & Global giants' }
]

const records = [
  { year: '2023-24', placed: '95%', highest: '50.0 LPA', average: '12.0 LPA', companies: '150+' },
  { year: '2022-23', placed: '93%', highest: '45.0 LPA', average: '10.0 LPA', companies: '140+' },
  { year: '2021-22', placed: '90%', highest: '42.0 LPA', average: '8.5 LPA', companies: '130+' },
  { year: '2020-21', placed: '88%', highest: '38.0 LPA', average: '7.5 LPA', companies: '120+' },
  { year: '2019-20', placed: '85%', highest: '35.0 LPA', average: '7.0 LPA', companies: '110+' }
]

const PlacementRecord: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <span className="text-xs uppercase font-extrabold tracking-widest text-accent">Placements</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1 text-primary font-display">
          Placement Records
        </h2>
        <p className="text-sm text-slate-500 mt-1.5 font-semibold">
          Year-wise institutional placement statistics and recruitment achievements
        </p>
      </div>

      {/* Highlights Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon
          return (
            <div 
              key={idx}
              className="bg-white p-6 rounded-md border border-slate-200 shadow-sm transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-md bg-primary/5 flex items-center justify-center text-accent mb-4">
                <Icon size={20} className="stroke-[2]" />
              </div>
              <p className="text-sm font-bold text-slate-550 leading-none">{item.label}</p>
              <h4 className="text-3xl font-black text-primary font-display mt-2.5 leading-none">
                {item.value}
              </h4>
              <p className="text-[11px] text-slate-400 font-bold mt-1.5">{item.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Stats Table section */}
      <div className="space-y-5 pt-2">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-accent">Placements Ledger</span>
          <h3 className="text-xl font-bold text-primary font-display">Year-Wise Analytics</h3>
        </div>

        {/* Premium styled table container */}
        <div className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white font-display border-b border-primary/20">
                  <th className="text-left px-6 py-4 font-bold text-xs uppercase tracking-wider">Academic Year</th>
                  <th className="text-left px-6 py-4 font-bold text-xs uppercase tracking-wider">Placement %</th>
                  <th className="text-left px-6 py-4 font-bold text-xs uppercase tracking-wider">Highest Package</th>
                  <th className="text-left px-6 py-4 font-bold text-xs uppercase tracking-wider">Average Package</th>
                  <th className="text-left px-6 py-4 font-bold text-xs uppercase tracking-wider">Recruiters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {records.map((r) => (
                  <tr 
                    key={r.year} 
                    className="hover:bg-slate-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-extrabold text-primary font-display">
                      {r.year}
                    </td>
                    <td className="px-6 py-4 font-black text-accent">
                      {r.placed}
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-700">
                      {r.highest}
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-750">
                      {r.average}
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-650">
                      {r.companies}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recruiter branding info banner */}
      <div className="rounded-md bg-white p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Briefcase size={20} className="text-accent shrink-0" />
          <span className="text-xs font-bold text-slate-700 leading-relaxed">
            Our exceptional student training framework ensures placements in top-tier multinational companies, including Amazon, Microsoft, TCS, Infosys, Cognizant, Wipro, and high-impact deep-tech startups.
          </span>
        </div>
      </div>
    </div>
  )
}

export default PlacementRecord
