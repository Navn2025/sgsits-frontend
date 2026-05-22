import React, { useState, useEffect } from 'react'
import { Pencil, Trash2, Plus, X, Calendar, MapPin } from 'lucide-react'
import { mockStore } from '../../data/mockStore'
import type { EventItem } from '../../data/mockStore'

const EVENT_CATEGORIES = ['Technical', 'Academic', 'Cultural', 'Social', 'Placement', 'Workshop', 'Sports', 'Other']

const EMPTY: Omit<EventItem, 'id'> = {
  title: '',
  description: '',
  venue: '',
  date: new Date().toISOString().slice(0, 10),
  time: '10:00 AM',
  category: 'Academic',
  image: '',
  registrationUrl: '',
}

const catColors: Record<string, string> = {
  Technical: 'bg-blue-100 text-blue-700',
  Academic: 'bg-indigo-100 text-indigo-700',
  Cultural: 'bg-pink-100 text-pink-700',
  Social: 'bg-green-100 text-green-700',
  Placement: 'bg-yellow-100 text-yellow-700',
  Workshop: 'bg-orange-100 text-orange-700',
  Sports: 'bg-teal-100 text-teal-700',
  Other: 'bg-slate-100 text-slate-700',
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t) }, [onClose])
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 text-sm font-medium">
      {message}<button onClick={onClose}><X size={14} /></button>
    </div>
  )
}

export default function AdminEvents() {
  const [events, setEvents] = useState<EventItem[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState<EventItem | null>(null)
  const [form, setForm] = useState<Omit<EventItem, 'id'>>(EMPTY)
  const [deleteTarget, setDeleteTarget] = useState<EventItem | null>(null)
  const [toast, setToast] = useState('')

  useEffect(() => { setEvents(mockStore.getEvents()) }, [])

  const openAdd = () => { setEditItem(null); setForm(EMPTY); setShowModal(true) }
  const openEdit = (e: EventItem) => {
    setEditItem(e)
    setForm({ title: e.title, description: e.description, venue: e.venue, date: e.date, time: e.time, category: e.category, image: e.image ?? '', registrationUrl: e.registrationUrl ?? '' })
    setShowModal(true)
  }
  const closeModal = () => { setShowModal(false); setEditItem(null) }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (editItem) { mockStore.updateEvent(editItem.id, form); setToast('Event updated!') }
    else { mockStore.addEvent(form); setToast('Event added!') }
    setEvents(mockStore.getEvents())
    closeModal()
  }

  const handleDelete = () => {
    if (!deleteTarget) return
    mockStore.deleteEvent(deleteTarget.id)
    setEvents(mockStore.getEvents())
    setDeleteTarget(null)
    setToast('Event deleted.')
  }

  const f = (key: keyof Omit<EventItem, 'id'>, val: string) =>
    setForm(prev => ({ ...prev, [key]: val }))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">Events Management</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage upcoming events, workshops and programs</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">
          <Plus size={16} /> Add New Event
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Title</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Venue</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Date & Time</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Category</th>
              <th className="text-center px-4 py-3 font-semibold text-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {events.map(ev => (
              <tr key={ev.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 max-w-xs">
                  <div className="flex items-center gap-3">
                    {ev.image && <img src={ev.image} alt="" className="w-10 h-10 rounded object-cover flex-shrink-0" />}
                    <p className="font-medium text-slate-800 line-clamp-2">{ev.title}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs">
                  <div className="flex items-center gap-1"><MapPin size={11} />{ev.venue}</div>
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">
                  <div className="flex items-center gap-1"><Calendar size={11} />{ev.date}</div>
                  <div className="text-slate-400 mt-0.5">{ev.time}</div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${catColors[ev.category] ?? 'bg-slate-100 text-slate-700'}`}>{ev.category}</span>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="inline-flex items-center gap-2">
                    <button onClick={() => openEdit(ev)} className="p-1.5 rounded hover:bg-blue-50 text-blue-600 transition-colors"><Pencil size={14} /></button>
                    <button onClick={() => setDeleteTarget(ev)} className="p-1.5 rounded hover:bg-red-50 text-red-500 transition-colors"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {events.length === 0 && <div className="text-center py-12 text-slate-400">No events found.</div>}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white">
              <h2 className="font-display text-lg font-bold text-primary">{editItem ? 'Edit Event' : 'Add New Event'}</h2>
              <button onClick={closeModal} className="p-1.5 rounded hover:bg-slate-100 text-slate-500"><X size={18} /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Title <span className="text-red-500">*</span></label>
                <input required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.title} onChange={e => f('title', e.target.value)} placeholder="Event title" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Description <span className="text-red-500">*</span></label>
                <textarea required rows={3} className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" value={form.description} onChange={e => f('description', e.target.value)} placeholder="Event description..." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Venue <span className="text-red-500">*</span></label>
                <input required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.venue} onChange={e => f('venue', e.target.value)} placeholder="e.g. Auditorium, SGSITS" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Date <span className="text-red-500">*</span></label>
                  <input type="date" required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.date} onChange={e => f('date', e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Time <span className="text-red-500">*</span></label>
                  <input required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.time} onChange={e => f('time', e.target.value)} placeholder="10:00 AM" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Category <span className="text-red-500">*</span></label>
                  <select required className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.category} onChange={e => f('category', e.target.value)}>
                    {EVENT_CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Image URL</label>
                  <input className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.image ?? ''} onChange={e => f('image', e.target.value)} placeholder="https://..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Registration URL</label>
                  <input className="border border-slate-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" value={form.registrationUrl ?? ''} onChange={e => f('registrationUrl', e.target.value)} placeholder="https://..." />
                </div>
              </div>
              <div className="flex gap-3 pt-2 border-t border-slate-100">
                <button type="button" onClick={closeModal} className="flex-1 py-2 border border-slate-300 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/90">{editItem ? '✓ Update Event' : '+ Add Event'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3"><Trash2 size={22} className="text-red-600" /></div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">Delete Event?</h3>
            <p className="text-slate-500 text-sm mb-5">"{deleteTarget.title}"</p>
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
