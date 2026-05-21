import React from 'react'

const ContactUs: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate-850">Contact Us</h2>
        <p className="text-sm text-gray-500 mt-1">Get in touch with SGSITS Indore</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
            <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#154273' }}>Address</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Shri Govindram Seksaria Institute of Technology and Science<br/>
              23, Park Road, Indore<br/>
              Madhya Pradesh - 452003, India
            </p>
          </div>
          <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
            <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#154273' }}>Phone</h3>
            <p className="text-gray-700 text-sm">0731-2582100 (Director)</p>
            <p className="text-gray-700 text-sm">0731-2582124 (Registrar)</p>
            <p className="text-gray-700 text-sm">Fax: 0731-2432540</p>
          </div>
          <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
            <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#154273' }}>Email</h3>
            <p className="text-gray-700 text-sm">director@sgsits.ac.in</p>
            <p className="text-gray-700 text-sm">registrar@sgsits.ac.in</p>
            <p className="text-gray-700 text-sm">wadmin@sgsits.ac.in (Website)</p>
          </div>
          <div className="bg-white rounded-md p-6 border border-slate-200 shadow-sm">
            <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#154273' }}>Office Hours</h3>
            <p className="text-gray-700 text-sm">Monday – Friday: 9:30 AM – 5:30 PM</p>
            <p className="text-gray-700 text-sm">Saturday: 9:30 AM – 1:00 PM</p>
            <p className="text-gray-700 text-sm">Sunday & Public Holidays: Closed</p>
          </div>
        </div>
        <div>
          <div className="rounded-md overflow-hidden border border-slate-200 h-full min-h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=SGSITS+Indore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SGSITS Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
