/**
 * Faculty Service — Teacher profile, publications, research, qualifications, marks
 *
 * MOCK MODE — Returns mock data instantly.
 * Components MUST call this service — never import mock data directly.
 */

import {
  mockTeacherProfile,         type TeacherProfile,
  mockTeacherPublications,    type Publication,
  mockTeacherResearch,        type ResearchProject,
  mockTeacherQualifications,  type Qualification,
  mockSubjectCOs,             type CourseOutcome,
  mockInstituteProfessors,    type InstituteProfessor,
  getProfessorBySlug,
  CURRENT_TEACHER_ID,
} from '../mock/faculty/facultyData'

export type {
  TeacherProfile, Publication, ResearchProject,
  Qualification, CourseOutcome, InstituteProfessor,
}

export { CURRENT_TEACHER_ID }

export const getTeacherProfile = async (): Promise<TeacherProfile> => {
  return { ...mockTeacherProfile }
  // REAL: return apiClient.get('/faculty/profile').then(r => r.data.data)
}

export const getPublications = async (): Promise<Publication[]> => {
  return [...mockTeacherPublications]
  // REAL: return apiClient.get('/faculty/publications').then(r => r.data.data)
}

export const getResearchProjects = async (): Promise<ResearchProject[]> => {
  return [...mockTeacherResearch]
  // REAL: return apiClient.get('/faculty/research').then(r => r.data.data)
}

export const getQualifications = async (): Promise<Qualification[]> => {
  return [...mockTeacherQualifications]
  // REAL: return apiClient.get('/faculty/qualifications').then(r => r.data.data)
}

export const getCourseOutcomes = async (subjectId: string): Promise<CourseOutcome[]> => {
  return [...(mockSubjectCOs[subjectId] ?? [])]
  // REAL: return apiClient.get(`/faculty/subjects/${subjectId}/cos`).then(r => r.data.data)
}

export const getInstituteProfessors = async (): Promise<InstituteProfessor[]> => {
  return [...mockInstituteProfessors]
  // REAL: return apiClient.get('/faculty/institute-professors').then(r => r.data.data)
}

export const getInstituteProfessorBySlug = async (slug: string): Promise<InstituteProfessor | undefined> => {
  return getProfessorBySlug(slug)
  // REAL: return apiClient.get(`/faculty/institute-professors/${slug}`).then(r => r.data.data)
}

// ─── Defaults ────────────────────────────────────────────────────────────────
export const teacherProfileDefault: TeacherProfile           = mockTeacherProfile
export const publicationsDefault: Publication[]              = mockTeacherPublications
export const researchProjectsDefault: ResearchProject[]      = mockTeacherResearch
export const qualificationsDefault: Qualification[]          = mockTeacherQualifications
export const instituteProfessorsDefault: InstituteProfessor[] = mockInstituteProfessors

export const facultyService = {
  getTeacherProfile, getPublications, getResearchProjects, getQualifications,
  getCourseOutcomes, getInstituteProfessors, getInstituteProfessorBySlug,
}

export default facultyService
