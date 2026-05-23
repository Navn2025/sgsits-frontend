import React, { useState } from 'react'
import {
  Briefcase, Award, TrendingUp, Building2, CheckCircle2, ArrowRight,
  Phone, Mail, Users, Star
} from 'lucide-react'
import { mockStore } from '../../data/mockStore'

const processSteps = [
  { num: '01', title: 'Company Registration', desc: 'Companies register on the T&P portal and submit JD, package details, and eligibility criteria.' },
  { num: '02', title: 'Pre-Placement Talk', desc: 'Company HR team visits or conducts virtual PPT to brief students about roles and culture.' },
  { num: '03', title: 'Aptitude Test', desc: 'Written or online screening — quant, logical reasoning, verbal ability, and coding (if applicable).' },
  { num: '04', title: 'Group Discussion', desc: 'For communication-heavy roles — case studies, topic-based GD and extempore sessions.' },
  { num: '05', title: 'Technical Interview', desc: 'Final technical depth assessment — DSA, core subjects, projects, and domain expertise.' },
  { num: '06', title: 'Offer Letter', desc: 'Selected students receive official offer letters. Joining formalities coordinated by T&P Cell.' },
]

const trainingPrograms = [
  'Quantitative Aptitude & Logical Reasoning (AMCAT, Cocubes pattern)',
  'Verbal Ability & Communication Skills Enhancement',
  'Technical Interview Preparation (DSA, DBMS, OS, Networks)',
  'Resume Building & LinkedIn Profile Optimization Workshops',
  'Mock Interviews with Industry Professionals',
  'Soft Skills and Professional Etiquette Training',
  'Group Discussion Facilitation and Practice Sessions',
  'GATE & Higher Education Guidance Programs',
]

const partners = [
  'TCS', 'Infosys', 'Wipro', 'Accenture', 'L&T', 'BHEL', 'Amazon', 'Microsoft',
  'Google', 'IBM', 'HCL', 'Cognizant', 'Tech Mahindra', 'Capgemini', 'Oracle', 'Deloitte',
]

const team = [
  {
    name: 'Prof. V.K. Sharma',
    title: 'Training & Placement Officer (TPO)',
    dept: 'Department of Computer Engineering',
    phone: '0731-2582150',
    email: 'tpo@sgsits.ac.in',
    img: 'https://picsum.photos/seed/tpo_sharma/200/200',
    exp: '20 years',
  },
  {
    name: 'Dr. Anjali Mehta',
    title: 'UG Placement Coordinator',
    dept: 'T&P Cell',
    phone: '0731-2582151',
    email: 'placement.ug@sgsits.ac.in',
    img: 'https://picsum.photos/seed/tpo_anjali/200/200',
    exp: '12 years',
  },
  {
    name: 'Mr. Rahul Patidar',
    title: 'PG & Corporate Relations',
    dept: 'T&P Cell',
    phone: '0731-2582152',
    email: 'placement.pg@sgsits.ac.in',
    img: 'https://picsum.photos/seed/tpo_rahul/200/200',
    exp: '8 years',
  },
]

