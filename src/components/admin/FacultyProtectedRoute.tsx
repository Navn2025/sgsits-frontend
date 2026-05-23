import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'

const FacultyProtectedRoute: React.FC = () => {
  const token = useAdminStore((state) => state.token)
  const user = useAdminStore((state) => state.user)

  if (!token) {
    return <Navigate to="/login" replace />
  }

  // Faculty + HOD (HOD is a faculty member who can also use faculty tooling)
  // + super_admin for inspection
  if (
    user?.role !== 'faculty' &&
    user?.role !== 'hod' &&
    user?.role !== 'super_admin'
  ) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default FacultyProtectedRoute
