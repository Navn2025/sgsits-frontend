/**
 * Faculty Dashboard — SGSITS Portal
 *
 * This is a placeholder faculty portal page.
 * Full faculty features (timetable, leave management, research portal, etc.)
 * will be implemented when the backend API is ready.
 *
 * Backend endpoints needed:
 *   GET  /api/faculty/me           — Current faculty profile
 *   GET  /api/faculty/timetable    — Class schedule
 *   GET  /api/faculty/notices      — Department notices
 *   POST /api/faculty/leave        — Submit leave application
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'
import {
  User, BookOpen, Calendar, FileText, LogOut,
  Bell, Settings, ChevronRight, Building2
} from 'lucide-react'

const FacultyDashboard: React.FC = () => {
  const { user, clearAuth } = useAdminStore()

  const handleLogout = () => {
    clearAuth()
    window.location.href = '/login'
  }

  const quickLinks = [
    { label: 'My Profile', desc: 'View and update your faculty profile', icon: User, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { label: 'Timetable', desc: 'Your class schedule and lecture hours', icon: Calendar, color: 'bg-green-50 text-green-600 border-green-100' },
    { label: 'Notices', desc: 'Department and institute notices', icon: Bell, color: 'bg-orange-50 text-orange-600 border-orange-100' },
    { label: 'Research Portal', desc: 'Publications, projects and funding', icon: BookOpen, color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { label: 'Leave Application', desc: 'Apply and track leave requests', icon: FileText, color: 'bg-teal-50 text-teal-600 border-teal-100' },
    { label: 'Department', desc: 'Department info and colleagues', icon: Building2, color: 'bg-slate-50 text-slate-600 border-slate-200' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-primary text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <img src="/assets/image.png" alt="SGSITS Logo" className="w-10 h-10 object-contain bg-white rounded-full p-0.5" />
          <div>
            <h1 className="font-display font-bold text-base">SGSITS Faculty Portal</h1>
            <p className="text-white/60 text-xs">Shri Govindram Seksaria Institute of Technology and Science</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/" className="text-white/70 hover:text-white text-xs font-medium transition-colors">← Public Site</Link>
          <button onClick={handleLogout} className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-medium transition-colors">
            <LogOut size={14} />Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Welcome Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <User size={28} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-slate-800">
                Welcome, {user?.name || 'Faculty Member'}
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">{user?.email}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  {user?.role}
                </span>
                {user?.department && (
                  <span className="text-[10px] bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded font-bold">
                    {user.department}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Faculty Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-3 ${item.color}`}>
                    <Icon size={18} />
                  </div>
                  <h4 className="font-bold text-sm text-slate-800 group-hover:text-primary transition-colors">{item.label}</h4>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <Settings size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-amber-800">Faculty Portal — Under Development</h4>
              <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                The full faculty portal features (timetable, attendance, leave management, research tracking, salary slip download)
                will be available once the backend API is integrated. Currently displaying mock session data.
              </p>
              <p className="text-xs text-amber-700 mt-2">
                <strong>API needed:</strong> <code className="font-mono bg-amber-100 px-1 rounded">GET /api/faculty/me</code>,{' '}
                <code className="font-mono bg-amber-100 px-1 rounded">GET /api/faculty/timetable</code>, etc.
                See <code className="font-mono bg-amber-100 px-1 rounded">BACKEND_API_DOCS.md</code> for specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Notices */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recent Notices</h3>
            <Link to="/notices" className="text-xs text-accent-blue font-semibold hover:underline flex items-center gap-1">
              View All <ChevronRight size={12} />
            </Link>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-100">
            {[
              { title: 'End Semester Examination Schedule — Even Sem 2025-26', date: 'May 15, 2026', isNew: true },
              { title: 'Faculty Development Program — June 2026', date: 'May 10, 2026', isNew: false },
              { title: 'Academic Council Meeting — Minutes Available', date: 'May 5, 2026', isNew: false },
            ].map((notice, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-start gap-3">
                  <Bell size={14} className="text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-800">{notice.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{notice.date}</p>
                  </div>
                </div>
                {notice.isNew && (
                  <span className="text-[9px] bg-red-50 text-red-600 border border-red-200 px-1.5 py-0.5 rounded font-bold shrink-0">NEW</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default FacultyDashboard
