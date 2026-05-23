/**
 * UI Labels Service — Global static text labels
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  MOCK MODE                                              ║
 * ║  Replace with: apiClient.get('/settings/ui-labels')     ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * Admin panel can change every small UI label:
 *  - Accessibility bar labels (A-, A, A+, Skip to Content)
 *  - Homepage CTA labels (View All Notices, View All Departments)
 *  - Header search placeholder and button text
 *  - Login label, mobile menu labels
 *  - Sidebar section menu labels
 *  - Footer copyright prefix
 *  - Top-bar quick links (label + destination)
 *  - Portal action labels (Save, Cancel, Edit, Delete)
 */

import { mockUiLabels, type UiLabelsConfig } from '../mock/uilabels/uiLabelsData'
import { mockStore } from '../data/mockStore'

/**
 * GET /api/settings/ui-labels
 */
export const getUiLabels = async (): Promise<UiLabelsConfig> => {
  return mockStore.getUiLabels()
}

/**
 * PUT /api/settings/ui-labels
 */
export const saveUiLabels = async (data: UiLabelsConfig): Promise<void> => {
  mockStore.saveUiLabels(data)
}

/** Synchronous default — no-flash initial render */
export const uiLabelsDefaults: UiLabelsConfig = mockUiLabels

export type { UiLabelsConfig }

export const uiLabelsService = {
  getUiLabels,
  saveUiLabels,
}

export default uiLabelsService
