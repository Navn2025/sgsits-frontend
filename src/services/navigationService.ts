/**
 * Navigation Service — Sidebar links, section banners, quick links
 *
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                                  ║
 * ║  Replace with: apiClient.get('/navigation/sidebar')         ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * This service is the single source of truth for ALL navigation
 * structures that are NOT the main navbar (which uses navService):
 *
 *  - Sidebar navigation links per section
 *  - Section banner (title, subtitle, icon) per section
 *  - Top-bar quick links (Students / Faculty / Alumni / Contact)
 *
 * Admin panel can manage all of these without code changes.
 */

import {
  mockSidebarLinks,
  mockSectionBanners,
  mockDefaultSectionBanner,
  type SidebarLink,
  type SectionBanner,
} from '../mock/sidebar/sidebarData'
import { mockUiLabels } from '../mock/uilabels/uiLabelsData'
import { mockStore } from '../data/mockStore'

// ─── Sidebar Links ────────────────────────────────────────────────────────────

/**
 * GET /api/navigation/sidebar/:section
 * Returns sidebar links for a given section key.
 */
export const getSidebarLinks = async (section: string): Promise<SidebarLink[]> => {
  return mockStore.getSidebarLinks(section)
}

/**
 * GET /api/navigation/sidebar
 * Returns all sidebar links for all sections.
 */
export const getAllSidebarLinks = async (): Promise<Record<string, SidebarLink[]>> => {
  return mockStore.getAllSidebarLinks()
}

/**
 * PUT /api/navigation/sidebar/:section
 */
export const saveSidebarLinks = async (section: string, links: SidebarLink[]): Promise<void> => {
  mockStore.saveSidebarLinks(section, links)
}

/**
 * PUT /api/navigation/sidebar
 */
export const saveAllSidebarLinks = async (data: Record<string, SidebarLink[]>): Promise<void> => {
  mockStore.saveAllSidebarLinks(data)
}

// ─── Section Banners ──────────────────────────────────────────────────────────

/**
 * GET /api/navigation/section-banner/:section
 */
export const getSectionBanner = async (section: string): Promise<SectionBanner> => {
  return mockStore.getSectionBanner(section)
}

/**
 * GET /api/navigation/section-banners
 */
export const getAllSectionBanners = async (): Promise<Record<string, SectionBanner>> => {
  return mockStore.getAllSectionBanners()
}

/**
 * PUT /api/navigation/section-banner/:section
 */
export const saveSectionBanner = async (section: string, banner: SectionBanner): Promise<void> => {
  mockStore.saveSectionBanner(section, banner)
}

// ─── Quick Links ──────────────────────────────────────────────────────────────

/**
 * GET /api/navigation/quick-links
 * Returns top-bar quick links (Students/Faculty/Alumni/Contact or custom)
 */
export const getQuickLinks = async (): Promise<{ label: string; to: string }[]> => {
  const labels = mockStore.getUiLabels()
  return labels.topBarQuickLinks
}

// ─── Synchronous Defaults (no-flash initial render) ──────────────────────────

export const sidebarLinksDefaults: Record<string, SidebarLink[]> = mockSidebarLinks
export const sectionBannersDefaults: Record<string, SectionBanner> = mockSectionBanners
export const defaultSectionBanner: SectionBanner = mockDefaultSectionBanner
export const quickLinksDefaults: { label: string; to: string }[] = mockUiLabels.topBarQuickLinks

export type { SidebarLink, SectionBanner }

export const navigationService = {
  getSidebarLinks,
  getAllSidebarLinks,
  saveSidebarLinks,
  saveAllSidebarLinks,
  getSectionBanner,
  getAllSectionBanners,
  saveSectionBanner,
  getQuickLinks,
}

export default navigationService
