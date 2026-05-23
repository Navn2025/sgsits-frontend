/**
 * Media Service — Gallery albums, photos, and image references
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/gallery/albums')         ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import {
  mockGalleryAlbums,
  mockGalleryPhotos,
  mockHomeThumbnails,
  type GalleryThumbnail,
} from '../mock/gallery/galleryData'
import type { GalleryAlbum, GalleryPhoto } from '../types'

/**
 * GET /api/gallery/albums
 */
export const getGalleryAlbums = async (): Promise<GalleryAlbum[]> => {
  return mockGalleryAlbums.filter(a => a.isActive)
  // REAL: return apiClient.get('/gallery/albums').then(r => r.data.data)
}

/**
 * GET /api/gallery/albums/:id/photos
 */
export const getAlbumPhotos = async (albumId: string): Promise<GalleryPhoto[]> => {
  return mockGalleryPhotos[albumId] ?? []
  // REAL: return apiClient.get(`/gallery/albums/${albumId}/photos`).then(r => r.data.data)
}

/**
 * GET /api/gallery/home-thumbnails
 * Returns the 12 thumbnail objects shown in the home page gallery widget.
 */
export const getHomeGalleryThumbnails = async (): Promise<GalleryThumbnail[]> => {
  return [...mockHomeThumbnails]
  // REAL: return apiClient.get('/gallery/home-thumbnails').then(r => r.data.data)
}

export const mediaService = {
  getGalleryAlbums,
  getAlbumPhotos,
  getHomeGalleryThumbnails,
}

export default mediaService

export type { GalleryThumbnail }
