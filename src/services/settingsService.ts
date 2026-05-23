/**
 * Settings Service — Site-wide config, footer data, top-bar data
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/settings')               ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import {
  mockSiteSettings,
  mockFooterData,
  mockTopBarData,
  type FooterData,
  type TopBarData,
} from '../mock/settings/settingsData'
import type { SiteSettings } from '../types'
import { mockStore } from '../data/mockStore'

/**
 * GET /api/settings
 */
export const getSiteSettings = async (): Promise<SiteSettings> => {
  return mockStore.getSiteSettings()
}

/**
 * GET /api/content/footer
 */
export const getFooterData = async (): Promise<FooterData> => {
  return mockStore.getFooterData()
}

/**
 * GET /api/content/top-bar
 */
export const getTopBarData = async (): Promise<TopBarData> => {
  return mockStore.getTopBarData()
}

export const getAlerts = async (): Promise<any[]> => {
  return mockStore.getAlerts()
}

// Synchronous defaults for no-flash initial render
export const siteSettingsDefaults: SiteSettings = mockSiteSettings
export const footerDefaults: FooterData = mockFooterData
export const topBarDefaults: TopBarData = mockTopBarData

export const settingsService = {
  getSiteSettings,
  getFooterData,
  getTopBarData,
  getAlerts,
}

export default settingsService
