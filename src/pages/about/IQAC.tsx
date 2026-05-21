import React from 'react'
import { CheckCircle } from 'lucide-react'

const objectives = [
  'Development and application of quality benchmarks and parameters for academic and administrative activities.',
  'Facilitating the creation of a learner-centric environment conducive to quality education.',
  'Arrangement for feedback from students, parents, and other stakeholders on quality-related processes.',
  'Dissemination of information on various quality parameters of higher education.',
  'Organization of inter and intra institutional workshops and seminars on quality improvement.',
  'Documentation of the various programmes and activities leading to quality improvement.',
  'Development and maintenance of institutional database through MIS for the purpose of maintaining quality.',
  'Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines of NAAC.',
]

const IQAC: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>IQAC Cell</h2>
        <p className="text-sm text-gray-500 mt-1">Internal Quality Assurance Cell</p>
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed">
        The <strong>Internal Quality Assurance Cell (IQAC)</strong> was established at SGSITS as per the guidelines of 
        the National Assessment and Accreditation Council (NAAC). IQAC plays a vital role in maintaining and enhancing 
        the quality standards of the institute in academic, research, and administrative domains.
      </p>

      <div>
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Objectives</h3>
        <div className="space-y-3">
          {objectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-md p-4 border border-slate-200 shadow-sm">
              <CheckCircle size={20} style={{ color: 'var(--color-accent)' }} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>IQAC Composition</h3>
        <p className="text-sm text-gray-600 mb-3">The IQAC comprises the following members:</p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Chairperson:</strong> Director, SGSITS</li>
          <li>• <strong>Coordinator:</strong> Senior Professor (nominated)</li>
          <li>• Representatives from all departments</li>
          <li>• External subject experts from industry and academia</li>
          <li>• Administrative staff representatives</li>
          <li>• Student representatives</li>
          <li>• Alumni representative</li>
        </ul>
      </div>
    </div>
  )
}

export default IQAC
