import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { departmentsList } from '../../constants/departmentsList'
import { Modal, FormField, Input } from '../../components/admin/CrudPage'
import { ExternalLink, Pencil, Users, Mail } from 'lucide-react'

const AdminDepartments: React.FC = () => {
  const [search, setSearch] = useState('')
  const [editDept, setEditDept] = useState<typeof departmentsList[0] | null>(null)
  const [form, setForm] = useState({ hodName: '', hodEmail: '', hodPhone: '' })
  const [saving, setSaving] = useState(false)
  const [localEdits, setLocalEdits] = useState<Record<string, { hodName: string; hodEmail: string; hodPhone?: string }>>({})

  const filtered = departmentsList.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.shortName.toLowerCase().includes(search.toLowerCase()) ||
    d.hodName.toLowerCase().includes(search.toLowerCase())
  )

  const openEdit = (dept: typeof departmentsList[0]) => {
    setEditDept(dept)
    const edited = localEdits[dept.slug]
    setForm({ hodName: edited?.hodName ?? dept.hodName, hodEmail: edited?.hodEmail ?? dept.hodEmail, hodPhone: edited?.hodPhone ?? dept.hodPhone ?? '' })
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true)
    // In real backend: PATCH /api/departments/:slug  { hodName, hodEmail, hodPhone }
    await new Promise(r => setTimeout(r, 600))
    if (editDept) {
      setLocalEdits(p => ({ ...p, [editDept.slug]: { hodName: form.hodName, hodEmail: form.hodEmail, hodPhone: form.hodPhone || undefined } }))
    }
    setSaving(false); setEditDept(null)
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-800">Departments</h2>
            <p className="text-xs text-slate-500 mt-0.5">View and update department HOD details — {filtered.length} departments</p>
          </div>
          <div className="text-xs text-[#bfa15f] bg-[#bfa15f]/10 border border-[#bfa15f]/30 rounded px-3 py-1.5 font-medium">
            ℹ️ Department structure is managed via codebase. HOD details can be updated here.
          </div>
        </div>

        {/* Search */}
        <input type="text" placeholder="Search departments..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full max-w-sm border border-slate-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary" />

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {['Department', 'Programs', 'HOD', 'Contact', 'Actions'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(dept => {
                const edits = localEdits[dept.slug]
                const hodName = edits?.hodName ?? dept.hodName
                const hodEmail = edits?.hodEmail ?? dept.hodEmail
                return (
                  <tr key={dept.slug} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-slate-800 text-sm">{dept.name}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{dept.shortName}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {dept.programsOffered.map(p => (
                          <span key={p} className="text-[9px] bg-[#0b2545]/10 text-[#0b2545] border border-[#0b2545]/25 px-1.5 py-0.5 rounded font-bold">{p}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-slate-400"><Users size={10} /><span>{dept.facultyCount} faculty</span></div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-slate-700">{hodName}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 text-[11px] text-slate-500"><Mail size={11} className="text-accent" /><span>{hodEmail}</span></div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEdit(dept)} className="p-1.5 text-slate-500 hover:text-primary hover:bg-primary/5 rounded transition-colors" title="Edit HOD"><Pencil size={14} /></button>
                        <Link to={`/departments/${dept.slug}`} target="_blank" className="p-1.5 text-slate-500 hover:text-accent-blue hover:bg-slate-100 rounded transition-colors" title="View Department Page"><ExternalLink size={14} /></Link>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={!!editDept} title={`Update HOD — ${editDept?.name}`} onClose={() => setEditDept(null)} width="max-w-lg">
        <form onSubmit={handleSave} className="space-y-4">
          <div className="bg-[#bfa15f]/10 border border-[#bfa15f]/30 rounded p-3 text-xs text-[#0b2545]">
            Changes are saved locally (mock). When backend is ready, this calls <code className="font-mono">PATCH /api/departments/{editDept?.slug}</code>
          </div>
          <FormField label="HOD Name" required><Input required value={form.hodName} onChange={e => setForm(f => ({ ...f, hodName: e.target.value }))} /></FormField>
          <FormField label="HOD Email" required><Input type="email" required value={form.hodEmail} onChange={e => setForm(f => ({ ...f, hodEmail: e.target.value }))} /></FormField>
          <FormField label="HOD Phone" hint="Optional"><Input value={form.hodPhone} onChange={e => setForm(f => ({ ...f, hodPhone: e.target.value }))} /></FormField>
          <div className="flex gap-3 pt-2 border-t border-slate-100">
            <button type="button" onClick={() => setEditDept(null)} className="flex-1 py-2 border border-slate-200 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 py-2 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/90 disabled:opacity-60">{saving ? '⏳ Saving...' : '✓ Update HOD'}</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AdminDepartments
