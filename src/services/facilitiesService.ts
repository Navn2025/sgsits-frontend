/**
 * Facilities Service — Library, hostels, computer center, sports, health
 *
 * MOCK MODE — Returns mock data instantly.
 * Components MUST call this service — never import mock data directly.
 */

import {
  mockLibrary,       type LibraryData,
  mockBoysHostel,    type HostelData,
  mockGirlsHostel,
  mockComputerCenter,type ComputerCenterData,
  mockGamesSports,   type GamesSportsData,
  mockDispensary,    type DispensaryData,
  mockIDEALab,       type IDEALabData,
} from '../mock/facilities/facilitiesData'

export type { LibraryData, HostelData, ComputerCenterData, GamesSportsData, DispensaryData, IDEALabData }

export const getLibrary = async (): Promise<LibraryData> => {
  return { ...mockLibrary }
  // REAL: return apiClient.get('/facilities/library').then(r => r.data.data)
}

export const getBoysHostel = async (): Promise<HostelData> => {
  return { ...mockBoysHostel }
  // REAL: return apiClient.get('/facilities/boys-hostel').then(r => r.data.data)
}

export const getGirlsHostel = async (): Promise<HostelData> => {
  return { ...mockGirlsHostel }
  // REAL: return apiClient.get('/facilities/girls-hostel').then(r => r.data.data)
}

export const getComputerCenter = async (): Promise<ComputerCenterData> => {
  return { ...mockComputerCenter }
  // REAL: return apiClient.get('/facilities/computer-center').then(r => r.data.data)
}

export const getGamesSports = async (): Promise<GamesSportsData> => {
  return { ...mockGamesSports }
  // REAL: return apiClient.get('/facilities/sports').then(r => r.data.data)
}

export const getDispensary = async (): Promise<DispensaryData> => {
  return { ...mockDispensary }
  // REAL: return apiClient.get('/facilities/dispensary').then(r => r.data.data)
}

export const getIDEALab = async (): Promise<IDEALabData> => {
  return { ...mockIDEALab }
  // REAL: return apiClient.get('/facilities/idea-lab').then(r => r.data.data)
}

// ─── Defaults ────────────────────────────────────────────────────────────────
export const libraryDefault: LibraryData               = mockLibrary
export const boysHostelDefault: HostelData             = mockBoysHostel
export const girlsHostelDefault: HostelData            = mockGirlsHostel
export const computerCenterDefault: ComputerCenterData = mockComputerCenter
export const gamesSportsDefault: GamesSportsData       = mockGamesSports
export const dispensaryDefault: DispensaryData         = mockDispensary
export const ideaLabDefault: IDEALabData               = mockIDEALab

export const facilitiesService = {
  getLibrary, getBoysHostel, getGirlsHostel, getComputerCenter,
  getGamesSports, getDispensary, getIDEALab,
}

export default facilitiesService
