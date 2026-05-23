// ─────────────────────────────────────────────
//  SGSITS Frontend — Shared TypeScript Types
//  All API response shapes are defined here.
//  When backend is ready, these types should
//  match the actual JSON response schemas.
// ─────────────────────────────────────────────

// ── Auth ──────────────────────────────────────
export type UserRole =
  | 'super_admin'           // alias for central_admin in the existing CMS — full institute control
  | 'central_admin'         // doc terminology — manages users, departments, global content
  | 'editor'                // CMS sub-role with content CRUD but no settings
  | 'hod'                   // Head of Department — branch-scoped
  | 'faculty'               // alias for teacher in code; the doc uses "teacher"
  | 'teacher'               // doc terminology — own-profile, publications, research, subjects
  | 'exam_controller'       // exam dept — sessions, timetables, results, calendar
  | 'placement_officer'     // placement cell — notices, company visits, records, training
  | 'student'               // ERP redirect target only

export interface AuthUser {
  id: string
  name: string
  email: string
  role: UserRole
  department?: string
  employeeId?: string
  avatarUrl?: string
}

export interface LoginResponse {
  token: string
  user: AuthUser
}

// ── Notices ───────────────────────────────────
export interface Notice {
  id: string
  title: string
  description: string
  category: 'Academic' | 'Examination' | 'Hostel' | 'Placement' | 'General' | 'Fee'
  isNew: boolean
  attachmentUrl?: string
  publishedAt: string   // ISO date string
  expiresAt?: string
  publishedBy: string
  isActive: boolean
}

// ── News ──────────────────────────────────────
export interface NewsItem {
  id: string
  title: string
  summary: string
  content: string
  category: 'Research' | 'Achievement' | 'Event' | 'Industry' | 'General'
  imageUrl?: string
  publishedAt: string
  publishedBy: string
  isActive: boolean
  tags: string[]
}

// ── Events ────────────────────────────────────
export interface Event {
  id: string
  title: string
  description: string
  venue: string
  startDate: string
  endDate?: string
  category: 'Cultural' | 'Technical' | 'Sports' | 'Academic' | 'Workshop' | 'Seminar'
  organizer: string
  registrationUrl?: string
  imageUrl?: string
  isActive: boolean
}

// ── Tenders ───────────────────────────────────
export type TenderStatus = 'Open' | 'Closed' | 'Cancelled'

export interface Tender {
  id: string
  title: string
  refNo: string
  department: string
  status: TenderStatus
  publishedAt: string
  lastDate: string
  documentUrl?: string
  estimatedValue?: string
  description?: string
}

// ── Alerts (Marquee / Announcements) ──────────
export interface Alert {
  id: string
  text: string
  link?: string
  priority: 'low' | 'normal' | 'high' | 'urgent'
  isActive: boolean
  createdAt: string
  expiresAt?: string
}

// ── Faculty ───────────────────────────────────
export interface Faculty {
  id: string
  name: string
  designation: 'Professor & Head' | 'Professor' | 'Associate Professor' | 'Assistant Professor' | 'Lecturer' | 'Lab Assistant'
  department: string
  qualification: string
  specialization: string
  email: string
  phone?: string
  employeeId: string
  joiningDate: string
  photoUrl?: string
  isActive: boolean
  researchAreas?: string[]
  publications?: number
}

// ── Department ────────────────────────────────
export interface Department {
  id: string
  slug: string
  name: string
  shortName: string
  hodName: string
  hodEmail: string
  hodPhone?: string
  programsOffered: string[]
  facultyCount: number
  establishedYear?: number
  vision?: string
  mission?: string
  isActive: boolean
}

// ── Gallery ───────────────────────────────────
export interface GalleryAlbum {
  id: string
  title: string
  slug: string
  description: string
  coverImageUrl?: string
  photoCount: number
  createdAt: string
  isActive: boolean
}

export interface GalleryPhoto {
  id: string
  albumId: string
  caption: string
  imageUrl: string
  uploadedAt: string
  uploadedBy: string
}

// ── Placement ─────────────────────────────────
export interface PlacementRecord {
  id: string
  year: string             // e.g. "2023-24"
  totalStudents: number
  studentsPlaced: number
  placementPercent: number
  highestPackage: string   // e.g. "₹50 LPA"
  averagePackage: string
  recruiters: number
}

export interface PlacementCompany {
  id: string
  name: string
  sector: 'IT/Software' | 'Core Engineering' | 'Finance' | 'Consulting' | 'PSU' | 'Startup' | 'Other'
  logoUrl?: string
  visitYear: string
  offersExtended: number
}

// ── Settings ──────────────────────────────────
export interface SiteSettings {
  siteName: string
  tagline: string
  directorName: string
  directorPhoto?: string
  contactEmail: string
  contactPhone: string
  address: string
  marqueeEnabled: boolean
  maintenanceMode: boolean
  socialLinks: {
    facebook?: string
    twitter?: string
    youtube?: string
    linkedin?: string
    instagram?: string
  }
}

// ── API Generic Wrappers ───────────────────────
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  total: number
  page: number
  limit: number
}
