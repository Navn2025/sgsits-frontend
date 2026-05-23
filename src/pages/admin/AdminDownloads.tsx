import React, { useState } from 'react'
import CrudPage, { Modal, FormField, Input, Select, StatusBadge } from '../../components/admin/CrudPage'

interface GlobalDownload {
  id: string
  title: string
  description: string
  category: 'Forms' | 'Ordinances' | 'Brochures' | 'General'
  fileUrl: string
  fileSizeKb: number
  uploadedOn: string
  status: 'active' | 'inactive'
}

const INITIAL_DOWNLOADS: GlobalDownload[] = [
  { id: 'GD001', title: 'UG Academic Ordinance 2025', description: 'Rules and regulations governing undergraduate programs.', category: 'Ordinances', fileUrl: '/files/ordinance_ug_2025.pdf', fileSizeKb: 2048, uploadedOn: '2025-08-01', status: 'active' },
  { id: 'GD002', title: 'PhD Registration Application Form', description: 'Application form for new PhD candidates registration.', category: 'Forms', fileUrl: '/files/phd_registration_form.pdf', fileSizeKb: 512, uploadedOn: '2026-01-10', status: 'active' },
  { id: 'GD003', title: 'Institute Information Brochure 2025-26', description: 'Overview of academic courses, facilities, and departments.', category: 'Brochures', fileUrl: '/files/institute_brochure_2025.pdf', fileSizeKb: 4096, uploadedOn: '2025-06-15', status: 'active' },
  { id: 'GD004', title: 'Anti-Ragging Undertaking Form', description: 'Mandatory undertaking form to be signed by all students.', category: 'Forms', fileUrl: '/files/anti_ragging_form.pdf', fileSizeKb: 256, uploadedOn: '2025-07-20', status: 'active' },
]

const EMPTY_DOWNLOAD: Omit<GlobalDownload, 'id'> = {
  title: '',
  description: '',
  category: 'Forms',
  fileUrl: '',
  fileSizeKb: 100,
  uploadedOn: new Date().toISOString().slice(0, 10),
  status: 'active',
}

const AdminDownloads: React.FC = () => {
  const [downloads, setDownloads] = useState<GlobalDownload[]>(INITIAL_DOWNLOADS)
  const [isOpen, setIsOpen] = useState(false)
  const [editing, setEditing] = useState<GlobalDownload | null>(null)
  const [form, setForm] = useState(EMPTY_DOWNLOAD)
  const [saving, setSaving] = useState(false)

  const handleAdd = () => {
    setEditing(null)
    setForm({
      ...EMPTY_DOWNLOAD,
      uploadedOn: new Date().toISOString().slice(0, 10),
    })
    setIsOpen(true)
  }

  const handleEdit = (dl: GlobalDownload) => {
    setEditing(dl)
    setForm({
      title: dl.title,
      description: dl.description,
      category: dl.category,
      fileUrl: dl.fileUrl,
      fileSizeKb: dl.fileSizeKb,
      uploadedOn: dl.uploadedOn,
      status: dl.status,
    })
    setIsOpen(true)
  }

  const handleDelete = (dl: GlobalDownload) => {
    if (window.confirm(`Are you sure you want to delete download "${dl.title}"?`)) {
      setDownloads(prev => prev.filter(item => item.id !== dl.id))
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    await new Promise(r => setTimeout(r, 500))

    if (editing) {
      setDownloads(prev => prev.map(item => (item.id === editing.id ? { ...editing, ...form } : item)))
    } else {
      const id = `GD${String(downloads.length + 1).padStart(3, '0')}`
      setDownloads(prev => [...prev, { id, ...form }])
    }

    setSaving(false)
    setIsOpen(false)
  }

  const columns = [
    { header: 'Title', key: 'title' },
    { header: 'Category', key: 'category' },
    {
      header: 'Size',
      key: 'fileSizeKb',
      render: (dl: GlobalDownload) => (
        <span className="font-mono text-xs">{(dl.fileSizeKb / 1024).toFixed(2)} MB</span>
      ),
    },
    { header: 'Uploaded On', key: 'uploadedOn' },
    {
      header: 'Status',
      key: 'status',
      render: (dl: GlobalDownload) => (
        <StatusBadge label={dl.status} color={dl.status === 'active' ? 'green' : 'red'} />
      ),
    },
  ]

  return (
    <>
      <CrudPage
        title="Global Downloads"
        subtitle="Upload and manage institute brochures, application forms, and ordinance documents"
        addLabel="Add Download"
        data={downloads}
        columns={columns}
        searchKeys={['title', 'description', 'category']}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal isOpen={isOpen} title={editing ? `Edit Download — ${editing.id}` : 'Add Global Download'} onClose={() => setIsOpen(false)} width="max-w-md">
        <form onSubmit={handleSave} className="space-y-4">
          <FormField label="Document Title" required>
            <Input required value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. UG Syllabus 2026" />
          </FormField>

          <FormField label="Description">
            <Input value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="e.g. Detailed rules and syllabus breakdown" />
          </FormField>

          <FormField label="File URL" required>
            <Input required value={form.fileUrl} onChange={e => setForm(f => ({ ...f, fileUrl: e.target.value }))} placeholder="e.g. /files/syllabus.pdf" />
          </FormField>

          <div className="grid grid-cols-2 gap-3">
            <FormField label="Category" required>
              <Select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as GlobalDownload['category'] }))}>
                <option value="Forms">Forms</option>
                <option value="Ordinances">Ordinances</option>
                <option value="Brochures">Brochures</option>
                <option value="General">General</option>
              </Select>
            </FormField>

            <FormField label="File Size (KB)" required>
              <Input type="number" required value={form.fileSizeKb} onChange={e => setForm(f => ({ ...f, fileSizeKb: Number(e.target.value) }))} />
            </FormField>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <FormField label="Status" required>
              <Select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as GlobalDownload['status'] }))}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
            </FormField>

            <FormField label="Uploaded On" required>
              <Input type="date" required value={form.uploadedOn} onChange={e => setForm(f => ({ ...f, uploadedOn: e.target.value }))} />
            </FormField>
          </div>

          <div className="flex gap-3 pt-3 border-t border-slate-100">
            <button type="button" onClick={() => setIsOpen(false)} className="flex-1 py-2 border border-slate-200 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 py-2 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/90 disabled:opacity-60">{saving ? 'Saving...' : editing ? 'Update Document' : 'Upload Document'}</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AdminDownloads
