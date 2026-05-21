import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import LeftSidebar from './LeftSidebar'
import Breadcrumbs from '../global/Breadcrumbs'
import { sidebarLinks } from '../../constants/sidebarLinks'
import { 
  Info, 
  GraduationCap, 
  Building2, 
  FileCheck2, 
  Briefcase, 
  Compass, 
  Lightbulb, 
  Award,
  BookOpen
} from 'lucide-react'

interface SidebarLayoutProps {
  section?: string
}

const sectionDetails: Record<string, { title: string; subtitle: string; icon: React.ComponentType<any> }> = {
  about: {
    title: 'About the Institute',
    subtitle: 'Discover the heritage, autonomous status, and leadership of SGSITS Indore.',
    icon: Info
  },
  academics: {
    title: 'Academics at SGSITS',
    subtitle: 'Rigorous schemes, ordinances, and academic calendars designed for excellence.',
    icon: GraduationCap
  },
  facilities: {
    title: 'Campus & Facilities',
    subtitle: 'State-of-the-art resources, research labs, hostel life, and sports complexes.',
    icon: Building2
  },
  admission: {
    title: 'Admissions Portal',
    subtitle: 'Shape your future here. Find entry pathways, eligibility requirements, and guides.',
    icon: FileCheck2
  },
  placement: {
    title: 'Training & Placements',
    subtitle: 'Bridging academia and top-tier global industries. View our exceptional stats.',
    icon: Briefcase
  },
  explore: {
    title: 'Explore SGSITS',
    subtitle: 'Browse photo albums, watch video tours, and discover our historical campus.',
    icon: Compass
  },
  startup: {
    title: 'Startup & Innovation Cell',
    subtitle: 'Nurturing student-led entrepreneurship, incubation, and technological research.',
    icon: Lightbulb
  },
  teqip: {
    title: 'TEQIP Initiatives',
    subtitle: 'Technical Education Quality Improvement Programme of the Government of India.',
    icon: Award
  }
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ section }) => {
  const location = useLocation()

  const getActiveSection = () => {
    if (section) return section
    const pathParts = location.pathname.split('/').filter(Boolean)
    return pathParts[0] || 'about'
  }

  const activeSection = getActiveSection()
  const links = sidebarLinks[activeSection] || []
  const hasSidebar = links.length > 0

  const details = sectionDetails[activeSection] || {
    title: 'SGSITS Indore',
    subtitle: 'An Institute of National Standing - Established in 1952',
    icon: BookOpen
  }

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Clean Academic Section Banner */}
      <div className="w-full bg-[#f7f8fa] text-slate-900 py-8 px-4 lg:px-12 relative border-b-2 border-slate-200">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#154273] font-semibold text-[11px] font-bold uppercase tracking-widest block mb-2">
              {activeSection} Portal
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 font-display">
              {details.title}
            </h1>
            <p className="text-sm text-slate-500 mt-2 font-medium">
              {details.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Column Layout — sidebar fixed, content scrolls */}
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-12 flex-grow">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* LEFT SIDEBAR — sticky on desktop, stacks on mobile */}
          {hasSidebar && (
            <div className="w-full md:w-64 flex-shrink-0 md:sticky md:top-[72px] md:self-start">
              <div className="pt-8 pb-4">
                <Breadcrumbs />
              </div>
              <LeftSidebar section={activeSection} />
            </div>
          )}

          {/* RIGHT CONTENT — scrolls freely */}
          <div className={`flex-grow w-full py-8 ${
            hasSidebar
              ? 'bg-white rounded-md border border-slate-200 p-6 sm:p-8 mt-0 min-h-[600px]'
              : 'min-h-[500px]'
          }`}>
            {!hasSidebar && <div className="mb-4"><Breadcrumbs /></div>}
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  )
}

export default SidebarLayout
