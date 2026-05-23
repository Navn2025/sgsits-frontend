import React from 'react'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group focus:outline-none">
      {/* Premium SVG Emblem */}
      <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-brand-burgundy rounded-xl shadow-md border border-brand-gold/30 group-hover:scale-105 transition-transform duration-300">
        <svg
          viewBox="0 0 100 100"
          className="w-9 h-9 fill-none stroke-brand-gold"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* External shield border */}
          <path d="M50 5 L85 20 V50 C85 75 50 95 50 95 C50 95 15 75 15 50 V20 L50 5 Z" strokeWidth="5" />
          
          {/* Inner details */}
          <path d="M30 45 h40 M50 25 v45 M35 70 h30" strokeWidth="3" opacity="0.6" />
          
          {/* Star at center top */}
          <polygon points="50,22 52,27 57,27 53,30 55,35 50,32 45,35 47,30 43,27 48,27" fill="#bfa15f" stroke="none" />
          
          {/* Book icon lines */}
          <path d="M35 55 C42 55 50 58 50 58 C50 58 58 55 65 55 M35 60 C42 60 50 63 50 63 C50 63 58 60 65 60" strokeWidth="2.5" />
        </svg>
        <span className="absolute -bottom-1 -right-1 text-[8px] bg-brand-gold text-slate-900 font-bold px-1 rounded shadow">
          1952
        </span>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <h1 className="font-display font-semibold text-base sm:text-lg leading-tight tracking-tight text-slate-900 group-hover:text-brand-burgundy transition-colors duration-200">
          SGSITS INDORE
        </h1>
        <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-none mt-0.5 max-w-[280px] sm:max-w-md line-clamp-1">
          Shri G. S. Institute of Technology & Science
        </p>
        <span className="text-[9px] text-brand-burgundy font-bold tracking-wider uppercase leading-none mt-1">
          Estd. 1952 • Autonomous Grant-in-Aid Institute
        </span>
      </div>
    </Link>
  )
}

export default Logo
