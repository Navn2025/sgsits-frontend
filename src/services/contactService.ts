/**
 * Contact Service — Institute contact details and offices
 *
 * MOCK MODE — Returns mock data instantly.
 * Components MUST call this service — never import mock data directly.
 */

import { mockContactData, type ContactData, type ContactOffice } from '../mock/contact/contactData'

export type { ContactData, ContactOffice }

export const getContactData = async (): Promise<ContactData> => {
  return { ...mockContactData, offices: [...mockContactData.offices] }
  // REAL: return apiClient.get('/contact').then(r => r.data.data)
}

// ─── Default ──────────────────────────────────────────────────────────────────
export const contactDefault: ContactData = mockContactData

export const contactService = {
  getContactData,
}

export default contactService
