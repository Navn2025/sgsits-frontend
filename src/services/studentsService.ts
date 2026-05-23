import { mockStore } from '../data/mockStore'
import { type CustomPageData } from './aboutService'
import {
  mockActivities,           type ActivitiesData,
  mockNCC,                  type NCCData,
  mockNSS,                  type NSSData,
  mockScholarshipGovt,      type ScholarshipGovtData,
  mockScholarshipInstitute, type ScholarshipInstituteData,
  mockSSS,                  type SSSData,
} from '../mock/students/studentsData'

export type {
  ActivitiesData, NCCData, NSSData,
  ScholarshipGovtData, ScholarshipInstituteData, SSSData,
  CustomPageData,
}

export const getActivities = async (): Promise<ActivitiesData> => {
  return { ...mockActivities, activities: [...mockActivities.activities] }
  // REAL: return apiClient.get('/students/activities').then(r => r.data.data)
}

export const getNCC = async (): Promise<NCCData> => {
  return { ...mockNCC }
  // REAL: return apiClient.get('/students/ncc').then(r => r.data.data)
}

export const getNSS = async (): Promise<NSSData> => {
  return { ...mockNSS }
  // REAL: return apiClient.get('/students/nss').then(r => r.data.data)
}

export const getScholarshipGovt = async (): Promise<ScholarshipGovtData> => {
  return { ...mockScholarshipGovt }
  // REAL: return apiClient.get('/students/scholarships/govt').then(r => r.data.data)
}

export const getScholarshipInstitute = async (): Promise<ScholarshipInstituteData> => {
  return { ...mockScholarshipInstitute }
  // REAL: return apiClient.get('/students/scholarships/institute').then(r => r.data.data)
}

export const getSSS = async (): Promise<SSSData> => {
  return { ...mockSSS }
  // REAL: return apiClient.get('/students/sss').then(r => r.data.data)
}

export const getCustomPage = async (slug: string): Promise<CustomPageData | null> => {
  return mockStore.getCustomPage(slug)
}

// ─── Defaults ────────────────────────────────────────────────────────────────
export const activitiesDefault: ActivitiesData                = mockActivities
export const nccDefault: NCCData                              = mockNCC
export const nssDefault: NSSData                              = mockNSS
export const scholarshipGovtDefault: ScholarshipGovtData      = mockScholarshipGovt
export const scholarshipInstituteDefault: ScholarshipInstituteData = mockScholarshipInstitute
export const sssDefault: SSSData                              = mockSSS

export const studentsService = {
  getActivities, getNCC, getNSS, getScholarshipGovt, getScholarshipInstitute, getSSS,
  getCustomPage,
}

export default studentsService
