/**
 * Exam Service — Sessions, branches, courses, subjects, students, marks
 *
 * MOCK MODE — Returns mock data instantly.
 * When backend is ready, replace return statements with apiClient calls.
 *
 * Components MUST call this service — never import mock data directly.
 */

import {
  mockSessions,             type Session,
  mockBranches,             type Branch,
  mockCourses,              type Course,
  mockSubjects,             type Subject,
  mockFacultyMembers,       type FacultyMember,
  mockStudents,             type Student,
  mockMarksRequests,        type MarksRequest,
  mockCorrectionRequests,   type CorrectionRequest,
  mockRegistrationRequests, type RegistrationRequest,
  mockElectiveSubjects,     type ElectiveSubject,
  mockStudents as _students,
  generateMockMarks,        type StudentMark,
  CURRENT_SESSION,
  MONTH_NAMES,
} from '../mock/exam/examData'

export type {
  Session, Branch, Course, Subject, FacultyMember, Student,
  MarksRequest, CorrectionRequest, RegistrationRequest, ElectiveSubject, StudentMark,
}

export { MONTH_NAMES }

export const getSessions = async (): Promise<Session[]> => {
  return [...mockSessions]
  // REAL: return apiClient.get('/exam/sessions').then(r => r.data.data)
}

export const getActiveSession = async (): Promise<Session | undefined> => {
  return mockSessions.find(s => s.is_active)
  // REAL: return apiClient.get('/exam/sessions/active').then(r => r.data.data)
}

export const getBranches = async (): Promise<Branch[]> => {
  return [...mockBranches]
  // REAL: return apiClient.get('/exam/branches').then(r => r.data.data)
}

export const getCourses = async (): Promise<Course[]> => {
  return [...mockCourses]
  // REAL: return apiClient.get('/exam/courses').then(r => r.data.data)
}

export const getSubjects = async (branchId?: string): Promise<Subject[]> => {
  const subjects = [...mockSubjects]
  return branchId ? subjects.filter(s => s.branch_id === branchId) : subjects
  // REAL: return apiClient.get(`/exam/subjects${branchId ? `?branch=${branchId}` : ''}`).then(r => r.data.data)
}

export const getFacultyMembers = async (branchId?: string): Promise<FacultyMember[]> => {
  const members = [...mockFacultyMembers]
  return branchId ? members.filter(f => f.branch_id === branchId) : members
  // REAL: return apiClient.get(`/exam/faculty${branchId ? `?branch=${branchId}` : ''}`).then(r => r.data.data)
}

export const getStudents = async (branchId?: string): Promise<Student[]> => {
  const students = [..._students]
  return branchId ? students.filter(s => s.branch_id === branchId) : students
  // REAL: return apiClient.get(`/exam/students${branchId ? `?branch=${branchId}` : ''}`).then(r => r.data.data)
}

export const getMarksRequests = async (branchId?: string): Promise<MarksRequest[]> => {
  const requests = [...mockMarksRequests]
  return branchId ? requests.filter(r => r.branch_id === branchId) : requests
  // REAL: return apiClient.get('/exam/marks-requests').then(r => r.data.data)
}

export const getCorrectionRequests = async (): Promise<CorrectionRequest[]> => {
  return [...mockCorrectionRequests]
  // REAL: return apiClient.get('/exam/correction-requests').then(r => r.data.data)
}

export const getRegistrationRequests = async (branchId?: string): Promise<RegistrationRequest[]> => {
  const requests = [...mockRegistrationRequests]
  return branchId ? requests.filter(r => r.branch_id === branchId) : requests
  // REAL: return apiClient.get('/exam/registration-requests').then(r => r.data.data)
}

export const getElectiveSubjects = async (branchId?: string): Promise<ElectiveSubject[]> => {
  const electives = [...mockElectiveSubjects]
  return branchId ? electives.filter(e => e.branch_id === branchId) : electives
  // REAL: return apiClient.get('/exam/elective-subjects').then(r => r.data.data)
}

export const getMarksForSubject = async (
  subjectId: string, section: string, component: string,
): Promise<StudentMark[]> => {
  const subject = mockSubjects.find(s => s.id === subjectId)
  if (!subject) return []
  return generateMockMarks(subject, section, component)
  // REAL: return apiClient.get(`/exam/marks/${subjectId}?section=${section}&component=${component}`).then(r => r.data.data)
}

// ─── Defaults ────────────────────────────────────────────────────────────────
export const sessionsDefault: Session[]                   = mockSessions
export const branchesDefault: Branch[]                    = mockBranches
export const coursesDefault: Course[]                     = mockCourses
export const subjectsDefault: Subject[]                   = mockSubjects
export const facultyMembersDefault: FacultyMember[]       = mockFacultyMembers
export const studentsDefault: Student[]                   = mockStudents
export const marksRequestsDefault: MarksRequest[]         = mockMarksRequests
export const correctionRequestsDefault: CorrectionRequest[] = mockCorrectionRequests
export const registrationRequestsDefault: RegistrationRequest[] = mockRegistrationRequests
export const electiveSubjectsDefault: ElectiveSubject[]   = mockElectiveSubjects
export { CURRENT_SESSION }

export const examService = {
  getSessions, getActiveSession, getBranches, getCourses, getSubjects,
  getFacultyMembers, getStudents, getMarksRequests, getCorrectionRequests,
  getRegistrationRequests, getElectiveSubjects, getMarksForSubject,
}

export default examService
