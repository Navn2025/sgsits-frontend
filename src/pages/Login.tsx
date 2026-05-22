import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAdminStore } from '../store/adminStore'
import { authAPI } from '../api'

/* ── Canvas Captcha ──────────────────────────────────────── */
function generateCaptchaText(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

interface CaptchaCanvasProps {
  text: string
}

const CaptchaCanvas: React.FC<CaptchaCanvasProps> = ({ text }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const W = canvas.width, H = canvas.height
    ctx.fillStyle = '#e8f5e9'
    ctx.fillRect(0, 0, W, H)
    for (let i = 0; i < 6; i++) {
      ctx.beginPath()
      ctx.moveTo(0, (H / 6) * i)
      ctx.lineTo(W, (H / 6) * i)
      ctx.strokeStyle = 'rgba(0,100,50,0.12)'
      ctx.lineWidth = 1
      ctx.stroke()
    }
    const fonts = ['Georgia', 'Times New Roman', 'Arial', 'Courier New']
    const spacing = (W - 16) / text.length
    for (let i = 0; i < text.length; i++) {
      ctx.save()
      ctx.translate(10 + i * spacing + spacing / 2, H / 2 + 5)
      ctx.rotate((Math.random() - 0.5) * 0.45)
      ctx.font = `bold ${16 + Math.random() * 7}px ${fonts[i % fonts.length]}`
      ctx.fillStyle = `hsl(${130 + Math.random() * 40},60%,${18 + Math.random() * 10}%)`
      ctx.fillText(text[i], -5, 5)
      ctx.restore()
    }
  }, [text])

  return <canvas ref={canvasRef} width={140} height={46} className="rounded select-none border border-gray-300" />
}

/* ── Login Page ──────────────────────────────────────────── */
type LoginTab = 'student' | 'faculty' | 'admin'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const setAuth = useAdminStore((state) => state.setAuth)

  const [loginType, setLoginType] = useState<LoginTab>('student')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [captchaText, setCaptchaText] = useState(() => generateCaptchaText())
  const [captchaInput, setCaptchaInput] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const refreshCaptcha = useCallback(() => {
    setCaptchaText(generateCaptchaText())
    setCaptchaInput('')
  }, [])

  const handleTabChange = (tab: LoginTab) => {
    setLoginType(tab)
    setError('')
    setUsername('')
    setPassword('')
    setCaptchaInput('')
    refreshCaptcha()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username.trim()) return setError('Please enter your username.')
    if (!password) return setError('Please enter your password.')
    if (captchaInput.toLowerCase() !== captchaText.toLowerCase()) {
      setError('Captcha does not match. Please try again.')
      refreshCaptcha()
      return
    }

    setIsLoading(true)

    try {
      if (loginType === 'admin') {
        // Admin login — authenticate and redirect to admin dashboard
        const res = await authAPI.adminLogin(username, password)
        setAuth(res.token, res.user)
        navigate('/admin/dashboard', { replace: true })

      } else if (loginType === 'faculty') {
        // Faculty login — authenticate and redirect to faculty dashboard
        const res = await authAPI.facultyLogin(username, password)
        setAuth(res.token, res.user)
        navigate('/faculty/dashboard', { replace: true })

      } else {
        // Student login — redirect to ERP portal (external)
        // In production: authenticate via student portal API then redirect
        window.open('https://erp.sgsits.ac.in', '_blank')
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Login failed. Please check your credentials.'
      setError(msg)
      refreshCaptcha()
    } finally {
      setIsLoading(false)
    }
  }

  const tabs: { key: LoginTab; label: string }[] = [
    { key: 'student', label: 'Student' },
    { key: 'faculty', label: 'Faculty' },
    { key: 'admin', label: 'Admin' },
  ]

  const placeholders: Record<LoginTab, { username: string; hint: string }> = {
    student: { username: 'Enrollment Number (e.g. 0801CS211001)', hint: 'Use your enrollment number and ERP password' },
    faculty: { username: 'Employee ID (e.g. SGS-CE-001)', hint: 'Use your employee ID and institute password' },
    admin: { username: 'Admin Email (e.g. admin@sgsits.ac.in)', hint: 'Use your official email and admin password' },
  }

  const resolvedBgImage = `${import.meta.env.BASE_URL?.replace(/\/$/, '') ?? ''}/assets/media__1776272596244.png`

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url('${resolvedBgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'rgba(11,37,69,0.55)' }} />

      {/* Navbar */}
      <nav className="w-full flex items-center gap-3 px-4 sm:px-6 py-3 shadow-sm relative z-40 bg-primary border-b border-white/10">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/image.png" alt="SGSITS" className="w-10 h-10 object-contain bg-white rounded-full p-0.5 shrink-0" />
          <div className="hidden sm:block text-left">
            <p className="text-white font-bold text-sm leading-tight">Shri Govindram Seksaria Institute</p>
            <p className="text-white/50 text-[11px]">of Technology and Science, Indore</p>
          </div>
        </Link>
        <div className="ml-auto">
          <Link to="/" className="text-white/70 hover:text-white text-xs font-medium flex items-center gap-1 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 relative z-10">
        <div className="w-full max-w-[420px]">
          <div className="bg-white rounded-md shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-1.5 bg-accent" />

            <div className="px-7 sm:px-9 py-8">
              {/* Header */}
              <div className="flex flex-col items-center mb-6 text-center">
                <img src="/assets/image.png" alt="SGSITS Logo" className="w-14 h-14 object-contain mb-3" />
                <h1 className="text-xl font-display font-bold text-gray-800">SGSITS Portal Login</h1>
                <p className="text-xs text-slate-500 mt-0.5">Shri Govindram Seksaria Institute of Technology and Science</p>
              </div>

              {/* Tab Switcher */}
              <div className="flex rounded border border-gray-200 overflow-hidden mb-5 text-[13px] font-semibold">
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => handleTabChange(t.key)}
                    className="flex-1 py-2.5 transition-all cursor-pointer"
                    style={
                      loginType === t.key
                        ? { backgroundColor: 'var(--color-primary)', color: '#fff' }
                        : { backgroundColor: '#fff', color: '#6b7280' }
                    }
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Hint */}
              <p className="text-[11px] text-slate-500 text-center mb-4 bg-slate-50 border border-slate-100 rounded px-3 py-2">
                {placeholders[loginType].hint}
              </p>

              {/* Error */}
              {error && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2.5 rounded flex items-center gap-2">
                  <span className="shrink-0">⚠</span>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Username */}
                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wide block mb-1">
                    {loginType === 'admin' ? 'Email Address' : loginType === 'faculty' ? 'Employee ID' : 'Enrollment Number'}
                  </label>
                  <input
                    type={loginType === 'admin' ? 'email' : 'text'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={placeholders[loginType].username}
                    autoComplete="username"
                    disabled={isLoading}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none placeholder-gray-400 bg-white transition-all focus:border-primary disabled:opacity-60"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">Password</label>
                    <button type="button" className="text-[11px] text-primary hover:underline">Forgot Password?</button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPwd ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      disabled={isLoading}
                      className="w-full border border-gray-300 rounded px-4 py-2.5 pr-11 text-sm focus:outline-none placeholder-gray-400 bg-white transition-all focus:border-primary disabled:opacity-60"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd(s => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPwd ? '🙈' : '👁'}
                    </button>
                  </div>
                </div>

                {/* Captcha */}
                <div className="flex items-center gap-2">
                  <CaptchaCanvas text={captchaText} />
                  <button type="button" onClick={refreshCaptcha} className="text-gray-500 hover:text-gray-700 p-1.5 rounded hover:bg-gray-100 transition-colors" title="Refresh Captcha">
                    ↻
                  </button>
                  <input
                    type="text"
                    value={captchaInput}
                    maxLength={6}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    placeholder="Enter captcha"
                    autoComplete="off"
                    disabled={isLoading}
                    className="flex-1 min-w-0 border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none placeholder-gray-400 font-mono tracking-widest bg-white transition-all focus:border-primary disabled:opacity-60"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded text-white font-bold text-sm tracking-wide transition-all hover:opacity-95 active:scale-[0.98] mt-1 cursor-pointer bg-primary disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Signing In...
                    </>
                  ) : (
                    `Sign In as ${loginType.charAt(0).toUpperCase() + loginType.slice(1)}`
                  )}
                </button>
              </form>

              {/* Student special note */}
              {loginType === 'student' && (
                <p className="text-center text-[11px] text-slate-400 mt-4">
                  Student login redirects to the{' '}
                  <a href="https://erp.sgsits.ac.in" target="_blank" rel="noreferrer" className="text-primary underline">ERP Portal</a>
                </p>
              )}

              {/* Admin direct link */}
              {loginType !== 'admin' && (
                <p className="text-center text-[11px] text-slate-400 mt-4">
                  Are you an admin?{' '}
                  <Link to="/admin/login" className="text-primary underline">Go to Admin Panel</Link>
                </p>
              )}
            </div>
          </div>

          <p className="text-center text-white/60 text-xs mt-5">
            © {new Date().getFullYear()} SGSITS Indore. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
