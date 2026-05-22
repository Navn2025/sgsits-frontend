/**
 * SGSITS Mock Data Store
 * In-memory reactive store with full CRUD.
 * Replace with real API calls when the backend is ready.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Notice {
  id: string
  title: string
  category: 'academic' | 'administrative' | 'exam' | 'tender' | 'general'
  date: string        // YYYY-MM-DD
  highlight: boolean
  fileUrl?: string
}

export interface NewsItem {
  id: string
  title: string
  category: string
  excerpt: string
  content: string
  image?: string
  date: string
  author: string
}

export interface EventItem {
  id: string
  title: string
  description: string
  venue: string
  date: string        // YYYY-MM-DD
  time: string
  category: string
  image?: string
  registrationUrl?: string
}

export interface Tender {
  id: string
  title: string
  refNo: string
  publishDate: string
  dueDate: string
  status: 'Open' | 'Closed' | 'Extended'
  amount?: string
  fileUrl?: string
}

export interface Alert {
  id: string
  text: string
  isActive: boolean
  priority: number    // 1 = shown first
  link?: string
}

export interface FacultyMember {
  id: string
  name: string
  designation: string
  department: string
  email: string
  phone?: string
  photo?: string
  qualification: string
  specialization: string
  experience: string
  publications: number
}

export interface GalleryAlbum {
  id: string
  title: string
  description: string
  date: string
  coverImage: string
  photos: string[]
  category: string
}

export interface PlacementRecord {
  year: string
  studentsPlaced: number
  companies: number
  highestPackage: string
  averagePackage: string
  topRecruiters: string[]
}

// ─── Seed data ───────────────────────────────────────────────────────────────

const seed_notices: Notice[] = [
  { id: 'n1',  title: 'Information Bulletin regarding B.Tech Admissions 2025-26',         category: 'academic',        date: '2025-05-20', highlight: true },
  { id: 'n2',  title: 'Result of MBA (Financial Administration) II Sem Examination',      category: 'exam',            date: '2025-05-10', highlight: false },
  { id: 'n3',  title: 'Revised Academic Calendar for UG & PG classes 2024-25',            category: 'academic',        date: '2025-05-08', highlight: false },
  { id: 'n4',  title: 'Schedule of Internal Assessment Tests — Even Semester 2025',       category: 'exam',            date: '2025-05-02', highlight: false },
  { id: 'n5',  title: 'Instructions for students regarding uniform and general discipline', category: 'administrative', date: '2025-04-28', highlight: false },
  { id: 'n6',  title: 'Tender notice for laboratory equipment procurement batch 2025',    category: 'tender',          date: '2025-04-20', highlight: false },
  { id: 'n7',  title: 'Notice regarding hostel fee payment deadlines for current session', category: 'administrative', date: '2025-04-15', highlight: false },
  { id: 'n8',  title: 'Ph.D. Admissions open for 2025-26 — apply before June 15',         category: 'academic',        date: '2025-04-10', highlight: true  },
  { id: 'n9',  title: 'National Conference on Emerging Technologies — Call for Papers',    category: 'general',         date: '2025-04-05', highlight: false },
  { id: 'n10', title: 'Scholarship application portal open for SC/ST/OBC students',       category: 'general',         date: '2025-03-28', highlight: false },
  { id: 'n11', title: 'Fee payment deadline for odd semester 2025-26 — July 31',          category: 'administrative',  date: '2025-03-20', highlight: false },
  { id: 'n12', title: 'Postponement of end semester examination — new schedule notified', category: 'exam',            date: '2025-03-15', highlight: false },
  { id: 'n13', title: 'Convocation 2025 registration form — fill by April 25',            category: 'academic',        date: '2025-03-10', highlight: false },
  { id: 'n14', title: 'Anti-ragging policy 2025 — mandatory acknowledgment form',         category: 'administrative',  date: '2025-03-01', highlight: false },
]

const seed_news: NewsItem[] = [
  { id: 'nw1', title: 'SGSITS secures ₹2.4 Cr DST-SERB grant for renewable energy grid research', category: 'Research',     excerpt: 'Prof. R.K. Nema and team receive prestigious DST-SERB funding to develop intelligent power distribution grids.', content: '', image: 'https://picsum.photos/seed/sgsfeature/800/500',  date: '2025-05-15', author: 'SGSITS PR Cell' },
  { id: 'nw2', title: 'AI Lab launches NVIDIA Jetson-based autonomous robot research program',       category: 'Achievement',  excerpt: 'Students can now build and deploy edge-computing robots for real-world applications.', content: '', image: 'https://picsum.photos/seed/sgsai25/800/500',     date: '2025-05-18', author: 'Dept. of CE' },
  { id: 'nw3', title: 'Record ₹45 LPA package at Microsoft — highest in state for batch 2025',     category: 'Achievement',  excerpt: 'A final-year CE student secured the highest campus placement in MP.', content: '', image: 'https://picsum.photos/seed/sgspl25/800/500',     date: '2025-05-12', author: 'T&P Cell' },
  { id: 'nw4', title: 'SGSITS cricket team wins inter-university championship 2nd consecutive year', category: 'Event',       excerpt: 'The team defeated rival institutes in a hard-fought final at DAVV ground, Indore.', content: '', image: 'https://picsum.photos/seed/sgssp25/800/500',     date: '2025-05-05', author: 'Sports Committee' },
  { id: 'nw5', title: 'Pharmacy breakthrough: Novel drug carrier approved for oncology trials',     category: 'Research',     excerpt: 'Bio-compatibility study paves new avenues for highly target-specific cancer treatments.', content: '', image: 'https://picsum.photos/seed/sgsbio25/800/500',    date: '2025-04-28', author: 'Dept. of Pharmacy' },
  { id: 'nw6', title: 'New ₹8 Cr central instrumentation lab inaugurated by Hon. Governor',         category: 'Achievement',  excerpt: 'Facility will support advanced research in materials science and nano-technology.', content: '', image: 'https://picsum.photos/seed/sgsinf25/800/500',    date: '2025-04-15', author: 'SGSITS PR Cell' },
  { id: 'nw7', title: 'SGSITS ranked #1 in M.P. in NIRF 2025 engineering rankings',                 category: 'Achievement',  excerpt: 'SGSITS ranked first among all engineering institutions in Madhya Pradesh.', content: '', image: 'https://picsum.photos/seed/sgsawd25/800/500',    date: '2025-04-05', author: 'Academic Section' },
  { id: 'nw8', title: 'MoU signed with Tata Technologies for student training programs',             category: 'Industry',     excerpt: '3-year partnership to provide 500+ students with hands-on automotive and manufacturing training.', content: '', image: 'https://picsum.photos/seed/sgsmou25/800/500', date: '2025-03-20', author: 'Industry Liaison Cell' },
]

const seed_events: EventItem[] = [
  { id: 'ev1', title: 'Institute Day 2025',                      description: 'Grand convocation & prize distribution ceremony for graduating batch 2024-25. Chief Guest: Secretary, AICTE.', venue: 'SGSITS Main Auditorium',        date: '2025-06-15', time: '10:00 AM', category: 'Academic',   image: 'https://picsum.photos/seed/sgsevd1/600/400' },
  { id: 'ev2', title: 'TechFest: Invictus 2025',                description: 'National-level technical competition with 5000+ participants from 120+ colleges.', venue: 'SGSITS Campus',                  date: '2025-06-22', time: '09:00 AM', category: 'Technical',  image: 'https://picsum.photos/seed/sgsevd2/600/400', registrationUrl: '/events' },
  { id: 'ev3', title: 'Campus Placement Drive — TCS & Infosys', description: 'Placement drive for final year B.Tech, MCA & MBA students. Aptitude test followed by technical rounds.', venue: 'Placement Cell, Admin Block', date: '2025-07-05', time: '08:30 AM', category: 'Placement', image: 'https://picsum.photos/seed/sgsevd3/600/400' },
  { id: 'ev4', title: 'Annual Research Symposium 2025',          description: 'PhD scholars present research works; industry leaders invited for collaboration and feedback.', venue: 'Seminar Hall, Academic Block',  date: '2025-07-12', time: '10:00 AM', category: 'Academic',   image: 'https://picsum.photos/seed/sgsevd4/600/400' },
  { id: 'ev5', title: 'Rhythm 2025 — Cultural Festival',         description: '3-day cultural extravaganza with music, dance, drama, and celebrity performances.', venue: 'SGSITS Amphitheatre',            date: '2025-08-20', time: '05:00 PM', category: 'Cultural',   image: 'https://picsum.photos/seed/sgsevd5/600/400' },
  { id: 'ev6', title: 'National Sports Day — Athletics Meet',    description: 'Inter-department athletics meet with track events, field events and combat sports.', venue: 'SGSITS Sports Ground',          date: '2025-08-29', time: '07:00 AM', category: 'Sports',     image: 'https://picsum.photos/seed/sgsevd6/600/400' },
]

const seed_tenders: Tender[] = [
  { id: 't1', title: 'Supply of Laboratory Equipment for ECE Department',          refNo: 'SGSITS/Tender/2025/045', publishDate: '2025-05-10', dueDate: '2025-05-30', status: 'Open',   amount: '₹12,00,000' },
  { id: 't2', title: 'Annual Maintenance Contract for Computer Center (2025–26)',  refNo: 'SGSITS/Tender/2025/039', publishDate: '2025-04-25', dueDate: '2025-05-20', status: 'Open',   amount: '₹4,50,000'  },
  { id: 't3', title: 'Mess Catering Services for Boys & Girls Hostels',            refNo: 'SGSITS/Tender/2025/032', publishDate: '2025-04-10', dueDate: '2025-04-30', status: 'Closed', amount: '₹38,00,000' },
  { id: 't4', title: 'Civil Works — Renovation of Administrative Block',           refNo: 'SGSITS/Tender/2025/028', publishDate: '2025-03-20', dueDate: '2025-04-10', status: 'Closed', amount: '₹75,00,000' },
  { id: 't5', title: 'Supply of Furniture for New Classroom Block',                refNo: 'SGSITS/Tender/2025/051', publishDate: '2025-05-18', dueDate: '2025-06-10', status: 'Open',   amount: '₹8,50,000'  },
]

const seed_alerts: Alert[] = [
  { id: 'al1', text: 'B.Tech Admissions 2025-26 Information Bulletin now available', isActive: true,  priority: 1, link: '/notices' },
  { id: 'al2', text: 'Rolling Advertisement No SGSITS/R/3/2025 — visit sgsits.ac.in for applications', isActive: true, priority: 2, link: '/notices' },
  { id: 'al3', text: 'End Semester Examinations begin June 1, 2025 — Check timetable on notice board', isActive: true, priority: 3, link: '/notices' },
  { id: 'al4', text: 'TechFest Invictus 2025 — Register now before June 10!', isActive: false, priority: 4, link: '/events' },
]

const seed_faculty: FacultyMember[] = [
  { id: 'f1', name: 'Dr. Urjita Thakar',   designation: 'Professor & Head',    department: 'Computer Engineering',            email: 'thakarurjita@gmail.com',    phone: '0731-2582401', photo: '', qualification: 'Ph.D (IIT Bombay)',   specialization: 'Distributed Systems, Network Security', experience: '24 years', publications: 42 },
  { id: 'f2', name: 'Dr. K.K. Sharma',     designation: 'Professor & Head',    department: 'Information Technology',          email: 'kkssgs@gmail.com',          phone: '0731-2582260', photo: '', qualification: 'Ph.D (SGSITS)',       specialization: 'Database Systems, Data Mining',         experience: '26 years', publications: 35 },
  { id: 'f3', name: 'Dr. R.K. Khare',      designation: 'Professor & Head',    department: 'Civil Engineering',               email: 'rakeshkhare@hotmail.com',   phone: '0731-2582310', photo: '', qualification: 'Ph.D (IIT Roorkee)',  specialization: 'Structural Analysis, Seismic Engineering', experience: '29 years', publications: 68 },
  { id: 'f4', name: 'Dr. H.K. Verma',      designation: 'Professor & Head',    department: 'Electrical Engineering',          email: 'hverma@sgsits.ac.in',       phone: '0731-2582350', photo: '', qualification: 'Ph.D (IIT Kanpur)',   specialization: 'Power Systems, Renewable Energy',       experience: '24 years', publications: 51 },
  { id: 'f5', name: 'Dr. Satish Jain',     designation: 'Professor & Head',    department: 'Electronics & Telecommunication', email: 'satishjain.jain@gmail.com', phone: '0731-2582451', photo: '', qualification: 'Ph.D (IIT Delhi)',    specialization: 'VLSI Design, Signal Processing',        experience: '25 years', publications: 44 },
  { id: 'f6', name: 'Dr. P.K. Mishra',     designation: 'Professor',           department: 'Mechanical Engineering',          email: 'pkmishra@sgsits.ac.in',     phone: '0731-2582280', photo: '', qualification: 'Ph.D (IIT Bombay)',   specialization: 'Thermal Engineering, Fluid Mechanics',  experience: '22 years', publications: 38 },
  { id: 'f7', name: 'Dr. Neha Gupta',      designation: 'Associate Professor', department: 'Computer Engineering',            email: 'nehagupta@sgsits.ac.in',    phone: '',             photo: '', qualification: 'Ph.D (MANIT Bhopal)', specialization: 'Machine Learning, IoT',                 experience: '15 years', publications: 29 },
  { id: 'f8', name: 'Dr. A.K. Patidar',    designation: 'Professor & Head',    department: 'Applied Mathematics',             email: 'akpatidar@sgsits.ac.in',    phone: '0731-2582200', photo: '', qualification: 'Ph.D (IIT Bombay)',   specialization: 'Numerical Analysis, Graph Theory',      experience: '21 years', publications: 47 },
]

const seed_albums: GalleryAlbum[] = [
  { id: 'ga1', title: 'Convocation 2024',          description: '71st Annual Convocation — degree distribution to graduating batch 2023-24.', date: '2024-11-15', coverImage: 'https://picsum.photos/seed/sgsalb1/800/600', photos: Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/sgsalb1p${i}/600/400`), category: 'Convocation' },
  { id: 'ga2', title: 'TechFest Invictus 2024',    description: 'National-level technical festival with 4000+ participants from 100+ colleges.', date: '2024-09-20', coverImage: 'https://picsum.photos/seed/sgsalb2/800/600', photos: Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/sgsalb2p${i}/600/400`), category: 'Technical Fest' },
  { id: 'ga3', title: 'Sports Day 2024',            description: 'Annual inter-department athletics meet and sports championship.', date: '2024-08-29', coverImage: 'https://picsum.photos/seed/sgsalb3/800/600', photos: Array.from({ length: 8  }, (_, i) => `https://picsum.photos/seed/sgsalb3p${i}/600/400`), category: 'Sports' },
  { id: 'ga4', title: 'Rhythm Cultural Fest 2024', description: '3-day cultural extravaganza with music, dance, drama and celebrity performances.', date: '2024-02-20', coverImage: 'https://picsum.photos/seed/sgsalb4/800/600', photos: Array.from({ length: 15 }, (_, i) => `https://picsum.photos/seed/sgsalb4p${i}/600/400`), category: 'Cultural' },
  { id: 'ga5', title: 'Campus Views',              description: 'A visual tour of SGSITS — buildings, labs, gardens and sports facilities.', date: '2024-01-01', coverImage: 'https://picsum.photos/seed/sgsalb5/800/600', photos: Array.from({ length: 20 }, (_, i) => `https://picsum.photos/seed/sgsalb5p${i}/600/400`), category: 'Campus' },
  { id: 'ga6', title: 'Industry Visit — Infosys',  description: 'Students from CE & IT visit Infosys Pune campus for industrial exposure.', date: '2024-03-10', coverImage: 'https://picsum.photos/seed/sgsalb6/800/600', photos: Array.from({ length: 6  }, (_, i) => `https://picsum.photos/seed/sgsalb6p${i}/600/400`), category: 'Academic' },
]

const seed_placement: PlacementRecord[] = [
  { year: '2023-24', studentsPlaced: 1820, companies: 245, highestPackage: '₹45 LPA', averagePackage: '₹6.8 LPA', topRecruiters: ['Microsoft', 'TCS', 'Infosys', 'Wipro', 'L&T', 'DRDO', 'Capgemini', 'HCL'] },
  { year: '2022-23', studentsPlaced: 1650, companies: 210, highestPackage: '₹38 LPA', averagePackage: '₹5.9 LPA', topRecruiters: ['Amazon', 'Cognizant', 'TCS', 'Wipro', 'Bosch', 'BPCL', 'Infosys', 'HCL'] },
  { year: '2021-22', studentsPlaced: 1540, companies: 190, highestPackage: '₹32 LPA', averagePackage: '₹5.2 LPA', topRecruiters: ['TCS', 'Infosys', 'Wipro', 'L&T', 'DRDO', 'Tech Mahindra', 'Capgemini'] },
  { year: '2020-21', studentsPlaced: 1380, companies: 165, highestPackage: '₹28 LPA', averagePackage: '₹4.8 LPA', topRecruiters: ['TCS', 'Infosys', 'Wipro', 'HCL', 'L&T', 'DRDO', 'ONGC'] },
  { year: '2019-20', studentsPlaced: 1290, companies: 148, highestPackage: '₹22 LPA', averagePackage: '₹4.1 LPA', topRecruiters: ['TCS', 'Cognizant', 'Infosys', 'L&T', 'BHEL', 'HCL', 'Accenture'] },
]

// ─── In-memory mutable store ──────────────────────────────────────────────────

let _notices:   Notice[]         = [...seed_notices]
let _news:      NewsItem[]       = [...seed_news]
let _events:    EventItem[]      = [...seed_events]
let _tenders:   Tender[]         = [...seed_tenders]
let _alerts:    Alert[]          = [...seed_alerts]
let _faculty:   FacultyMember[]  = [...seed_faculty]
let _albums:    GalleryAlbum[]   = [...seed_albums]
let _placement: PlacementRecord[] = [...seed_placement]

const uid = () => Math.random().toString(36).slice(2, 10)

export const mockStore = {
  // Notices
  getNotices:   ()                                       => [..._notices],
  addNotice:    (d: Omit<Notice, 'id'>)                  => { const n = { ...d, id: uid() }; _notices = [n, ..._notices]; return n },
  updateNotice: (id: string, d: Partial<Notice>)         => { _notices = _notices.map(n => n.id === id ? { ...n, ...d } : n) },
  deleteNotice: (id: string)                             => { _notices = _notices.filter(n => n.id !== id) },

  // News
  getNews:      ()                                       => [..._news],
  addNews:      (d: Omit<NewsItem, 'id'>)                => { const n = { ...d, id: uid() }; _news = [n, ..._news]; return n },
  updateNews:   (id: string, d: Partial<NewsItem>)       => { _news = _news.map(n => n.id === id ? { ...n, ...d } : n) },
  deleteNews:   (id: string)                             => { _news = _news.filter(n => n.id !== id) },

  // Events
  getEvents:    ()                                       => [..._events],
  addEvent:     (d: Omit<EventItem, 'id'>)               => { const e = { ...d, id: uid() }; _events = [..._events, e]; return e },
  updateEvent:  (id: string, d: Partial<EventItem>)      => { _events = _events.map(e => e.id === id ? { ...e, ...d } : e) },
  deleteEvent:  (id: string)                             => { _events = _events.filter(e => e.id !== id) },

  // Tenders
  getTenders:   ()                                       => [..._tenders],
  addTender:    (d: Omit<Tender, 'id'>)                  => { const t = { ...d, id: uid() }; _tenders = [t, ..._tenders]; return t },
  updateTender: (id: string, d: Partial<Tender>)         => { _tenders = _tenders.map(t => t.id === id ? { ...t, ...d } : t) },
  deleteTender: (id: string)                             => { _tenders = _tenders.filter(t => t.id !== id) },

  // Alerts
  getAlerts:    ()                                       => [..._alerts],
  addAlert:     (d: Omit<Alert, 'id'>)                   => { const a = { ...d, id: uid() }; _alerts = [..._alerts, a]; return a },
  updateAlert:  (id: string, d: Partial<Alert>)          => { _alerts = _alerts.map(a => a.id === id ? { ...a, ...d } : a) },
  deleteAlert:  (id: string)                             => { _alerts = _alerts.filter(a => a.id !== id) },

  // Faculty
  getFaculty:   ()                                       => [..._faculty],
  addFaculty:   (d: Omit<FacultyMember, 'id'>)           => { const f = { ...d, id: uid() }; _faculty = [..._faculty, f]; return f },
  updateFaculty:(id: string, d: Partial<FacultyMember>)  => { _faculty = _faculty.map(f => f.id === id ? { ...f, ...d } : f) },
  deleteFaculty:(id: string)                             => { _faculty = _faculty.filter(f => f.id !== id) },

  // Gallery Albums
  getAlbums:    ()                                       => [..._albums],
  addAlbum:     (d: Omit<GalleryAlbum, 'id'>)            => { const a = { ...d, id: uid() }; _albums = [a, ..._albums]; return a },
  updateAlbum:  (id: string, d: Partial<GalleryAlbum>)   => { _albums = _albums.map(a => a.id === id ? { ...a, ...d } : a) },
  deleteAlbum:  (id: string)                             => { _albums = _albums.filter(a => a.id !== id) },

  // Placement
  getPlacement:        ()                                => [..._placement],
  updatePlacementYear: (year: string, d: PlacementRecord) => { _placement = _placement.map(r => r.year === year ? { ...r, ...d } : r) },
  deletePlacementYear: (year: string)                    => { _placement = _placement.filter(r => r.year !== year) },
}
