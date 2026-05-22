import { Link } from 'react-router-dom';
import {
  CheckCircle,
  FileText,
  ClipboardList,
  CreditCard,
  BookOpen,
  ChevronRight,
  Phone,
  Mail,
  AlertCircle,
} from 'lucide-react';

const programs = [
  { name: 'B.Tech Computer Engineering', seats: 120, eligibility: '10+2 with PCM (min 45%)', basis: 'JEE Main / MPDTE' },
  { name: 'B.Tech Information Technology', seats: 60, eligibility: '10+2 with PCM (min 45%)', basis: 'JEE Main / MPDTE' },
  { name: 'B.Tech Civil Engineering', seats: 60, eligibility: '10+2 with PCM (min 45%)', basis: 'JEE Main / MPDTE' },
  { name: 'B.Tech Mechanical Engineering', seats: 120, eligibility: '10+2 with PCM (min 45%)', basis: 'JEE Main / MPDTE' },
  { name: 'B.Tech Electrical Engineering', seats: 60, eligibility: '10+2 with PCM (min 45%)', basis: 'JEE Main / MPDTE' },
  { name: 'B.Tech Electronics & Instrumentation', seats: 60, eligibility: '10+2 with PCM (min 45%)', basis: 'JEE Main / MPDTE' },
  { name: 'B.Tech Electronics & Telecommunication', seats: 60, eligibility: '10+2 with PCM (min 45%)', basis: 'JEE Main / MPDTE' },
  { name: 'B.Tech Industrial & Production Engg.', seats: 60, eligibility: '10+2 with PCM (min 45%)', basis: 'JEE Main / MPDTE' },
  { name: 'B.Pharm', seats: 60, eligibility: '10+2 with PCB/PCM (min 45%)', basis: 'MP PEPT / MPDTE' },
];

const keyDates = [
  { event: 'JEE Main Registration Opens', date: 'January 2025' },
  { event: 'JEE Main Exam (Session 1)', date: 'February 2025' },
  { event: 'JEE Main Exam (Session 2)', date: 'April 2025' },
  { event: 'MPDTE Counselling Registration', date: 'June 2025' },
  { event: 'Document Verification', date: 'July 2025' },
  { event: 'Seat Allotment Round 1', date: 'July 2025' },
  { event: 'Fee Payment Deadline', date: 'August 2025' },
  { event: 'Commencement of Classes', date: 'August 2025' },
];

const fees = [
  { category: 'General / OBC', tuition: '₹67,000', other: '₹12,500', total: '₹79,500' },
  { category: 'SC / ST (MP Domicile)', tuition: '₹10,000', other: '₹12,500', total: '₹22,500' },
  { category: 'EWS', tuition: '₹50,000', other: '₹12,500', total: '₹62,500' },
  { category: 'NRI / Foreign', tuition: '$2,500', other: '$500', total: '$3,000' },
];

const documents = [
  'Class 10 Mark Sheet & Certificate (Original + 2 copies)',
  'Class 12 Mark Sheet & Certificate (Original + 2 copies)',
  'JEE Main Score Card / Rank Card',
  'MPDTE Counselling Allotment Letter',
  'Category Certificate (SC/ST/OBC/EWS) if applicable',
  'Domicile Certificate (Madhya Pradesh)',
  'Migration / Transfer Certificate',
  'Character Certificate from last institution',
  'Passport-size photographs (6 copies)',
  'Aadhaar Card (self & parent)',
  'Income Certificate (for fee concession)',
  'Medical Fitness Certificate',
];

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: 'Apply for JEE Main',
    desc: 'Register and appear for JEE Main conducted by NTA. Secure a valid rank.',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'MPDTE Counselling',
    desc: 'Register on the MPDTE portal, fill choices, and participate in seat allotment rounds.',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Document Verification',
    desc: 'Report to the college for physical verification of all original documents.',
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Fee Payment',
    desc: 'Pay the admission fee online through the MPDTE portal or college fee counter.',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Class Commencement',
    desc: 'Attend orientation and begin your academic journey at SGSITS.',
  },
];

export default function UGAdmission() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Admissions</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">UG Admission</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-3">Undergraduate Admissions</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Join SGSITS – one of Madhya Pradesh's premier engineering institutes. Admissions to B.Tech and B.Pharm programs are conducted through MPDTE counselling based on JEE Main scores.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Apply Now <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">

        {/* Admission Process */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-2">Admission Process</h2>
          <p className="text-gray-500 mb-6">Follow these 5 steps to secure your seat at SGSITS.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {step.icon}
                </div>
                <div className="w-7 h-7 rounded-full bg-accent text-primary font-bold text-sm flex items-center justify-center mb-2">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-primary text-sm mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs Table */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-2">Programs & Eligibility</h2>
          <p className="text-gray-500 mb-6">All B.Tech programs are 4-year full-time courses. B.Pharm is a 4-year full-time course.</p>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Program</th>
                  <th className="text-center px-4 py-3 font-semibold">Seats</th>
                  <th className="text-left px-4 py-3 font-semibold">Eligibility</th>
                  <th className="text-left px-4 py-3 font-semibold">Admission Basis</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-primary">{p.name}</td>
                    <td className="px-4 py-3 text-center font-bold text-accent">{p.seats}</td>
                    <td className="px-4 py-3 text-gray-600">{p.eligibility}</td>
                    <td className="px-4 py-3 text-gray-600">{p.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> Seats subject to approval by AICTE / PCI. SC/ST/OBC reservations as per Government norms.
          </p>
        </section>

        {/* Key Dates */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Important Dates – 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyDates.map((d, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-medium text-primary text-sm">{d.event}</p>
                  <p className="text-gray-500 text-sm">{d.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fee Structure */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-2">Fee Structure (Per Annum)</h2>
          <p className="text-gray-500 mb-6">Fees as approved by the Fee Regulatory Committee, Govt. of Madhya Pradesh.</p>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Category</th>
                  <th className="text-center px-4 py-3 font-semibold">Tuition Fee / Year</th>
                  <th className="text-center px-4 py-3 font-semibold">Other Fees</th>
                  <th className="text-center px-4 py-3 font-semibold">Total / Year</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-700">{f.category}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{f.tuition}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{f.other}</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">{f.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Documents Checklist */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Documents Checklist</h2>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Box */}
        <section>
          <div className="bg-primary rounded-xl p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-display font-bold mb-2">Admission Office – SGSITS</h2>
              <p className="text-blue-100 text-sm mb-4">For queries related to UG admissions, contact our dedicated admission office.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-blue-100">
                  <Phone className="w-4 h-4" />
                  <span>+91-731-2570 5714 / 5715</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Mail className="w-4 h-4" />
                  <span>admission@sgsits.ac.in</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a href="#" className="bg-accent text-primary font-semibold px-6 py-3 rounded-lg text-center hover:bg-yellow-400 transition-colors text-sm">
                MPDTE Counselling Portal
              </a>
              <Link to="/admission/prospectus" className="border border-white text-white font-semibold px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors text-sm">
                Download Prospectus
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
