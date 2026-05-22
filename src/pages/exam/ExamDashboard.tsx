import React from 'react'
import { Link } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'
import { PageHeader, PortalCard, SessionBanner } from '../../components/layout/PortalLayout'
import { SESSIONS, BRANCHES, COURSES, SUBJECTS, STUDENTS, MARKS_REQUESTS } from '../../data/mockPortalData'
import { Calendar, Building2, BookOpen, Users, FileText, AlertTriangle, CheckCircle, Clock, ChevronRight } from 'lucide-react'

const ExamDashboard: React.FC = () => {
  const { user } = useAdminStore()
  const currentSession = SESSIONS.find(s => s.is_active)
  const pendingRequests = MARKS_REQUESTS.filter(r => r.status === 'pending').length
  const overdueRequests = MARKS_REQUESTS.filter(r => r.status === 'overdue').length

  const stats = [
    { label: 'Active Session', value: currentSession?.label ?? '—', icon: Calendar, color: 'bg-blue-50 text-blue-600 border-blue-100', link: '/exam/session-management' },
    { label: 'Branches', value: BRANCHES.length, icon: Building2, color: 'bg-purple-50 text-purple-600 border-purple-100', link: '/exam/branch-management' },
    { label: 'Courses', value: COURSES.length, icon: BookOpen, color: 'bg-teal-50 text-teal-600 border-teal-100', link: '/exam/course-management' },
    { label: 'Subjects', value: SUBJECTS.length, icon: FileText, color: 'bg-indigo-50 text-indigo-600 border-indigo-100', link: '/exam/subject-upload' },
    { label: 'Students', value: STUDENTS.length, icon: Users, color: 'bg-green-50 text-green-600 border-green-100', link: '/exam/student-upload' },
    { label: 'Pending Marks', value: pendingRequests, icon: Clock, color: 'bg-amber-50 text-amber-600 border-amber-100', link: '/exam/marks-request' },
    { label: 'Overdue Marks', value: overdueRequests, icon: AlertTriangle, color: 'bg-red-50 text-red-600 border-red-100', link: '/exam/marks-request' },
    { label: 'Submitted', value: MARKS_REQUESTS.filter(r => r.status === 'submitted').length, icon: CheckCircle, color: 'bg-emerald-50 text-emerald-600 border-emerald-100', link: '/exam/marks-request' },
  ]

  const quickLinks = [
    { label: 'Session Management', path: '/exam/session-management', desc: 'Create and manage academic sessions' },
    { label: 'Branch Management', path: '/exam/branch-management', desc: 'Add and configure branches' },
    { label: 'Course Management', path: '/exam/course-management', desc: 'Manage degree programs' },
    { label: 'Upload Subjects', path: '/exam/subject-upload', desc: 'Upload subject data via CSV' },
    { label: 'Upload Students', path: '/exam/student-upload', desc: 'Upload student enrollment data' },
    { label: 'Upload ATKT Data', path: '/exam/atkt-upload', desc: 'Upload ATKT eligible students' },
    { label: 'Address Requests', path: '/exam/requests', desc: 'Review faculty correction requests' },
    { label: 'Marks Requests', path: '/exam/marks-request', desc: 'Generate marks entry requests' },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        title="Exam Department Dashboard"
        subtitle={`Welcome back, ${user?.name ?? 'Administrator'} · Exam Controller`}
      />

      {currentSession && <SessionBanner session={currentSession.label} />}

      {/* Stats */}
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
            </Link>
          )
        })}
      </div>

      {/* Quick Links */}
      <PortalCard>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Quick Access</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {quickLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-start gap-2 p-3 rounded-lg border border-slate-200 hover:border-primary/40 hover:bg-primary/5 transition-all group"
            >
              <div className="mt-0.5 w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0">
                <ChevronRight size={10} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">{link.label}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{link.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </PortalCard>

      {/* Recent Marks Requests */}
      <PortalCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-700">Recent Marks Requests</h3>
          <Link to="/exam/marks-request" className="text-xs text-primary hover:underline font-medium">View all →</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {['Subject', 'Branch', 'Sem', 'Component', 'Due Date', 'Status'].map(h => (
                  <th key={h} className="text-left px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MARKS_REQUESTS.slice(0, 5).map(r => (
                <tr key={r.id} className="hover:bg-slate-50/60">
                  <td className="px-3 py-2.5">
                    <p className="font-semibold text-slate-700 text-xs">{r.subjectId}</p>
                    <p className="text-[11px] text-slate-400">{r.subjectName}</p>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-slate-600">{r.branch_id} — Sec {r.section}</td>
                  <td className="px-3 py-2.5 text-xs text-slate-600">Sem {r.semester}</td>
                  <td className="px-3 py-2.5 text-xs text-slate-600">{r.component} / {r.subComponent}</td>
                  <td className="px-3 py-2.5 text-xs text-slate-600">{r.dueDate}</td>
                  <td className="px-3 py-2.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${
                      r.status === 'submitted' ? 'bg-green-50 text-green-700 border-green-200' :
                      r.status === 'overdue'   ? 'bg-red-50 text-red-700 border-red-200' :
                      'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PortalCard>
    </div>
  )
}

export default ExamDashboard
