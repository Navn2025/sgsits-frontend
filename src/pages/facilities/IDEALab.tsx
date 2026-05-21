import React from 'react'

const IDEALab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>AICTE IDEA Lab</h2>
        <p className="text-sm text-gray-500 mt-1">Innovation, Design, Entrepreneurship & Artisan Lab</p>
      </div>

      <div className="space-y-4">
      <p className="text-gray-700 text-[15px] leading-relaxed">The <strong>AICTE IDEA Lab</strong> at SGSITS is established under the AICTE initiative to foster innovation and entrepreneurship among students. It serves as a makerspace for hands-on learning.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Equipment:</strong> 3D Printers (FDM & SLA), IoT development kits (Arduino, Raspberry Pi, ESP32), Robotics kits, Drone assembly station, PCB fabrication, Laser cutting machine, and CNC router.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Open Access:</strong> The IDEA Lab is open to students of all departments and all years. No prior experience required. Faculty mentors and lab assistants provide guidance.</p>
      <p className="text-gray-700 text-[15px] leading-relaxed"><strong>Activities:</strong> Regular workshops, hackathons, project mentorship, startup incubation support. Several student projects have won awards at national innovation competitions.</p>
      </div>
    </div>
  )
}

export default IDEALab
