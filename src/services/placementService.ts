/**
 * Placement Service — T&P Cell, placement records, company data
 *
 * MOCK MODE — Returns mock data instantly.
 * Components MUST call this service — never import mock data directly.
 */

import { mockStore } from '../data/mockStore'
import {
  type PlacementRecord,
  type DeptPlacementStat,
  type TNPTeamMember,
  type PlacementProcessStep,
  type TNPCellInfo,
  type LeadingCompany,
  type PlacementContactPerson,
  type PlacementOfficeInfo,
} from '../mock/placement/placementData'

export type {
  PlacementRecord, DeptPlacementStat, TNPTeamMember,
  PlacementProcessStep, TNPCellInfo, LeadingCompany,
  PlacementContactPerson, PlacementOfficeInfo,
}

export const getPlacementRecords = async (): Promise<PlacementRecord[]> => {
  return mockStore.getPlacement()
}

export const getDeptPlacement = async (): Promise<DeptPlacementStat[]> => {
  return mockStore.getDeptPlacement()
}

export const getTNPTeam = async (): Promise<TNPTeamMember[]> => {
  return mockStore.getTNPTeam()
}

export const getPlacementProcess = async (): Promise<PlacementProcessStep[]> => {
  return mockStore.getPlacementProcess()
}

export const getTrainingPrograms = async (): Promise<string[]> => {
  return mockStore.getTrainingPrograms()
}

export const getRecruitingPartners = async (): Promise<string[]> => {
  return mockStore.getRecruitingPartners()
}

export const getTNPCellInfo = async (): Promise<TNPCellInfo> => {
  return mockStore.getTNPCellInfo()
}

export const getLeadingCompanies = async (): Promise<LeadingCompany[]> => {
  return mockStore.getLeadingCompanies()
}

export const getPlacementContacts = async (): Promise<PlacementContactPerson[]> => {
  return mockStore.getPlacementContacts()
}

export const getPlacementOfficeInfo = async (): Promise<PlacementOfficeInfo> => {
  return mockStore.getPlacementOfficeInfo()
}

// ─── Defaults ────────────────────────────────────────────────────────────────
export const placementRecordsDefault: PlacementRecord[]             = []
export const deptPlacementDefault: DeptPlacementStat[]              = []
export const tnpTeamDefault: TNPTeamMember[]                        = []
export const placementProcessDefault: PlacementProcessStep[]        = []
export const trainingProgramsDefault: string[]                      = []
export const recruitingPartnersDefault: string[]                    = []
export const tnpCellInfoDefault: TNPCellInfo                        = { aboutText: '', phone: '', email: '', ctaLabel: '', ctaEmail: '' }
export const leadingCompaniesDefault: LeadingCompany[]              = []
export const placementContactsDefault: PlacementContactPerson[]     = []
export const placementOfficeInfoDefault: PlacementOfficeInfo        = { address: '', mondayFridayHours: '', saturdayHours: '', sundayStatus: '' }

export const placementService = {
  getPlacementRecords, getDeptPlacement, getTNPTeam, getPlacementProcess,
  getTrainingPrograms, getRecruitingPartners, getTNPCellInfo, getLeadingCompanies,
  getPlacementContacts, getPlacementOfficeInfo,
}

export default placementService
