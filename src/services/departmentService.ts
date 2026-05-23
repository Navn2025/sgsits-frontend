/**
 * Department Service
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/departments')            ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import {
  mockDepartments,
  type DepartmentSummary,
} from '../mock/departments/departmentsData'

/**
 * GET /api/departments
 * Returns all departments.
 */
export const getDepartments = async (): Promise<DepartmentSummary[]> => {
  return mockDepartments.filter(d => d.isActive)
  // REAL: return apiClient.get('/departments').then(r => r.data.data)
}

/**
 * GET /api/departments/:slug
 */
export const getDepartmentBySlug = async (slug: string): Promise<DepartmentSummary | null> => {
  return mockDepartments.find(d => d.slug === slug && d.isActive) ?? null
  // REAL: return apiClient.get(`/departments/${slug}`).then(r => r.data.data)
}

// Synchronous default — backward-compatible replacement for constants/departmentsList.ts
export const departmentsDefault: DepartmentSummary[] = mockDepartments.filter(d => d.isActive)

export const departmentService = {
  getDepartments,
  getDepartmentBySlug,
}

export default departmentService

export type { DepartmentSummary }
