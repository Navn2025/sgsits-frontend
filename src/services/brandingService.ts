/**
 * Branding Service — Institute identity & visual branding config
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/settings/branding')      ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * Controls ALL institution identity visible in the UI:
 * - Logo URL, short name, full name, tagline
 * - Establishment year
 * - Mobile drawer title/footer text
 * - Sub-taglines and suffix labels
 */

import { mockBrandingConfig, type BrandingConfig } from '../mock/branding/brandingData'
import { mockStore } from '../data/mockStore'

/**
 * GET /api/settings/branding
 */
export const getBranding = async (): Promise<BrandingConfig> => {
  return mockStore.getBranding()
}

/**
 * PUT /api/settings/branding
 */
export const saveBranding = async (data: BrandingConfig): Promise<void> => {
  mockStore.saveBranding(data)
}

/** Synchronous default — prevents flash on first render */
export const brandingDefaults: BrandingConfig = mockBrandingConfig

export type { BrandingConfig }

export const brandingService = {
  getBranding,
  saveBranding,
}

export default brandingService
