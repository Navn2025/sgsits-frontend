/**
 * Content Service — Home page & static CMS content
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE — Returns mock data instantly.               ║
 * ║  When backend is ready:                                  ║
 * ║    replace the return statement with an apiClient call   ║
 * ║    e.g. return apiClient.get('/content/home').then(r => r.data.data) ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * Components MUST call this service — never import mock data directly.
 */

import {
  mockHomePageData,
  type HomePageData,
  type HeroTileData,
  type AboutSection,
  type DirectorSection,
  type NewsSectionConfig,
  type AcademicProgramsSection,
  type DepartmentsSection,
  type StatsSection,
  type CampusLifeSection,
  type FaqsSection,
  type GallerySection,
} from '../mock/home/homeData'

// ─── Home Page ────────────────────────────────────────────────────────────────

/**
 * GET /api/content/home
 * Returns the complete home page CMS content.
 * Replace with: return apiClient.get('/content/home').then(r => r.data.data)
 */
export const getHomePage = async (): Promise<HomePageData> => {
  return { ...mockHomePageData }
  // REAL: return apiClient.get('/content/home').then(r => r.data.data)
}

/**
 * GET /api/content/home/hero-tiles
 * Returns only the hero tiles for dynamic rendering.
 * Replace with: return apiClient.get('/content/home/hero-tiles').then(r => r.data.data)
 */
export const getHeroTiles = async (): Promise<HeroTileData[]> => {
  return mockHomePageData.heroTiles.filter(t => t.enabled).sort((a, b) => a.order - b.order)
  // REAL: return apiClient.get('/content/home/hero-tiles').then(r => r.data.data)
}

/**
 * GET /api/content/home/about
 */
export const getAboutSection = async (): Promise<AboutSection> => {
  return { ...mockHomePageData.about }
  // REAL: return apiClient.get('/content/home/about').then(r => r.data.data)
}

/**
 * GET /api/content/home/director
 */
export const getDirectorSection = async (): Promise<DirectorSection> => {
  return { ...mockHomePageData.director }
  // REAL: return apiClient.get('/content/home/director').then(r => r.data.data)
}

/**
 * GET /api/content/home/news-section-config
 */
export const getNewsSectionConfig = async (): Promise<NewsSectionConfig> => {
  return { ...mockHomePageData.newsSection }
}

/**
 * GET /api/content/home/academic-programs
 */
export const getAcademicPrograms = async (): Promise<AcademicProgramsSection> => {
  return { ...mockHomePageData.academicsSection }
  // REAL: return apiClient.get('/content/home/academic-programs').then(r => r.data.data)
}

/**
 * GET /api/content/home/departments
 */
export const getHomeDepartmentsSection = async (): Promise<DepartmentsSection> => {
  return { ...mockHomePageData.departmentsSection }
  // REAL: return apiClient.get('/content/home/departments').then(r => r.data.data)
}

/**
 * GET /api/content/home/stats
 */
export const getStatsSection = async (): Promise<StatsSection> => {
  return { ...mockHomePageData.statsSection }
  // REAL: return apiClient.get('/content/home/stats').then(r => r.data.data)
}

/**
 * GET /api/content/home/campus-life
 */
export const getCampusLifeSection = async (): Promise<CampusLifeSection> => {
  return { ...mockHomePageData.campusLifeSection }
  // REAL: return apiClient.get('/content/home/campus-life').then(r => r.data.data)
}

/**
 * GET /api/content/home/faqs
 */
export const getFaqsSection = async (): Promise<FaqsSection> => {
  return { ...mockHomePageData.faqsSection }
  // REAL: return apiClient.get('/content/home/faqs').then(r => r.data.data)
}

/**
 * GET /api/content/home/gallery-config
 */
export const getGallerySection = async (): Promise<GallerySection> => {
  return { ...mockHomePageData.gallerySection }
}

// ─── Convenience export ───────────────────────────────────────────────────────
// homePageDefaults is used by components that need an initial synchronous value
// before the async call resolves. This avoids a visible loading flash since
// mock data is returned instantly.
export const homePageDefaults: HomePageData = mockHomePageData

export const contentService = {
  getHomePage,
  getHeroTiles,
  getAboutSection,
  getDirectorSection,
  getNewsSectionConfig,
  getAcademicPrograms,
  getHomeDepartmentsSection,
  getStatsSection,
  getCampusLifeSection,
  getFaqsSection,
  getGallerySection,
}

export default contentService
