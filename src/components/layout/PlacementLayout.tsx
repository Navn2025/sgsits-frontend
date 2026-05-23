import React from 'react'
import PortalLayout, { type PortalNavItem } from './PortalLayout'
import {
  LayoutDashboard,
  Megaphone,
  Building2,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react'

const navItems: PortalNavItem[] = [
  { label: 'Dashboard',          path: '/dashboard/placement/dashboard',          icon: LayoutDashboard },
  { label: 'Placement Notices',  path: '/dashboard/placement/notices',            icon: Megaphone },
  { label: 'Company Visits',     path: '/dashboard/placement/company-visits',     icon: Building2 },
  { label: 'Placement Records',  path: '/dashboard/placement/records',            icon: Award },
  { label: 'Training Programs',  path: '/dashboard/placement/training-programs',  icon: GraduationCap },
  { label: 'Internships',        path: '/dashboard/placement/internships',        icon: Briefcase },
]

const PlacementLayout: React.FC = () => (
  <PortalLayout
    title="Placement Cell"
    subtitle="Training &amp; Placement Portal"
    navItems={navItems}
  />
)

export default PlacementLayout
