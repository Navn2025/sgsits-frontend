/**
 * Nav Service — Site navigation / menu structure
 */

import { mockNavItems, type NavItem } from '../mock/navbar/navData'
import { mockStore } from '../data/mockStore'

/**
 * GET /api/navigation
 * Returns the full navigation tree.
 */
export const getNavItems = async (): Promise<NavItem[]> => {
  return mockStore.getNavItems()
}

/**
 * POST /api/navigation
 * Saves the full navigation tree.
 */
export const saveNavItems = async (data: NavItem[]): Promise<void> => {
  mockStore.saveNavItems(data)
}

// Synchronous default — used as useState initial value to avoid flash
// Populated with mock data so navbar renders correctly on first paint (no empty-array flash)
export const navItemsDefault: NavItem[] = mockNavItems

export type { NavItem }

export const navService = {
  getNavItems,
  saveNavItems,
}

export default navService
