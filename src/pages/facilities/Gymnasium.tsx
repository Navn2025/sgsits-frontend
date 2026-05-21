import React from 'react'

const Gymnasium: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Gymnasium</h2>
        <p className="text-sm text-gray-500 mt-1">Fitness and indoor sports facility</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The SGSITS Gymnasium is a well-equipped fitness center available to all students and staff members. A qualified physical trainer is available during operating hours.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Equipment:</strong> Treadmills, exercise bikes, multi-gym stations, free weights, yoga mats, and cardio equipment. <strong>Indoor Games:</strong> Table tennis, badminton, chess, and carrom facilities.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Timings:</strong> 6:00 AM to 8:00 PM for students. Separate time slots for boys and girls. Registration through the Sports Committee.</p>
      </div>
    </div>
  )
}

export default Gymnasium
