import React from 'react'

const VideoTourPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Video Tour</h2>
        <p className="text-sm text-gray-500 mt-1">Take a virtual tour of SGSITS campus</p>
      </div>

      <div className="rounded-md overflow-hidden border border-slate-200 bg-white p-2 shadow-sm">
        <div className="aspect-video flex items-center justify-center bg-slate-50 border border-slate-100 rounded-md">
          <div className="text-center text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <p className="text-sm mt-2 font-medium">Campus Video Tour</p>
            <p className="text-xs mt-1">Video will be embedded here</p>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-[15px] leading-relaxed mt-4">
        Experience the beauty and facilities of SGSITS through our campus video tour. The tour covers the main academic building, departments, central library, computer center, hostels, sports complex, and the lush green campus grounds.
      </p>
    </div>
  )
}

export default VideoTourPage
