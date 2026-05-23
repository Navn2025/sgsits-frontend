/**
 * SEO Service — Per-page dynamic meta tags
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/seo/:pageKey')           ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * Admin panel can set per-page:
 *  - HTML <title>
 *  - Meta description
 *  - Open Graph title, description, image
 *  - Canonical URL
 *  - Twitter card type
 *  - Keywords
 */

import { mockSeoData, mockDefaultSeoMeta, type SeoMeta } from '../mock/seo/seoData'
import { mockStore } from '../data/mockStore'

/**
 * GET /api/seo/:pageKey
 * Returns SEO metadata for a specific page.
 * Falls back to default if not configured.
 */
export const getPageSeo = async (pageKey: string): Promise<SeoMeta> => {
  return mockStore.getPageSeo(pageKey)
}

/**
 * GET /api/seo
 * Returns all page SEO configurations.
 */
export const getAllPageSeo = async (): Promise<Record<string, SeoMeta>> => {
  return mockStore.getAllPageSeo()
}

/**
 * PUT /api/seo/:pageKey
 */
export const savePageSeo = async (pageKey: string, seo: SeoMeta): Promise<void> => {
  mockStore.savePageSeo(pageKey, seo)
}

/**
 * PUT /api/seo
 */
export const saveAllPageSeo = async (data: Record<string, SeoMeta>): Promise<void> => {
  mockStore.saveAllPageSeo(data)
}

/** Synchronous default SEO for immediate rendering */
export const defaultSeoMeta: SeoMeta = mockDefaultSeoMeta
export const allSeoDefaults: Record<string, SeoMeta> = mockSeoData

export type { SeoMeta }

export const seoService = {
  getPageSeo,
  getAllPageSeo,
  savePageSeo,
  saveAllPageSeo,
}

export default seoService
