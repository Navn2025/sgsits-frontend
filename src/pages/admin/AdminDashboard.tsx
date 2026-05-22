import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'
import {
  Bell, Newspaper, Calendar, FileSpreadsheet, AlertOctagon,
  Users, Image as ImageIcon, Briefcase, TrendingUp, ChevronRight,
  Clock, Database
} from 'lucide-react'
import { noticesAPI, newsAPI, eventsAPI, tendersAPI, facultyAPI, alertsAPI, galleryAPI } from '../../api'

interface StatCard {
  label: string
  value: number | string
  icon: React.ComponentType<{ size?: number; className?: string }>
  color: string
  link: string
  desc: string
}

const AdminDashboard: React.FC = () => {
  const { user } = useAdminStore()
  const [stats, setStats] = useState({
    notices: 0, news: 0, events: 0, tenders: 0, faculty: 0, alerts: 0, albums: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      noticesAPI.getAll(),
      newsAPI.getAll(),
      eventsAPI.getAll(),
      tendersAPI.getAll(),
      facultyAPI.getAll(),
      alertsAPI.getAll(),
      galleryAPI.getAlbums(),
    ]).then(([notices, news, events, tenders, faculty, alerts, albums]) => {
      setStats({
        notices: notices.length,
        news: news.length,
        events: events.length,
        tenders: tenders.filter(t => t.status === 'Open').length,
        faculty: faculty.length,
        alerts: alerts.filter(a => a.isActive).length,
        albums: albums.length,
      })
    }).finally(() => setLoading(false))
  }, [])

  const cards: StatCard[] = [
    { label: 'Notices', value: stats.notices, icon: Bell, color: 'bg-blue-50 text-blue-600 border-blue-100', link: '/admin/notices', desc: 'Official notices & circulars' },
    { label: 'News Items', value: stats.news, icon: Newspaper, color: 'bg-green-50 text-green-600 border-green-100', link: '/admin/news', desc: 'Campus news & updates' },
    { label: 'Upcoming Events', value: stats.events, icon: Calendar, color: 'bg-purple-50 text-purple-600 border-purple-100', link: '/admin/events', desc: 'Events & programs' },
    { label: 'Open Tenders', value: stats.tenders, icon: FileSpreadsheet, color: 'bg-orange-50 text-orange-600 border-orange-100', link: '/admin/tenders', desc: 'Active procurement tenders' },
    { label: 'Faculty Records', value: stats.faculty, icon: Users, color: 'bg-teal-50 text-teal-600 border-teal-100', link: '/admin/faculty', desc: 'Faculty directory entries' },
    { label: 'Active Alerts', value: stats.alerts, icon: AlertOctagon, color: 'bg-red-50 text-red-600 border-red-100', link: '/admin/alerts', desc: 'Marquee announcements' },
    { label: 'Gallery Albums', value: stats.albums, icon: ImageIcon, color: 'bg-pink-50 text-pink-600 border-pink-100', link: '/admin/gallery', desc: 'Photo gallery collections' },
    { label: 'Placement Records', value: '5 Yrs', icon: Briefcase, color: 'bg-slate-50 text-slate-600 border-slate-200', link: '/admin/placement', desc: 'Placement statistics data' },
  ]

  const quickActions = [
    { label: 'Add New Notice', link: '/admin/notices', icon: Bell, color: 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100' },
    { label: 'Add News Article', link: '/admin/news', icon: Newspaper, color: 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100' },
    { label: 'Add Event', link: '/admin/events', icon: Calendar, color: 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100' },
    { label: 'Add Tender', link: '/admin/tenders', icon: FileSpreadsheet, color: 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100' },
    { label: 'Update Alerts', link: '/admin/alerts', icon: AlertOctagon, color: 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100' },
    { label: 'Upload Gallery', link: '/admin/gallery', icon: ImageIcon, color: 'bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100' },
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="font-display text-2xl font-bold text-slate-800">Dashboard Overview</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Welcome back, <strong className="text-primary">{user?.name || 'Administrator'}</strong> ·{' '}
            <span className="text-xs capitalize bg-primary/10 text-primary px-1.5 py-0.5 rounded font-semibold">{user?.role?.replace('_', ' ')}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Clock size={14} className="text-slate-400" />
          <span>Last login: {new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Content Summary</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Link
                key={card.label}
                to={card.link}
                className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${card.color}`}>
                    <Icon size={16} />
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                </div>
                <p className="text-2xl font-display font-bold text-slate-800">
                  {loading ? '—' : card.value}
                </p>
                <p className="text-xs font-bold text-slate-600 mt-1">{card.label}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{card.desc}</p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.label}
                to={action.link}
                className={`border rounded-lg p-4 text-center transition-colors cursor-pointer ${action.color}`}
              >
                <Icon size={20} className="mx-auto mb-2" />
                <span className="text-xs font-bold">{action.label}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Site Health */}
      <div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">System Status</h3>
        <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-100">
          {[
            { label: 'Frontend Application', status: 'Operational', color: 'text-green-600 bg-green-50' },
            { label: 'Backend API', status: 'Pending Setup', color: 'text-orange-600 bg-orange-50' },
            { label: 'Database Connection', status: 'Pending Setup', color: 'text-orange-600 bg-orange-50' },
            { label: 'File Storage (Media)', status: 'Pending Setup', color: 'text-orange-600 bg-orange-50' },
            { label: 'Email Service', status: 'Pending Setup', color: 'text-orange-600 bg-orange-50' },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between px-5 py-3">
              <div className="flex items-center gap-3">
                <Database size={14} className="text-slate-400" />
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${item.color}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* API Integration Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <TrendingUp size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm text-amber-800">Backend Integration Ready</h4>
            <p className="text-xs text-amber-700 mt-1 leading-relaxed">
              This admin panel is fully wired for backend API integration. All CRUD operations currently use mock data.
              When your backend is ready, update <code className="font-mono bg-amber-100 px-1 rounded">VITE_API_BASE_URL</code> in{' '}
              <code className="font-mono bg-amber-100 px-1 rounded">.env.local</code> and replace mock functions in{' '}
              <code className="font-mono bg-amber-100 px-1 rounded">src/api/index.ts</code>.
              See <code className="font-mono bg-amber-100 px-1 rounded">BACKEND_API_DOCS.md</code> for the complete API specification.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
