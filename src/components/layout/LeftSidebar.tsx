import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sidebarLinks } from '../../constants/sidebarLinks'
import type { SidebarLink } from '../../constants/sidebarLinks'

interface LeftSidebarProps {
  section: string
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ section }) => {
  const location = useLocation()
  const links: SidebarLink[] = sidebarLinks[section] || []

  if (links.length === 0) return null

  // Beautified section title formatting
  const sectionTitle = section === 'teqip' ? 'TEQIP III' : section.charAt(0).toUpperCase() + section.slice(1)

  return (
    <aside className="w-full md:w-64 flex-shrink-0 bg-white rounded-md border border-slate-200 p-5">
      <div className="mb-4 pb-3 border-b border-gray-150">
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">Section Menu</span>
        <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
          {sectionTitle}
        </h3>
      </div>
      <nav className="space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === link.path || location.pathname.startsWith(link.path + '/')

          return (
            <Link
              key={link.path}
              to={link.path}
              state={{ fromSidebar: true }}
              className={`flex items-center px-4 py-2.5 rounded-md text-sm font-semibold transition-colors duration-200 border-l-4 ${
                isActive
                  ? 'bg-slate-50 text-primary border-accent font-bold'
                  : 'text-slate-600 hover:text-primary hover:bg-slate-50 border-transparent'
              }`}
            >
              <span className="truncate">{link.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default LeftSidebar
