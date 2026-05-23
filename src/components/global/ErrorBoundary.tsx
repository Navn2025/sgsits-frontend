import React from 'react'
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'
import Logo from './Header/Logo'

const ErrorBoundary: React.FC = () => {
  const error = useRouteError()
  let errorMessage = 'An unexpected error occurred while loading this page.'
  let statusCode = 500

  if (isRouteErrorResponse(error)) {
    statusCode = error.status
    errorMessage = error.statusText || error.data?.message || errorMessage
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] flex flex-col justify-between p-6">
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 border-b border-gray-200">
        <Logo />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center max-w-xl mx-auto text-center my-12">
        <div className="relative mb-6">
          <span className="text-8xl md:text-9xl font-black text-gray-200 select-none block">
            {statusCode}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-20 h-20 animate-pulse"
              style={{ color: 'var(--color-primary)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
          Page Load Failure
        </h1>
        <p className="text-gray-600 mb-8 text-sm max-w-md">
          {errorMessage}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            to="/"
            className="px-6 py-2.5 text-white rounded-xl shadow-lg font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Return to Homepage
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold text-sm transition-all duration-300"
          >
            Retry Loading Page
          </button>
        </div>
      </main>

      <footer className="text-center text-xs text-gray-500 border-t border-gray-200 py-4 max-w-7xl mx-auto w-full">
        &copy; {new Date().getFullYear()} Shri G. S. Institute of Technology & Science (SGSITS). All rights reserved.
      </footer>
    </div>
  )
}

export default ErrorBoundary
