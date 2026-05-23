import React from 'react'
import { Building2, Users, GraduationCap, Award, BookOpen, Globe, CheckCircle2 } from 'lucide-react'

const highlights = [
  { icon: Building2, label: 'Established', value: '1952', desc: 'Over 70 years of academic legacy' },
  { icon: Users, label: 'Faculty Members', value: '200+', desc: 'Experienced mentors & researchers' },
  { icon: GraduationCap, label: 'Enrolled Students', value: '3,000+', desc: 'Across undergraduate and postgraduate studies' },
  { icon: Award, label: 'NAAC Accreditation', value: 'Grade A', desc: 'Recognized for top-tier academic standards' },
  { icon: BookOpen, label: 'Departments', value: '17', desc: 'Diverse disciplines in sciences & technology' },
  { icon: Globe, label: 'Campus Size', value: '52 Acres', desc: 'Lush urban campus in the heart of Indore' },
]

const affiliations = [
  'Affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal',
  'Affiliated to Devi Ahilya Vishwavidyalaya (DAVV), Indore',
  'Approved by All India Council for Technical Education (AICTE), New Delhi',
  'Accredited by National Assessment and Accreditation Council (NAAC) — Grade A',
  'Core engineering programs accredited by National Board of Accreditation (NBA)',
  'Recognized by UGC under Section 2(f) and 12(B) of UGC Act',
  'Consistently ranked among the top tier engineering institutes in Central India'
]

const AboutInstitute: React.FC = () => {
  return (
    <div className="space-y-12 bg-white">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Institute Overview</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
          ABOUT the <span className="font-serif italic font-semibold text-primary">INSTITUTE</span>
        </h2>
        <p className="text-xs font-semibold text-slate-500 mt-1 font-sans uppercase tracking-wider">
          Shri G. S. Institute of Technology & Science, Indore
        </p>
      </div>

      {/* Styled Introduction Narrative */}
      <div className="border-l-2 border-accent pl-6">
        <div className="text-slate-650 space-y-4 text-sm leading-relaxed font-sans text-justify">
          <p className="text-base text-slate-800 leading-relaxed font-medium">
            <strong>Shri G. S. Institute of Technology & Science (SGSITS)</strong>, Indore was established in 
            <strong className="text-primary font-bold"> 1952</strong> by the Late Seth Shri Govindram Seksaria, a renowned industrialist and philanthropist. The 
            institute is recognized as one of the premier technical institutions in Central India and has been a beacon of technical 
            education and research excellence for over seven decades.
          </p>
          <p>
            SGSITS is a <strong className="text-primary font-semibold">Government-Aided Autonomous Institute</strong>, jointly affiliated with 
            <strong> Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal</strong> and 
            <strong> Devi Ahilya Vishwavidyalaya (DAVV), Indore</strong>. The institute was granted autonomous status in 
            <strong> 1989</strong>, giving it the academic agility to design its own industry-centric curriculum, conduct examinations, and pioneer cutting-edge engineering modules.
          </p>
          <p>
            Spread over a vibrant <strong className="text-slate-900 font-semibold">52-acre campus</strong> in the heart of Indore city, SGSITS offers undergraduate, 
            postgraduate, and doctoral programs across 17 departments spanning engineering, technology, sciences, pharmacy, 
            and management disciplines. The institute is proudly accredited by <strong className="text-primary font-bold">NAAC with Grade A</strong> and several of its 
            flagship programs are accredited by the <strong className="text-slate-900 font-semibold">National Board of Accreditation (NBA)</strong>.
          </p>
          <p>
            With a focus on Outcome-Based Education, SGSITS is dedicated to fostering a culture of research, innovation, 
            and ethical leadership, developing competent professionals ready to make a significant global impact.
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="space-y-6 pt-2">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Institutional Strengths</span>
          <h3 className="text-xl font-display font-bold text-slate-900">Key Highlights</h3>
          <div className="w-12 h-[2px] bg-accent mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div 
                key={item.label} 
                className="bg-white rounded border border-slate-200/80 p-5 hover:border-slate-400 transition-colors duration-200 flex flex-col group"
              >
                <div className="w-9 h-9 rounded bg-slate-50 border border-slate-200/60 flex items-center justify-center text-accent-blue mb-4 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-200">
                  <Icon size={16} strokeWidth={1.75} />
                </div>
                <p className="text-3xl font-display font-bold text-primary tracking-tight leading-none">
                  {item.value}
                </p>
                <p className="text-xs font-sans font-bold text-slate-800 mt-3 uppercase tracking-wider">{item.label}</p>
                <p className="text-xs text-slate-500 mt-1 font-sans font-medium leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Affiliations & Certifications Section */}
      <div className="bg-slate-50 rounded border border-slate-200/80 p-6 border-l-2 border-l-primary">
        <div className="space-y-6">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Accreditation & Approvals</span>
            <h3 className="text-xl font-display font-bold text-slate-900">Affiliations & Recognition</h3>
            <p className="text-xs text-slate-500 mt-1 font-sans font-medium">Approved and recognized by national regulatory and statutory bodies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {affiliations.map((text, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 p-3 rounded border border-slate-200 bg-white"
              >
                <CheckCircle2 size={16} className="text-slate-700 shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-xs font-sans font-semibold text-slate-700 leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInstitute
