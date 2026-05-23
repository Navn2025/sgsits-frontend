import React, { useState } from 'react'
import CrudPage, { Modal, FormField, Input, Select, Textarea } from '../../components/admin/CrudPage'

interface StaticPage {
  id: string
  title: string
  section: 'About' | 'Academics' | 'Admission' | 'Explore'
  lastUpdated: string
  updatedBy: string
  metaDescription: string
  content: string
}

const INITIAL_PAGES: StaticPage[] = [
  { id: 'about-institute', title: 'About Institute', section: 'About', lastUpdated: '2026-04-10', updatedBy: 'Admin Office', metaDescription: 'Learn about the history, autonomous status, and government-aided status of SGSITS Indore.', content: 'Shri Govindram Seksaria Institute of Technology and Science (SGSITS) Indore was established in 1952...' },
  { id: 'vision-mission', title: 'Vision & Mission', section: 'About', lastUpdated: '2026-03-12', updatedBy: 'Admin Office', metaDescription: 'The strategic vision, core values, and mission statements of SGSITS Indore.', content: 'A research-driven autonomous technical institution of excellence...' },
  { id: 'director-message', title: "Director's Message", section: 'About', lastUpdated: '2026-05-02', updatedBy: 'Director Office', metaDescription: 'Welcome message from the Director of SGSITS Indore.', content: 'Welcome to Shri Govindram Seksaria Institute of Technology and Science...' },
  { id: 'admission-ug', title: 'UG Admissions guidelines', section: 'Admission', lastUpdated: '2026-05-18', updatedBy: 'Admission Cell', metaDescription: 'Instructions, eligibility, and links to apply for undergraduate engineering admissions.', content: 'Undergraduate admissions to B.E./B.Tech. courses are processed via DTE Madhya Pradesh counselling...' },
]

const EMPTY_PAGE: Omit<StaticPage, 'id'> = {
  title: '',
  section: 'About',
  lastUpdated: new Date().toISOString().slice(0, 10),
  updatedBy: 'Admin Office',
  metaDescription: '',
  content: '',
}

const AdminStaticPages: React.FC = () => {
  const [pages, setPages] = useState<StaticPage[]>(INITIAL_PAGES)
  const [isOpen, setIsOpen] = useState(false)
  const [editing, setEditing] = useState<StaticPage | null>(null)
  const [form, setForm] = useState(EMPTY_PAGE)
  const [saving, setSaving] = useState(false)

  const handleAdd = () => {
    setEditing(null)
    setForm({
      ...EMPTY_PAGE,
      lastUpdated: new Date().toISOString().slice(0, 10),
    })
    setIsOpen(true)
  }

  const handleEdit = (p: StaticPage) => {
    setEditing(p)
    setForm({
      title: p.title,
      section: p.section,
      lastUpdated: p.lastUpdated,
      updatedBy: p.updatedBy,
      metaDescription: p.metaDescription,
      content: p.content,
    })
    setIsOpen(true)
  }

  const handleDelete = (p: StaticPage) => {
    if (window.confirm(`Are you sure you want to delete static page "${p.title}"?`)) {
      setPages(prev => prev.filter(item => item.id !== p.id))
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    await new Promise(r => setTimeout(r, 500))

    if (editing) {
      setPages(prev => prev.map(item => (item.id === editing.id ? { ...editing, ...form } : item)))
    } else {
      const id = form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      setPages(prev => [...prev, { id, ...form }])
    }

    setSaving(false)
    setIsOpen(false)
  }

  const columns = [
    { header: 'Page Title', key: 'title' },
    { header: 'Section', key: 'section' },
    { header: 'Meta Description', key: 'metaDescription', className: 'max-w-[200px] truncate' },
    { header: 'Last Updated', key: 'lastUpdated' },
    { header: 'Updated By', key: 'updatedBy' },
  ]

  return (
    <>
      <CrudPage
        title="Static Pages Content"
        subtitle="Modify information, headers, and meta tags for main public pages"
        addLabel="Add Page"
        data={pages}
        columns={columns}
        searchKeys={['title', 'section', 'metaDescription']}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal isOpen={isOpen} title={editing ? `Edit Page — ${editing.id}` : 'Create Static Page'} onClose={() => setIsOpen(false)} width="max-w-2xl">
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <FormField label="Page Title" required>
              <Input required value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. History & Milestones" />
            </FormField>

            <FormField label="Website Section" required>
              <Select value={form.section} onChange={e => setForm(f => ({ ...f, section: e.target.value as StaticPage['section'] }))}>
                <option value="About">About Us</option>
                <option value="Academics">Academics</option>
                <option value="Admission">Admissions</option>
                <option value="Explore">Explore</option>
              </Select>
            </FormField>
          </div>

          <FormField label="Meta Description (SEO)" required>
            <Input required value={form.metaDescription} onChange={e => setForm(f => ({ ...f, metaDescription: e.target.value }))} placeholder="A short description of this page for search engines..." />
          </FormField>

          <FormField label="Page Markdown Content" required>
            <Textarea required value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} rows={8} placeholder="Enter markdown or text content of the page here..." />
          </FormField>

          <div className="grid grid-cols-2 gap-3">
            <FormField label="Last Updated" required>
              <Input type="date" required value={form.lastUpdated} onChange={e => setForm(f => ({ ...f, lastUpdated: e.target.value }))} />
            </FormField>

            <FormField label="Updated By Office" required>
              <Input required value={form.updatedBy} onChange={e => setForm(f => ({ ...f, updatedBy: e.target.value }))} />
            </FormField>
          </div>

          <div className="flex gap-3 pt-3 border-t border-slate-100">
            <button type="button" onClick={() => setIsOpen(false)} className="flex-1 py-2 border border-slate-200 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 py-2 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/90 disabled:opacity-60">{saving ? 'Saving...' : editing ? 'Update Page Content' : 'Publish Page'}</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AdminStaticPages
