import { Link } from 'react-router-dom';
import {
  ChevronRight,
  BookOpen,
  Award,
  CheckCircle,
  Phone,
  Mail,
  Users,
  FlaskConical,
  Cpu,
  Building2,
  Zap,
  Wrench,
  Pill,
  BarChart3,
} from 'lucide-react';

const researchAreas = [
  {
    dept: 'Computer Engineering',
    icon: <Cpu className="w-5 h-5" />,
    areas: ['Machine Learning & AI', 'Cybersecurity', 'IoT & Embedded Systems', 'Cloud Computing', 'Natural Language Processing', 'Computer Vision'],
  },
  {
    dept: 'Electronics & Telecommunication',
    icon: <Zap className="w-5 h-5" />,
    areas: ['VLSI Design', 'Signal Processing', '5G/6G Communication', 'Antenna Design', 'Embedded Systems', 'RF & Microwave Engineering'],
  },
  {
    dept: 'Civil Engineering',
    icon: <Building2 className="w-5 h-5" />,
    areas: ['Structural Engineering', 'Geotechnical Engineering', 'Transportation Engineering', 'Water Resources', 'Environmental Engineering', 'Smart Materials'],
  },
  {
    dept: 'Mechanical Engineering',
    icon: <Wrench className="w-5 h-5" />,
    areas: ['Thermal & Fluid Systems', 'Manufacturing Processes', 'Robotics & Automation', 'Renewable Energy', 'CFD Simulation', 'Composite Materials'],
  },
  {
    dept: 'Electrical Engineering',
    icon: <Zap className="w-5 h-5" />,
    areas: ['Power Systems', 'Electric Vehicles', 'Smart Grid', 'Power Electronics', 'Control Systems', 'Energy Harvesting'],
  },
  {
    dept: 'Pharmacy',
    icon: <Pill className="w-5 h-5" />,
    areas: ['Drug Delivery Systems', 'Pharmaceutical Chemistry', 'Pharmacognosy', 'Biotechnology', 'Clinical Pharmacy', 'Nanotechnology in Pharmacy'],
  },
  {
    dept: 'Management Studies',
    icon: <BarChart3 className="w-5 h-5" />,
    areas: ['Business Analytics', 'Strategic Management', 'Supply Chain Management', 'Financial Markets', 'Human Resource Management', 'Digital Marketing'],
  },
];

const vacancies = [
  { dept: 'Computer Engineering', vacancies: 4, supervisors: 'Dr. R.K. Gupta, Dr. A. Sharma', area: 'Machine Learning, Cloud Computing' },
  { dept: 'Electronics & Telecom', vacancies: 3, supervisors: 'Dr. S. Patel, Dr. M. Jain', area: 'VLSI Design, 5G Communication' },
  { dept: 'Mechanical Engineering', vacancies: 5, supervisors: 'Dr. P. Verma, Dr. H. Singh', area: 'Thermal Engineering, Robotics' },
  { dept: 'Civil Engineering', vacancies: 3, supervisors: 'Dr. K. Tiwari, Dr. N. Mishra', area: 'Structural Engineering, Geotechnics' },
  { dept: 'Electrical Engineering', vacancies: 2, supervisors: 'Dr. A. Dubey', area: 'Power Systems, Smart Grid' },
  { dept: 'Pharmacy', vacancies: 3, supervisors: 'Dr. S. Agrawal, Dr. R. Chouhan', area: 'Drug Delivery, Pharmaceutical Chemistry' },
  { dept: 'Management Studies', vacancies: 2, supervisors: 'Dr. P. Saxena', area: 'Business Analytics, Strategic Mgmt.' },
];

const facilities = [
  { name: 'High Performance Computing Lab', desc: 'Cluster with 128-core processing for simulation and AI research.' },
  { name: 'VLSI & Embedded Lab', desc: 'FPGA boards, oscilloscopes, spectrum analyzers for electronics research.' },
  { name: 'Materials Testing Lab', desc: 'UTM, fatigue testing, SEM, and XRD for material characterization.' },
  { name: 'Structural Research Lab', desc: 'Loading frames, shake table, and data acquisition systems.' },
  { name: 'Central Instrumentation Facility', desc: 'Shared facility with advanced analytical instruments for all departments.' },
  { name: 'Digital Library & e-Resources', desc: 'Access to IEEE Xplore, Springer, Elsevier, and 50+ journals.' },
];

