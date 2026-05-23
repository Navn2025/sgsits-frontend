/**
 * Admin Content Service — Full CRUD for the CMS admin panel.
 *
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  MOCK MODE (synchronous)                                            ║
 * ║  Admin operations need real-time reads so they stay synchronous.    ║
 * ║  When backend is ready, convert to:                                 ║
 * ║    return apiClient.get('/admin/content/xxx').then(r => r.data)     ║
 * ║    return apiClient.put('/admin/content/xxx', data)                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * This service is the SOLE interface between AdminStaticPages and the
 * mock data store. No component should import `mockStore` directly.
 *
 * Endpoint plan:
 *  GET  /api/admin/content/:section
 *  PUT  /api/admin/content/:section
 *
 * Type conventions:
 *  - Data shapes that have a dedicated type in types/index.ts or mock data files
 *    use that type directly. Sections that are complex nested objects (navigation,
 *    custom pages, admission blobs) use `Record<string, unknown>` or `unknown[]`
 *    until backend contracts are finalised.
 */

import { mockStore } from '../data/mockStore'

// ─── Section Data Types ────────────────────────────────────────────────────────
// These types represent the shape of each CMS section.
// Replace with proper API response types when backend is ready.
export type CmsRecord = Record<string, unknown>
export type CmsArray = unknown[]

// ─── Read Operations ─────────────────────────────────────────────────────────

export const getHomePageData      = () => mockStore.getHomePageData()
export const getAboutInstitute    = () => mockStore.getAboutInstitute()
export const getVisionMission     = () => mockStore.getVisionMission()
export const getGoverningBody     = () => mockStore.getGoverningBody()
export const getAcademicCouncil   = () => mockStore.getAcademicCouncil()
export const getAdministration    = () => mockStore.getAdministration()
export const getTelephoneDirectory = () => mockStore.getTelephoneDirectory()
export const getIQAC              = () => mockStore.getIQAC()
export const getInfrastructure    = () => mockStore.getInfrastructure()
export const getAccreditation     = () => mockStore.getAccreditation()
export const getUGCourses         = () => mockStore.getUGCourses()
export const getPGCourses         = () => mockStore.getPGCourses()
export const getPhDCourses        = () => mockStore.getPhDCourses()
export const getPTDCCourses       = () => mockStore.getPTDCCourses()
export const getAcademicCalendar  = () => mockStore.getAcademicCalendar()
export const getOnlineCourses     = () => mockStore.getOnlineCourses()
export const getDirectorMessage   = () => mockStore.getDirectorMessage()
export const getCommittees        = () => mockStore.getCommittees()
export const getNavItems          = () => mockStore.getNavItems()
export const getCustomPages       = () => mockStore.getCustomPages()
export const getUGAdmission       = () => mockStore.getUGAdmission()
export const getPGAdmission       = () => mockStore.getPGAdmission()
export const getPhDAdmission      = () => mockStore.getPhDAdmission()
export const getProspectus        = () => mockStore.getProspectus()
export const getActivities        = () => mockStore.getActivities()
export const getNCC               = () => mockStore.getNCC()
export const getNSS               = () => mockStore.getNSS()
export const getScholarshipGovt   = () => mockStore.getScholarshipGovt()
export const getScholarshipInstitute = () => mockStore.getScholarshipInstitute()
export const getSSS               = () => mockStore.getSSS()
export const getLibrary           = () => mockStore.getLibrary()
export const getBoysHostel        = () => mockStore.getBoysHostel()
export const getGirlsHostel       = () => mockStore.getGirlsHostel()
export const getComputerCenter    = () => mockStore.getComputerCenter()
export const getGamesSports       = () => mockStore.getGamesSports()
export const getDispensary        = () => mockStore.getDispensary()
export const getIDEALab           = () => mockStore.getIDEALab()
export const getGymnasium         = () => mockStore.getGymnasium()
export const getWorkshop          = () => mockStore.getWorkshop()
export const getCIDI              = () => mockStore.getCIDI()
export const getTransitHostel     = () => mockStore.getTransitHostel()
export const getStaffQuarters     = () => mockStore.getStaffQuarters()

// ─── Write Operations ─────────────────────────────────────────────────────────

