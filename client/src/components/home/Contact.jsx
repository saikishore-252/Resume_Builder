import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950/5 py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1 text-sm font-semibold text-green-700">
              <span className="h-2.5 w-2.5 rounded-full bg-green-600"></span>
              Reach out anytime
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              Contact our team
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Have a question or want help building your resume? Send us a message or use the direct contact details below.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-slate-200/50">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950/5 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Phone
                </p>
                <a href="tel:+91 1234567890" className="mt-2 block text-lg font-semibold text-slate-900 hover:text-green-600 transition">
                  +91 1234567890
                </a>
              </div>
              <div className="rounded-3xl bg-slate-950/5 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Email
                </p>
                <a href="mailto:support@abc.com" className="mt-2 block text-lg font-semibold text-slate-900 hover:text-green-600 transition">
                  support@abc.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
