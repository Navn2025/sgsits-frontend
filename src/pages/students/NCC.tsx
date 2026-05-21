import React from 'react'

const NCC: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>NCC Wing</h2>
        <p className="text-sm text-gray-500 mt-1">National Cadet Corps at SGSITS</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">SGSITS has an active <strong>NCC unit</strong> under the NCC Directorate, Madhya Pradesh. The unit provides military training and character-building opportunities for interested students.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Activities:</strong> Regular parade and drill practice, annual training camps (ATC), combined annual training camps (CATC), Republic Day parade participation, adventure activities (trekking, rock climbing).</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Certificates:</strong> NCC cadets can earn B and C certificates which provide benefits in government job selections, higher education admissions, and personality development.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Enrollment:</strong> Open to all first and second year students. Batch strength: 100 cadets (Army wing). Weekly parade on designated days.</p>
      </div>
    </div>
  )
}

export default NCC
