import React from 'react'
import { Calendar, Download } from 'lucide-react'

const semesters = [
  { name: 'Odd Semester', period: 'July – December', events: [
    { date: 'July 1', event: 'Commencement of classes' },
    { date: 'August 15', event: 'Independence Day (Holiday)' },
    { date: 'September', event: 'Mid-Semester Examinations' },
    { date: 'October', event: 'Dussehra / Diwali Break' },
    { date: 'November', event: 'End-Semester Examinations begin' },
    { date: 'December', event: 'Winter Vacation' },
  ]},
  { name: 'Even Semester', period: 'January – June', events: [
    { date: 'January 1', event: 'Commencement of classes' },
    { date: 'January 26', event: 'Republic Day (Holiday)' },
    { date: 'February-March', event: 'Mid-Semester Examinations' },
    { date: 'March', event: 'Holi Break' },
    { date: 'April-May', event: 'End-Semester Examinations' },
    { date: 'June', event: 'Summer Vacation' },
  ]},
]

const AcademicCalendar: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Academic Calendar</h2>
        <p className="text-sm text-gray-500 mt-1">Academic session 2025–2026</p>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-md border-2" style={{ borderColor: 'var(--color-accent)', backgroundColor: 'rgba(212,175,55,0.05)' }}>
        <Download size={20} style={{ color: 'var(--color-accent)' }} />
        <div>
          <p className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Download Academic Calendar 2025–26 (PDF)</p>
          <p className="text-xs text-gray-500">Detailed calendar with all important dates and events</p>
        </div>
      </div>

      {semesters.map((sem) => (
        <div key={sem.name}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
            <Calendar size={20} style={{ color: 'var(--color-accent)' }} /> {sem.name}
            <span className="text-sm font-normal text-gray-500 ml-2">({sem.period})</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                  <th className="text-left text-white px-4 py-3 font-semibold w-40">Date / Period</th>
                  <th className="text-left text-white px-4 py-3 font-semibold">Event / Activity</th>
                </tr>
              </thead>
              <tbody>
                {sem.events.map((e, i) => (
                  <tr key={i} className="bg-white hover:bg-slate-50 transition-colors duration-200">
                    <td className="px-4 py-3 border-b border-gray-100 font-medium" style={{ color: 'var(--color-accent)' }}>{e.date}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{e.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AcademicCalendar