const selectionSteps = [
  { title: 'Apply Online', desc: 'Submit PhD application form with research proposal and SOP.' },
  { title: 'Written Examination', desc: 'Subject-specific written test conducted by SGSITS (waived for GATE qualified candidates).' },
  { title: 'Research Presentation', desc: 'Present your proposed research area to the departmental committee.' },
  { title: 'Interview', desc: 'Personal interview with the supervisor and PhD committee members.' },
  { title: 'Merit & Admission', desc: 'Final merit list published; selected candidates complete enrollment formalities.' },
];

export default function PhDAdmission() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Admissions</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">PhD Admission</span>
          </div>
          <h1 className="text-4xl font-display font-bold mb-3">PhD Admissions</h1>
          <p className="text-white/85 text-lg max-w-2xl">
            Pursue doctoral research at SGSITS under experienced faculty. We offer research opportunities across 7 departments with excellent infrastructure and GATE fellowships.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-[#bfa15f]/90 transition-colors"
          >
            Apply for PhD <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" /> Academic Qualification
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#bfa15f] shrink-0 mt-0.5" /> M.Tech / M.E. / M.Sc. (Engg.) with minimum 60% marks or 6.5 CGPA</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#bfa15f] shrink-0 mt-0.5" /> MBA (for Management PhD) with minimum 60% marks</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#bfa15f] shrink-0 mt-0.5" /> M.Pharm / M.Sc. Pharmacy (for Pharmacy PhD) with minimum 60%</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#bfa15f] shrink-0 mt-0.5" /> SC/ST candidates: 55% or 6.0 CGPA</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" /> Fellowship (JRF/SRF)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#bfa15f] shrink-0 mt-0.5" /> GATE qualified candidates are eligible for MHRD fellowship</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#bfa15f] shrink-0 mt-0.5" /> JRF: ₹37,000/month (first 2 years)</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#bfa15f] shrink-0 mt-0.5" /> SRF: ₹42,000/month (subsequent years)</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#bfa15f] shrink-0 mt-0.5" /> HRA and medical allowance as per MHRD norms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-2">Research Areas by Department</h2>
          <p className="text-gray-500 mb-6">SGSITS offers research opportunities in cutting-edge areas across all engineering and science disciplines.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((dept, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {dept.icon}
                  </div>
                  <h3 className="font-bold text-primary">{dept.dept}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dept.areas.map((area, j) => (
                    <span key={j} className="bg-[#0b2545]/10 text-[#0b2545] text-xs px-3 py-1 rounded-full font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selection Process */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Selection Process</h2>
          <div className="space-y-4">
            {selectionSteps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-4 hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Vacancies */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-2">Current PhD Vacancies</h2>
          <p className="text-gray-500 mb-6">Available positions for the academic year 2025–26. Contact respective supervisor for research proposals.</p>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3 font-semibold">Department</th>
                  <th className="text-center px-4 py-3 font-semibold">Vacancies</th>
                  <th className="text-left px-4 py-3 font-semibold">Supervisors</th>
                  <th className="text-left px-4 py-3 font-semibold">Research Areas</th>
                </tr>
              </thead>
              <tbody>
                {vacancies.map((v, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-primary">{v.dept}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-[#bfa15f]/20 text-[#bfa15f] font-bold px-3 py-1 rounded-full text-xs">
                        {v.vacancies} open
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{v.supervisors}</td>
                    <td className="px-4 py-3 text-gray-600">{v.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Research Facilities */}
        <section>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Research Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {facilities.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <FlaskConical className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-primary text-sm mb-2">{f.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="bg-primary rounded-xl p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-display font-bold mb-2">Research & Development Cell</h2>
              <p className="text-white/85 text-sm mb-4">For PhD admission queries, contact the R&D office or the respective department supervisor.</p>
              <div className="space-y-1 text-sm text-white/85">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+91-731-2570-5725</span></div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>phd.admission@sgsits.ac.in</span></div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>Dean (R&D), SGSITS, Indore – 452003</span></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a href="#" className="bg-accent text-primary font-semibold px-6 py-3 rounded-lg text-center hover:bg-[#bfa15f]/90 transition-colors text-sm">
                Download PhD Brochure
              </a>
              <a href="#" className="border border-white text-white font-semibold px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors text-sm">
                Research Proposal Guidelines
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
