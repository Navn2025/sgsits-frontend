import React from 'react'

const Ordinances: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Academic Ordinances</h2>
        <p className="text-sm text-gray-500 mt-1">Rules and regulations governing academic affairs</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The Academic Ordinances of SGSITS govern all aspects of academic affairs including admission, registration, attendance, examinations, grading, and award of degrees.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Attendance:</strong> Minimum 75% attendance is mandatory for appearing in end-semester examinations. Students with 65-74% attendance may be given a chance with penalty. Below 65% results in debarment.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Grading System:</strong> SGSITS follows a 10-point CGPA system. Grade Points: O(10), A+(9), A(8), B+(7), B(6), C(5), P(4), F(0). Minimum CGPA of 4.0 required for degree award.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Academic Integrity:</strong> Plagiarism, copying, and unfair means in examinations are strictly prohibited. Violations lead to disciplinary action including cancellation of examination.</p>
      </div>
    </div>
  )
}

export default Ordinances
