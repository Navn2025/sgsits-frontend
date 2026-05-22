import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Microscope,
  Users,
  Building,
  FileText,
  FlaskConical,
  Rocket,
  Newspaper,
  Landmark,
} from 'lucide-react'

// ─── Palette constants — only these three colours are used anywhere in this file ───
const C = {
  navy:        '#0b2545',
  gold:        '#bfa15f',
  white:       '#ffffff',
  // opacity helpers (still derived from the same three)
  navy10:      'rgba(11,37,69,0.10)',
  navy15:      'rgba(11,37,69,0.15)',
  navy45:      'rgba(11,37,69,0.45)',
  navy55:      'rgba(11,37,69,0.55)',
  navy60:      'rgba(11,37,69,0.60)',
  navy70:      'rgba(11,37,69,0.70)',
  navy75:      'rgba(11,37,69,0.75)',
  gold15:      'rgba(191,161,95,0.15)',
  gold20:      'rgba(191,161,95,0.20)',
  gold25:      'rgba(191,161,95,0.25)',
  white60:     'rgba(255,255,255,0.60)',
  white70:     'rgba(255,255,255,0.70)',
  white80:     'rgba(255,255,255,0.80)',
}

// ─── FAQ Accordion ───────────────────────────────────────────────────────────
interface FaqItemProps {
  question: string
  answer?: string | null
  contact?: { name: string; phone: string; email: string } | null
  defaultOpen?: boolean
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, contact, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div
      className="py-3 cursor-pointer select-none border-b"
      style={{ borderColor: C.navy10 }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start gap-3">
        <span
          className="shrink-0 w-5 h-5 flex items-center justify-center text-white text-xs font-bold mt-0.5 transition-colors"
          style={{ backgroundColor: open ? C.gold : C.navy }}
        >
          {open ? '−' : '+'}
        </span>
        <p className="text-sm font-semibold leading-snug" style={{ color: C.navy }}>{question}</p>
      </div>
      {open && (
        <div className="ml-8 mt-2 space-y-1">
          {answer && (
            <p className="text-sm leading-relaxed" style={{ color: C.navy70 }}>{answer}</p>
          )}
          {contact && (
            <div className="text-sm space-y-0.5" style={{ color: C.navy75 }}>
              <p className="font-semibold" style={{ color: C.navy }}>{contact.name}</p>
              <p>📞 {contact.phone}</p>
              <p>
                ✉{' '}
                <a
                  href={`mailto:${contact.email}`}
                  className="underline"
                  style={{ color: C.gold }}
                >
                  {contact.email}
                </a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Hero tile config ────────────────────────────────────────────────────────
interface HeroTile {
  title: string
  subtitle: string
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; strokeWidth?: number; className?: string }>
  dark: boolean
  path: string
}

// ─── Home ────────────────────────────────────────────────────────────────────
const Home: React.FC = () => {
  const heroTiles: HeroTile[] = [
    { title: 'Research',        subtitle: 'Mapping the Innovations',              icon: FlaskConical, dark: false, path: '/about/iqac' },
    { title: 'Startups',        subtitle: 'Success stories of researchers',       icon: Rocket,       dark: true,  path: '/startup-cell' },
    { title: 'News',            subtitle: 'Panorama of Events',                   icon: Newspaper,    dark: false, path: '/news' },
    { title: 'SGSITS Outreach', subtitle: 'Innovate. Inspire. Transform.',        icon: Landmark,     dark: true,  path: '/about/institute' },
  ]

  // Announcement items — all link to /notices
  const announcements = [
    { title: 'Information Bulletin regarding B.Tech Admissions 2025-26', date: 'New', isNew: true },
    { title: 'Result of MBA (Financial Administration) II Sem Examination', date: 'May 10, 2025' },
    { title: 'Revised Academic Calendar for UG & PG classes 2024-25', date: 'May 08, 2025' },
    { title: 'Schedule of Internal Assessment Tests (Even Semester)', date: 'May 02, 2025' },
    { title: 'Instruction for students regarding uniform and general discipline', date: 'Apr 28, 2025' },
    { title: 'Tender notice for laboratory equipment procurement', date: 'Apr 20, 2025' },
    { title: 'Notice regarding hostel fee payment deadlines for current students', date: 'Apr 15, 2025' },
  ]

  // News cards — all link to /news
  const newsCards = [
    {
      seed: 'sgsitsai',   cat: 'Artificial Intelligence',
      title: "AI's Big Productivity Boost: Transforming Classroom Operations",
      desc:  'Adaptive machine learning models simplify administrative tasks and personalise study paths.',
    },
    {
      seed: 'sgsitshealth', cat: 'Biomedical & Pharmacy',
      title: 'Pharmacy develops novel drug carrier mechanisms',
      desc:  'A bio-compatibility breakthrough paves new avenues for target-specific oncology treatments.',
    },
    {
      seed: 'sgsitsbiz', cat: 'Industry Outreach',
      title: 'Annual Industry-Academia Conclave sets record collaborations',
      desc:  'Leading tech giants and PSUs sign MOUs for strategic student training partnerships.',
    },
    {
      seed: 'sgsitsacad', cat: 'Applied Sciences',
      title: 'Interdisciplinary courses blend technical coding with music theory',
      desc:  'Students build synthesisers and algorithmic audio programs to understand Fourier series practically.',
    },
  ]

  return (
    <div className="flex flex-col bg-white">

      {/* ══════ HERO ══════ */}
      <div className="sticky top-0 w-full h-[320px] sm:h-[400px] md:h-[500px] z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'var(--hero-img-url)',
            backgroundPosition: 'center 28%',
            filter: 'brightness(0.9) contrast(1.02) saturate(0.95)',
          }}
        />
        {/* Navy overlay — uses palette colour */}
        <div className="absolute inset-0" style={{ backgroundColor: C.navy45 }} />
        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <div className="max-w-5xl">
            <p
              className="uppercase tracking-[0.18em] text-[10px] sm:text-xs mb-3 font-semibold font-sans"
              style={{ color: C.white80 }}
            >
              Shri Govindram Seksaria Institute of Technology and Science
            </p>
            <h1 className="text-white uppercase font-display font-semibold text-2xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[0.04em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
              Welcome To SGSITS<br />
              <span className="font-display font-bold italic" style={{ color: C.gold }}>Indore</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ══════ HERO TILES — all clickable ══════ */}
      <div className="relative z-10 mt-[-48px] sm:mt-[-80px] md:mt-[-100px] pb-0 bg-transparent">
        <div className="relative mx-auto max-w-[1400px] px-4 lg:px-12">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 shadow-sm rounded overflow-hidden divide-x"
            style={{ border: `1px solid ${C.navy15}`, divideColor: C.navy10 } as React.CSSProperties}
          >
            {heroTiles.map((tile) => {
              const Icon = tile.icon
              const iconColor = tile.dark ? C.gold : C.navy
              return (
                <Link
                  key={tile.title}
                  to={tile.path}
                  className="min-h-[100px] sm:h-[110px] md:h-[120px] flex flex-col items-center justify-center text-center px-3 py-4 sm:px-4 transition-opacity duration-200 hover:opacity-85"
                  style={{ backgroundColor: tile.dark ? C.navy : C.white }}
                >
                  <p
                    className="font-sans font-bold uppercase text-[10px] sm:text-xs tracking-[0.15em] mb-1.5"
                    style={{ color: tile.dark ? C.gold : C.navy }}
                  >
                    {tile.title}
                  </p>
                  <Icon size={24} style={{ color: iconColor }} strokeWidth={1.75} className="mb-2" />
                  <p
                    className="text-[10px] sm:text-xs leading-normal max-w-[210px] font-medium"
                    style={{ color: tile.dark ? C.white60 : C.navy55 }}
                  >
                    {tile.subtitle}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* ══════ ABOUT + DIRECTOR + ANNOUNCEMENTS ══════ */}
      <section
        className="bg-white py-10 md:py-14 relative z-10"
        style={{ borderBottom: `1px solid ${C.navy10}` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — About & Director */}
          <div className="lg:col-span-2 flex flex-col space-y-12">

            {/* About */}
            <div>
              <span
                className="text-[10px] uppercase font-bold tracking-widest block mb-1"
                style={{ color: C.gold }}
              >
                Introduction
              </span>
              <h2
                className="text-lg md:text-xl font-display font-bold tracking-tight uppercase mb-2"
                style={{ color: C.navy }}
              >
                ABOUT{' '}
                <span className="font-serif italic font-semibold" style={{ color: C.navy }}>
                  SGSITS INDORE
                </span>
              </h2>
              <div className="w-12 h-[2px] mb-5" style={{ backgroundColor: C.gold }} />

              <p
                className="leading-relaxed text-sm mb-6 text-justify font-sans"
                style={{ color: C.navy70 }}
              >
                Shri Govindram Seksaria Institute of Technology and Science (SGSITS) is one of the
                premier technical institutions created to be Centres of Excellence for training,
                research and development in science, engineering and technology in India. Established
                as College of Engineering in 1952, the Institute was later declared an autonomous
                Institution of National standing, with powers to decide its own academic policy,
                conduct its own examinations, and award its own degrees.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/about/institute"
                  className="px-4 py-2 text-xs font-semibold border rounded transition-colors hover:opacity-80"
                  style={{ borderColor: C.navy15, color: C.navy, backgroundColor: C.white }}
                >
                  Read More
                </Link>
                <Link
                  to="/notices"
                  className="px-4 py-2 text-xs font-semibold rounded shadow-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: C.navy, color: C.white }}
                >
                  Notices
                </Link>
              </div>
            </div>

            {/* Director's Corner */}
            <div
              className="bg-white p-6 lg:p-7 rounded shadow-sm relative border"
              style={{ borderColor: C.navy15 }}
            >
              <span
                className="text-[10px] uppercase font-bold tracking-widest block mb-1"
                style={{ color: C.gold }}
              >
                Leadership Message
              </span>
              <h2
                className="text-lg md:text-xl font-display font-bold tracking-tight uppercase mb-2"
                style={{ color: C.navy }}
              >
                DIRECTOR'S{' '}
                <span className="font-serif italic font-semibold" style={{ color: C.navy }}>
                  CORNER
                </span>
              </h2>
              <div className="w-12 h-[2px] mb-5" style={{ backgroundColor: C.gold }} />

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div
                  className="w-28 h-[150px] shrink-0 bg-white rounded overflow-hidden shadow-sm border"
                  style={{ borderColor: C.navy15 }}
                >
                  <img
                    src="/assets/image copy.png"
                    alt="Director Prof. Neetesh Purohit"
                    className="w-full h-full object-cover grayscale opacity-95 object-top"
                  />
                </div>
                <div className="text-sm leading-relaxed font-serif" style={{ color: C.navy70 }}>
                  <h3 className="font-sans font-bold text-base mb-1.5" style={{ color: C.navy }}>
                    Prof. Neetesh Purohit
                  </h3>
                  <p className="mb-4 text-justify leading-relaxed">
                    Prof. Neetesh Purohit has taken over charge as Director, SGSITS Indore with
                    effect from the forenoon of 15th February, 2024. Under his leadership the
                    institute continues to scale new heights in research, placements and academic
                    excellence.
                  </p>
                  <Link
                    to="/about/director-message"
                    className="px-3.5 py-1.5 border rounded inline-block text-xs font-semibold font-sans transition-colors hover:opacity-80"
                    style={{ borderColor: C.navy15, color: C.navy, backgroundColor: C.white }}
                  >
                    Read Message
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Announcements */}
          <div className="lg:col-span-1">
            <div
              className="bg-white h-full flex flex-col shadow-sm rounded overflow-hidden border"
              style={{ borderColor: C.navy15 }}
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ backgroundColor: C.navy }}
              >
                <h3 className="font-sans font-bold text-sm tracking-widest uppercase flex items-center text-white">
                  <Calendar size={16} className="mr-2" style={{ color: C.gold }} />
                  Announcements
                </h3>
                <span
                  className="text-[9px] uppercase font-bold px-2 py-0.5 rounded tracking-wider"
                  style={{
                    backgroundColor: C.gold25,
                    color: C.gold,
                    border: `1px solid ${C.gold20}`,
                  }}
                >
                  Live
                </span>
              </div>

              {/* List — every item links to /notices */}
              <div className="p-0 flex-1 overflow-y-auto max-h-[500px]">
                <ul className="divide-y" style={{ borderColor: C.navy10 }}>
                  {announcements.map((item, i) => (
                    <li key={i} style={{ borderColor: C.navy10 }}>
                      <Link
                        to="/notices"
                        className="flex p-4 transition-colors group hover:opacity-90"
                        style={{ borderLeft: `2px solid transparent` }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = C.gold }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent' }}
                      >
                        <div className="flex space-x-3 w-full">
                          <div className="shrink-0 mt-0.5">
                            <ChevronRight
                              size={14}
                              className="group-hover:translate-x-0.5 transition-transform"
                              style={{ color: C.navy45 }}
                            />
                          </div>
                          <div>
                            <p
                              className="text-[13.5px] leading-snug font-medium font-sans"
                              style={{ color: C.navy }}
                            >
                              {item.title}
                            </p>
                            <div className="mt-1.5 flex items-center">
                              {item.isNew ? (
                                // "New" badge — gold palette only, no red
                                <span
                                  className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                                  style={{
                                    backgroundColor: C.gold15,
                                    color: C.gold,
                                    border: `1px solid ${C.gold25}`,
                                  }}
                                >
                                  New
                                </span>
                              ) : (
                                <span
                                  className="text-[10px] font-semibold uppercase tracking-wider"
                                  style={{ color: C.navy45 }}
                                >
                                  {item.date}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div
                className="p-4 bg-white flex justify-center mt-auto border-t"
                style={{ borderColor: C.navy10 }}
              >
                <Link
                  to="/notices"
                  className="text-xs font-semibold hover:underline flex items-center tracking-wider uppercase"
                  style={{ color: C.navy }}
                >
                  View All Notices <ChevronRight size={12} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CAMPUS NEWS ══════ */}
      <section
        className="bg-white py-16 relative z-10"
        style={{ borderBottom: `1px solid ${C.navy10}` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          <div className="text-center mb-12">
            <span
              className="text-[10px] uppercase font-bold tracking-widest block mb-1"
              style={{ color: C.gold }}
            >
              Campus Journalism
            </span>
            <h2
              className="text-2xl md:text-3xl font-display font-bold tracking-tight uppercase mb-2"
              style={{ color: C.navy }}
            >
              CAMPUS{' '}
              <span className="font-serif italic font-semibold" style={{ color: C.navy }}>
                NEWS
              </span>
            </h2>
            <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: C.gold }} />
            <p className="text-sm max-w-xl mx-auto font-sans" style={{ color: C.navy60 }}>
              Stories of research breakthroughs, student achievements, and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Featured card */}
            <Link
              to="/news"
              className="md:col-span-2 relative overflow-hidden rounded flex flex-col justify-end min-h-[380px] group border"
              style={{ borderColor: C.navy15, backgroundColor: C.white }}
            >
              <img
                src="https://picsum.photos/seed/sgsitsmain/800/800"
                alt="Research at SGSITS"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'saturate(0.85) contrast(1.02)' }}
              />
              {/* Gradient using palette navy */}
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${C.navy} 0%, rgba(11,37,69,0.4) 60%, transparent 100%)` }}
              />
              <div className="relative p-6 md:p-8 z-10">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase mb-2 block"
                  style={{ color: C.gold }}
                >
                  In The Spotlight
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-display font-bold leading-tight">
                  Pioneering Research in Renewable Energy: A Clean Future
                </h3>
                <p
                  className="text-xs mt-3 font-sans font-medium max-w-xl"
                  style={{ color: C.white80 }}
                >
                  SGSITS faculty and research scholars secure major grants to build intelligent power
                  distribution grids for rural communities.
                </p>
              </div>
            </Link>

            {/* Regular news cards */}
            {newsCards.map((card, idx) => (
              <Link
                key={idx}
                to="/news"
                className="bg-white rounded flex flex-col min-h-[380px] group hover:shadow-md transition-all duration-200 border"
                style={{ borderColor: C.navy15 }}
              >
                <div className="h-44 overflow-hidden shrink-0 border-b" style={{ borderColor: C.navy10 }}>
                  <img
                    src={`https://picsum.photos/seed/${card.seed}/400/300`}
                    alt={card.cat}
                    className="w-full h-full object-cover grayscale opacity-95 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col grow">
                  <span
                    className="text-[9px] font-bold tracking-widest uppercase mb-1.5"
                    style={{ color: C.gold }}
                  >
                    {card.cat}
                  </span>
                  <h3
                    className="font-display font-bold text-base leading-snug group-hover:underline"
                    style={{ color: C.navy }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-xs mt-2 line-clamp-3 font-sans font-medium"
                    style={{ color: C.navy60 }}
                  >
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}

            {/* Second featured card */}
            <Link
              to="/news"
              className="md:col-span-2 relative overflow-hidden rounded flex flex-col justify-end min-h-[380px] group border"
              style={{ borderColor: C.navy15, backgroundColor: C.white }}
            >
              <img
                src="https://picsum.photos/seed/sgsitsengg/800/400"
                alt="Engineering Laboratory"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'saturate(0.85) contrast(1.02)' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${C.navy} 0%, rgba(11,37,69,0.4) 60%, transparent 100%)` }}
              />
              <div className="relative p-6 md:p-8 z-10">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase mb-2 block"
                  style={{ color: C.gold }}
                >
                  Societal Impact
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-display font-bold leading-tight">
                  Design for Accessibility: Engineering Robotics for Welfare
                </h3>
                <p
                  className="text-xs mt-3 font-sans font-medium max-w-xl"
                  style={{ color: C.white80 }}
                >
                  SGSITS students design low-cost assistive robotic limbs for local rehabilitation
                  centres.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ ACADEMIC PROGRAMS ══════ */}
      <section
        className="bg-white py-14 relative z-10"
        style={{ borderBottom: `1px solid ${C.navy10}` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          <div className="text-center mb-12">
            <span
              className="text-[10px] uppercase font-bold tracking-widest block mb-1"
              style={{ color: C.gold }}
            >
              Academics
            </span>
            <h2
              className="text-2xl md:text-3xl font-display font-bold tracking-tight uppercase mb-2"
              style={{ color: C.navy }}
            >
              ACADEMIC{' '}
              <span className="font-serif italic font-semibold" style={{ color: C.navy }}>
                PROGRAMS
              </span>
            </h2>
            <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: C.gold }} />
            <p className="text-sm max-w-xl mx-auto font-sans" style={{ color: C.navy60 }}>
              Rigorous, comprehensive, and outcome-oriented educational journeys designed to cultivate
              leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: BookOpen,
                title: 'Undergraduate Programs',
                desc: 'Four-year B.Tech and B.Pharm degrees built on core engineering principles, practical lab exposure, and direct industry research.',
                to: '/academics/courses/ug',
                cta: 'Explore UG Degrees',
              },
              {
                Icon: GraduationCap,
                title: 'Postgraduate Programs',
                desc: 'M.Tech, M.E., MBA, and MCA programs designed for deeper industrial expertise, technical leadership, and practical analytical mastery.',
                to: '/academics/courses/pg',
                cta: 'Explore PG Degrees',
              },
              {
                Icon: Microscope,
                title: 'Doctoral & Research',
                desc: 'Rigorous Ph.D. programs across technical sciences supported by advanced laboratories, instrumentation centres, and government grants.',
                to: '/academics/courses/phd',
                cta: 'Explore Research Paths',
              },
            ].map(({ Icon, title, desc, to, cta }) => (
              <div
                key={title}
                className="p-6 bg-white rounded flex flex-col group hover:shadow-md transition-all duration-200 border"
                style={{ borderColor: C.navy15 }}
              >
                {/* Icon box — navy bg on hover */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded mb-6 transition-colors duration-200 border"
                  style={{ backgroundColor: C.white, borderColor: C.navy15, color: C.navy }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.backgroundColor = C.navy
                    el.style.borderColor = C.navy
                    el.style.color = C.white
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.backgroundColor = C.white
                    el.style.borderColor = C.navy15
                    el.style.color = C.navy
                  }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg font-display font-bold mb-3 group-hover:underline"
                  style={{ color: C.navy }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed mb-6 font-sans font-medium" style={{ color: C.navy60 }}>
                  {desc}
                </p>
                <Link
                  to={to}
                  className="font-bold text-[11px] uppercase tracking-wider mt-auto flex items-center hover:underline"
                  style={{ color: C.navy }}
                >
                  {cta} <ChevronRight size={12} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ DEPARTMENTS ══════ */}
      <section
        className="py-16 bg-white relative z-10"
        style={{ borderBottom: `1px solid ${C.navy10}` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          <div
            className="flex justify-between items-end mb-10 pb-4 border-b"
            style={{ borderColor: C.navy10 }}
          >
            <div>
              <span
                className="text-[10px] uppercase font-bold tracking-widest block mb-1"
                style={{ color: C.gold }}
              >
                Departments & Schools
              </span>
              <h2
                className="text-xl md:text-2xl font-display font-bold tracking-tight uppercase"
                style={{ color: C.navy }}
              >
                ACADEMIC{' '}
                <span className="font-serif italic font-semibold" style={{ color: C.navy }}>
                  DEPARTMENTS
                </span>
              </h2>
            </div>
            <Link
              to="/departments"
              className="font-semibold hover:underline text-xs tracking-wider uppercase hidden md:block"
              style={{ color: C.navy }}
            >
              View All Departments &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Computer Engineering',          slug: 'computer-engineering' },
              { name: 'Information Technology',        slug: 'information-technology' },
              { name: 'Civil Engineering',             slug: 'civil-engineering' },
              { name: 'Mechanical Engineering',        slug: 'mechanical-engineering' },
              { name: 'Electrical Engineering',        slug: 'electrical-engineering' },
              { name: 'Electronics & Instrumentation', slug: 'electronics-instrumentation' },
              { name: 'Electronics & Telecomm.',       slug: 'electronics-telecommunication' },
              { name: 'Industrial & Production',       slug: 'industrial-production' },
              { name: 'Applied Physics',               slug: 'applied-physics' },
              { name: 'Applied Chemistry',             slug: 'applied-chemistry' },
              { name: 'Applied Mathematics',           slug: 'applied-mathematics' },
              { name: 'Pharmacy',                      slug: 'pharmacy' },
            ].map((dept, idx) => (
              <Link
                key={idx}
                to={`/departments/${dept.slug}`}
                className="p-3 bg-white rounded flex items-center transition-all duration-200 group border hover:shadow-sm"
                style={{ borderColor: C.navy15 }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = C.navy
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = C.navy15
                }}
              >
                <div
                  className="w-8 h-8 rounded flex items-center justify-center mr-3 shrink-0 transition-all duration-200 border"
                  style={{ backgroundColor: C.white, borderColor: C.navy15, color: C.navy55 }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.backgroundColor = C.navy
                    el.style.color = C.white
                    el.style.borderColor = C.navy
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.backgroundColor = C.white
                    el.style.color = C.navy55
                    el.style.borderColor = C.navy15
                  }}
                >
                  <Building size={14} />
                </div>
                <span
                  className="font-sans font-semibold text-xs group-hover:underline"
                  style={{ color: C.navy }}
                >
                  {dept.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ STATS BANNER (parallax) ══════ */}
      <section className="relative z-10 overflow-hidden" style={{ height: '280px' }}>
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
        {/* Navy tint overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: C.navy55 }} />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-center">
              {[
                { val: '10,000+', label: 'Students' },
                { val: '600+',    label: 'Faculty' },
                { val: '700+',    label: 'Staff' },
                { val: '70+',     label: 'Years of Excellence' },
              ].map((s, i, arr) => (
                <div
                  key={s.label}
                  className="px-4 py-4"
                  style={{ borderRight: i < arr.length - 1 ? `1px solid rgba(255,255,255,0.12)` : 'none' }}
                >
                  <div
                    className="text-3xl md:text-5xl font-display font-extrabold tracking-tight"
                    style={{ color: C.gold }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] mt-2"
                    style={{ color: C.white70 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CAMPUS LIFE ══════ */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          <div className="text-center mb-12">
            <span
              className="text-[10px] uppercase font-bold tracking-widest block mb-1"
              style={{ color: C.gold }}
            >
              Student Experience
            </span>
            <h2
              className="text-2xl md:text-3xl font-display font-bold tracking-tight uppercase mb-2"
              style={{ color: C.navy }}
            >
              CAMPUS{' '}
              <span className="font-serif italic font-semibold" style={{ color: C.navy }}>
                LIFE
              </span>
            </h2>
            <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: C.gold }} />
            <p className="text-sm max-w-xl mx-auto font-sans" style={{ color: C.navy60 }}>
              A vibrant community balancing rigorous technical education with diverse cultural and
              athletic pursuits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Central Library',    desc: 'Over 50,000 volumes, e-journals, and digital resources. Access to IEEE, Elsevier, Springer, DELNET.', icon: BookOpen, img: 'https://picsum.photos/seed/sgslib/600/400',    to: '/facilities/library' },
              { title: 'Computer Center',    desc: 'High-speed internet, 500+ computers, servers, 24×7 network access for students and faculty.',           icon: Microscope, img: 'https://picsum.photos/seed/sgslab/600/400', to: '/facilities/computer-center' },
              { title: 'Sports Complex',     desc: 'Cricket, football, basketball, badminton, table tennis, and a fully equipped gymnasium.',                icon: Users,    img: 'https://picsum.photos/seed/sgssports/600/400',  to: '/facilities/sports' },
              { title: 'Student Activities', desc: 'IEEE, Coding Club, Robotics, and literary clubs nurturing talent beyond academics.',                     icon: Users,    img: 'https://picsum.photos/seed/sgsclubs/600/400',   to: '/students/activities' },
              { title: 'Hostel Facilities',  desc: 'Separate Boys and Girls hostels with Wi-Fi, mess, laundry, common rooms — a home away from home.',       icon: Building, img: 'https://picsum.photos/seed/sgshostel/600/400',  to: '/facilities/hostel/boys' },
              { title: 'AICTE IDEA Lab',     desc: '3D printers, laser cutters, AR/VR headsets, IoT kits and electronics prototyping — fostering maker culture.', icon: FileText, img: 'https://picsum.photos/seed/sgsaudi/600/400', to: '/facilities/idea-lab' },
            ].map((facility) => (
              <Link
                key={facility.title}
                to={facility.to}
                className="bg-white rounded overflow-hidden group hover:shadow-md transition-all duration-200 flex flex-col border"
                style={{ borderColor: C.navy15 }}
              >
                <div
                  className="h-48 overflow-hidden relative border-b"
                  style={{ borderColor: C.navy10 }}
                >
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-full object-cover grayscale opacity-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle navy overlay that fades on hover */}
                  <div
                    className="absolute inset-0 transition-all duration-300 group-hover:opacity-0"
                    style={{ backgroundColor: C.navy15 }}
                  />
                </div>
                <div className="p-5 flex flex-col grow">
                  <h3
                    className="text-base font-display font-bold mb-2 flex items-center group-hover:underline"
                    style={{ color: C.navy }}
                  >
                    {/* Icon uses gold accent */}
                    <facility.icon
                      size={16}
                      className="mr-2 shrink-0"
                      style={{ color: C.gold }}
                      strokeWidth={1.75}
                    />
                    {facility.title}
                  </h3>
                  <p className="text-xs leading-relaxed font-sans font-medium" style={{ color: C.navy60 }}>
                    {facility.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FAQs + GALLERY ══════ */}
      <section
        className="relative z-10"
        style={{ backgroundColor: C.white, borderTop: `1px solid ${C.navy10}` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* LEFT — FAQs */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2
                  className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight"
                  style={{ color: C.navy }}
                >
                  FAQs
                </h2>
                {/* "View all" — now a real link */}
                <Link
                  to="/policy/help"
                  className="text-xs font-bold border rounded px-2 py-0.5 hover:opacity-80 transition-opacity"
                  style={{ borderColor: C.navy, color: C.navy }}
                >
                  View all
                </Link>
              </div>
              <p
                className="text-[10px] uppercase font-bold tracking-widest mb-1"
                style={{ color: C.gold }}
              >
                Frequently Asked Questions
              </p>
              <div className="w-8 h-[2px] mb-6" style={{ backgroundColor: C.gold }} />

              <div>
                {[
                  {
                    q: 'What are the eligibility criteria for B.Tech admissions?',
                    a: 'Admissions are via JEE Main counselling (MP State). Candidates must have passed 10+2 with PCM and a minimum of 45% marks (40% for SC/ST).',
                    contact: null,
                  },
                  {
                    q: 'Whom to contact for Postgraduate admissions?',
                    a: null,
                    contact: { name: 'Office of Academics (PG)', phone: '+91-731-2431234', email: 'pg@sgsits.ac.in' },
                  },
                  {
                    q: 'Whom to contact for Undergraduate admissions?',
                    a: 'Contact the Admission Cell at admissions@sgsits.ac.in or call +91-731-2582100.',
                    contact: null,
                  },
                  {
                    q: 'Whom to contact for queries related to GATE?',
                    a: 'PG Admission queries related to GATE scores are handled by the PG Admission Cell. Email pg@sgsits.ac.in.',
                    contact: null,
                  },
                  {
                    q: 'How to pay fees online?',
                    a: 'Fees can be paid via the institute ERP portal using net banking, debit/credit card or UPI. Visit the Student Login portal for instructions.',
                    contact: null,
                  },
                  {
                    q: 'Whom to contact for Faculty Recruitment?',
                    a: 'Faculty recruitment queries should be addressed to the Registrar\'s office at registrar@sgsits.ac.in.',
                    contact: null,
                  },
                ].map((faq, i) => (
                  <FaqItem
                    key={i}
                    question={faq.q}
                    answer={faq.a}
                    contact={faq.contact}
                    defaultOpen={i === 1}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT — Photo Gallery */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <h2
                    className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight"
                    style={{ color: C.navy }}
                  >
                    Photo{' '}
                    <span style={{ color: C.gold }}>Gallery</span>
                  </h2>
                </div>
                <Link
                  to="/explore/gallery"
                  className="text-xs font-bold border rounded px-2 py-0.5 hover:opacity-80 transition-opacity"
                  style={{ borderColor: C.navy, color: C.navy }}
                >
                  View All
                </Link>
              </div>
              <p
                className="text-[10px] uppercase font-bold tracking-widest mb-1"
                style={{ color: C.gold }}
              >
                Multi-Hued Reflections
              </p>
              <div className="w-8 h-[2px] mb-6" style={{ backgroundColor: C.gold }} />

              <div className="grid grid-cols-4 gap-1.5">
                {[
                  'sgscamp1','sgscamp2','sgscamp3','sgscamp4',
                  'sgscamp5','sgscamp6','sgscamp7','sgscamp8',
                  'sgscamp9','sgscamp10','sgscamp11','sgscamp12',
                ].map((seed, idx) => (
                  // Each thumbnail is now a real Link
                  <Link
                    key={idx}
                    to="/explore/gallery"
                    className="aspect-square overflow-hidden rounded-sm group block"
                    style={{ border: `1px solid ${C.navy10}` }}
                  >
                    <img
                      src={`https://picsum.photos/seed/${seed}/200/200`}
                      alt={`Campus ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
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
