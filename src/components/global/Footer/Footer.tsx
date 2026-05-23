import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ExternalLink, Globe } from 'lucide-react'

// ─── Service layer — the ONLY data source ────────────────────────────────────
import { settingsService, footerDefaults } from '../../../services/settingsService'
import type { FooterData } from '../../../mock/settings/settingsData'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  // Initialize with synchronous defaults so there is no flash
  const [data, setData] = useState<FooterData>(footerDefaults)

  useEffect(() => {
    settingsService.getFooterData().then(setData)
  }, [])

  const { institution, columns, portals, visitorStats, bottomLinks, copyright } = data

  return (
    <footer className="w-full bg-[#0b2545] text-slate-350 border-t-4 border-accent pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Contact Details & Branding */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center border border-white/20">
              <span className="text-sm font-serif font-bold text-accent">{institution.shortCode}</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-base text-white tracking-wider leading-none">
                {institution.name}
              </h3>
              <span className="text-[10px] text-accent font-serif uppercase tracking-widest block mt-1">{institution.estYear}</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans font-medium">
            {institution.description}
          </p>
          <div className="space-y-3 pt-2 text-xs font-sans font-medium">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-normal">{institution.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span className="text-slate-300">{institution.phone}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href={`mailto:${institution.email}`} className="text-slate-300 hover:text-accent hover:underline transition-colors">
                {institution.email}
              </a>
            </div>
          </div>
        </div>

        {/* Columns 2 & 3: Dynamic link columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="font-display font-semibold text-[15px] text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              {col.heading}
            </h3>
            <ul className="space-y-3 text-xs font-sans font-medium">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link to={link.to} className="hover:text-accent hover:underline transition-colors block text-slate-400">
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent hover:underline transition-colors flex items-center gap-1 text-slate-400"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 4: Portals & Resources + Visitor Stats */}
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold text-[15px] text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              {portals.heading}
            </h3>
            <ul className="space-y-3 text-xs font-sans font-medium">
              {portals.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent hover:underline transition-colors flex items-center gap-1 text-slate-400"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/15 rounded p-4 space-y-2">
            <span className="text-[10px] uppercase font-serif text-accent tracking-widest block font-medium">
              {visitorStats.label}
            </span>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent shrink-0" />
              <span className="text-[17px] font-mono font-bold text-white tracking-widest leading-none">
                {visitorStats.count}
              </span>
            </div>
            <p className="text-[9px] text-slate-400 font-sans font-semibold leading-relaxed">
              {visitorStats.note}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-xs text-center text-slate-400 space-y-5">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 font-sans font-medium text-slate-400">
          {bottomLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              {i > 0 && <span className="text-white/20">|</span>}
              <Link to={link.to} className="hover:text-accent hover:underline transition-colors">
                {link.label}
              </Link>
            </React.Fragment>
          ))}
        </div>

        <p className="max-w-4xl mx-auto text-[10px] text-slate-450 leading-relaxed font-sans font-medium">
          © {currentYear} {copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
