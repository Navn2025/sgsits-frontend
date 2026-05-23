/**
 * Notices Service — Notices / Announcements
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/notices')                ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import { mockNotices } from '../mock/notices/noticesData'
import { mockHomePageData } from '../mock/home/homeData'
import type { Notice } from '../types'
import type { AnnouncementItem } from '../mock/home/homeData'

/**
 * GET /api/notices
 * Returns all active notices.
 */
export const getNotices = async (): Promise<Notice[]> => {
  return mockNotices.filter(n => n.isActive)
  // REAL: return apiClient.get('/notices').then(r => r.data.data)
}

/**
 * GET /api/notices?limit=7&highlight=true
 * Returns the short announcement list shown on the homepage.
 */
export const getHomeAnnouncements = async (): Promise<AnnouncementItem[]> => {
  return [...mockHomePageData.announcements]
  // REAL: return apiClient.get('/notices/home').then(r => r.data.data)
}

/**
 * GET /api/notices/:id
 */
export const getNoticeById = async (id: string): Promise<Notice | null> => {
  return mockNotices.find(n => n.id === id) ?? null
  // REAL: return apiClient.get(`/notices/${id}`).then(r => r.data.data)
}

export const noticesDefaults: Notice[] = mockNotices.filter(n => n.isActive)

export const noticesService = {
  getNotices,
  getHomeAnnouncements,
  getNoticeById,
}

export default noticesService
