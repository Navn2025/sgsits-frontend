import React from 'react'
import { Link } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'
import { PageHeader, PortalCard, SessionBanner } from '../../components/layout/PortalLayout'
import {
  SUBJECTS, STUDENTS, FACULTY_MEMBERS, MARKS_REQUESTS, CORRECTION_REQUESTS,
  REGISTRATION_REQUESTS, SESSIONS, BRANCHES,
} from '../../data/mockPortalData'
import { LEAVE_APPLICATIONS, DEPT_NOTICES, ATTENDANCE_SUMMARY } from '../../data/mockHodData'
import {
  BookOpen, Users, GraduationCap, ClipboardList, FileEdit, UserPlus,
  FileCheck2, Megaphone, ChevronRight, AlertTriangle, BarChart3,
} from 'lucide-react'

// In a real backend integration the HOD's branch comes from the auth profile.
// For mock we assume the logged-in HOD owns the CSE department.
const HOD_BRANCH = 'CSE'

const HodDashboard: React.FC = () => {
  const { user } = useAdminStore()
  const currentSession = SESSIONS.find(s => s.is_active)
  const branch = BRANCHES.find(b => b.id === HOD_BRANCH)

  const deptSubjects   = SUBJECTS.filter(s => s.branch_id === HOD_BRANCH)
  const deptFaculty    = FACULTY_MEMBERS.filter(f => f.branch_id === HOD_BRANCH)
  const deptStudents   = STUDENTS.filter(s => s.branch_id === HOD_BRANCH)
  const pendingMarks   = MARKS_REQUESTS.filter(r => r.branch_id === HOD_BRANCH && r.status !== 'submitted')
  const pendingCorrect = CORRECTION_REQUESTS.filter(c => c.status === 'pending')
  const pendingReg     = REGISTRATION_REQUESTS.filter(r => r.branch_id === HOD_BRANCH && r.status === 'pending')
  const pendingLeaves  = LEAVE_APPLICATIONS.filter(l => l.status === 'pending')
  const pinnedNotices  = DEPT_NOTICES.filter(n => n.pinned)

  const stats = [
    { label: 'Subjects',           value: deptSubjects.length,   icon: BookOpen,         color: 'bg-[#0b2545]/5 text-[#0b2545] border-[#0b2545]/15',  link: '/dashboard/hod/subjects',     desc: 'All semester subjects' },
    { label: 'Faculty Members',    value: deptFaculty.length,    icon: Users,            color: 'bg-[#bfa15f]/10 text-[#bfa15f] border-[#bfa15f]/30', link: '/dashboard/hod/teachers',     desc: 'Active department faculty' },
    { label: 'Students',           value: deptStudents.length,   icon: GraduationCap,    color: 'bg-[#0b2545]/10 text-[#0b2545] border-[#0b2545]/25', link: '/dashboard/hod/students',     desc: 'Enrolled in department' },
    { label: 'Pending Marks',      value: pendingMarks.length,   icon: ClipboardList,    color: 'bg-[#bfa15f]/15 text-[#bfa15f] border-[#bfa15f]/40', link: '/dashboard/hod/marks',        desc: 'Awaiting faculty entry' },
    { label: 'Correction Requests',value: pendingCorrect.length, icon: FileEdit,         color: 'bg-[#0b2545]/15 text-[#0b2545] border-[#0b2545]/30', link: '/dashboard/hod/corrections',  desc: 'Faculty mark corrections' },
    { label: 'Registration Reqs.', value: pendingReg.length,     icon: UserPlus,         color: 'bg-[#bfa15f]/5 text-[#bfa15f] border-[#bfa15f]/25',  link: '/dashboard/hod/registration', desc: 'New faculty onboarding' },
    { label: 'Leave Applications', value: pendingLeaves.length,  icon: FileCheck2,       color: 'bg-[#0b2545]/5 text-[#0b2545] border-[#0b2545]/15',  link: '/dashboard/hod/leaves',       desc: 'Awaiting your approval' },
    { label: 'Pinned Notices',     value: pinnedNotices.length,  icon: Megaphone,        color: 'bg-slate-50 text-slate-600 border-slate-200',         link: '/dashboard/hod/notices',      desc: 'Currently pinned' },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Department of ${branch?.name ?? 'Computer Science & Engineering'}`}
        subtitle={`Welcome back, ${user?.name ?? 'HOD'} — ${user?.role?.replace('_', ' ')}`}
      />

      {currentSession && <SessionBanner session={currentSession.label} />}

      {/* Stats Grid */}
      <div>
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">Department Overview</h3>
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

      {/* Two-column: Pending Leaves + Pending Marks/Corrections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PortalCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-700">Pending Leave Approvals</h3>
            <Link to="/dashboard/hod/leaves" className="text-xs text-[#0b2545] hover:underline font-medium">View all →</Link>
          </div>
          {pendingLeaves.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No pending leave applications.</p>
          ) : (
            <div className="space-y-2.5">
              {pendingLeaves.slice(0, 4).map(lv => (
                <div key={lv.id} className="flex items-start justify-between gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">{lv.facultyName}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {lv.leaveType} · {lv.days} day{lv.days > 1 ? 's' : ''} · {lv.fromDate} → {lv.toDate}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#bfa15f]/15 text-[#bfa15f] border border-[#bfa15f]/30 shrink-0 uppercase tracking-wide">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          )}
        </PortalCard>

        <PortalCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-700">Exam Activity</h3>
            <Link to="/dashboard/hod/marks" className="text-xs text-[#0b2545] hover:underline font-medium">View all →</Link>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="text-xs font-bold text-slate-700">Overdue Marks Entries</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Marks not submitted past due date.</p>
              </div>
              <span className="text-lg font-bold text-[#0b2545]">
                {pendingMarks.filter(r => r.status === 'overdue').length}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="text-xs font-bold text-slate-700">Pending Marks Entries</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Awaiting faculty entry.</p>
              </div>
              <span className="text-lg font-bold text-[#bfa15f]">
                {pendingMarks.filter(r => r.status === 'pending').length}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="text-xs font-bold text-slate-700">Correction Requests</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Faculty mark-correction approvals.</p>
              </div>
              <span className="text-lg font-bold text-[#0b2545]">{pendingCorrect.length}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div>
                <p className="text-xs font-bold text-slate-700">Faculty Registrations</p>
                <p className="text-[11px] text-slate-500 mt-0.5">New faculty awaiting your approval.</p>
              </div>
              <span className="text-lg font-bold text-[#bfa15f]">{pendingReg.length}</span>
            </div>
          </div>
        </PortalCard>
      </div>

      {/* Attendance + Notices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PortalCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-700">Attendance Defaulters (Below 75%)</h3>
            <BarChart3 size={14} className="text-[#bfa15f]" />
          </div>
          <div className="space-y-2">
            {ATTENDANCE_SUMMARY.filter(a => a.branch_id === HOD_BRANCH).map(a => (
              <div key={`${a.branch_id}-${a.semester}-${a.section}`} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-700">
                    Sem {a.semester} · Section {a.section}
                  </p>
                  <span className="text-[11px] text-slate-500">
                    Avg {a.avg_attendance_pct}% · {a.below_75} defaulter{a.below_75 !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {a.defaulters.map(d => (
                    <span key={d.enrollment} className="inline-flex items-center gap-1 text-[10px] bg-white border border-[#0b2545]/20 text-[#0b2545] px-2 py-0.5 rounded font-medium">
                      <AlertTriangle size={10} />{d.name} · {d.pct}%
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PortalCard>

        <PortalCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-700">Pinned Department Notices</h3>
            <Link to="/dashboard/hod/notices" className="text-xs text-[#0b2545] hover:underline font-medium">Manage →</Link>
          </div>
          {pinnedNotices.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No pinned notices.</p>
          ) : (
            <div className="space-y-2.5">
              {pinnedNotices.map(n => (
                <div key={n.id} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-800">{n.title}</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0b2545]/10 text-[#0b2545] border border-[#0b2545]/20 shrink-0 uppercase tracking-wide">
                      {n.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{n.body}</p>
                  <p className="text-[10px] text-slate-400 mt-1.5">
                    Audience: {n.audience} · Posted {n.publishedOn}
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

export default HodDashboard
