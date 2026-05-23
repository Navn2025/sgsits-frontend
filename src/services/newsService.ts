/**
 * News Service — Campus news & articles
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/news')                   ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import {
  mockNewsItems,
  mockHomeNewsCards,
  mockFeaturedNewsCards,
  type HomeNewsCard,
  type FeaturedNewsCard,
} from '../mock/news/newsData'
import type { NewsItem } from '../types'

/**
 * GET /api/news
 * Returns all active news articles.
 */
export const getAllNews = async (): Promise<NewsItem[]> => {
  return mockNewsItems.filter(n => n.isActive)
  // REAL: return apiClient.get('/news').then(r => r.data.data)
}

/**
 * GET /api/news/home-cards
 * Returns the 4 regular news cards for the homepage grid.
 */
export const getHomeNewsCards = async (): Promise<HomeNewsCard[]> => {
  return [...mockHomeNewsCards]
  // REAL: return apiClient.get('/news/home-cards').then(r => r.data.data)
}

/**
 * GET /api/news/featured
 * Returns the 2 large featured news cards for the homepage grid.
 */
export const getFeaturedNewsCards = async (): Promise<FeaturedNewsCard[]> => {
  return [...mockFeaturedNewsCards]
  // REAL: return apiClient.get('/news/featured').then(r => r.data.data)
}

/**
 * GET /api/news/:id
 */
export const getNewsById = async (id: string): Promise<NewsItem | null> => {
  return mockNewsItems.find(n => n.id === id) ?? null
  // REAL: return apiClient.get(`/news/${id}`).then(r => r.data.data)
}

export const newsService = {
  getAllNews,
  getHomeNewsCards,
  getFeaturedNewsCards,
  getNewsById,
}

export default newsService

export type { HomeNewsCard, FeaturedNewsCard }
