import React, { useState, useEffect } from 'react'
import { Pencil, Trash2, Plus, X } from 'lucide-react'
import { mockStore } from '../../data/mockStore'
import type { NewsItem } from '../../data/mockStore'

const EMPTY: Omit<NewsItem, 'id'> = {
  title: '',
  category: 'General',
  excerpt: '',
  content: '',
  image: '',
  date: new Date().toISOString().slice(0, 10),
  author: '',
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

export default function AdminNews() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState<NewsItem | null>(null)
  const [form, setForm] = useState<Omit<NewsItem, 'id'>>(EMPTY)
  const [deleteTarget, setDeleteTarget] = useState<NewsItem | null>(null)
  const [toast, setToast] = useState('')

  useEffect(() => { setNews(mockStore.getNews()) }, [])

  const openAdd = () => { setEditItem(null); setForm(EMPTY); setShowModal(true) }
  const openEdit = (n: NewsItem) => { setEditItem(n); setForm({ title: n.title, category: n.category, excerpt: n.excerpt, content: n.content, image: n.image, date: n.date, author: n.author }); setShowModal(true) }
  const closeModal = () => { setShowModal(false); setEditItem(null) }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (editItem) {
      mockStore.updateNews(editItem.id, form)
      setToast('News item updated!')
    } else {
      mockStore.addNews(form)
      setToast('News item added!')
    }
    setNews(mockStore.getNews())
    closeModal()
  }

  const handleDelete = () => {
    if (!deleteTarget) return
    mockStore.deleteNews(deleteTarget.id)
    setNews(mockStore.getNews())
    setDeleteTarget(null)
    setToast('News item deleted.')
  }

  const f = (key: keyof Omit<NewsItem, 'id'>, val: string) =>
    setForm(prev => ({ ...prev, [key]: val }))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">News Management</h1>
          <p className="text-sm text-slate-500 mt-0.5">Create and manage news articles and announcements</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          <Plus size={16} /> Add News Item
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Title</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Category</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Author</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Date</th>
              <th className="text-center px-4 py-3 font-semibold text-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {news.map(n => (
              <tr key={n.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 max-w-xs">
                  <div className="flex items-center gap-3">
                    {n.image && <img src={n.image} alt="" className="w-10 h-10 rounded object-cover flex-shrink-0" />}
                    <div>
                      <p className="font-medium text-slate-800 line-clamp-1">{n.title}</p>
                      <p className="text-xs text-slate-400 line-clamp-1">{n.excerpt}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 bg-[#0b2545]/10 text-[#0b2545] rounded-full text-xs font-medium">{n.category}</span>
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs">{n.author}</td>
                <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">{n.date}</td>
                <td className="px-4 py-3 text-center">
                  <div className="inline-flex items-center gap-2">
                    <button onClick={() => openEdit(n)} className="p-1.5 rounded hover:bg-[#0b2545]/5 text-[#0b2545] transition-colors"><Pencil size={14} /></button>
                    <button onClick={() => setDeleteTarget(n)} className="p-1.5 rounded hover:bg-slate-100 text-slate-500 transition-colors"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {news.length === 0 && <div className="text-center py-12 text-slate-400">No news articles found.</div>}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white">
              <h2 className="font-display text-lg font-bold text-primary">{editItem ? 'Edit News Item' : 'Add News Item'}</h2>
              <button onClick={closeModal} className="p-1.5 rounded hover:bg-slate-100 text-slate-500"><X size={18} /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Title <span className="text-[#bfa15f]">*</span></label>
                <input required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.title} onChange={e => f('title', e.target.value)} placeholder="News article title" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Category <span className="text-[#bfa15f]">*</span></label>
                  <input required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.category} onChange={e => f('category', e.target.value)} placeholder="e.g. Research, Placement" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Author <span className="text-[#bfa15f]">*</span></label>
                  <input required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.author} onChange={e => f('author', e.target.value)} placeholder="Author name" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Date <span className="text-[#bfa15f]">*</span></label>
                  <input type="date" required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.date} onChange={e => f('date', e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Image URL</label>
                  <input className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.image} onChange={e => f('image', e.target.value)} placeholder="https://..." />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Excerpt <span className="text-[#bfa15f]">*</span></label>
                <textarea required rows={2} className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" value={form.excerpt} onChange={e => f('excerpt', e.target.value)} placeholder="Short summary shown in card view..." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Content <span className="text-[#bfa15f]">*</span></label>
                <textarea required rows={5} className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y" value={form.content} onChange={e => f('content', e.target.value)} placeholder="Full article content..." />
              </div>
              <div className="flex gap-3 pt-2 border-t border-slate-100">
                <button type="button" onClick={closeModal} className="flex-1 py-2 border border-slate-300 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/90">{editItem ? '✓ Update' : '+ Add News'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 text-center">
            <div className="w-12 h-12 bg-[#0b2545]/10 rounded-full flex items-center justify-center mx-auto mb-3"><Trash2 size={22} className="text-[#0b2545]" /></div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">Delete News Item?</h3>
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
