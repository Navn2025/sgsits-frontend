import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const DirectorMessage: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-gray-100 pb-5">
        <span className="text-xs uppercase font-extrabold tracking-widest text-accent">Leadership</span>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1 text-primary font-display">
          Director's Message
        </h2>
        <p className="text-sm text-slate-500 mt-1.5 font-semibold">
          A vision statement from our Director
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Director Photo & Info Card */}
        <div className="w-full lg:w-96 shrink-0 mx-auto max-w-sm lg:max-w-none lg:sticky lg:top-24">
          <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
            {/* Clean elegant academic image container */}
            <div className="bg-white flex items-center justify-center p-4 border-b border-gray-150">
              <div className="w-full aspect-[3/2] overflow-hidden rounded border border-gray-200">
                <img 
                  src="/director.jpeg" 
                  alt="Prof. Neetesh Purohit" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/image.png";
                  }}
                />
              </div>
            </div>

            {/* Profile Info Details */}
            <div className="p-5 text-center space-y-4">
              <div>
                <h3 className="font-bold text-lg text-primary">
                  Prof. Neetesh Purohit
                </h3>
                <p className="text-xs uppercase tracking-wider font-bold text-accent mt-1">Director</p>
                <p className="text-[11px] font-semibold text-slate-500 mt-0.5">SGSITS Indore</p>
              </div>

              <div className="border-t border-gray-150 pt-4 space-y-2 text-xs font-semibold text-slate-600">
                <a 
                  href="mailto:director@sgsits.ac.in" 
                  className="flex items-center justify-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail size={13} className="text-accent shrink-0 stroke-[2.5]" /> 
                  director@sgsits.ac.in
                </a>
                <div className="flex items-center justify-center gap-2">
                  <Phone size={13} className="text-accent shrink-0 stroke-[2.5]" /> 
                  0731-2582100
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin size={13} className="text-accent shrink-0 stroke-[2.5]" /> 
                  Director's Suite, Main Building
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Director's Written Message */}
        <div className="flex-1 space-y-6">
          {/* Clean editorial quote block */}
          <div className="bg-white rounded-md p-5 border border-slate-200 border-l-4 border-l-accent shadow-sm">
            <p className="text-slate-800 text-sm font-semibold italic leading-relaxed">
              "We strive to cultivate an intellectual ecosystem where technological innovation blends with high ethical values to shape pioneers of engineering excellence who lead globally."
            </p>
          </div>

          <div className="prose max-w-none text-slate-700 space-y-4 text-[14.5px] leading-relaxed">
            <p className="font-semibold text-primary text-[15px]">
              Dear Students, Colleagues, Alumni, and Partners,
            </p>
            <p>
              It is an absolute honor to welcome you to the web portal of <strong>Shri G. S. Institute of Technology & Science (SGSITS), Indore</strong>. 
              As one of Central India's oldest and most prestigious engineering institutions, our legacy since <strong>1952</strong> is built upon a firm commitment to academic rigour, engineering excellence, and national service.
            </p>
            <p>
              Under our government-aided autonomous framework, SGSITS enjoys the academic speed to shape curriculum that matches the rapid advancements of 
              <strong className="text-slate-900 font-semibold"> Industry 4.0, Artificial Intelligence, and Sustainable Systems</strong>. By fully embracing the 
              <strong> National Education Policy (NEP) 2020</strong> and implementing thorough **Outcome-Based Education (OBE)**, we ensure our graduates are equipped with deep fundamental knowledge and practical hands-on experience.
            </p>
            <p>
              We are extremely proud of our research culture, our students' achievements in hackathons and innovators' groups, and our close relationships with corporate and industry giants. 
              Our placement statistics stand as a powerful proof of our students' potential and the trust top companies place in the brand of SGSITS.
            </p>
            <p>
              Whether you are an aspiring student, a valued alumnus, or an industrial partner, I invite you to explore our state-of-the-art facilities, connect with our world-class faculty, and join us in our journey of transforming education to build a resilient and self-reliant nation.
            </p>
            
            <div className="pt-6 border-t border-gray-150 space-y-1">
              <p className="font-bold text-[15px] text-primary">
                Prof. Neetesh Purohit
              </p>
              <p className="text-xs font-semibold text-accent">Director, SGSITS Indore</p>
              <p className="text-[11px] text-slate-500 font-medium">Shri G. S. Institute of Technology & Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DirectorMessage
