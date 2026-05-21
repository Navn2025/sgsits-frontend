import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'
import { ShieldCheck, Mail, Lock, ArrowLeft, Loader2, AlertCircle } from 'lucide-react'
import Logo from '../../components/global/Header/Logo'

const AdminLogin: React.FC = () => {
  const navigate = useNavigate()
  const setAuth = useAdminStore((state) => state.setAuth)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Quick client validations
    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid academic email address.')
      return
    }

    setIsLoading(true)

    // Simulate standard security handshake delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))

      // Simulate credentials check
      // For handover validation, any valid admin email is accepted (e.g. admin@sgsits.ac.in)
      if (password.length < 4) {
        setError('Incorrect password credentials. Please try again.')
        setIsLoading(false)
        return
      }

      // Mock user generation
      const mockUser = {
        id: 'admin-99',
        name: email.split('@')[0].toUpperCase().replace('.', ' '),
        email: email,
        role: email.includes('director') ? 'Super Admin' : 'Academic Editor',
      }

      // Store in Zustand (persisted inside localStorage)
      setAuth('sgsits-handover-jwt-auth-token-hash-xyz', mockUser)

      // Redirect to admin dashboard
      navigate('/admin/dashboard', { replace: true })
    } catch (err) {
      setError('Connection failure during login handshake.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] flex flex-col justify-center items-center py-12 px-6 relative overflow-hidden">
      <div className="relative w-full max-w-md">
        {/* Escape Anchor */}
        <Link
          to="/"
          className="absolute -top-12 left-0 inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors duration-300"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Institute Homepage
        </Link>

        {/* Login Card wrapper */}
        <div className="bg-white border border-slate-200 rounded-md p-8 md:p-10 shadow-sm space-y-8">
          {/* Logo Spot */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Logo />
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[9px] font-extrabold bg-brand-burgundy/10 text-brand-burgundy tracking-widest uppercase border border-brand-burgundy/20">
                <ShieldCheck className="w-3 h-3 text-brand-burgundy" />
                Security Gateway
              </span>
              <h2 className="text-xl font-extrabold text-slate-800 font-display">
                SGSITS Admin Panel
              </h2>
              <p className="text-xs text-slate-500">
                Authorized academic personnel authentication gateway.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-md flex items-start gap-2.5 text-left animate-shake">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] font-semibold text-red-600 leading-snug">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="email" className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                Academic Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@sgsits.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8fa] border border-slate-200 focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy rounded-md text-xs font-semibold text-slate-800 focus:outline-none placeholder-slate-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5 text-left">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                  Credentials Token
                </label>
                <a
                  href="mailto:webmanager@sgsits.ac.in?subject=Admin Credentials Request"
                  className="text-[10px] font-semibold text-brand-burgundy hover:underline"
                >
                  Forgot Key?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8fa] border border-slate-200 focus:border-brand-burgundy focus:ring-1 focus:ring-brand-burgundy rounded-md text-xs font-semibold text-slate-800 focus:outline-none placeholder-slate-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* Submit Trigger */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-brand-burgundy hover:bg-brand-burgundy/90 text-white font-bold rounded-md shadow-sm transition-all duration-300 flex items-center justify-center gap-2 border border-brand-burgundy/25 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Encrypting Handshake...
                </>
              ) : (
                'Authenticate Credentials'
              )}
            </button>
          </form>

          {/* Guidelines info strip */}
          <div className="pt-4 border-t border-slate-200 text-center">
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Security Notice: Unauthorized access attempts are monitored, logged, and subject to administrative disclosure under institute policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
