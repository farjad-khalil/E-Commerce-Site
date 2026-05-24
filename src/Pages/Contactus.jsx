
import { useState } from 'react'
import Button from '../components/Button'

const details = [
  { label: 'Email', value: 'hello@swiftcart.design' },
  { label: 'Response time', value: 'Within 24 hours' },
  { label: 'Availability', value: 'Monday to Friday' },
]

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', topic: '', message: '' })
  }

  return (
    <section className='space-y-8 py-8 md:py-12'>
      <div className='grid gap-8 lg:grid-cols-[0.85fr_1.15fr]'>
        <div className='space-y-5'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Contact</p>
          <h1 className='text-5xl font-semibold tracking-tight text-white md:text-6xl'>Let’s talk about the next version.</h1>
          <p className='max-w-xl text-lg leading-8 text-white/65'>Use this form for portfolio presentation, feedback, or future extension planning. The UI is styled to feel like a live brand touchpoint instead of a placeholder.</p>
          <div className='grid gap-3'>
            {details.map((detail) => (
              <div key={detail.label} className='rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4'>
                <div className='text-sm uppercase tracking-[0.25em] text-cyan-200/70'>{detail.label}</div>
                <div className='mt-1 text-white'>{detail.value}</div>
              </div>
            ))}
          </div>
        </div>

        <form className='space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur' onSubmit={handleSubmit}>
          <div className='grid gap-4 md:grid-cols-2'>
            <input name='name' value={formData.name} onChange={handleChange} required placeholder='Name' className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-cyan-200/40' />
            <input name='email' value={formData.email} onChange={handleChange} type='email' required placeholder='Email' className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-cyan-200/40' />
          </div>
          <input name='topic' value={formData.topic} onChange={handleChange} placeholder='Subject' className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-cyan-200/40' />
          <textarea name='message' value={formData.message} onChange={handleChange} required rows='6' placeholder='Tell me what you want to improve or ship next.' className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-cyan-200/40' />
          <div className='flex flex-wrap items-center gap-3'>
            <Button text='Send message' type='submit' />
            <p className='text-sm text-white/50'>No backend is wired yet; this demo confirms the interaction and clears the form.</p>
          </div>
          {submitted ? <div className='rounded-2xl border border-cyan-200/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100'>Thanks. The contact form is connected and ready for an API later.</div> : null}
        </form>
      </div>
    </section>
  )
}

export default ContactUs
