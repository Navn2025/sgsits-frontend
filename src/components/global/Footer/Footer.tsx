import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ExternalLink, Globe } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#0b1f3a] text-slate-350 border-t-4 border-accent pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Contact Details & Branding */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center border border-white/20">
              <span className="text-sm font-serif font-bold text-accent">SG</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-base text-white tracking-wider leading-none">
                SGSITS INDORE
              </h3>
              <span className="text-[10px] text-accent font-serif uppercase tracking-widest block mt-1">Est. 1952</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans font-medium">
            Shri Govindram Seksaria Institute of Technology and Science, Indore is a prestigious autonomous engineering institution of national repute.
          </p>
          <div className="space-y-3 pt-2 text-xs font-sans font-medium">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-normal">23, Park Road (Sir M. Visvesvaraya Marg), Indore, M.P. - 452003, India</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span className="text-slate-300">+91-731-2582100, 2582124</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:registrar@sgsits.ac.in" className="text-slate-300 hover:text-accent hover:underline transition-colors">
                registrar@sgsits.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Administration Links */}
        <div>
          <h3 className="font-display font-semibold text-[15px] text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
            Administration
          </h3>
          <ul className="space-y-3 text-xs font-sans font-medium">
            <li>
              <Link to="/about/institute" className="hover:text-accent hover:underline transition-colors block">
                About the Institute
              </Link>
            </li>
            <li>
              <Link to="/about/director-message" className="hover:text-accent hover:underline transition-colors block">
                Director's Message
              </Link>
            </li>
            <li>
              <Link to="/about/governing-body" className="hover:text-accent hover:underline transition-colors block">
                Governing Body Board
              </Link>
            </li>
            <li>
              <Link to="/about/telephone-directory" className="hover:text-accent hover:underline transition-colors block">
                Helpline & Directory
              </Link>
            </li>
            <li>
              <Link to="/about/iqac" className="hover:text-accent hover:underline transition-colors block">
                IQAC Quality Cell
              </Link>
            </li>
            <li>
              <Link to="/about/accreditation" className="hover:text-accent hover:underline transition-colors block">
                NBA & NAAC Status
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Student Gateways */}
        <div>
          <h3 className="font-display font-semibold text-[15px] text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
            Student Gateways
          </h3>
          <ul className="space-y-3 text-xs font-sans font-medium">
            <li>
              <Link to="/academics/calendar" className="hover:text-accent hover:underline transition-colors block">
                Academic Session Calendar
              </Link>
            </li>
            <li>
              <Link to="/academics/exam-results" className="hover:text-accent hover:underline transition-colors block">
                Exam Registration & Results
              </Link>
            </li>
            <li>
              <Link to="/students/scholarship/govt" className="hover:text-accent hover:underline transition-colors block">
                Government Scholarships
              </Link>
            </li>
            <li>
              <Link to="/placement/tnp-cell" className="hover:text-accent hover:underline transition-colors block">
                Training & Placements (T&P)
              </Link>
            </li>
            <li>
              <Link to="/facilities/library" className="hover:text-accent hover:underline transition-colors block">
                Central Library & Catalog
              </Link>
            </li>
            <li>
              <Link to="/startup-cell" className="hover:text-accent hover:underline transition-colors block">
                Incubation & Startup Cell
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Portals & Resources */}
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold text-[15px] text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Portals & Resources
            </h3>
            <ul className="space-y-3 text-xs font-sans font-medium">
              <li>
                <a href="https://www.aicte-india.org" target="_blank" rel="noreferrer" className="hover:text-accent hover:underline transition-colors flex items-center gap-1">
                  <span>AICTE India</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.mptechedu.org" target="_blank" rel="noreferrer" className="hover:text-accent hover:underline transition-colors flex items-center gap-1">
                  <span>DTE Madhya Pradesh</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.rgpv.ac.in" target="_blank" rel="noreferrer" className="hover:text-accent hover:underline transition-colors flex items-center gap-1">
                  <span>RGPV Bhopal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/15 rounded p-4 space-y-2">
            <span className="text-[10px] uppercase font-serif text-accent tracking-widest block font-medium">
              Visitor Statistics
            </span>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent shrink-0" />
              <span className="text-[17px] font-mono font-bold text-white tracking-widest leading-none">
                02,485,391
              </span>
            </div>
            <p className="text-[9px] text-slate-400 font-sans font-semibold leading-relaxed">
              Refreshed hourly • Institutional audit
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-xs text-center text-slate-400 space-y-5">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 font-sans font-medium text-slate-400">
          <Link to="/policy/privacy" className="hover:text-accent hover:underline transition-colors">Privacy Policy</Link>
          <span className="text-white/20">|</span>
          <Link to="/policy/terms" className="hover:text-accent hover:underline transition-colors">Terms of Use</Link>
          <span className="text-white/20">|</span>
          <Link to="/policy/disclaimer" className="hover:text-accent hover:underline transition-colors">Disclaimer</Link>
          <span className="text-white/20">|</span>
          <Link to="/policy/accessibility" className="hover:text-accent hover:underline transition-colors">Accessibility Statement</Link>
          <span className="text-white/20">|</span>
          <Link to="/policy/copyright" className="hover:text-accent hover:underline transition-colors">Copyright Policy</Link>
          <span className="text-white/20">|</span>
          <Link to="/policy/hyperlink" className="hover:text-accent hover:underline transition-colors">Hyperlinking Policy</Link>
          <span className="text-white/20">|</span>
          <Link to="/policy/sitemap" className="hover:text-accent hover:underline transition-colors">Sitemap</Link>
          <span className="text-white/20">|</span>
          <Link to="/contact" className="hover:text-accent hover:underline transition-colors">Feedback & Help</Link>
        </div>

        <p className="max-w-4xl mx-auto text-[10px] text-slate-450 leading-relaxed font-sans font-medium">
          © {currentYear} SGSITS Indore (M.P.), India. All rights reserved. Designed and developed as a responsive React single page application.
        </p>
      </div>
    </footer>
  )
}

export default Footer
