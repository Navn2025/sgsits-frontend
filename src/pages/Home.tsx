import React, { useState } from 'react'
import {
  Calendar,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Microscope,
  Award,
  Users,
  Building,
  FileText,
  FlaskConical,
  Rocket,
  Newspaper,
  Landmark
} from 'lucide-react'

// ---- FAQ Accordion Item ----
interface FaqItemProps {
  question: string
  answer?: string | null
  contact?: { name: string; phone: string; email: string } | null
  defaultOpen?: boolean
}
const FaqItem: React.FC<FaqItemProps> = ({ question, answer, contact, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="py-3 cursor-pointer select-none" onClick={() => setOpen(!open)}>
      <div className="flex items-start gap-3">
        <span
          className="shrink-0 w-5 h-5 rounded flex items-center justify-center text-white text-xs font-bold mt-0.5 transition-colors"
          style={{ backgroundColor: open ? '#bfa15f' : '#0b2545' }}
        >
          {open ? '−' : '+'}
        </span>
        <p className="text-sm font-semibold" style={{ color: '#0b2545' }}>{question}</p>
      </div>
      {open && (
        <div className="ml-8 mt-2">
          {answer && <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>}
          {contact && (
            <div className="text-sm" style={{ color: 'rgba(11,37,69,0.75)' }}>
              <p className="font-semibold" style={{ color: '#0b2545' }}>{contact.name}</p>
              <p className="mt-0.5">📞 {contact.phone}</p>
              <p>✉ <a href={`mailto:${contact.email}`} className="underline" style={{ color: '#bfa15f' }}>{contact.email}</a></p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

interface HeroTile {
  title: string
  subtitle: string
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
  dark: boolean
}

const Home: React.FC = () => {
  const heroTiles: HeroTile[] = [
    {
      title: 'Research',
      subtitle: 'Mapping the Innovations',
      icon: FlaskConical,
      dark: false,
    },
    {
      title: 'Startups',
      subtitle: 'Success stories of researchers',
      icon: Rocket,
      dark: true,
    },
    {
      title: 'News',
      subtitle: 'Panorama of Events',
      icon: Newspaper,
      dark: false,
    },
    {
      title: 'SGSITS Outreach',
      subtitle: 'Innovate. Inspire. Transform. Discover',
      icon: Landmark,
      dark: true,
    },
  ]

  return (
    <div className="flex flex-col bg-white">
      {/* STICKY HERO — starts in normal flow (below headers) but sticks to top when scrolling down, allowing relative content to scroll over it */}
      <div className="sticky top-0 w-full h-[320px] sm:h-[400px] md:h-[500px] z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'var(--hero-img-url)',
            backgroundPosition: 'center 28%',
            filter: 'brightness(0.9) contrast(1.02) saturate(0.95)',
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(11, 37, 69, 0.45)' }}
        ></div>
        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <div className="max-w-5xl">
            <p className="text-white/95 uppercase tracking-[0.18em] text-[10px] sm:text-xs mb-3 font-semibold font-sans">
              Shri Govindram Seksaria Institute of Technology and Science
            </p>
            <h1 className="text-white uppercase font-display font-semibold text-2xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[0.04em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
              Welcome To SGSITS<br />
              <span className="text-accent font-display font-bold italic">Indore</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Tiles strip - diagonal split: white / #0b2545 / #0b2545 / white on desktop, checkerboard on mobile */}
      <div className="relative z-10 mt-[-48px] sm:mt-[-80px] md:mt-[-100px] pb-0 bg-transparent">
        <div className="relative mx-auto max-w-[1400px] px-4 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 shadow-sm rounded overflow-hidden border border-primary/20 divide-x divide-primary/10">
            {heroTiles.map((tile) => {
              const Icon = tile.icon
              return (
                <div
                  key={tile.title}
                  className="min-h-[100px] sm:h-[110px] md:h-[120px] flex flex-col items-center justify-center text-center px-3 py-4 sm:px-4 transition-colors duration-200"
                  style={{
                    backgroundColor: tile.dark ? '#0b2545' : '#ffffff',
                  }}
                >
                  <p className="font-sans font-bold uppercase text-[10px] sm:text-xs tracking-[0.15em] mb-1.5"
                     style={{ color: tile.dark ? '#bfa15f' : '#0b2545' }}>
                    {tile.title}
                  </p>
                  <Icon size={24} className="mb-2" strokeWidth={1.75}
                    style={{ color: tile.dark ? 'rgba(255,255,255,0.7)' : '#0b2545' } as React.CSSProperties} />
                  <p className="text-[10px] sm:text-xs leading-normal max-w-[210px] text-balance font-medium"
                     style={{ color: tile.dark ? 'rgba(255,255,255,0.6)' : 'rgba(11,37,69,0.55)' }}>
                    {tile.subtitle}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* COMBINED ABOUT, DIRECTOR, AND NOTIFICATION SECTION */}
      <section className="bg-white py-10 md:py-14 relative z-10 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Side: About & Director (stacked) */}
          <div className="lg:col-span-2 flex flex-col space-y-12">
            {/* About Institute */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Introduction</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-slate-900 tracking-tight uppercase mb-2">
                ABOUT <span className="font-serif italic font-semibold text-primary">SGSITS INDORE</span>
              </h2>
              <div className="w-12 h-[2px] bg-accent mb-5"></div>

              <p className="text-slate-650 leading-relaxed text-sm mb-6 text-justify font-sans">
                Shri Govindram Seksaria Institute of Technology and Science (SGSITS) is one of the premier technical institutions created to be Centres of Excellence for training, research and development in science, engineering and technology in India. Established as College of Engineering in 1952, the Institute was later declared as an autonomous Institution of National standing. It was then accorded the status of a Government Aided self-reliant Institute with powers to decide its own academic policy, to conduct its own examinations, and to award its own degrees...
              </p>

              <div className="flex space-x-3">
                <button className="px-4 py-2 border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors text-xs font-semibold rounded">
                  Read more
                </button>
                <button className="px-4 py-2 bg-primary text-white hover:bg-primary/95 transition-colors text-xs font-semibold rounded shadow-sm">
                  Newsletter
                </button>
              </div>
            </div>

            {/* Director's Corner */}
            <div className="bg-white p-6 lg:p-7 border border-slate-200 rounded shadow-sm relative">
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Leadership Message</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-slate-900 tracking-tight uppercase mb-2">
                DIRECTOR'S <span className="font-serif italic font-semibold text-primary">CORNER</span>
              </h2>
              <div className="w-12 h-[2px] bg-accent mb-5"></div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-28 h-[150px] shrink-0 border border-slate-200 bg-white rounded overflow-hidden shadow-sm">
                  <img src="/assets/image copy.png" alt="Director" className="w-full h-full object-cover grayscale opacity-95 object-top" />
                </div>
                <div className="text-sm leading-relaxed text-slate-650 font-serif">
                  <h3 className="font-sans font-bold text-slate-900 text-base mb-1.5">Prof. Neetesh Purohit</h3>
                  <p className="mb-4 text-justify leading-relaxed">
                    Prof. Neetesh Purohit has taken over the charge as Director, Shri Govindram Seksaria Institute of Technology and Science (SGSITS Indore) with effect from the forenoon of 15th February, 2024.
                  </p>
                  <button className="px-3.5 py-1.5 border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors text-xs font-semibold font-sans rounded">
                    Read Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Notification Section */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 h-full flex flex-col shadow-sm rounded overflow-hidden">
              <div className="bg-primary text-white px-5 py-4 flex items-center justify-between border-b border-slate-200">
                <h3 className="font-sans font-bold text-sm tracking-widest uppercase flex items-center">
                  <Calendar size={16} className="mr-2 text-accent" /> Announcements
                </h3>
                <span className="bg-accent/25 text-accent text-[9px] uppercase font-bold px-2 py-0.5 rounded border border-accent/20 tracking-wider">
                  Live
                </span>
              </div>

              <div className="p-0 flex-1 overflow-y-auto max-h-[500px]">
                <ul className="divide-y divide-slate-100">
                  {[
                    { title: 'Information Bulletin regarding B.Tech Admissions 2024-25', date: 'New', highlight: true },
                    { title: 'Result of MBA (Financial Administration) II Sem Examination', date: 'May 10, 2024' },
                    { title: 'Revised Academic Calendar for UG & PG classes', date: 'May 08, 2024' },
                    { title: 'Schedule of Internal Assessment Tests (Even Semester)', date: 'May 02, 2024' },
                    { title: 'Instruction for students regarding uniform and general discipline', date: 'Apr 28, 2024' },
                    { title: 'Tender notice for laboratory equipment procurement', date: 'Apr 20, 2024' },
                    { title: 'Notice regarding hostel fee payment deadlines for current students', date: 'Apr 15, 2024' },
                  ].map((item, i) => (
                    <li key={i} className="p-4 hover:bg-slate-50 transition-colors group cursor-pointer border-l-2 border-transparent hover:border-accent">
                      <div className="flex space-x-3">
                        <div className="shrink-0 mt-0.5">
                          <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <div>
                          <p className="text-slate-800 text-[13.5px] leading-snug group-hover:text-primary transition-colors font-medium font-sans">
                            {item.title}
                          </p>
                          <div className="mt-1.5 flex items-center">
                            {item.highlight ? (
                              <span className="bg-red-50 text-red-700 text-[9px] font-bold px-1.5 py-0.5 border border-red-100 rounded">New Update</span>
                            ) : (
                              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{item.date}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-white border-t border-slate-100 flex justify-center mt-auto">
                <button className="text-accent-blue text-xs font-semibold hover:underline flex items-center tracking-wider uppercase">
                  View All Notices <ChevronRight size={12} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS NEWS SECTION (Editorial Grid) */}
      <section className="bg-[#f7f8fa] py-16 relative z-10 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Campus Journalism</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight uppercase mb-2">
              CAMPUS <span className="font-serif italic font-semibold text-primary">NEWS</span>
            </h2>
            <div className="w-12 h-[2px] bg-accent mx-auto mb-4"></div>
            <p className="text-slate-550 text-sm max-w-xl mx-auto font-sans">
              Stories of research breakthroughs, student achievements, and academic excellence at the institute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 (In the Spotlight - Featured News) */}
            <div className="md:col-span-2 relative overflow-hidden rounded border border-slate-200 flex flex-col justify-end min-h-[380px] group cursor-pointer bg-white">
              <img 
                src="https://picsum.photos/seed/sgsitsmain/800/800" 
                alt="Research at SGSITS" 
                className="absolute inset-0 w-full h-full object-cover filter saturate-[0.85] contrast-[1.02] group-hover:scale-102 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
              <div className="relative p-6 md:p-8 z-10">
                <span className="text-accent text-[10px] font-bold tracking-widest uppercase mb-2 block">In The Spotlight</span>
                <h3 className="text-white text-2xl md:text-3xl font-display font-bold leading-tight">
                  Pioneering Research in Renewable Energy: A Clean Future
                </h3>
                <p className="text-slate-200 text-xs mt-3 font-sans max-w-xl font-medium">
                  SGSITS faculty and research scholars secure major grants to build intelligent power distribution grids for rural communities.
                </p>
              </div>
            </div>

            {/* Card 2 (AI News) */}
            <div className="bg-white rounded border border-slate-200/80 flex flex-col min-h-[380px] group cursor-pointer hover:border-slate-400 transition-colors duration-200">
              <div className="h-44 overflow-hidden shrink-0 border-b border-slate-100">
                <img 
                  src="https://picsum.photos/seed/sgsitsai/400/300" 
                  alt="AI Productivity" 
                  className="w-full h-full object-cover grayscale opacity-95 group-hover:scale-101 transition-transform duration-300" 
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <span className="text-accent text-[9px] font-bold tracking-widest uppercase mb-1.5">Artificial Intelligence</span>
                <h3 className="text-slate-900 font-display font-bold text-base leading-snug group-hover:text-primary transition-colors">
                  AI's Big Productivity Boost: Transforming Classroom Operations
                </h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-3 font-sans font-medium">
                  Exploring how adaptive machine learning models are deployed to simplify administrative tasks and personalize study paths.
                </p>
              </div>
            </div>

            {/* Card 3 (Health/Medicine) */}
            <div className="bg-white rounded border border-slate-200/80 flex flex-col min-h-[380px] group cursor-pointer hover:border-slate-400 transition-colors duration-200">
              <div className="h-44 overflow-hidden shrink-0 border-b border-slate-100">
                <img 
                  src="https://picsum.photos/seed/sgsitshealth/400/300" 
                  alt="Health & Pharmacy" 
                  className="w-full h-full object-cover grayscale opacity-95 group-hover:scale-101 transition-transform duration-300" 
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <span className="text-accent text-[9px] font-bold tracking-widest uppercase mb-1.5">Biomedical & Pharmacy</span>
                <h3 className="text-slate-900 font-display font-bold text-base leading-snug group-hover:text-primary transition-colors">
                  Department of Pharmacy develops novel drug carrier mechanisms
                </h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-3 font-sans font-medium">
                  A breakthrough research study in bio-compatibility paves new avenues for highly target-specific oncology treatments.
                </p>
              </div>
            </div>

            {/* Card 4 (Industrial Engagement) */}
            <div className="bg-white rounded border border-slate-200/80 flex flex-col min-h-[380px] group cursor-pointer hover:border-slate-400 transition-colors duration-200">
              <div className="h-44 overflow-hidden shrink-0 border-b border-slate-100">
                <img 
                  src="https://picsum.photos/seed/sgsitsbiz/400/300" 
                  alt="Corporate Industry" 
                  className="w-full h-full object-cover grayscale opacity-95 group-hover:scale-101 transition-transform duration-300" 
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <span className="text-accent text-[9px] font-bold tracking-widest uppercase mb-1.5">Industry Outreach</span>
                <h3 className="text-slate-900 font-display font-bold text-base leading-snug group-hover:text-primary transition-colors">
                  Annual Industry-Academia Conclave sets record collaborations
                </h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-3 font-sans font-medium">
                  Leading technological giants and public sector undertakings sign strategic memorandums of understanding for student training.
                </p>
              </div>
            </div>

            {/* Card 5 (Academics Song) */}
            <div className="bg-white rounded border border-slate-200/80 flex flex-col min-h-[380px] group cursor-pointer hover:border-slate-400 transition-colors duration-200">
              <div className="h-44 overflow-hidden shrink-0 border-b border-slate-100">
                <img 
                  src="https://picsum.photos/seed/sgsitsacad/400/300" 
                  alt="Humanities & Tech" 
                  className="w-full h-full object-cover grayscale opacity-95 group-hover:scale-101 transition-transform duration-300" 
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <span className="text-accent text-[9px] font-bold tracking-widest uppercase mb-1.5">Applied Sciences</span>
                <h3 className="text-slate-900 font-display font-bold text-base leading-snug group-hover:text-primary transition-colors">
                  Interdisciplinary courses blend technical coding with music theory
                </h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-3 font-sans font-medium">
                  Students build synthesizers and algorithmic audio programs to understand mathematical Fourier series practically.
                </p>
              </div>
            </div>

            {/* Card 6 (Engineering & Society) */}
            <div className="md:col-span-2 relative overflow-hidden rounded border border-slate-200 flex flex-col justify-end min-h-[380px] group cursor-pointer bg-white">
              <img 
                src="https://picsum.photos/seed/sgsitsengg/800/400" 
                alt="Engineering Laboratory" 
                className="absolute inset-0 w-full h-full object-cover filter saturate-[0.85] contrast-[1.02] group-hover:scale-102 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
              <div className="relative p-6 md:p-8 z-10">
                <span className="text-accent text-[10px] font-bold tracking-widest uppercase mb-2 block">Societal Impact</span>
                <h3 className="text-white text-2xl md:text-3xl font-display font-bold leading-tight">
                  Design for Accessibility: Engineering Robotics for Welfare
                </h3>
                <p className="text-slate-200 text-xs mt-3 font-sans max-w-xl font-medium">
                  SGSITS students design low-cost assistive robotic limbs, enabling higher mobility and freedom for local rehabilitation centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMICS SECTION (Crisp Traditional Cards) */}
      <section className="bg-white py-14 border-b border-slate-200 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Academics</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight uppercase mb-2">
              ACADEMIC <span className="font-serif italic font-semibold text-primary">PROGRAMS</span>
            </h2>
            <div className="w-12 h-[2px] bg-accent mx-auto mb-4"></div>
            <p className="text-slate-550 text-sm max-w-xl mx-auto font-sans">
              Rigorous, comprehensive, and outcome-oriented educational journeys designed to cultivate leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-slate-200/80 bg-white rounded flex flex-col group hover:border-slate-400 transition-colors duration-200">
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 text-accent-blue flex items-center justify-center rounded mb-6 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors duration-200">
                <BookOpen size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                Undergraduate Programs
              </h3>
              <p className="text-slate-550 text-xs leading-relaxed mb-6 font-sans font-medium">
                Offering comprehensive four-year Bachelor of Technology (B.Tech) and Bachelor of Pharmacy (B.Pharm) degrees. Built on core engineering principles, practical lab exposure, and direct industry research.
              </p>
              <a href="#" className="text-accent-blue font-bold text-[11px] uppercase tracking-wider mt-auto hover:text-primary flex items-center">
                Explore UG Degrees <ChevronRight size={12} className="ml-1" />
              </a>
            </div>

            <div className="p-6 border border-slate-200/80 bg-white rounded flex flex-col group hover:border-slate-400 transition-colors duration-200">
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 text-accent-blue flex items-center justify-center rounded mb-6 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors duration-200">
                <GraduationCap size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                Postgraduate Programs
              </h3>
              <p className="text-slate-550 text-xs leading-relaxed mb-6 font-sans font-medium">
                Advanced specialized Master of Tech (M.Tech), Master of Engineering (M.E.), MBA, and MCA programs. Designed for deeper industrial expertise, technical leadership, and practical analytical mastery.
              </p>
              <a href="#" className="text-accent-blue font-bold text-[11px] uppercase tracking-wider mt-auto hover:text-primary flex items-center">
                Explore PG Degrees <ChevronRight size={12} className="ml-1" />
              </a>
            </div>

            <div className="p-6 border border-slate-200/80 bg-white rounded flex flex-col group hover:border-slate-400 transition-colors duration-200">
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 text-accent-blue flex items-center justify-center rounded mb-6 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors duration-200">
                <Microscope size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                Doctoral & Research
              </h3>
              <p className="text-slate-550 text-xs leading-relaxed mb-6 font-sans font-medium">
                Rigorous Doctor of Philosophy (Ph.D.) programs across technical sciences. Supported by advanced state-of-the-art incubation facilities, central instrumentation rooms, and government grants.
              </p>
              <a href="#" className="text-accent-blue font-bold text-[11px] uppercase tracking-wider mt-auto hover:text-primary flex items-center">
                Explore Research Paths <ChevronRight size={12} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS SECTION (Structured Rectangular Grid) */}
      <section className="py-16 bg-white border-b border-slate-200 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-end mb-10 border-b border-slate-200 pb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Departments & Schools</span>
              <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 tracking-tight uppercase">
                ACADEMIC <span className="font-serif italic font-semibold text-primary">DEPARTMENTS</span>
              </h2>
            </div>
            <a href="#" className="text-accent-blue font-semibold hover:underline text-xs tracking-wider uppercase hidden md:block">
              View All Departments &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Computer Engineering', 'Information Technology', 'Civil Engineering',
              'Mechanical Engineering', 'Electrical Engineering', 'Electronics & Instrumentation',
              'Electronics & Telecommunication', 'Industrial & Production', 'Applied Physics',
              'Applied Chemistry', 'Applied Mathematics', 'Pharmacy'
            ].map((dept, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="p-3 border border-slate-200/80 bg-white rounded flex items-center hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-slate-50 border border-slate-200/60 rounded flex items-center justify-center mr-3 shrink-0 text-slate-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200">
                  <Building size={14} />
                </div>
                <span className="font-sans font-semibold text-slate-800 text-xs group-hover:text-primary transition-colors">
                  {dept}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX STATS BANNER — background moves slower, content scrolls over it */}
      <section
        className="relative z-10 overflow-hidden"
        style={{ height: '280px' }}
      >
        {/* Parallax bg layer */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/assets/campus.jpg), url(https://picsum.photos/seed/sgsitscampus/1600/600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.45)',
          }}
        />
        {/* Dark overlay with brand blue tint */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(11,37,69,0.55)' }} />

        {/* Stats content — sits above the bg */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-center divide-x divide-white/15">
              <div className="px-4 py-4">
                <div className="text-3xl md:text-5xl font-display font-extrabold tracking-tight" style={{ color: '#bfa15f' }}>10,000+</div>
                <div className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] mt-2 text-white/70">Students</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-3xl md:text-5xl font-display font-extrabold tracking-tight" style={{ color: '#bfa15f' }}>600+</div>
                <div className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] mt-2 text-white/70">Faculty</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-3xl md:text-5xl font-display font-extrabold tracking-tight" style={{ color: '#bfa15f' }}>700+</div>
                <div className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] mt-2 text-white/70">Staff</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-3xl md:text-5xl font-display font-extrabold tracking-tight" style={{ color: '#bfa15f' }}>70+</div>
                <div className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] mt-2 text-white/70">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS LIFE (Polished Academic Galleries) */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Student Experience</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight uppercase mb-2">
              CAMPUS <span className="font-serif italic font-semibold text-primary">LIFE</span>
            </h2>
            <div className="w-12 h-[2px] bg-accent mx-auto mb-4"></div>
            <p className="text-slate-550 text-sm max-w-xl mx-auto font-sans">
              A vibrant community balancing rigorous technical education with diverse cultural and athletic pursuits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Central Library', desc: 'Over 1 Lakh volumes, e-journals, and digital resources spanning two massive floors.', icon: BookOpen, img: 'https://picsum.photos/seed/sgslib/600/400' },
              { title: 'Innovation Labs', desc: 'State-of-the-art laboratories equipped with modern machinery and software for hands-on learning.', icon: Microscope, img: 'https://picsum.photos/seed/sgslab/600/400' },
              { title: 'Sports Complex', desc: 'Extensive facilities for cricket, football, basketball, badminton, and a gymnasium.', icon: Users, img: 'https://picsum.photos/seed/sgssports/600/400' },
              { title: 'Student Clubs', desc: 'Technical, cultural, and literary clubs nurturing talents beyond academics.', icon: Users, img: 'https://picsum.photos/seed/sgsclubs/600/400' },
              { title: 'Hostel Facilities', desc: 'Comfortable accommodation with all essential amenities ensuring a home away from home.', icon: Building, img: 'https://picsum.photos/seed/sgshostel/600/400' },
              { title: 'Auditorium', desc: 'A massive modern auditorium hosting conventions, seminars, and cultural fests.', icon: FileText, img: 'https://picsum.photos/seed/sgsaudi/600/400' }
            ].map((facility, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded border border-slate-200/80 overflow-hidden group cursor-pointer hover:border-slate-400 transition-all duration-200 flex flex-col"
              >
                <div className="h-48 bg-slate-100 overflow-hidden relative border-b border-slate-100">
                  <img 
                    src={facility.img} 
                    alt={facility.title} 
                    className="w-full h-full object-cover filter saturate-[0.8] opacity-95 group-hover:scale-102 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all duration-300"></div>
                </div>
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-base font-display font-bold text-slate-900 mb-2 flex items-center group-hover:text-primary transition-colors">
                    <facility.icon size={16} className="mr-2 text-accent-blue" strokeWidth={1.75} />
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-550 leading-relaxed font-sans font-medium">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs + PHOTO GALLERY — above footer, brand palette */}
      <section className="relative z-10 border-t border-primary/10" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* LEFT — FAQs */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight" style={{ color: '#0b2545' }}>
                  FAQs
                </h2>
                <span className="text-xs font-bold border rounded px-2 py-0.5 cursor-pointer" style={{ borderColor: '#0b2545', color: '#0b2545' }}>View all</span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: '#bfa15f' }}>Frequently Asked Questions</p>
              <div className="w-8 h-[2px] mb-6" style={{ backgroundColor: '#bfa15f' }} />

              <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(11,37,69,0.08)' }}>
                {[
                  { q: 'What are the eligibility criteria for B.Tech admissions?', a: 'Admissions are via JEE Main counselling (MP State). Candidates must have passed 10+2 with PCM and minimum 45% marks.' },
                  { q: 'Whom to contact for Postgraduate admissions?', a: null, contact: { name: 'Office of Academics (PG)', phone: '+91-731-2431234', email: 'pg@sgsits.ac.in' } },
                  { q: 'Whom to contact for Undergraduate admissions?', a: null },
                  { q: 'Whom to contact for queries related to GATE?', a: null },
                  { q: 'How to pay fees online?', a: null },
                  { q: 'Whom to contact for Faculty Recruitment?', a: null },
                ].map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} contact={faq.contact} defaultOpen={i === 1} />
                ))}
              </div>
            </div>

            {/* RIGHT — Photo Gallery */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight" style={{ color: '#0b2545' }}>
                    Photo <span style={{ color: '#bfa15f' }}>Gallery</span>
                  </h2>
                </div>
                <span className="text-xs font-bold border rounded px-2 py-0.5 cursor-pointer" style={{ borderColor: '#0b2545', color: '#0b2545' }}>View All</span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: '#bfa15f' }}>Multi-Hued Reflections</p>
              <div className="w-8 h-[2px] mb-6" style={{ backgroundColor: '#bfa15f' }} />

              <div className="grid grid-cols-4 gap-1.5">
                {[
                  'sgscamp1','sgscamp2','sgscamp3','sgscamp4',
                  'sgscamp5','sgscamp6','sgscamp7','sgscamp8',
                  'sgscamp9','sgscamp10','sgscamp11','sgscamp12',
                ].map((seed, idx) => (
                  <div
                    key={idx}
                    className="aspect-square overflow-hidden rounded-sm cursor-pointer group"
                    style={{ border: '1px solid rgba(11,37,69,0.08)' }}
                  >
                    <img
                      src={`https://picsum.photos/seed/${seed}/200/200`}
                      alt={`Campus ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
