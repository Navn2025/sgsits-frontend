import React, { useState } from 'react'
import { PageHeader, PortalCard } from '../../components/layout/PortalLayout'
import { DEPT_PROFILE, type DepartmentProfile } from '../../data/mockHodContent'
import { Building, Save, Image as ImageIcon, Edit3, X, Eye } from 'lucide-react'

const HodDepartmentProfile: React.FC = () => {
  const [profile, setProfile] = useState<DepartmentProfile>(DEPT_PROFILE)
  const [draft, setDraft] = useState<DepartmentProfile>(DEPT_PROFILE)
  const [editing, setEditing] = useState(false)
  const [preview, setPreview] = useState(false)
  const [toast, setToast] = useState('')

  const set = <K extends keyof DepartmentProfile>(k: K, v: DepartmentProfile[K]) =>
    setDraft(prev => ({ ...prev, [k]: v }))

  const startEdit = () => { setDraft(profile); setEditing(true) }
  const cancelEdit = () => { setDraft(profile); setEditing(false) }

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    const next = { ...draft, updated_at: new Date().toISOString().slice(0, 10) }
    setProfile(next)
    setEditing(false)
    setToast('Department profile saved.')
    setTimeout(() => setToast(''), 2400)
  }

  const v = editing ? draft : profile

  return (
    <div className="space-y-5">
      <PageHeader
        title="Department Profile"
        subtitle="Edit the public profile of your department"
        action={
          editing ? (
            <div className="flex gap-2">
              <button
                onClick={cancelEdit}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 text-slate-700 text-xs font-bold rounded-md hover:bg-slate-50 transition-colors"
              >
                <X size={13} /> Cancel
              </button>
              <button
                onClick={save}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0b2545] text-white text-xs font-bold rounded-md hover:bg-[#0b2545]/90 transition-colors"
              >
                <Save size={13} /> Save Changes
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => setPreview(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 text-slate-700 text-xs font-bold rounded-md hover:bg-slate-50 transition-colors"
              >
                <Eye size={13} /> Public Preview
              </button>
              <button
                onClick={startEdit}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0b2545] text-white text-xs font-bold rounded-md hover:bg-[#0b2545]/90 transition-colors"
              >
                <Edit3 size={13} /> Edit Profile
              </button>
            </div>
          )
        }
      />

      <PortalCard>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
          {/* Image */}
          <div>
            <div className="aspect-square w-full bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center">
              {v.image_url ? (
                <img src={v.image_url} alt="Department" className="w-full h-full object-contain p-3" />
              ) : (
                <ImageIcon size={40} className="text-slate-300" />
              )}
            </div>
            {editing && (
              <input
                type="text"
                value={v.image_url}
                onChange={(e) => set('image_url', e.target.value)}
                placeholder="Image URL"
                className="mt-2 w-full text-xs border border-slate-200 rounded px-2 py-1.5 focus:outline-none focus:border-[#0b2545]"
              />
            )}
            <div className="mt-3 text-[11px] text-slate-500 space-y-1">
              <p><strong className="text-slate-700">Established:</strong> {v.established}</p>
              <p><strong className="text-slate-700">HOD:</strong> {v.hod_name}</p>
              <p><strong className="text-slate-700">Updated:</strong> {profile.updated_at}</p>
            </div>
          </div>

          {/* Form / display */}
          <form onSubmit={save} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field label="Department Name" required>
                <input type="text" value={v.department_name} onChange={(e) => set('department_name', e.target.value)} disabled={!editing} className={inputClass(editing)} />
              </Field>
              <Field label="Short Name" required>
                <input type="text" value={v.short_name} onChange={(e) => set('short_name', e.target.value)} disabled={!editing} className={inputClass(editing)} />
              </Field>
            </div>

            <Field label="About Department">
              <textarea rows={3} value={v.about} onChange={(e) => set('about', e.target.value)} disabled={!editing} className={inputClass(editing)} />
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field label="Vision">
                <textarea rows={3} value={v.vision} onChange={(e) => set('vision', e.target.value)} disabled={!editing} className={inputClass(editing)} />
              </Field>
              <Field label="Mission">
                <textarea rows={3} value={v.mission} onChange={(e) => set('mission', e.target.value)} disabled={!editing} className={inputClass(editing)} />
              </Field>
            </div>

            <Field label="HOD's Message">
              <textarea rows={4} value={v.hod_message} onChange={(e) => set('hod_message', e.target.value)} disabled={!editing} className={inputClass(editing)} />
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Field label="HOD Name">
                <input type="text" value={v.hod_name} onChange={(e) => set('hod_name', e.target.value)} disabled={!editing} className={inputClass(editing)} />
              </Field>
              <Field label="Department Email">
                <input type="email" value={v.email} onChange={(e) => set('email', e.target.value)} disabled={!editing} className={inputClass(editing)} />
              </Field>
              <Field label="Phone">
                <input type="tel" value={v.phone} onChange={(e) => set('phone', e.target.value)} disabled={!editing} className={inputClass(editing)} />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field label="Established">
                <input type="text" value={v.established} onChange={(e) => set('established', e.target.value)} disabled={!editing} className={inputClass(editing)} />
              </Field>
              <Field label="Status">
                <select value={v.status} onChange={(e) => set('status', e.target.value as DepartmentProfile['status'])} disabled={!editing} className={inputClass(editing)}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </Field>
            </div>
          </form>
        </div>
      </PortalCard>

      {/* Public preview modal */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setPreview(false)} />
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 sticky top-0 bg-white">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Eye size={16} className="text-[#bfa15f]" /> Public Preview
              </h3>
              <button onClick={() => setPreview(false)} className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img src={profile.image_url} alt="dept" className="w-16 h-16 object-contain bg-slate-50 rounded-lg p-2 border border-slate-200" />
                <div>
                  <h2 className="font-display text-xl font-bold text-[#0b2545]">{profile.department_name}</h2>
                  <p className="text-xs text-slate-500">Established {profile.established} · {profile.email} · {profile.phone}</p>
                </div>
              </div>
              <Section title="About">{profile.about}</Section>
              <div className="grid grid-cols-2 gap-4">
                <Section title="Vision">{profile.vision}</Section>
                <Section title="Mission">{profile.mission}</Section>
              </div>
              <Section title={`HOD's Message — ${profile.hod_name}`}>{profile.hod_message}</Section>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-4 right-4 z-50 bg-[#bfa15f] text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium">
          <Building size={14} /> {toast}
        </div>
      )}
    </div>
  )
}

const Field: React.FC<{ label: string; required?: boolean; children: React.ReactNode }> = ({ label, required, children }) => (
  <label className="block">
    <span className="block text-[11px] font-bold text-slate-600 uppercase tracking-wide mb-1">
      {label} {required && <span className="text-[#bfa15f]">*</span>}
    </span>
    {children}
  </label>
)
const inputClass = (editing: boolean) =>
  `w-full border rounded px-3 py-2 text-sm focus:outline-none ${editing
    ? 'border-slate-200 bg-white focus:border-[#0b2545]'
    : 'border-transparent bg-slate-50 text-slate-700 cursor-default'}`
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <p className="text-[10px] font-bold text-[#bfa15f] uppercase tracking-widest mb-1">{title}</p>
    <p className="text-sm text-slate-700 leading-relaxed">{children}</p>
  </div>
)

export default HodDepartmentProfile
