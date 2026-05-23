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

/**
 * GET /api/settings
 */
export const getSiteSettings = async (): Promise<SiteSettings> => {
  return { ...mockSiteSettings }
  // REAL: return apiClient.get('/settings').then(r => r.data.data)
}

/**
 * GET /api/content/footer
 */
export const getFooterData = async (): Promise<FooterData> => {
  return JSON.parse(JSON.stringify(mockFooterData)) as FooterData
  // REAL: return apiClient.get('/content/footer').then(r => r.data.data)
}

/**
 * GET /api/content/top-bar
 */
export const getTopBarData = async (): Promise<TopBarData> => {
  return { ...mockTopBarData }
  // REAL: return apiClient.get('/content/top-bar').then(r => r.data.data)
}

// Synchronous defaults for no-flash initial render
export const siteSettingsDefaults: SiteSettings = mockSiteSettings
export const footerDefaults: FooterData = mockFooterData
export const topBarDefaults: TopBarData = mockTopBarData

export const settingsService = {
  getSiteSettings,
  getFooterData,
  getTopBarData,
}

export default settingsService
