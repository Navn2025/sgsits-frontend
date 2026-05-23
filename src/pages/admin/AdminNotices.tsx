import React, { useState, useEffect } from 'react'
import { Pencil, Trash2, Plus, X, Star } from 'lucide-react'
import { mockStore } from '../../data/mockStore'
import type { Notice } from '../../data/mockStore'

const CATEGORIES: Notice['category'][] = ['academic', 'administrative', 'exam', 'tender', 'general']

const EMPTY: Omit<Notice, 'id'> = {
  title: '',
  category: 'general',
  date: new Date().toISOString().slice(0, 10),
  highlight: false,
  fileUrl: '',
}

const catColor: Record<string, string> = {
  academic: 'bg-[#0b2545]/10 text-[#0b2545]',
  administrative: 'bg-[#0b2545]/15 text-[#0b2545]',
  exam: 'bg-[#bfa15f]/15 text-[#bfa15f]',
  tender: 'bg-[#bfa15f]/20 text-[#bfa15f]',
  general: 'bg-slate-100 text-slate-700',
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000)
    return () => clearTimeout(t)
  }, [onClose])
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-[#bfa15f] text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 text-sm font-medium">
      {message}
      <button onClick={onClose}><X size={14} /></button>
    </div>
  )
}

export default function AdminNotices() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState<Notice | null>(null)
  const [form, setForm] = useState<Omit<Notice, 'id'>>(EMPTY)
  const [deleteTarget, setDeleteTarget] = useState<Notice | null>(null)
  const [toast, setToast] = useState('')

  useEffect(() => { setNotices(mockStore.getNotices()) }, [])

  const showToast = (msg: string) => setToast(msg)

  const openAdd = () => { setEditItem(null); setForm(EMPTY); setShowModal(true) }
  const openEdit = (n: Notice) => { setEditItem(n); setForm({ title: n.title, category: n.category, date: n.date, highlight: n.highlight, fileUrl: n.fileUrl ?? '' }); setShowModal(true) }
  const closeModal = () => { setShowModal(false); setEditItem(null) }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (editItem) {
      mockStore.updateNotice(editItem.id, form)
      setNotices(mockStore.getNotices())
      showToast('Notice updated successfully!')
    } else {
      mockStore.addNotice(form)
      setNotices(mockStore.getNotices())
      showToast('Notice added successfully!')
    }
    closeModal()
  }

  const handleDelete = () => {
    if (!deleteTarget) return
    mockStore.deleteNotice(deleteTarget.id)
    setNotices(mockStore.getNotices())
    setDeleteTarget(null)
    showToast('Notice deleted.')
  }

  const f = (key: keyof Omit<Notice, 'id'>, val: unknown) =>
    setForm(prev => ({ ...prev, [key]: val }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">Notices Management</h1>
          <p className="text-sm text-slate-500 mt-0.5">Add, edit and manage official notices and circulars</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          <Plus size={16} /> Add New Notice
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Title</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Category</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Date</th>
              <th className="text-center px-4 py-3 font-semibold text-slate-600">Highlight</th>
              <th className="text-center px-4 py-3 font-semibold text-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {notices.map(n => (
              <tr key={n.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 max-w-xs">
                  <p className="font-medium text-slate-800 line-clamp-2">{n.title}</p>
                  {n.fileUrl && <a href={n.fileUrl} className="text-xs text-[#0b2545] hover:underline mt-0.5 block">View File</a>}
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${catColor[n.category]}`}>
                    {n.category}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">{n.date}</td>
                <td className="px-4 py-3 text-center">
                  {n.highlight ? <Star size={16} className="text-[#bfa15f] inline fill-[#bfa15f]" /> : <span className="text-slate-300">—</span>}
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="inline-flex items-center gap-2">
                    <button onClick={() => openEdit(n)} className="p-1.5 rounded hover:bg-[#0b2545]/5 text-[#0b2545] transition-colors" title="Edit">
                      <Pencil size={14} />
                    </button>
                    <button onClick={() => setDeleteTarget(n)} className="p-1.5 rounded hover:bg-slate-100 text-slate-500 transition-colors" title="Delete">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {notices.length === 0 && (
          <div className="text-center py-12 text-slate-400">No notices found. Add one to get started.</div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="font-display text-lg font-bold text-primary">{editItem ? 'Edit Notice' : 'Add New Notice'}</h2>
              <button onClick={closeModal} className="p-1.5 rounded hover:bg-slate-100 text-slate-500"><X size={18} /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Title <span className="text-[#bfa15f]">*</span></label>
                <input required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.title} onChange={e => f('title', e.target.value)} placeholder="Notice title" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Category <span className="text-[#bfa15f]">*</span></label>
                  <select className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.category} onChange={e => f('category', e.target.value as Notice['category'])}>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Date <span className="text-[#bfa15f]">*</span></label>
                  <input type="date" required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.date} onChange={e => f('date', e.target.value)} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">File URL <span className="text-slate-400">(optional)</span></label>
                <input type="url" className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.fileUrl ?? ''} onChange={e => f('fileUrl', e.target.value)} placeholder="https://sgsits.ac.in/notices/file.pdf" />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.highlight} onChange={e => f('highlight', e.target.checked)} className="w-4 h-4 accent-[#bfa15f]" />
                <span className="text-sm font-medium text-slate-700">Mark as Highlighted</span>
              </label>
              <div className="flex gap-3 pt-2 border-t border-slate-100">
                <button type="button" onClick={closeModal} className="flex-1 py-2 border border-slate-300 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/90">
                  {editItem ? '✓ Update Notice' : '+ Add Notice'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 text-center">
            <div className="w-12 h-12 bg-[#0b2545]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Trash2 size={22} className="text-[#0b2545]" />
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">Delete Notice?</h3>
            <p className="text-slate-500 text-sm mb-5 line-clamp-2">"{deleteTarget.title}"</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="flex-1 py-2 border border-slate-300 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50">Cancel</button>
              <button onClick={handleDelete} className="flex-1 py-2 bg-[#0b2545] text-white rounded font-semibold text-sm hover:bg-[#0b2545]/90">Delete</button>
            </div>
          </div>
        </div>
      )}

      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </div>
  )
}
