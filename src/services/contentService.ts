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
import { mockStore } from '../data/mockStore'

// ─── Home Page ────────────────────────────────────────────────────────────────

export const getHomePage = async (): Promise<HomePageData> => {
  return mockStore.getHomePageData()
}

export const getHeroTiles = async (): Promise<HeroTileData[]> => {
  const hp = mockStore.getHomePageData()
  return hp.heroTiles.filter((t: any) => t.enabled).sort((a: any, b: any) => a.order - b.order)
}

export const getAboutSection = async (): Promise<AboutSection> => {
  const hp = mockStore.getHomePageData()
  return hp.about
}

export const getDirectorSection = async (): Promise<DirectorSection> => {
  const hp = mockStore.getHomePageData()
  return hp.director
}

export const getNewsSectionConfig = async (): Promise<NewsSectionConfig> => {
  const hp = mockStore.getHomePageData()
  return hp.newsSection
}

export const getAcademicPrograms = async (): Promise<AcademicProgramsSection> => {
  const hp = mockStore.getHomePageData()
  return hp.academicsSection
}

export const getHomeDepartmentsSection = async (): Promise<DepartmentsSection> => {
  const hp = mockStore.getHomePageData()
  return hp.departmentsSection
}

export const getStatsSection = async (): Promise<StatsSection> => {
  const hp = mockStore.getHomePageData()
  return hp.statsSection
}

export const getCampusLifeSection = async (): Promise<CampusLifeSection> => {
  const hp = mockStore.getHomePageData()
  return hp.campusLifeSection
}

export const getFaqsSection = async (): Promise<FaqsSection> => {
  const hp = mockStore.getHomePageData()
  return hp.faqsSection
}

export const getGallerySection = async (): Promise<GallerySection> => {
  const hp = mockStore.getHomePageData()
  return hp.gallerySection
}

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
