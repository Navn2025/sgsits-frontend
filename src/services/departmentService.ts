/**
 * Department Service
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/departments')            ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import { mockStore } from '../data/mockStore'

export interface DepartmentSummary {
  slug: string
  name: string
  shortName: string
  category: 'engineering' | 'science' | 'other'
  hodName: string
  hodEmail: string
  hodPhone?: string
  programsOffered: string[]
  facultyCount: number
  isActive: boolean
  established: string
  status: 'draft' | 'published' | 'archived'
  description?: string
  aboutParagraphs: string[]
  infraHighlights: string[]
  programsIntake: string[]
  vision?: string
  mission?: string
  objectives?: string[]
  imageUrl?: string
}

/**
 * GET /api/departments
 * Returns all departments.
 */
export const getDepartments = async (): Promise<DepartmentSummary[]> => {
  return mockStore.getDepartments().filter((d: any) => d.isActive)
}

/**
 * GET /api/departments/:slug
 */
export const getDepartmentBySlug = async (slug: string): Promise<DepartmentSummary | null> => {
  return mockStore.getDepartmentBySlug(slug)
}

/**
 * SAVE /api/departments
 */
export const saveDepartments = async (depts: DepartmentSummary[]): Promise<void> => {
  mockStore.saveDepartments(depts)
}

/**
 * SAVE /api/departments/:slug
 */
export const saveDepartmentBySlug = async (slug: string, data: Partial<DepartmentSummary>): Promise<void> => {
  mockStore.saveDepartmentBySlug(slug, data)
}

// Synchronous default — backward-compatible replacement for constants/departmentsList.ts
export const departmentsDefault: DepartmentSummary[] = mockStore.getDepartments().filter((d: any) => d.isActive)

export const departmentService = {
  getDepartments,
  getDepartmentBySlug,
  saveDepartments,
  saveDepartmentBySlug,
}

export default departmentService

export type { }
