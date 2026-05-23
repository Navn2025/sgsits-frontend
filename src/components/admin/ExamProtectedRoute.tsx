import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'

const ExamProtectedRoute: React.FC = () => {
  const token = useAdminStore((state) => state.token)
  const user = useAdminStore((state) => state.user)

  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (user?.role !== 'exam_controller' && user?.role !== 'super_admin') {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ExamProtectedRoute
