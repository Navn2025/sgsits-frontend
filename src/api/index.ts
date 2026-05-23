/**
 * SGSITS Frontend — Mock API Functions
 *
 * ⚠️  MOCK MODE: All functions here return mock data using simulated delays.
 * When the backend is ready, replace the mock implementations with:
 *   return apiClient.post('/endpoint', data).then(r => r.data)
 *
 * The function signatures and return types should remain the same.
 * See: src/types/index.ts for all data models.
 */

import apiClient from './client'
import type {
  LoginResponse, Notice, NewsItem, Event, Tender, Alert,
  Faculty, GalleryAlbum, PlacementRecord, SiteSettings
} from '../types'

// ── Utility: simulate network delay ───────────────────────────────────────
const delay = (ms = 400) => new Promise(res => setTimeout(res, ms))
const generateId = () => Math.random().toString(36).slice(2, 10)

// ═══════════════════════════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════════════════════════
export const authAPI = {
  /**
   * Admin login
   * Backend endpoint: POST /api/auth/admin/login
   * Body: { email, password }
   * Returns: { token, user }
   */
  adminLogin: async (email: string, password: string): Promise<LoginResponse> => {
    // ── MOCK ──
    await delay(1000)
    if (!email || !password || password.length < 4) {
      throw new Error('Invalid credentials')
    }
    const roleMap: Record<string, 'super_admin' | 'editor'> = {
      'admin@sgsits.ac.in': 'super_admin',
      'director@sgsits.ac.in': 'super_admin',
    }
    return {
      token: `mock-jwt-${generateId()}`,
      user: {
        id: 'admin-001',
        name: email.split('@')[0].split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        email,
        role: roleMap[email] ?? 'editor',
      }
    }
    // ── REAL: return apiClient.post('/auth/admin/login', { email, password }).then(r => r.data) ──
  },

  /**
   * Faculty login
   * Backend endpoint: POST /api/auth/faculty/login
   * Body: { employeeId, password }
   */
  facultyLogin: async (employeeId: string, password: string): Promise<LoginResponse> => {
    await delay(800)
    if (!employeeId || !password) throw new Error('Invalid credentials')
    return {
      token: `mock-faculty-jwt-${generateId()}`,
      user: {
        id: `fac-${generateId()}`,
        name: 'Faculty Member',
        email: `${employeeId.toLowerCase()}@sgsits.ac.in`,
        role: 'faculty',
        employeeId,
        department: 'Computer Engineering',
      }
    }
  },

  /**
   * HOD (Head of Department) login
   * Backend endpoint: POST /api/auth/hod/login
   * Body: { employeeId, password }
   */
  hodLogin: async (employeeId: string, password: string): Promise<LoginResponse> => {
    await delay(800)
    if (!employeeId || !password) throw new Error('Invalid credentials')
    return {
      token: `mock-hod-jwt-${generateId()}`,
      user: {
        id: `hod-${generateId()}`,
        name: 'Head of Department',
        email: `${employeeId.toLowerCase()}@sgsits.ac.in`,
        role: 'hod',
        employeeId,
        department: 'Computer Engineering',
      }
    }
  },

  /**
   * Exam Department / Exam Controller login
   * Backend endpoint: POST /api/auth/exam/login
   * Body: { employeeId, password }
   */
  examLogin: async (employeeId: string, password: string): Promise<LoginResponse> => {
    await delay(800)
    if (!employeeId || !password) throw new Error('Invalid credentials')
    return {
      token: `mock-exam-jwt-${generateId()}`,
      user: {
        id: `exam-${generateId()}`,
        name: 'Exam Controller',
        email: `${employeeId.toLowerCase()}@sgsits.ac.in`,
        role: 'exam_controller',
        employeeId,
        department: 'Examination Cell',
      }
    }
  },

  /**
   * Placement Officer login (Training & Placement cell)
   * Backend endpoint: POST /api/auth/placement/login
   * Body: { employeeId, password }
   */
  placementLogin: async (employeeId: string, password: string): Promise<LoginResponse> => {
    await delay(800)
    if (!employeeId || !password) throw new Error('Invalid credentials')
    return {
      token: `mock-placement-jwt-${generateId()}`,
      user: {
        id: `plc-${generateId()}`,
        name: 'Placement Officer',
        email: `${employeeId.toLowerCase()}@sgsits.ac.in`,
        role: 'placement_officer',
        employeeId,
        department: 'Training & Placement Cell',
      }
    }
  },

  logout: async () => {
    await delay(200)
    // REAL: return apiClient.post('/auth/logout')
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// NOTICES
// ═══════════════════════════════════════════════════════════════════════════
const MOCK_NOTICES: Notice[] = [
  { id: 'n1', title: 'End Semester Examination Schedule — Even Sem 2025-26', description: 'End semester examinations for all UG and PG students begin from June 1, 2026. Time table attached.', category: 'Examination', isNew: true, publishedAt: '2026-05-15', publishedBy: 'Exam Cell', isActive: true },
  { id: 'n2', title: 'Holiday on account of Republic Day — 26th January', description: 'The institute will remain closed on January 26, 2026 on account of Republic Day.', category: 'General', isNew: false, publishedAt: '2026-01-25', publishedBy: 'Registrar Office', isActive: true },
  { id: 'n3', title: 'Fee Payment Deadline Extended to 31st January', description: 'Last date for fee payment for the even semester 2025-26 has been extended to January 31, 2026.', category: 'Fee', isNew: false, publishedAt: '2026-01-10', publishedBy: 'Finance Office', isActive: true },
  { id: 'n4', title: 'Workshop on AI/ML — Registration Open', description: 'Computer Engineering department is organizing a 3-day workshop on AI & Machine Learning from Jan 20-22.', category: 'Academic', isNew: false, publishedAt: '2025-12-20', publishedBy: 'Dept. of CE', isActive: false },
  { id: 'n5', title: 'Anti-Ragging Awareness Program', description: 'Mandatory attendance for all first-year students. Program scheduled on December 5, 2025 at Main Auditorium.', category: 'General', isNew: false, publishedAt: '2025-12-05', publishedBy: 'DSW Office', isActive: true },
]

export const noticesAPI = {
  /** GET /api/notices */
  getAll: async (): Promise<Notice[]> => {
    await delay()
    return [...MOCK_NOTICES]
    // REAL: return apiClient.get('/notices').then(r => r.data.data)
  },
  /** POST /api/notices */
  create: async (data: Omit<Notice, 'id'>): Promise<Notice> => {
    await delay()
    return { ...data, id: generateId() }
    // REAL: return apiClient.post('/notices', data).then(r => r.data.data)
  },
  /** PUT /api/notices/:id */
  update: async (id: string, data: Partial<Notice>): Promise<Notice> => {
    await delay()
    return { id, ...data } as Notice
    // REAL: return apiClient.put(`/notices/${id}`, data).then(r => r.data.data)
  },
  /** DELETE /api/notices/:id */
  delete: async (_id: string): Promise<void> => {
    await delay()
    // REAL: return apiClient.delete(`/notices/${_id}`)
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// NEWS
// ═══════════════════════════════════════════════════════════════════════════
const MOCK_NEWS: NewsItem[] = [
  { id: 'news1', title: 'SGSITS Students Win Smart India Hackathon 2025', summary: 'Team from CS dept wins ₹1 Lakh prize at SIH Grand Finale', content: 'Full content...', category: 'Achievement', publishedAt: '2025-12-18', publishedBy: 'Admin', isActive: true, tags: ['SIH', 'Hackathon', 'Achievement'] },
  { id: 'news2', title: 'NAAC Peer Team Visits SGSITS for Reaccreditation', summary: 'NAAC peer team visits campus for assessment; expects Grade A+', content: 'Full content...', category: 'General', publishedAt: '2025-11-22', publishedBy: 'Admin', isActive: true, tags: ['NAAC', 'Accreditation'] },
  { id: 'news3', title: 'New MoU signed with IIT Indore for Research Collaboration', summary: 'SGSITS and IIT Indore sign MoU to promote joint research and student exchange', content: 'Full content...', category: 'Research', publishedAt: '2025-10-10', publishedBy: 'Admin', isActive: true, tags: ['MoU', 'IIT', 'Research'] },
]

export const newsAPI = {
  getAll: async (): Promise<NewsItem[]> => { await delay(); return [...MOCK_NEWS] },
  create: async (data: Omit<NewsItem, 'id'>): Promise<NewsItem> => { await delay(); return { ...data, id: generateId() } },
  update: async (id: string, data: Partial<NewsItem>): Promise<NewsItem> => { await delay(); return { id, ...data } as NewsItem },
  delete: async (_id: string): Promise<void> => { await delay() },
}

// ═══════════════════════════════════════════════════════════════════════════
// EVENTS
// ═══════════════════════════════════════════════════════════════════════════
const MOCK_EVENTS: Event[] = [
  { id: 'ev1', title: 'Annual Convocation 2025-26', description: 'Degree distribution ceremony at SGSITS auditorium. All eligible graduates to report by 9:00 AM.', venue: 'Main Auditorium', startDate: '2026-03-15', category: 'Academic', organizer: 'Registrar Office', isActive: true },
  { id: 'ev2', title: 'Rhythm 2026 — Annual Cultural Festival', description: '3-day extravaganza featuring music, dance, drama, fashion show and celebrity performances.', venue: 'SGSITS Campus', startDate: '2026-02-20', endDate: '2026-02-22', category: 'Cultural', organizer: 'Student Council', isActive: true },
  { id: 'ev3', title: 'Technosearch 2026 — Technical Festival', description: 'Inter-college technical competition with 50+ events including robotics, coding and paper presentations.', venue: 'Dept. of CE & IT', startDate: '2026-02-05', endDate: '2026-02-07', category: 'Technical', organizer: 'Technosearch Committee', isActive: true },
  { id: 'ev4', title: 'National Conference on Sustainable Engineering', description: 'Two-day conference organized by Mechanical Engineering department with national participation.', venue: 'Seminar Hall, ME Dept', startDate: '2026-01-28', endDate: '2026-01-29', category: 'Seminar', organizer: 'Dept. of ME', isActive: true },
]

export const eventsAPI = {
  getAll: async (): Promise<Event[]> => { await delay(); return [...MOCK_EVENTS] },
  create: async (data: Omit<Event, 'id'>): Promise<Event> => { await delay(); return { ...data, id: generateId() } },
  update: async (id: string, data: Partial<Event>): Promise<Event> => { await delay(); return { id, ...data } as Event },
  delete: async (_id: string): Promise<void> => { await delay() },
}

// ═══════════════════════════════════════════════════════════════════════════
// TENDERS
// ═══════════════════════════════════════════════════════════════════════════
const MOCK_TENDERS: Tender[] = [
  { id: 't1', title: 'Supply of Laboratory Equipment for ECE Department', refNo: 'SGSITS/Tender/2026/045', department: 'Electronics & Telecomm', status: 'Open', publishedAt: '2026-05-10', lastDate: '2026-05-30' },
  { id: 't2', title: 'Annual Maintenance Contract for Computer Center (2026–27)', refNo: 'SGSITS/Tender/2026/039', department: 'Computer Center', status: 'Open', publishedAt: '2026-04-25', lastDate: '2026-05-20' },
  { id: 't3', title: 'Mess Catering Services for Boys & Girls Hostels', refNo: 'SGSITS/Tender/2026/032', department: 'Hostel Administration', status: 'Closed', publishedAt: '2026-04-10', lastDate: '2026-04-30' },
  { id: 't4', title: 'Civil Works — Renovation of Administrative Block', refNo: 'SGSITS/Tender/2026/028', department: 'Estate Office', status: 'Closed', publishedAt: '2026-03-20', lastDate: '2026-04-10' },
]

export const tendersAPI = {
  getAll: async (): Promise<Tender[]> => { await delay(); return [...MOCK_TENDERS] },
  create: async (data: Omit<Tender, 'id'>): Promise<Tender> => { await delay(); return { ...data, id: generateId() } },
  update: async (id: string, data: Partial<Tender>): Promise<Tender> => { await delay(); return { id, ...data } as Tender },
  delete: async (_id: string): Promise<void> => { await delay() },
}

// ═══════════════════════════════════════════════════════════════════════════
// ALERTS (Marquee)
// ═══════════════════════════════════════════════════════════════════════════
const MOCK_ALERTS: Alert[] = [
  { id: 'al1', text: 'Institute Day 2025 - Live Streaming on YouTube Channel', link: 'https://youtube.com', priority: 'high', isActive: true, createdAt: '2026-05-01' },
  { id: 'al2', text: 'Rolling Advertisement No SGSITS/R/3/2025 — Visit sgsits.ac.in for applications', priority: 'urgent', isActive: true, createdAt: '2026-04-20' },
  { id: 'al3', text: 'End Semester Examinations begin June 1, 2026 — Check time table on notice board', priority: 'high', isActive: true, createdAt: '2026-05-15' },
  { id: 'al4', text: 'Technosearch 2026 registrations open — Register before February 1', priority: 'normal', isActive: false, createdAt: '2026-01-15' },
]

export const alertsAPI = {
  getAll: async (): Promise<Alert[]> => { await delay(); return [...MOCK_ALERTS] },
  create: async (data: Omit<Alert, 'id'>): Promise<Alert> => { await delay(); return { ...data, id: generateId() } },
  update: async (id: string, data: Partial<Alert>): Promise<Alert> => { await delay(); return { id, ...data } as Alert },
  delete: async (_id: string): Promise<void> => { await delay() },
}

// ═══════════════════════════════════════════════════════════════════════════
// FACULTY
// ═══════════════════════════════════════════════════════════════════════════
const MOCK_FACULTY: Faculty[] = [
  { id: 'f1', name: 'Dr. Urjita Thakar', designation: 'Professor & Head', department: 'Computer Engineering', qualification: 'Ph.D (IIT Bombay)', specialization: 'Distributed Systems, Network Security', email: 'thakarurjita@gmail.com', employeeId: 'SGS-CE-001', joiningDate: '2001-08-01', isActive: true, publications: 42, phone: '0731-2582401' },
  { id: 'f2', name: 'Dr. K.K. Sharma', designation: 'Professor & Head', department: 'Information Technology', qualification: 'Ph.D (SGSITS)', specialization: 'Database Systems, Data Mining', email: 'kkssgs@gmail.com', employeeId: 'SGS-IT-001', joiningDate: '1998-07-15', isActive: true, publications: 35, phone: '0731-2582260' },
  { id: 'f3', name: 'Dr. R.K. Khare', designation: 'Professor & Head', department: 'Civil Engineering', qualification: 'Ph.D (IIT Roorkee)', specialization: 'Structural Analysis, Seismic Engineering', email: 'rakeshkhare@hotmail.com', employeeId: 'SGS-CE-002', joiningDate: '1995-08-01', isActive: true, publications: 68 },
  { id: 'f4', name: 'Dr. H.K. Verma', designation: 'Professor & Head', department: 'Electrical Engineering', qualification: 'Ph.D (IIT Kanpur)', specialization: 'Power Systems, Renewable Energy', email: 'hverma@sgsits.ac.in', employeeId: 'SGS-EE-001', joiningDate: '2000-07-01', isActive: true, publications: 51 },
  { id: 'f5', name: 'Dr. Satish Jain', designation: 'Professor & Head', department: 'Electronics & Telecommunication', qualification: 'Ph.D (IIT Delhi)', specialization: 'VLSI Design, Signal Processing', email: 'satishjain.jain@gmail.com', employeeId: 'SGS-ETC-001', joiningDate: '1999-08-15', isActive: true, publications: 44, phone: '+91-731-2582451' },
]

export const facultyAPI = {
  getAll: async (): Promise<Faculty[]> => { await delay(); return [...MOCK_FACULTY] },
  create: async (data: Omit<Faculty, 'id'>): Promise<Faculty> => { await delay(); return { ...data, id: generateId() } },
  update: async (id: string, data: Partial<Faculty>): Promise<Faculty> => { await delay(); return { id, ...data } as Faculty },
  delete: async (_id: string): Promise<void> => { await delay() },
}

// ═══════════════════════════════════════════════════════════════════════════
// GALLERY
// ═══════════════════════════════════════════════════════════════════════════
const MOCK_ALBUMS: GalleryAlbum[] = [
  { id: 'alb1', title: 'Campus & Architecture', slug: 'campus-architecture', description: 'Main building, academic blocks and sprawling 52-acre campus grounds', photoCount: 48, createdAt: '2026-01-10', isActive: true },
  { id: 'alb2', title: 'Cultural Events — Rhythm', slug: 'cultural-events', description: 'Annual cultural festival with music, dance, drama and literary events', photoCount: 62, createdAt: '2026-02-22', isActive: true },
  { id: 'alb3', title: 'Technosearch 2026', slug: 'technical-festivals', description: 'Inter-college technical competition, robotics, paper presentations', photoCount: 37, createdAt: '2026-02-08', isActive: true },
  { id: 'alb4', title: 'Convocation Ceremony 2025', slug: 'convocation', description: 'Graduation ceremonies and degree distribution', photoCount: 54, createdAt: '2025-12-20', isActive: true },
]

export const galleryAPI = {
  getAlbums: async (): Promise<GalleryAlbum[]> => { await delay(); return [...MOCK_ALBUMS] },
  createAlbum: async (data: Omit<GalleryAlbum, 'id'>): Promise<GalleryAlbum> => { await delay(); return { ...data, id: generateId() } },
  updateAlbum: async (id: string, data: Partial<GalleryAlbum>): Promise<GalleryAlbum> => { await delay(); return { id, ...data } as GalleryAlbum },
  deleteAlbum: async (_id: string): Promise<void> => { await delay() },
}

// ═══════════════════════════════════════════════════════════════════════════
// PLACEMENT
// ═══════════════════════════════════════════════════════════════════════════
const MOCK_PLACEMENT_RECORDS: PlacementRecord[] = [
  { id: 'pr1', year: '2023-24', totalStudents: 1200, studentsPlaced: 1140, placementPercent: 95, highestPackage: '₹50 LPA', averagePackage: '₹12 LPA', recruiters: 150 },
  { id: 'pr2', year: '2022-23', totalStudents: 1150, studentsPlaced: 1070, placementPercent: 93, highestPackage: '₹45 LPA', averagePackage: '₹10 LPA', recruiters: 140 },
  { id: 'pr3', year: '2021-22', totalStudents: 1100, studentsPlaced: 990, placementPercent: 90, highestPackage: '₹42 LPA', averagePackage: '₹8.5 LPA', recruiters: 130 },
  { id: 'pr4', year: '2020-21', totalStudents: 1050, studentsPlaced: 924, placementPercent: 88, highestPackage: '₹38 LPA', averagePackage: '₹7.5 LPA', recruiters: 120 },
  { id: 'pr5', year: '2019-20', totalStudents: 1000, studentsPlaced: 850, placementPercent: 85, highestPackage: '₹35 LPA', averagePackage: '₹7 LPA', recruiters: 110 },
]

export const placementAPI = {
  getRecords: async (): Promise<PlacementRecord[]> => { await delay(); return [...MOCK_PLACEMENT_RECORDS] },
  createRecord: async (data: Omit<PlacementRecord, 'id'>): Promise<PlacementRecord> => { await delay(); return { ...data, id: generateId() } },
  updateRecord: async (id: string, data: Partial<PlacementRecord>): Promise<PlacementRecord> => { await delay(); return { id, ...data } as PlacementRecord },
  deleteRecord: async (_id: string): Promise<void> => { await delay() },
}

// ═══════════════════════════════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════════════════════════════
const MOCK_SETTINGS: SiteSettings = {
  siteName: 'SGSITS Indore',
  tagline: 'An Institute of National Standing',
  directorName: 'Prof. Neetesh Purohit',
  contactEmail: 'registrar@sgsits.ac.in',
  contactPhone: '+91-731-2582100',
  address: '23, Park Road (Sir M. Visvesvaraya Marg), Indore, M.P. - 452003, India',
  marqueeEnabled: true,
  maintenanceMode: false,
  socialLinks: {
    facebook: 'https://facebook.com/sgsitsindore',
    twitter: 'https://twitter.com/sgsitsindore',
    youtube: 'https://youtube.com/@sgsitsindore',
    linkedin: 'https://linkedin.com/school/sgsitsindore',
  }
}

export const settingsAPI = {
  get: async (): Promise<SiteSettings> => { await delay(); return { ...MOCK_SETTINGS } },
  update: async (data: Partial<SiteSettings>): Promise<SiteSettings> => { await delay(); return { ...MOCK_SETTINGS, ...data } },
}

// ── Re-export everything ───────────────────────────────────────────────────
export { apiClient }
