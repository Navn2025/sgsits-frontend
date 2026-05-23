/**
 * Nav Service — Site navigation / menu structure
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/navigation')             ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import { mockNavItems, type NavItem } from '../mock/navbar/navData'

/**
 * GET /api/navigation
 * Returns the full navigation tree.
 */
export const getNavItems = async (): Promise<NavItem[]> => {
  return [...mockNavItems]
  // REAL: return apiClient.get('/navigation').then(r => r.data.data)
}

// Synchronous default — used as useState initial value to avoid flash
export const navItemsDefault: NavItem[] = mockNavItems

export type { NavItem }

export const navService = {
  getNavItems,
}

export default navService
