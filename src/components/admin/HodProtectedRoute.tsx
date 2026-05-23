import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'

const HodProtectedRoute: React.FC = () => {
  const token = useAdminStore((state) => state.token)
  const user = useAdminStore((state) => state.user)

  if (!token) {
    return <Navigate to="/login" replace />
  }

  // Allow HOD; also allow super_admin to inspect the panel.
  if (user?.role !== 'hod' && user?.role !== 'super_admin') {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default HodProtectedRoute
