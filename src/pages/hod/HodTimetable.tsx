import React, { useMemo, useState } from 'react'
import { PageHeader, PortalCard } from '../../components/layout/PortalLayout'
import {
  TIMETABLE_SLOTS, TIMETABLE_DAYS, TIMETABLE_PERIODS,
  type TimetableSlot, type TimetableDay,
} from '../../data/mockHodData'
import { Clock } from 'lucide-react'

const HOD_BRANCH = 'CSE'

const HodTimetable: React.FC = () => {
  const [sem, setSem] = useState<number>(5)
  const [section, setSection] = useState<string>('A')

  const slots = useMemo(
    () => TIMETABLE_SLOTS.filter(s => s.branch_id === HOD_BRANCH && s.semester === sem && s.section === section),
    [sem, section]
  )

  const grid = useMemo(() => {
    const g: Record<TimetableDay, Record<number, TimetableSlot | null>> = {
      Mon: {}, Tue: {}, Wed: {}, Thu: {}, Fri: {}, Sat: {},
    }
    TIMETABLE_DAYS.forEach(d => {
      TIMETABLE_PERIODS.forEach((_, i) => { g[d][i] = null })
    })
    slots.forEach(s => { g[s.day][s.period] = s })
    return g
  }, [slots])

  return (
    <div className="space-y-5">
      <PageHeader
        title="Class Timetable"
        subtitle="View department class schedule by semester and section"
      />

      <PortalCard className="!p-3">
        <div className="flex flex-wrap gap-2.5">
          <select
            value={sem}
            onChange={(e) => setSem(Number(e.target.value))}
            className="border border-slate-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0b2545]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>Semester {s}</option>)}
          </select>
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="border border-slate-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0b2545]"
          >
            <option value="A">Section A</option>
            <option value="B">Section B</option>
          </select>
        </div>
      </PortalCard>

      <PortalCard className="!p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-3 py-3 font-bold text-slate-500 uppercase tracking-wider w-28">
                  <Clock size={12} className="inline mr-1" /> Time
                </th>
                {TIMETABLE_DAYS.map(d => (
                  <th key={d} className="text-center px-3 py-3 font-bold text-slate-500 uppercase tracking-wider">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIMETABLE_PERIODS.map((time, periodIdx) => (
                <tr key={time} className="border-b border-slate-100">
                  <td className="px-3 py-3 font-mono text-[11px] text-slate-600 bg-slate-50/50 align-top">{time}</td>
                  {TIMETABLE_DAYS.map(day => {
                    const slot = grid[day][periodIdx]
                    return (
                      <td key={`${day}-${periodIdx}`} className="px-2 py-2 align-top border-l border-slate-100">
                        {slot ? (
                          <div className="bg-[#0b2545]/5 border border-[#0b2545]/20 rounded p-2">
                            <p className="text-[10px] font-mono font-bold text-[#0b2545]">{slot.subjectId}</p>
                            <p className="text-[11px] font-semibold text-slate-800 leading-tight mt-0.5">{slot.subjectName}</p>
                            <p className="text-[10px] text-slate-500 mt-1 leading-tight">{slot.facultyName}</p>
                            <p className="text-[10px] text-[#bfa15f] font-semibold mt-0.5">{slot.room}</p>
                          </div>
                        ) : (
                          <div className="h-full min-h-[60px] flex items-center justify-center text-slate-300 text-[10px]">—</div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PortalCard>

      <p className="text-[11px] text-slate-400 italic">
        Note: Timetable conflicts and faculty overload alerts will appear in a future release. Slot edits are restricted to the time-table coordinator role.
      </p>
    </div>
  )
}

export default HodTimetable
