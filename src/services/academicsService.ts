/**
 * Academics Service — Courses, calendar, programs
 *
 * MOCK MODE — Returns mock data instantly.
 * Components MUST call this service — never import mock data directly.
 */

import {
  mockUGCourses,         type UGCoursesData,
  mockPGCourses,         type PGCoursesData,
  mockPhDCourses,        type PhDCoursesData,
  mockPTDCCourses,       type PTDCCourse,
  mockAcademicCalendar,  type AcademicCalendarEvent,
  mockOnlineCourses,     type OnlineCourseLink,
} from '../mock/academics/academicsData'
import { mockStore } from '../data/mockStore'

export type {
  UGCoursesData, PGCoursesData, PhDCoursesData, PTDCCourse,
  AcademicCalendarEvent, OnlineCourseLink,
}

export const getUGCourses = async (): Promise<UGCoursesData> => {
  return mockStore.getUGCourses()
}

export const getPGCourses = async (): Promise<PGCoursesData> => {
  return mockStore.getPGCourses()
}

export const getPhDCourses = async (): Promise<PhDCoursesData> => {
  return mockStore.getPhDCourses()
}

export const getPTDCCourses = async (): Promise<PTDCCourse[]> => {
  return mockStore.getPTDCCourses()
}

export const getAcademicCalendar = async (): Promise<AcademicCalendarEvent[]> => {
  return mockStore.getAcademicCalendar()
}

export const getOnlineCourses = async (): Promise<OnlineCourseLink[]> => {
  return mockStore.getOnlineCourses()
}

// ─── Defaults ────────────────────────────────────────────────────────────────
export const ugCoursesDefault: UGCoursesData                = mockUGCourses
export const pgCoursesDefault: PGCoursesData                = mockPGCourses
export const phdCoursesDefault: PhDCoursesData              = mockPhDCourses
export const ptdcCoursesDefault: PTDCCourse[]               = mockPTDCCourses
export const academicCalendarDefault: AcademicCalendarEvent[] = mockAcademicCalendar
export const onlineCoursesDefault: OnlineCourseLink[]       = mockOnlineCourses

export const academicsService = {
  getUGCourses, getPGCourses, getPhDCourses, getPTDCCourses,
  getAcademicCalendar, getOnlineCourses,
}

export default academicsService
