import React from 'react'
import { Link } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'
import { PageHeader, PortalCard, SessionBanner } from '../../components/layout/PortalLayout'
import {
  SUBJECTS, MARKS_REQUESTS, CORRECTION_REQUESTS,
  SESSIONS, FACULTY_MEMBERS,
} from '../../data/mockPortalData'
import {
  LEAVE_APPLICATIONS, TIMETABLE_SLOTS, TIMETABLE_PERIODS, DEPT_NOTICES,
} from '../../data/mockHodData'
import {
  BookOpen, ClipboardList, FileEdit, CalendarDays, FileCheck2,
  Megaphone, ChevronRight, Clock, AlertTriangle, CheckCircle2,
} from 'lucide-react'

// Mock current-faculty identity. Replace with `user.id` once auth backend exists.
const CURRENT_FACULTY_ID = 'F001'

// Get the local day short-code (Mon, Tue, …) to filter today's timetable.
const DAY_CODES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const
const TODAY = DAY_CODES[new Date().getDay()]

const FacultyDashboard: React.FC = () => {
  const { user } = useAdminStore()
  const currentSession = SESSIONS.find(s => s.is_active)
  const me = FACULTY_MEMBERS.find(f => f.id === CURRENT_FACULTY_ID)

  // Scope every section to the current faculty member.
  const mySubjects   = SUBJECTS.filter(s => s.facultyId === CURRENT_FACULTY_ID)
  const myMarks      = MARKS_REQUESTS.filter(r => r.facultyId === CURRENT_FACULTY_ID)
  const pendingMarks = myMarks.filter(r => r.status === 'pending')
  const overdueMarks = myMarks.filter(r => r.status === 'overdue')
  const submittedMarks = myMarks.filter(r => r.status === 'submitted')
  const myCorrections = CORRECTION_REQUESTS.filter(c => c.facultyId === CURRENT_FACULTY_ID)
  const myLeaves     = LEAVE_APPLICATIONS.filter(l => l.facultyId === CURRENT_FACULTY_ID)
  const pendingLeaves = myLeaves.filter(l => l.status === 'pending')
  const todaySlots   = TIMETABLE_SLOTS
    .filter(t => t.facultyId === CURRENT_FACULTY_ID && t.day === TODAY)
    .sort((a, b) => a.period - b.period)
  const facultyNotices = DEPT_NOTICES
    .filter(n => n.audience === 'All' || n.audience === 'Faculty')
    .slice(0, 4)

  const stats = [
    { label: 'Allocated Subjects', value: mySubjects.length,      icon: BookOpen,      color: 'bg-[#0b2545]/5 text-[#0b2545] border-[#0b2545]/15',  link: '/dashboard/teacher/subjects',     desc: 'This session' },
    { label: 'Pending Marks',      value: pendingMarks.length,    icon: ClipboardList, color: 'bg-[#bfa15f]/15 text-[#bfa15f] border-[#bfa15f]/40', link: '/dashboard/teacher/marks-feed',        desc: 'Awaiting your entry' },
    { label: 'Overdue Marks',      value: overdueMarks.length,    icon: AlertTriangle, color: 'bg-[#0b2545]/15 text-[#0b2545] border-[#0b2545]/30', link: '/dashboard/teacher/marks-feed',        desc: 'Past due date' },
    { label: 'Submitted Marks',    value: submittedMarks.length,  icon: CheckCircle2,  color: 'bg-[#bfa15f]/10 text-[#bfa15f] border-[#bfa15f]/30', link: '/dashboard/teacher/marks-feed',        desc: 'This session' },
    { label: 'Correction Reqs.',   value: myCorrections.length,   icon: FileEdit,      color: 'bg-[#0b2545]/10 text-[#0b2545] border-[#0b2545]/25', link: '/dashboard/teacher/correction-request',desc: 'Raised by you' },
    { label: 'Today’s Classes', value: todaySlots.length,    icon: CalendarDays,  color: 'bg-[#bfa15f]/5 text-[#bfa15f] border-[#bfa15f]/25',  link: '/dashboard/teacher/timetable',         desc: TODAY },
    { label: 'Leave Applications', value: myLeaves.length,        icon: FileCheck2,    color: 'bg-[#0b2545]/5 text-[#0b2545] border-[#0b2545]/15',  link: '/dashboard/teacher/leave',             desc: `${pendingLeaves.length} pending` },
    { label: 'Department Notices', value: facultyNotices.length,  icon: Megaphone,     color: 'bg-slate-50 text-slate-600 border-slate-200',         link: '/dashboard/teacher/notices',           desc: 'Recent for faculty' },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Welcome, ${user?.name ?? me?.name ?? 'Faculty Member'}`}
        subtitle={`${me?.designation ?? 'Faculty'} · Dept. of ${me?.branch_id ?? user?.department ?? '—'} · ${user?.employeeId ?? me?.employeeId ?? ''}`}
      />

      {currentSession && <SessionBanner session={currentSession.label} />}

      {/* Stat cards */}
      <div>
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">My Workload</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {stats.map(card => {
            const Icon = card.icon
            return (
              <Link
                key={card.label}
                to={card.link}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${card.color}`}>
                    <Icon size={16} />
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{card.value}</p>
                <p className="text-xs font-bold text-slate-600 mt-1">{card.label}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{card.desc}</p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Two-column: Today's schedule + Pending marks tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PortalCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-700">Today&rsquo;s Schedule &mdash; {TODAY}</h3>
            <Link to="/dashboard/teacher/timetable" className="text-xs text-[#0b2545] hover:underline font-medium">Full week &rarr;</Link>
          </div>
          {todaySlots.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No classes scheduled today. Enjoy the break.</p>
          ) : (
            <div className="space-y-2.5">
              {todaySlots.map(slot => (
                <div
                  key={slot.id}
                  className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <div className="shrink-0 w-12 text-center bg-white border border-[#0b2545]/15 rounded px-1 py-1.5">
                    <p className="text-[9px] text-[#0b2545] font-bold uppercase tracking-wider">P{slot.period + 1}</p>
                    <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{TIMETABLE_PERIODS[slot.period].split(' - ')[0]}</p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800 truncate">{slot.subjectName}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {slot.branch_id} &middot; Sem {slot.semester} &middot; Section {slot.section} &middot; Room {slot.room}
                    </p>
                  </div>
                  <Clock size={13} className="text-slate-400 shrink-0 mt-1.5" />
                </div>
              ))}
            </div>
          )}
        </PortalCard>

        <PortalCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-700">Pending Marks Tasks</h3>
            <Link to="/dashboard/teacher/marks-feed" className="text-xs text-[#0b2545] hover:underline font-medium">Open marks feed &rarr;</Link>
          </div>
          {pendingMarks.length + overdueMarks.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">All caught up. No pending marks entries.</p>
          ) : (
            <div className="space-y-2.5">
              {[...overdueMarks, ...pendingMarks].slice(0, 5).map(r => (
                <div
                  key={r.id}
                  className="flex items-start justify-between gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">
                      {r.subjectId} &middot; {r.subjectName}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Sem {r.semester} &middot; Section {r.section} &middot; {r.component} / {r.subComponent}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Due {r.dueDate}</p>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 uppercase tracking-wide ${
                      r.status === 'overdue'
                        ? 'bg-[#0b2545]/10 text-[#0b2545] border-[#0b2545]/25'
                        : 'bg-[#bfa15f]/15 text-[#bfa15f] border-[#bfa15f]/30'
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </PortalCard>
      </div>

      {/* Corrections + Notices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PortalCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-700">My Correction Requests</h3>
            <Link to="/dashboard/teacher/correction-request" className="text-xs text-[#0b2545] hover:underline font-medium">Manage &rarr;</Link>
          </div>
          {myCorrections.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No correction requests raised.</p>
          ) : (
            <div className="space-y-2.5">
              {myCorrections.map(c => (
                <div key={c.id} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-800">
                      {c.subjectId} &middot; {c.subjectName}
                    </p>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 uppercase tracking-wide ${
                        c.status === 'approved' ? 'bg-[#bfa15f]/10 text-[#bfa15f] border-[#bfa15f]/30' :
                        c.status === 'pending'  ? 'bg-[#bfa15f]/15 text-[#bfa15f] border-[#bfa15f]/40' :
                        c.status === 'rejected' ? 'bg-[#0b2545]/10 text-[#0b2545] border-[#0b2545]/25' :
                                                  'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {c.component} / {c.subComponent} &middot; {c.affectedEnrollments.length} student{c.affectedEnrollments.length !== 1 ? 's' : ''}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{c.reason}</p>
                  <p className="text-[10px] text-slate-400 mt-1.5">Submitted {c.submittedOn}</p>
                </div>
              ))}
            </div>
          )}
        </PortalCard>

        <PortalCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-700">Department Notices</h3>
            <Link to="/dashboard/teacher/notices" className="text-xs text-[#0b2545] hover:underline font-medium">View all &rarr;</Link>
          </div>
          {facultyNotices.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No recent notices.</p>
          ) : (
            <div className="space-y-2.5">
              {facultyNotices.map(n => (
                <div key={n.id} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-800">{n.title}</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0b2545]/10 text-[#0b2545] border border-[#0b2545]/20 shrink-0 uppercase tracking-wide">
                      {n.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{n.body}</p>
                  <p className="text-[10px] text-slate-400 mt-1.5">
                    {n.publishedBy} &middot; {n.publishedOn}
                  </p>
                </div>
              ))}
            </div>
          )}
        </PortalCard>
      </div>
    </div>
  )
}

export default FacultyDashboard
