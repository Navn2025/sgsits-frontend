import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'

const PlacementProtectedRoute: React.FC = () => {
  const token = useAdminStore((state) => state.token)
  const user = useAdminStore((state) => state.user)

  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (
    user?.role !== 'placement_officer' &&
    user?.role !== 'super_admin' &&
    user?.role !== 'central_admin'
  ) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default PlacementProtectedRoute
