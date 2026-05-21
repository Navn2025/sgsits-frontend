import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface AdminUser {
  id: string
  name: string
  email: string
  role: string
}

export interface AdminState {
  token: string | null
  user: AdminUser | null
  setAuth: (token: string, user: AdminUser) => void
  clearAuth: () => void
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      clearAuth: () => set({ token: null, user: null }),
    }),
    {
      name: 'sgsits-admin-auth', // name of the item in storage
    }
  )
)
