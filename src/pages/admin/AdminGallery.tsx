import React, { useState, useEffect } from 'react'
import { Pencil, Trash2, Plus, X, Image as ImageIcon } from 'lucide-react'
import { mockStore } from '../../data/mockStore'
import type { GalleryAlbum } from '../../data/mockStore'

const GALLERY_CATEGORIES = ['Technical Fest', 'Convocation', 'Sports', 'Cultural', 'Campus', 'Social', 'Academic', 'Other']

const EMPTY: Omit<GalleryAlbum, 'id'> = {
  title: '',
  description: '',
  date: new Date().toISOString().slice(0, 10),
  coverImage: '',
  photos: [],
  category: 'Other',
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t) }, [onClose])
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 text-sm font-medium">
      {message}<button onClick={onClose}><X size={14} /></button>
    </div>
  )
}

export default function AdminGallery() {
  const [albums, setAlbums] = useState<GalleryAlbum[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState<GalleryAlbum | null>(null)
  const [form, setForm] = useState<Omit<GalleryAlbum, 'id'>>(EMPTY)
  const [photosText, setPhotosText] = useState('')
  const [deleteTarget, setDeleteTarget] = useState<GalleryAlbum | null>(null)
  const [toast, setToast] = useState('')

  useEffect(() => { setAlbums(mockStore.getAlbums()) }, [])

  const openAdd = () => { setEditItem(null); setForm(EMPTY); setPhotosText(''); setShowModal(true) }
  const openEdit = (a: GalleryAlbum) => {
    setEditItem(a)
    setForm({ title: a.title, description: a.description, date: a.date, coverImage: a.coverImage, photos: a.photos, category: a.category })
    setPhotosText(a.photos.join('\n'))
    setShowModal(true)
  }
  const closeModal = () => { setShowModal(false); setEditItem(null) }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    const photosArr = photosText.split('\n').map(s => s.trim()).filter(Boolean)
    const payload = { ...form, photos: photosArr }
    if (editItem) { mockStore.updateAlbum(editItem.id, payload); setToast('Album updated!') }
    else { mockStore.addAlbum(payload); setToast('Album added!') }
    setAlbums(mockStore.getAlbums())
    closeModal()
  }

  const handleDelete = () => {
    if (!deleteTarget) return
    mockStore.deleteAlbum(deleteTarget.id)
    setAlbums(mockStore.getAlbums())
    setDeleteTarget(null)
    setToast('Album deleted.')
  }

  const f = <K extends keyof Omit<GalleryAlbum, 'id'>>(key: K, val: Omit<GalleryAlbum, 'id'>[K]) =>
    setForm(prev => ({ ...prev, [key]: val }))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">Gallery Management</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage photo albums and gallery collections</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          <Plus size={16} /> Add Album
        </button>
      </div>

      {/* Album Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map(album => (
          <div key={album.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-40 bg-slate-100">
              {album.coverImage ? (
                <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon size={32} className="text-slate-300" />
                </div>
              )}
              <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                {album.photos.length} photos
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-800 truncate">{album.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{album.date} · <span className="text-primary/80">{album.category}</span></p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{album.description}</p>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  <button onClick={() => openEdit(album)} className="p-1.5 rounded hover:bg-blue-50 text-blue-600 transition-colors"><Pencil size={14} /></button>
                  <button onClick={() => setDeleteTarget(album)} className="p-1.5 rounded hover:bg-red-50 text-red-500 transition-colors"><Trash2 size={14} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {albums.length === 0 && (
          <div className="col-span-3 text-center py-16 text-slate-400 bg-white border border-slate-200 rounded-lg">
            No albums found. Add your first album.
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white">
              <h2 className="font-display text-lg font-bold text-primary">{editItem ? 'Edit Album' : 'Add New Album'}</h2>
              <button onClick={closeModal} className="p-1.5 rounded hover:bg-slate-100 text-slate-500"><X size={18} /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Album Title <span className="text-red-500">*</span></label>
                <input required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.title} onChange={e => f('title', e.target.value)} placeholder="e.g. Technovanza 2025" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Description</label>
                <textarea rows={2} className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" value={form.description} onChange={e => f('description', e.target.value)} placeholder="Brief album description..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Date <span className="text-red-500">*</span></label>
                  <input type="date" required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.date} onChange={e => f('date', e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Category</label>
                  <select className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.category} onChange={e => f('category', e.target.value)}>
                    {GALLERY_CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Cover Image URL <span className="text-red-500">*</span></label>
                <input required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.coverImage} onChange={e => f('coverImage', e.target.value)} placeholder="https://picsum.photos/seed/album/800/500" />
              </div>
              {form.coverImage && (
                <img src={form.coverImage} alt="Preview" className="w-full h-28 object-cover rounded-lg border border-slate-200" />
              )}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Photo URLs <span className="text-slate-400">(one per line)</span></label>
                <textarea rows={4} className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y font-mono" value={photosText} onChange={e => setPhotosText(e.target.value)} placeholder={"https://example.com/photo1.jpg\nhttps://example.com/photo2.jpg"} />
                <p className="text-xs text-slate-400 mt-1">{photosText.split('\n').filter(s => s.trim()).length} photo(s) entered</p>
              </div>
              <div className="flex gap-3 pt-2 border-t border-slate-100">
                <button type="button" onClick={closeModal} className="flex-1 py-2 border border-slate-300 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/90">{editItem ? '✓ Update Album' : '+ Add Album'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3"><Trash2 size={22} className="text-red-600" /></div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">Delete Album?</h3>
            <p className="text-slate-500 text-sm mb-5">"{deleteTarget.title}" ({deleteTarget.photos.length} photos)</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="flex-1 py-2 border border-slate-300 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50">Cancel</button>
              <button onClick={handleDelete} className="flex-1 py-2 bg-red-600 text-white rounded font-semibold text-sm hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}

      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </div>
  )
}
