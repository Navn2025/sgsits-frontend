/**
 * Events Service
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/events')                 ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import { mockEvents } from '../mock/events/eventsData'
import type { Event } from '../types'

/**
 * GET /api/events
 */
export const getEvents = async (): Promise<Event[]> => {
  return mockEvents.filter(e => e.isActive)
  // REAL: return apiClient.get('/events').then(r => r.data.data)
}

/**
 * GET /api/events/:id
 */
export const getEventById = async (id: string): Promise<Event | null> => {
  return mockEvents.find(e => e.id === id) ?? null
  // REAL: return apiClient.get(`/events/${id}`).then(r => r.data.data)
}

export const eventsService = {
  getEvents,
  getEventById,
}

export default eventsService
