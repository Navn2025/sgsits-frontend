/**
 * About Service — Institute profile, governance, administration
 *
 * MOCK MODE — Returns mock data instantly.
 * When backend is ready, replace return statements with apiClient calls.
 *
 * Components MUST call this service — never import mock data directly.
 */

import {
  mockVisionMission,        type VisionMissionData,
  mockGoverningBody,        type GoverningBodyData,  type GovBodyCategory,
  mockAdministration,       type AdminOfficial,
  mockTelephoneDirectory,   type TelephoneEntry,
  mockIQAC,                 type IQACData,
  mockAcademicCouncil,      type AcademicCouncilData,
  mockAccreditation,        type AccreditationData,
  mockInfrastructure,       type InfrastructureData,
  mockDirectorMessage,      type DirectorMessageData,
  mockCommittees,           type CommitteeData,      type CommitteeMember,
} from '../mock/about/aboutData'
import { mockStore } from '../data/mockStore'

export interface AboutInstituteHighlight {
  iconName: string
  label: string
  value: string
  desc: string
}

export interface AboutInstituteData {
  narrativeParagraphs: string[]
  highlights: AboutInstituteHighlight[]
  affiliations: string[]
}

export type {
  VisionMissionData, GoverningBodyData, GovBodyCategory, AdminOfficial, TelephoneEntry,
  IQACData, AcademicCouncilData, AccreditationData, InfrastructureData,
  DirectorMessageData, CommitteeData, CommitteeMember,
}

export const getAboutInstitute = async (): Promise<AboutInstituteData> => {
  return mockStore.getAboutInstitute()
}

export const getVisionMission = async (): Promise<VisionMissionData> => {
  return mockStore.getVisionMission()
}

export const getGoverningBody = async (): Promise<GoverningBodyData> => {
  return mockStore.getGoverningBody()
}

export const getAdministration = async (): Promise<AdminOfficial[]> => {
  return mockStore.getAdministration()
}

export const getTelephoneDirectory = async (): Promise<TelephoneEntry[]> => {
  return mockStore.getTelephoneDirectory()
}

export const getIQAC = async (): Promise<IQACData> => {
  return mockStore.getIQAC()
}

export const getAcademicCouncil = async (): Promise<AcademicCouncilData> => {
  return mockStore.getAcademicCouncil()
}

export const getAccreditation = async (): Promise<AccreditationData> => {
  return mockStore.getAccreditation()
}

export const getInfrastructure = async (): Promise<InfrastructureData> => {
  return mockStore.getInfrastructure()
}

export const getDirectorMessage = async (): Promise<DirectorMessageData> => {
  return mockStore.getDirectorMessage()
}

export const getCommittees = async (): Promise<CommitteeData[]> => {
  return mockStore.getCommittees()
}

// ─── Defaults (sync initial state, no loading flash) ─────────────────────────
export const visionMissionDefault: VisionMissionData      = mockVisionMission
export const governingBodyDefault: GoverningBodyData      = mockGoverningBody
export const administrationDefault: AdminOfficial[]       = mockAdministration
export const telephoneDirectoryDefault: TelephoneEntry[]  = mockTelephoneDirectory
export const iqacDefault: IQACData                        = mockIQAC
export const academicCouncilDefault: AcademicCouncilData  = mockAcademicCouncil
export const accreditationDefault: AccreditationData      = mockAccreditation
export const infrastructureDefault: InfrastructureData    = mockInfrastructure
export const directorMessageDefault: DirectorMessageData  = mockDirectorMessage
export const committeesDefault: CommitteeData[]           = mockCommittees
export const aboutInstituteDefault: AboutInstituteData = {
  narrativeParagraphs: [
    "Shri G. S. Institute of Technology & Science (SGSITS), Indore was established in 1952 by the Late Seth Shri Govindram Seksaria..."
  ],
  highlights: [],
  affiliations: []
}

export interface CustomPageData {
  slug: string
  title: string
  subtitle: string
  narrativeParagraphs: string[]
  highlights?: { iconName: string; label: string; value: string; desc: string }[]
  affiliations?: string[]
}

export const getCustomPages = async (): Promise<CustomPageData[]> => {
  return mockStore.getCustomPages()
}

export const getCustomPage = async (slug: string): Promise<CustomPageData | null> => {
  return mockStore.getCustomPage(slug)
}

export const saveCustomPages = async (pages: CustomPageData[]): Promise<void> => {
  mockStore.saveCustomPages(pages)
}

export const saveCustomPage = async (slug: string, data: Partial<CustomPageData>): Promise<void> => {
  mockStore.saveCustomPage(slug, data)
}

export const aboutService = {
  getAboutInstitute,
  getVisionMission, getGoverningBody, getAdministration, getTelephoneDirectory,
  getIQAC, getAcademicCouncil, getAccreditation, getInfrastructure,
  getDirectorMessage, getCommittees,
  getCustomPages, getCustomPage, saveCustomPages, saveCustomPage,
}

export default aboutService
