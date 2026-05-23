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
import { mockStore } from '../data/mockStore'
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

export const noticesAPI = {
  /** GET /api/notices */
  getAll: async (): Promise<Notice[]> => {
    await delay()
    return mockStore.getNotices() as any
  },
  /** POST /api/notices */
  create: async (data: Omit<Notice, 'id'>): Promise<Notice> => {
    await delay()
    return mockStore.addNotice(data as any) as any
  },
  /** PUT /api/notices/:id */
  update: async (id: string, data: Partial<Notice>): Promise<Notice> => {
    await delay()
    mockStore.updateNotice(id, data as any)
    return { id, ...data } as any
  },
  /** DELETE /api/notices/:id */
  delete: async (id: string): Promise<void> => {
    await delay()
    mockStore.deleteNotice(id)
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// NEWS
// ═══════════════════════════════════════════════════════════════════════════

export const newsAPI = {
  getAll: async (): Promise<NewsItem[]> => {
    await delay()
    return mockStore.getNews() as any
  },
  create: async (data: Omit<NewsItem, 'id'>): Promise<NewsItem> => {
    await delay()
    return mockStore.addNews(data as any) as any
  },
  update: async (id: string, data: Partial<NewsItem>): Promise<NewsItem> => {
    await delay()
    mockStore.updateNews(id, data as any)
    return { id, ...data } as any
  },
  delete: async (id: string): Promise<void> => {
    await delay()
    mockStore.deleteNews(id)
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// EVENTS
// ═══════════════════════════════════════════════════════════════════════════

export const eventsAPI = {
  getAll: async (): Promise<Event[]> => {
    await delay()
    return mockStore.getEvents() as any
  },
  create: async (data: Omit<Event, 'id'>): Promise<Event> => {
    await delay()
    return mockStore.addEvent(data as any) as any
  },
  update: async (id: string, data: Partial<Event>): Promise<Event> => {
    await delay()
    mockStore.updateEvent(id, data as any)
    return { id, ...data } as any
  },
  delete: async (id: string): Promise<void> => {
    await delay()
    mockStore.deleteEvent(id)
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// TENDERS
// ═══════════════════════════════════════════════════════════════════════════

export const tendersAPI = {
  getAll: async (): Promise<Tender[]> => {
    await delay()
    return mockStore.getTenders() as any
  },
  create: async (data: Omit<Tender, 'id'>): Promise<Tender> => {
    await delay()
    return mockStore.addTender(data as any) as any
  },
  update: async (id: string, data: Partial<Tender>): Promise<Tender> => {
    await delay()
    mockStore.updateTender(id, data as any)
    return { id, ...data } as any
  },
  delete: async (id: string): Promise<void> => {
    await delay()
    mockStore.deleteTender(id)
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// ALERTS (Marquee)
// ═══════════════════════════════════════════════════════════════════════════

export const alertsAPI = {
  getAll: async (): Promise<Alert[]> => {
    await delay()
    return mockStore.getAlerts() as any
  },
  create: async (data: Omit<Alert, 'id'>): Promise<Alert> => {
    await delay()
    return mockStore.addAlert(data as any) as any
  },
  update: async (id: string, data: Partial<Alert>): Promise<Alert> => {
    await delay()
    mockStore.updateAlert(id, data as any)
    return { id, ...data } as any
  },
  delete: async (id: string): Promise<void> => {
    await delay()
    mockStore.deleteAlert(id)
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// FACULTY
// ═══════════════════════════════════════════════════════════════════════════

export const facultyAPI = {
  getAll: async (): Promise<Faculty[]> => {
    await delay()
    return mockStore.getFaculty() as any
  },
  create: async (data: Omit<Faculty, 'id'>): Promise<Faculty> => {
    await delay()
    return mockStore.addFaculty(data as any) as any
  },
  update: async (id: string, data: Partial<Faculty>): Promise<Faculty> => {
    await delay()
    mockStore.updateFaculty(id, data as any)
    return { id, ...data } as any
  },
  delete: async (id: string): Promise<void> => {
    await delay()
    mockStore.deleteFaculty(id)
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// GALLERY
// ═══════════════════════════════════════════════════════════════════════════

export const galleryAPI = {
  getAlbums: async (): Promise<GalleryAlbum[]> => {
    await delay()
    return mockStore.getAlbums() as any
  },
  createAlbum: async (data: Omit<GalleryAlbum, 'id'>): Promise<GalleryAlbum> => {
    await delay()
    return mockStore.addAlbum(data as any) as any
  },
  updateAlbum: async (id: string, data: Partial<GalleryAlbum>): Promise<GalleryAlbum> => {
    await delay()
    mockStore.updateAlbum(id, data as any)
    return { id, ...data } as any
  },
  deleteAlbum: async (id: string): Promise<void> => {
    await delay()
    mockStore.deleteAlbum(id)
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// PLACEMENT
// ═══════════════════════════════════════════════════════════════════════════

export const placementAPI = {
  getRecords: async (): Promise<PlacementRecord[]> => {
    await delay()
    return mockStore.getPlacement() as any
  },
  createRecord: async (data: Omit<PlacementRecord, 'id'>): Promise<PlacementRecord> => {
    await delay()
    const records = mockStore.getPlacement()
    const n = { ...data, id: generateId() }
    localStorage.setItem('sgsits_placement', JSON.stringify([n, ...records]))
    return n as any
  },
  updateRecord: async (id: string, data: Partial<PlacementRecord>): Promise<PlacementRecord> => {
    await delay()
    const records = mockStore.getPlacement()
    const updated = records.map(r => r.year === id ? { ...r, ...data } : r)
    localStorage.setItem('sgsits_placement', JSON.stringify(updated))
    return { id, ...data } as any
  },
  deleteRecord: async (id: string): Promise<void> => {
    await delay()
    mockStore.deletePlacementYear(id)
  },
}

// ═══════════════════════════════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════════════════════════════

export const settingsAPI = {
  get: async (): Promise<SiteSettings> => {
    await delay()
    return mockStore.getSiteSettings()
  },
  update: async (data: Partial<SiteSettings>): Promise<SiteSettings> => {
    await delay()
    const settings = mockStore.getSiteSettings()
    const updated = { ...settings, ...data }
    mockStore.saveSiteSettings(updated)
    return updated
  },
}

// ── Re-export everything ───────────────────────────────────────────────────
export { apiClient }
