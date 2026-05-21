import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'
import {
  LayoutDashboard,
  Bell,
  Newspaper,
  Calendar,
  FileSpreadsheet,
  AlertOctagon,
  Network,
  Users,
  Image as ImageIcon,
  Briefcase,
  Settings,
  LogOut,
  ArrowLeft,
  UserCheck
} from 'lucide-react'

const AdminLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, clearAuth } = useAdminStore()

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out from the admin panel?')) {
      clearAuth()
      navigate('/admin/login')
    }
  }

  const menuItems = [
    { label: 'Dashboard Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Manage Notices', path: '/admin/notices', icon: Bell },
    { label: 'Manage News', path: '/admin/news', icon: Newspaper },
    { label: 'Manage Events', path: '/admin/events', icon: Calendar },
    { label: 'Manage Tenders', path: '/admin/tenders', icon: FileSpreadsheet },
    { label: 'Urgent Alerts', path: '/admin/alerts', icon: AlertOctagon },
    { label: 'Departments', path: '/admin/departments', icon: Network },
    { label: 'Faculty Directory', path: '/admin/faculty', icon: Users },
    { label: 'Photo Gallery', path: '/admin/gallery', icon: ImageIcon },
    { label: 'Placement Cell', path: '/admin/placement', icon: Briefcase },
    { label: 'System Settings', path: '/admin/settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen flex bg-slate-50 transition-colors duration-300">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-200 text-slate-600 flex flex-col justify-between flex-shrink-0 z-30">
        <div>
          {/* Logo Brand area */}
          <div className="p-5 border-b border-slate-150 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded bg-primary flex items-center justify-center border border-accent/30">
                <span className="text-white text-[10px] font-bold">SG</span>
              </div>
              <h1 className="font-display font-extrabold text-sm text-primary tracking-wider">
                SGSITS CMS
              </h1>
            </Link>
            <Link
              to="/"
              className="p-1 hover:bg-slate-50 hover:text-primary rounded transition-colors text-slate-400"
              title="Return to Public Site"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          {/* User profile card */}
          <div className="p-4 mx-3 my-4 bg-slate-50 border border-slate-150 rounded-md flex items-center gap-3">
            <div className="p-2 rounded-md bg-white border border-slate-150 text-accent">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-800 truncate">{user?.name || 'Administrator'}</p>
              <p className="text-[10px] text-slate-550 truncate">{user?.role || 'Super Admin'}</p>
            </div>
          </div>

          {/* Navigation link list */}
          <nav className="px-3 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 border-l-4 text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-primary/5 text-primary border-accent font-bold'
                      : 'hover:bg-slate-50 hover:text-primary text-slate-650 border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Footer actions area */}
        <div className="p-4 border-t border-slate-150">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 hover:bg-red-50 hover:text-red-600 text-slate-700 rounded-md text-xs font-bold transition-all border border-slate-200 hover:border-red-200 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Dashboard Frame */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200/80 flex items-center justify-between px-6 transition-colors duration-300">
          <h2 className="font-display font-bold text-slate-800 text-base">
            System Administration Panel
          </h2>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
            <span>Server Time: <strong className="text-slate-800">2026-05-21</strong></span>
            <div className="h-4 w-px bg-slate-200" />
            <span>Mode: <span className="bg-emerald-500/10 text-emerald-500 font-bold px-2 py-0.5 rounded-full border border-emerald-500/20">Production</span></span>
          </div>
        </header>

        {/* Core CRUD outlet grid view */}
        <main className="flex-grow p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
