/**
 * HOD Service — Department profile, notices, events, gallery, labs, achievements, leave, timetable
 *
 * MOCK MODE — Returns mock data instantly.
 * Components MUST call this service — never import mock data directly.
 */

import {
  mockDeptProfile,         type DepartmentProfile,
  mockLeaveApplications,   type LeaveApplication,
  mockTimetableSlots,      type TimetableSlot,      TIMETABLE_DAYS, TIMETABLE_PERIODS,
  mockHodNotices,          type HodNotice,
  mockAttendanceSummary,   type AttendanceSummary,
  mockDeptResultSummary,   type DeptResultSummary,
  mockHodDownloads,        type HodDownload,
  mockHodEvents,           type HodEvent,
  mockHodGallery,          type HodGalleryAlbum,
  mockHodLabs,             type HodLab,
  mockHodAchievements,     type HodAchievement,
} from '../mock/hod/hodData'

export type {
  DepartmentProfile, LeaveApplication, TimetableSlot, HodNotice,
  AttendanceSummary, DeptResultSummary, HodDownload, HodEvent,
  HodGalleryAlbum, HodLab, HodAchievement,
}

export { TIMETABLE_DAYS, TIMETABLE_PERIODS }

export const getDeptProfile = async (): Promise<DepartmentProfile> => {
  return { ...mockDeptProfile }
  // REAL: return apiClient.get('/hod/department-profile').then(r => r.data.data)
}

export const getLeaveApplications = async (): Promise<LeaveApplication[]> => {
  return [...mockLeaveApplications]
  // REAL: return apiClient.get('/hod/leaves').then(r => r.data.data)
}

export const getTimetableSlots = async (branchId?: string): Promise<TimetableSlot[]> => {
  const slots = [...mockTimetableSlots]
  return branchId ? slots.filter(s => s.branch_id === branchId) : slots
  // REAL: return apiClient.get('/hod/timetable').then(r => r.data.data)
}

export const getHodNotices = async (): Promise<HodNotice[]> => {
  return [...mockHodNotices]
  // REAL: return apiClient.get('/hod/notices').then(r => r.data.data)
}

export const getAttendanceSummary = async (): Promise<AttendanceSummary[]> => {
  return [...mockAttendanceSummary]
  // REAL: return apiClient.get('/hod/attendance').then(r => r.data.data)
}

export const getDeptResultSummary = async (): Promise<DeptResultSummary[]> => {
  return [...mockDeptResultSummary]
  // REAL: return apiClient.get('/hod/results').then(r => r.data.data)
}

export const getHodDownloads = async (): Promise<HodDownload[]> => {
  return [...mockHodDownloads]
  // REAL: return apiClient.get('/hod/downloads').then(r => r.data.data)
}

export const getHodEvents = async (): Promise<HodEvent[]> => {
  return [...mockHodEvents]
  // REAL: return apiClient.get('/hod/events').then(r => r.data.data)
}

export const getHodGallery = async (): Promise<HodGalleryAlbum[]> => {
  return [...mockHodGallery]
  // REAL: return apiClient.get('/hod/gallery').then(r => r.data.data)
}

export const getHodLabs = async (): Promise<HodLab[]> => {
  return [...mockHodLabs]
  // REAL: return apiClient.get('/hod/labs').then(r => r.data.data)
}

export const getHodAchievements = async (): Promise<HodAchievement[]> => {
  return [...mockHodAchievements]
  // REAL: return apiClient.get('/hod/achievements').then(r => r.data.data)
}

// ─── Defaults ────────────────────────────────────────────────────────────────
export const deptProfileDefault: DepartmentProfile          = mockDeptProfile
export const leaveApplicationsDefault: LeaveApplication[]  = mockLeaveApplications
export const timetableSlotsDefault: TimetableSlot[]         = mockTimetableSlots
export const hodNoticesDefault: HodNotice[]                 = mockHodNotices
export const attendanceSummaryDefault: AttendanceSummary[]  = mockAttendanceSummary
export const deptResultSummaryDefault: DeptResultSummary[]  = mockDeptResultSummary
export const hodDownloadsDefault: HodDownload[]             = mockHodDownloads
export const hodEventsDefault: HodEvent[]                   = mockHodEvents
export const hodGalleryDefault: HodGalleryAlbum[]           = mockHodGallery
export const hodLabsDefault: HodLab[]                       = mockHodLabs
export const hodAchievementsDefault: HodAchievement[]       = mockHodAchievements

export const hodService = {
  getDeptProfile, getLeaveApplications, getTimetableSlots, getHodNotices,
  getAttendanceSummary, getDeptResultSummary, getHodDownloads, getHodEvents,
  getHodGallery, getHodLabs, getHodAchievements,
}

export default hodService
