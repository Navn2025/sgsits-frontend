import React from 'react'
import { Eye, Target, Quote } from 'lucide-react'

const missionPoints = [
  {
    num: '1',
    text: 'Provide high-quality technical education through a meticulously designed curriculum, advanced outcome-based teaching-learning methodologies, and state-of-the-art laboratory infrastructure.'
  },
  {
    num: '2',
    text: 'Foster a vibrant ecosystem for high-impact research, pioneering innovation, and student-led entrepreneurship in collaboration with global scientific institutions.'
  },
  {
    num: '3',
    text: 'Cultivate strong industry-academia synergies to drive technology transfer, consultancies, industrial internships, and exceptional student placement programs.'
  },
  {
    num: '4',
    text: 'Inculcate deep-seated ethical values, professional integrity, a sense of social responsibility, and future-ready leadership capabilities.'
  },
  {
    num: '5',
    text: 'Encourage comprehensive and holistic development through outstanding sports facilities, cultural forums, and active community outreach initiatives.'
  }
]

const VisionMission: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-gray-100 pb-5">
        <span className="text-xs uppercase font-extrabold tracking-widest text-accent">Core Values</span>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1 text-primary font-display">
          Vision & Mission
        </h2>
        <p className="text-sm text-slate-500 mt-1.5 font-semibold">
          Our guiding principles for academic excellence & future-ready engineering leadership
        </p>
      </div>

      {/* Vision Section */}
      <div className="bg-white rounded-md p-6 border border-gray-200 shadow-sm">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center text-accent">
              <Eye size={20} className="stroke-[2]" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Where we stand</span>
              <h3 className="text-lg font-bold text-primary">Our Vision</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
            {/* English Vision */}
            <div className="bg-white rounded-md p-5 border border-gray-150 shadow-sm relative flex flex-col min-h-[120px]">
              <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                <span className="text-[10px] uppercase font-bold text-accent">English Version</span>
                <Quote size={14} className="text-accent/30" />
              </div>
              <p className="text-slate-700 text-[14.5px] font-medium leading-relaxed italic">
                "To be a centre of excellence in education, research and innovation, creating competent professionals with ethical values who contribute to the development of society and the nation."
              </p>
            </div>

            {/* Hindi Vision */}
            <div className="bg-white rounded-md p-5 border border-gray-150 shadow-sm relative flex flex-col min-h-[120px]">
              <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                <span className="text-[10px] uppercase font-bold text-accent">Hindi Version</span>
                <Quote size={14} className="text-accent/30" />
              </div>
              <p className="text-slate-700 text-[14.5px] font-medium leading-relaxed italic">
                "शिक्षा, अनुसंधान और नवाचार में उत्कृष्टता का केंद्र बनना, नैतिक मूल्यों के साथ सक्षम पेशेवरों का निर्माण करना जो समाज और राष्ट्र के विकास में योगदान दें।"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
            <Target size={20} className="stroke-[2]" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Our pathways</span>
            <h3 className="text-lg font-bold text-primary">Our Mission</h3>
          </div>
        </div>

        <div className="space-y-3">
          {missionPoints.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-4 p-4 rounded-md bg-white border border-gray-150 shadow-sm"
            >
              {/* Standard flat number square */}
              <div className="w-8 h-8 rounded bg-white text-primary font-extrabold flex items-center justify-center shrink-0 border border-gray-200 text-sm shadow-sm">
                {item.num}
              </div>
              <div className="flex-grow pt-0.5">
                <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VisionMission