const TNPCell: React.FC = () => {
  const placement = mockStore.getPlacement()
  const latest = placement[0]
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1.5">Placements</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Training & Placement Cell</h2>
        <div className="w-16 h-0.5 bg-accent mt-2 mb-3" />
        <p className="text-sm text-slate-500 font-medium font-sans">Career Development & Campus Recruitment — SGSITS Indore</p>
      </div>

      {/* Stats Banner from mockStore */}
      <div className="bg-primary rounded-2xl p-6 text-white">
        <p className="text-[10px] uppercase tracking-widest font-bold text-accent/80 mb-3">Placement Statistics {latest?.year}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: Users, value: `${latest?.studentsPlaced}+`, label: 'Students Placed' },
            { icon: Building2, value: `${latest?.companies}+`, label: 'Companies Visited' },
            { icon: Award, value: latest?.highestPackage, label: 'Highest Package' },
            { icon: TrendingUp, value: latest?.averagePackage, label: 'Average Package' },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-2">
                  <Icon size={18} className="text-accent" />
                </div>
                <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
                <p className="text-[10px] text-white/60 uppercase tracking-wider font-bold mt-1">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* About T&P Cell */}
      <div className="border-l-4 border-accent pl-5">
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          The <strong>Training & Placement (T&P) Cell</strong> of SGSITS is the dedicated interface between the institute and industry.
          It coordinates campus recruitment drives, summer internships, pre-placement offers (PPOs), and career development programs
          throughout the academic year. The cell maintains strong industry connections with <strong>180+ organizations</strong> — 
          ranging from Fortune 500 MNCs to high-growth startups. The recruitment season runs from <strong>August to March</strong> every year.
          In the last decade, the T&P Cell has facilitated placements for over 10,000 students across all branches.
        </p>
      </div>

      {/* T&P Team */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Our Team</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Placement Cell Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <div key={i} className={`bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition-all ${i === 0 ? 'border-accent/40 ring-1 ring-accent/20' : 'border-slate-200'}`}>
              {i === 0 && (
                <div className="flex items-center gap-1 mb-3">
                  <Star size={11} className="text-accent fill-accent" />
                  <span className="text-[10px] text-accent font-bold uppercase tracking-wider">Lead</span>
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm leading-snug">{member.name}</h4>
                  <p className="text-[10px] text-accent font-bold uppercase tracking-wider mt-0.5">{member.title}</p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">{member.exp} experience</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium mb-3 font-sans">{member.dept}</p>
              <div className="space-y-1.5 border-t border-slate-100 pt-3">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Phone size={11} className="text-accent shrink-0" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Mail size={11} className="text-accent shrink-0" />
                  <a href={`mailto:${member.email}`} className="text-accent-blue hover:underline truncate">{member.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Placement Process */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Process</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Campus Recruitment Process</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {processSteps.map((step, i) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              className={`rounded-xl border p-5 cursor-pointer transition-all duration-200 ${
                activeStep === i
                  ? 'border-accent/40 bg-[#bfa15f]/10 shadow-md'
                  : 'bg-white border-slate-200 hover:border-accent/30 shadow-sm hover:shadow-md'
              }`}
            >
              <span className="text-4xl font-display font-black text-accent/20 block">{step.num}</span>
              <h4 className="text-sm font-bold text-primary mt-2 mb-1.5">{step.title}</h4>
              <p className="text-[12px] text-slate-500 leading-relaxed font-medium font-sans">{step.desc}</p>
              {activeStep === i && (
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-1 text-[10px] text-accent font-bold">
                    <CheckCircle2 size={11} /> Step {step.num} of 06
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Training Programs */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Training</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Year-Round Training Programs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {trainingPrograms.map((prog) => (
            <div key={prog} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3.5 text-sm hover:border-accent/30 hover:bg-[#bfa15f]/5 transition-all">
              <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium font-sans">{prog}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Partners</span>
        <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Our Recruiting Partners</h3>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
          {partners.map((company) => (
            <div
              key={company}
              className="bg-white border border-slate-200 rounded-xl px-2 py-3 text-center hover:border-accent/40 hover:bg-[#bfa15f]/5 hover:shadow-sm transition-all cursor-pointer"
            >
              <p className="text-[11px] font-bold text-primary font-sans leading-tight">{company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-primary text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Briefcase size={18} className="text-accent" />
            <h4 className="font-bold font-display text-base">Register Your Company for Campus Drive</h4>
          </div>
          <p className="text-sm text-slate-300 font-sans">We welcome companies from all sectors for on-campus and virtual recruitment drives.</p>
          <div className="flex flex-wrap gap-5 mt-3 text-sm">
            <div className="flex items-center gap-1.5">
              <Phone size={13} className="text-accent" />
              <span>0731-2582150</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={13} className="text-accent" />
              <a href="mailto:tpo@sgsits.ac.in" className="hover:underline">tpo@sgsits.ac.in</a>
            </div>
          </div>
        </div>
        <a
          href="mailto:tpo@sgsits.ac.in"
          className="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-accent/90 transition-colors shrink-0"
        >
          Contact T&P Cell <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}

export default TNPCell
