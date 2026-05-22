import { Link } from 'react-router-dom';
import {
  ChevronRight,
  FileText,
  CheckCircle,
  Award,
  Phone,
  Mail,
  BookOpen,
  CreditCard,
  ClipboardList,
  GraduationCap,
} from 'lucide-react';

const programs = [
  { name: 'M.Tech Computer Engineering', dept: 'Computer Engineering', seats: 18, eligibility: 'B.Tech CE/IT/CSE (min 60%)', basis: 'GATE CS / MPGET' },
  { name: 'M.Tech VLSI Design', dept: 'Electronics & Telecom', seats: 18, eligibility: 'B.Tech ECE/ET/EI (min 60%)', basis: 'GATE EC / MPGET' },
  { name: 'M.Tech Structural Engineering', dept: 'Civil Engineering', seats: 18, eligibility: 'B.Tech Civil (min 60%)', basis: 'GATE CE / MPGET' },
  { name: 'M.Tech Thermal Engineering', dept: 'Mechanical Engineering', seats: 18, eligibility: 'B.Tech ME (min 60%)', basis: 'GATE ME / MPGET' },
  { name: 'M.Tech Power Electronics', dept: 'Electrical Engineering', seats: 18, eligibility: 'B.Tech EE/EI (min 60%)', basis: 'GATE EE / MPGET' },
  { name: 'M.Tech Instrumentation', dept: 'Electronics & Instrumentation', seats: 18, eligibility: 'B.Tech EI/EC (min 60%)', basis: 'GATE IN / MPGET' },
  { name: 'M.E. Industrial Engineering', dept: 'Industrial & Production', seats: 18, eligibility: 'B.Tech IP/ME (min 60%)', basis: 'GATE ME / MPGET' },
  { name: 'MBA', dept: 'Management Studies', seats: 60, eligibility: 'Any Graduate (min 50%) + CAT/MAT/CMAT', basis: 'CAT / MAT / CMAT / MPGET' },
  { name: 'MCA', dept: 'Computer Applications', seats: 30, eligibility: 'B.Sc. (Math) or BCA (min 50%)', basis: 'NIMCET / MPGET' },
];

const steps = [
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'GATE / MPGET Score',
    desc: 'Appear for GATE (conducted by IITs/IISc) or MPGET (MP state exam). A valid score is mandatory.',
  },
  {
    icon: <ClipboardList className="w-7 h-7" />,
    title: 'Online Application',
    desc: 'Fill the SGSITS PG application form online. Upload required documents and pay the application fee.',
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: 'Merit List',
    desc: 'Merit list is prepared based on GATE/MPGET score. Shortlisted candidates are called for counselling.',
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: 'Document Verification',
    desc: 'Report to the institute with original documents for verification and final allotment.',
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    title: 'Fee Payment',
    desc: 'Complete admission by paying the first-year fees online or at the accounts office.',
  },
];

const fees = [
  { program: 'M.Tech (All branches)', tuition: '₹42,000', other: '₹11,000', total: '₹53,000' },
  { program: 'M.E. Industrial Engineering', tuition: '₹42,000', other: '₹11,000', total: '₹53,000' },
  { program: 'MBA', tuition: '₹55,000', other: '₹13,000', total: '₹68,000' },
  { program: 'MCA', tuition: '₹38,000', other: '₹10,500', total: '₹48,500' },
];

const scholarships = [
  {
    title: 'GATE Fellowship',
    amount: '₹12,400/month',
    desc: 'GATE qualified M.Tech students receive MHRD stipend for up to 2 years.',
    eligibility: 'Valid GATE score required',
  },
  {
    title: 'State Government Scholarship',
    amount: 'Variable',
    desc: 'SC/ST/OBC students from MP may avail state scholarship for PG programs.',
    eligibility: 'MP domicile + category certificate',
  },
  {
    title: 'Merit Scholarship (SGSITS)',
    amount: '₹5,000/semester',
    desc: 'Awarded to students who secure CGPA ≥ 8.5 in the previous semester.',
    eligibility: 'CGPA ≥ 8.5',
  },
];

const contacts = [
  { role: 'Postgraduate Admission Coordinator', name: 'Dr. P.K. Sharma', dept: 'Academic Affairs', phone: '+91-731-2570-5718', email: 'pg.admission@sgsits.ac.in' },
  { role: 'MBA Program Coordinator', name: 'Dr. Sunita Joshi', dept: 'Management Studies', phone: '+91-731-2570-5720', email: 'mba.admission@sgsits.ac.in' },
  { role: 'MCA Program Coordinator', name: 'Dr. Anil Verma', dept: 'Computer Applications', phone: '+91-731-2570-5722', email: 'mca.admission@sgsits.ac.in' },
];

export default function PGAdmission() {
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
            <span className="text-white font-medium">PG Admission</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-3">Postgraduate Admissions</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Advance your career with M.Tech, M.E., MBA, or MCA programs at SGSITS. Admissions are based on GATE, MPGET, CAT, MAT, or NIMCET scores.
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

        {/* Programs Table */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-2">Programs Offered</h2>
          <p className="text-gray-500 mb-6">All M.Tech and M.E. programs are 2-year full-time courses. MBA is 2-year and MCA is 3-year program.</p>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Program</th>
                  <th className="text-left px-4 py-3 font-semibold">Department</th>
                  <th className="text-center px-4 py-3 font-semibold">Seats</th>
                  <th className="text-left px-4 py-3 font-semibold">Eligibility</th>
                  <th className="text-left px-4 py-3 font-semibold">Basis</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-primary">{p.name}</td>
                    <td className="px-4 py-3 text-gray-600">{p.dept}</td>
                    <td className="px-4 py-3 text-center font-bold text-accent">{p.seats}</td>
                    <td className="px-4 py-3 text-gray-600">{p.eligibility}</td>
                    <td className="px-4 py-3 text-gray-600">{p.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Admission Process */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Admission Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5 bg-gray-200 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-primary text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Fee Structure (Per Annum)</h2>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Program</th>
                  <th className="text-center px-4 py-3 font-semibold">Tuition Fee</th>
                  <th className="text-center px-4 py-3 font-semibold">Other Fees</th>
                  <th className="text-center px-4 py-3 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-700">{f.program}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{f.tuition}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{f.other}</td>
                    <td className="px-4 py-3 text-center font-bold text-primary">{f.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scholarships */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Scholarships & Fellowships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarships.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary">{s.title}</h3>
                </div>
                <p className="text-2xl font-bold text-accent mb-2">{s.amount}</p>
                <p className="text-gray-600 text-sm mb-3">{s.desc}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {s.eligibility}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Contacts */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Key Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">{c.role}</p>
                <h3 className="font-bold text-primary mb-1">{c.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{c.dept}</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    <span>{c.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    <span>{c.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