export const saveHomePageData       = (data: any) => mockStore.saveHomePageData(data)
export const saveAboutInstitute     = (data: any) => mockStore.saveAboutInstitute(data)
export const saveVisionMission      = (data: any) => mockStore.saveVisionMission(data)
export const saveGoverningBody      = (data: any) => mockStore.saveGoverningBody(data)
export const saveAcademicCouncil    = (data: any) => mockStore.saveAcademicCouncil(data)
export const saveAdministration     = (data: any) => mockStore.saveAdministration(data)
export const saveTelephoneDirectory = (data: any) => mockStore.saveTelephoneDirectory(data)
export const saveIQAC               = (data: any) => mockStore.saveIQAC(data)
export const saveInfrastructure     = (data: any) => mockStore.saveInfrastructure(data)
export const saveAccreditation      = (data: any) => mockStore.saveAccreditation(data)
export const saveUGCourses          = (data: any) => mockStore.saveUGCourses(data)
export const savePGCourses          = (data: any) => mockStore.savePGCourses(data)
export const savePhDCourses         = (data: any) => mockStore.savePhDCourses(data)
export const savePTDCCourses        = (data: any) => mockStore.savePTDCCourses(data)
export const saveAcademicCalendar   = (data: any) => mockStore.saveAcademicCalendar(data)
export const saveOnlineCourses      = (data: any) => mockStore.saveOnlineCourses(data)
export const saveDirectorMessage    = (data: any) => mockStore.saveDirectorMessage(data)
export const saveCommittees         = (data: any) => mockStore.saveCommittees(data)
export const saveNavItems           = (data: any) => mockStore.saveNavItems(data)
export const saveCustomPages        = (data: any) => mockStore.saveCustomPages(data)
export const saveCustomPage         = (slug: string, data: any) => mockStore.saveCustomPage(slug, data)
export const addCustomPage          = (data: any) => mockStore.addCustomPage(data)
export const deleteCustomPage       = (slug: string) => mockStore.deleteCustomPage(slug)
export const saveUGAdmission        = (data: any) => mockStore.saveUGAdmission(data)
export const savePGAdmission        = (data: any) => mockStore.savePGAdmission(data)
export const savePhDAdmission       = (data: any) => mockStore.savePhDAdmission(data)
export const saveProspectus         = (data: any) => mockStore.saveProspectus(data)
export const saveActivities         = (data: any) => mockStore.saveActivities(data)
export const saveNCC                = (data: any) => mockStore.saveNCC(data)
export const saveNSS                = (data: any) => mockStore.saveNSS(data)
export const saveScholarshipGovt    = (data: any) => mockStore.saveScholarshipGovt(data)
export const saveScholarshipInstitute = (data: any) => mockStore.saveScholarshipInstitute(data)
export const saveSSS                = (data: any) => mockStore.saveSSS(data)
export const saveLibrary            = (data: any) => mockStore.saveLibrary(data)
export const saveBoysHostel         = (data: any) => mockStore.saveBoysHostel(data)
export const saveGirlsHostel        = (data: any) => mockStore.saveGirlsHostel(data)
export const saveComputerCenter     = (data: any) => mockStore.saveComputerCenter(data)
export const saveGamesSports        = (data: any) => mockStore.saveGamesSports(data)
export const saveDispensary         = (data: any) => mockStore.saveDispensary(data)
export const saveIDEALab            = (data: any) => mockStore.saveIDEALab(data)
export const saveGymnasium          = (data: any) => mockStore.saveGymnasium(data)
export const saveWorkshop           = (data: any) => mockStore.saveWorkshop(data)
export const saveCIDI               = (data: any) => mockStore.saveCIDI(data)
export const saveTransitHostel      = (data: any) => mockStore.saveTransitHostel(data)
export const saveStaffQuarters      = (data: any) => mockStore.saveStaffQuarters(data)

// ─── Convenience object (optional: allows tree-shaking by named imports above) ─

export const adminContentService = {
  // Read
  getHomePageData, getAboutInstitute, getVisionMission, getGoverningBody,
  getAcademicCouncil, getAdministration, getTelephoneDirectory, getIQAC,
  getInfrastructure, getAccreditation, getUGCourses, getPGCourses,
  getPhDCourses, getPTDCCourses, getAcademicCalendar, getOnlineCourses,
  getDirectorMessage, getCommittees, getNavItems, getCustomPages,
  getUGAdmission, getPGAdmission, getPhDAdmission, getProspectus,
  getActivities, getNCC, getNSS, getScholarshipGovt, getScholarshipInstitute,
  getSSS, getLibrary, getBoysHostel, getGirlsHostel, getComputerCenter,
  getGamesSports, getDispensary, getIDEALab, getGymnasium, getWorkshop,
  getCIDI, getTransitHostel, getStaffQuarters,
  // Write
  saveHomePageData, saveAboutInstitute, saveVisionMission, saveGoverningBody,
  saveAcademicCouncil, saveAdministration, saveTelephoneDirectory, saveIQAC,
  saveInfrastructure, saveAccreditation, saveUGCourses, savePGCourses,
  savePhDCourses, savePTDCCourses, saveAcademicCalendar, saveOnlineCourses,
  saveDirectorMessage, saveCommittees, saveNavItems, saveCustomPages,
  saveCustomPage, addCustomPage, deleteCustomPage,
  saveUGAdmission, savePGAdmission, savePhDAdmission, saveProspectus,
  saveActivities, saveNCC, saveNSS, saveScholarshipGovt, saveScholarshipInstitute,
  saveSSS, saveLibrary, saveBoysHostel, saveGirlsHostel, saveComputerCenter,
  saveGamesSports, saveDispensary, saveIDEALab, saveGymnasium, saveWorkshop,
  saveCIDI, saveTransitHostel, saveStaffQuarters,
}

export default adminContentService
