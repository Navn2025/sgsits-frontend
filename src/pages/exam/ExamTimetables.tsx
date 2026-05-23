import React, { useState, useEffect } from 'react'
import { PageHeader, PortalCard, PortalModal, Badge } from '../../components/layout/PortalLayout'
import { BRANCHES, COURSES } from '../../data/mockPortalData'
import { Plus, Search, Trash2, Globe, X } from 'lucide-react'

// Simple local Toast component
interface ToastProps {
  message: string
  onClose: () => void
}
const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3000)
    return () => clearTimeout(t)
  }, [onClose])
  
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-[#0b2545] text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 text-sm font-medium">
      {message}
      <button onClick={onClose} className="hover:text-slate-300">
        <X size={14} />
      </button>
    </div>
  )
}

interface TimetableItem {
  id: string
  title: string
  branch_id: string
  course_id: string
  semester: number
  type: 'Regular' | 'ATKT'
  dateAdded: string
  fileUrl: string
}

const MOCK_TIMETABLES: TimetableItem[] = [
  {
    id: 'tt1',
    title: 'BE CSE 5th Semester Regular Exam Timetable',
    branch_id: 'CSE',
    course_id: 'CSE-BE',
    semester: 5,
    type: 'Regular',
    dateAdded: '2026-05-15',
    fileUrl: 'https://sgsits.ac.in/exam/timetables/cse_5th_regular_2026.pdf',
  },
  {
    id: 'tt2',
    title: 'BE IT 3rd Semester ATKT Exam Timetable',
    branch_id: 'IT',
    course_id: 'IT-BE',
    semester: 3,
    type: 'ATKT',
    dateAdded: '2026-05-12',
    fileUrl: 'https://sgsits.ac.in/exam/timetables/it_3rd_atkt_2026.pdf',
  },
  {
    id: 'tt3',
    title: 'ME CSE 1st Semester Theory Exam Schedule',
    branch_id: 'CSE',
    course_id: 'CSE-ME',
    semester: 1,
    type: 'Regular',
    dateAdded: '2026-01-20',
    fileUrl: 'https://sgsits.ac.in/exam/timetables/cse_me_1st_theory_2026.pdf',
  },
]

const ExamTimetables: React.FC = () => {
  const [timetables, setTimetables] = useState<TimetableItem[]>(MOCK_TIMETABLES)
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [toast, setToast] = useState('')

  // Form State
  const [title, setTitle] = useState('')
  const [branch, setBranch] = useState('')
  const [course, setCourse] = useState('')
  const [semester, setSemester] = useState(1)
  const [type, setType] = useState<'Regular' | 'ATKT'>('Regular')
  const [fileUrl, setFileUrl] = useState('')

  const handleOpenAdd = () => {
    setTitle('')
    setBranch('')
    setCourse('')
    setSemester(1)
    setType('Regular')
    setFileUrl('')
    setShowModal(true)
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !branch || !course || !fileUrl) {
      setToast('Please fill all fields.')
      return
    }

    const newItem: TimetableItem = {
      id: `tt${Date.now()}`,
      title,
      branch_id: branch,
      course_id: course,
      semester: Number(semester),
      type,
      dateAdded: new Date().toISOString().slice(0, 10),
      fileUrl,
    }

    setTimetables(prev => [newItem, ...prev])
    setToast('Timetable uploaded successfully.')
    setShowModal(false)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this timetable?')) {
      setTimetables(prev => prev.filter(t => t.id !== id))
      setToast('Timetable deleted successfully.')
    }
  }

  const filteredTimetables = timetables.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.branch_id.toLowerCase().includes(search.toLowerCase())
  )

  const filteredCourses = COURSES.filter(c => c.branch_id === branch)

  return (
    <div className="space-y-5">
      <PageHeader
        title="Exam Timetables"
        subtitle="Upload and manage course-wise / semester-wise / exam-type examination timetables"
        action={
          <button
            onClick={handleOpenAdd}
            className="bg-primary hover:bg-primary/95 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
          >
            <Plus size={15} />
            <span>Upload Timetable</span>
          </button>
        }
      />

      <div className="flex items-center gap-3 bg-white p-3 border border-slate-200 rounded-xl shadow-sm">
        <Search className="text-slate-400 shrink-0" size={18} />
        <input
          type="text"
          placeholder="Search timetables by title, branch..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full text-sm text-slate-700 bg-transparent focus:outline-none"
        />
      </div>

      <PortalCard>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Title</th>
                <th className="text-left px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Course / Branch</th>
                <th className="text-center px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Sem</th>
                <th className="text-center px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Uploaded On</th>
                <th className="text-center px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTimetables.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-slate-400 text-xs">
                    No timetables found. Upload one to get started.
                  </td>
                </tr>
              ) : (
                filteredTimetables.map(tt => (
                  <tr key={tt.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-4 py-3">
                      <a
                        href={tt.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-800 hover:text-primary hover:underline block"
                      >
                        {tt.title}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-slate-600 text-xs font-semibold">
                      {COURSES.find(c => c.id === tt.course_id)?.name || tt.course_id} ({tt.branch_id})
                    </td>
                    <td className="px-4 py-3 text-center text-slate-600 text-xs font-bold">
                      {tt.semester}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge
                        label={tt.type}
                        variant={tt.type === 'Regular' ? 'info' : 'warning'}
                      />
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs font-semibold whitespace-nowrap">
                      {tt.dateAdded}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <a
                          href={tt.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-slate-500 hover:text-primary hover:bg-slate-100 rounded transition-colors"
                          title="Open Timetable PDF"
                        >
                          <Globe size={13} />
                        </a>
                        <button
                          onClick={() => handleDelete(tt.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Delete Timetable"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </PortalCard>

      {/* Add Modal */}
      <PortalModal isOpen={showModal} title="Upload Exam Timetable" onClose={() => setShowModal(false)}>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
              Timetable Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g. BE V Sem CSE Regular Exam Timetable"
              className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                Branch
              </label>
              <select
                value={branch}
                onChange={e => setBranch(e.target.value)}
                required
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-primary"
              >
                <option value="">Select Branch</option>
                {BRANCHES.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.shortName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                Course
              </label>
              <select
                value={course}
                onChange={e => setCourse(e.target.value)}
                disabled={!branch}
                required
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-primary disabled:opacity-60 disabled:bg-slate-50"
              >
                <option value="">Select Course</option>
                {filteredCourses.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                Semester
              </label>
              <select
                value={semester}
                onChange={e => setSemester(Number(e.target.value))}
                required
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-primary"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <option key={sem} value={sem}>
                    Semester {sem}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                Exam Type
              </label>
              <select
                value={type}
                onChange={e => setType(e.target.value as 'Regular' | 'ATKT')}
                required
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-primary"
              >
                <option value="Regular">Regular</option>
                <option value="ATKT">ATKT</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
              File Attachment URL
            </label>
            <input
              type="url"
              required
              value={fileUrl}
              onChange={e => setFileUrl(e.target.value)}
              placeholder="https://example.com/exam/timetables/timetable.pdf"
              className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="flex-1 py-2 border border-slate-200 text-slate-700 rounded font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/95 transition-colors"
            >
              Upload Timetable
            </button>
          </div>
        </form>
      </PortalModal>

      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </div>
  )
}

export default ExamTimetables
