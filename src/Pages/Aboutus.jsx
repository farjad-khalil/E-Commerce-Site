const milestones = [
  { year: '01', title: 'Clean concept', text: 'A minimal storefront prototype became a more deliberate portfolio piece.' },
  { year: '02', title: 'Real interactions', text: 'Cart state, product detail behavior, and filter controls now work end-to-end.' },
  { year: '03', title: 'Ready to present', text: 'The visuals and hierarchy were rebuilt to feel closer to a real product launch.' },
]

const AboutUs = () => {
  return (
    <section className='space-y-10 py-8 md:py-12'>
      <div className='grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
        <div className='space-y-4'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>About SwiftCart</p>
          <h1 className='text-5xl font-semibold tracking-tight text-white md:text-6xl'>Built like a case study, styled like a launch page.</h1>
          <p className='max-w-2xl text-lg leading-8 text-white/65'>SwiftCart is a redesigned e-commerce experience focused on stronger hierarchy, product discovery, and believable interaction states. It is intended to look strong in a portfolio and demonstrate practical frontend thinking.</p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='rounded-[1.75rem] border border-white/10 bg-white/5 p-5'>
            <div className='text-3xl font-semibold text-white'>12</div>
            <p className='mt-2 text-sm text-white/60'>Curated products in the catalog</p>
          </div>
          <div className='rounded-[1.75rem] border border-white/10 bg-white/5 p-5'>
            <div className='text-3xl font-semibold text-white'>4.8</div>
            <p className='mt-2 text-sm text-white/60'>Average catalog rating</p>
          </div>
          <div className='rounded-[1.75rem] border border-white/10 bg-white/5 p-5'>
            <div className='text-3xl font-semibold text-white'>100%</div>
            <p className='mt-2 text-sm text-white/60'>Local demo cart persistence</p>
          </div>
          <div className='rounded-[1.75rem] border border-white/10 bg-white/5 p-5'>
            <div className='text-3xl font-semibold text-white'>UX</div>
            <p className='mt-2 text-sm text-white/60'>Focused on clarity and conversion cues</p>
          </div>
        </div>
      </div>

      <div className='grid gap-5 lg:grid-cols-3'>
        {milestones.map((item) => (
          <div key={item.year} className='rounded-[2rem] border border-white/10 bg-white/5 p-6'>
            <div className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>{item.year}</div>
            <h2 className='mt-3 text-2xl font-semibold text-white'>{item.title}</h2>
            <p className='mt-3 leading-7 text-white/60'>{item.text}</p>
          </div>
        ))}
      </div>

      <div className='grid gap-6 lg:grid-cols-[1fr_0.8fr]'>
        <div className='rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 to-white/5 p-6'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Design goals</p>
          <ul className='mt-4 space-y-3 text-white/70'>
            <li>Make the site feel high-end without being visually noisy.</li>
            <li>Use stronger product storytelling and clearer hierarchy.</li>
            <li>Connect visible actions to real state and page transitions.</li>
          </ul>
        </div>
        <div className='rounded-[2rem] border border-white/10 bg-white/5 p-6'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Next-ready</p>
          <p className='mt-4 leading-7 text-white/65'>The site is still a frontend portfolio piece, but the structure now leaves room for backend integration, payments, auth, and a real catalog feed later.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
