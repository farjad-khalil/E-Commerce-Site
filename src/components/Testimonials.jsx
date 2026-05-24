import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Frontend designer',
    review: 'The layout feels like a real launch page now. It is easy to scan and the interactions read as intentional.',
  },
  {
    name: 'Jane Smith',
    role: 'Creative director',
    review: 'The shopping flow is much more convincing. The cart, product cards, and detail pages finally connect.',
  },
  {
    name: 'Michael Lee',
    role: 'Product reviewer',
    review: 'This is the kind of portfolio project that shows both taste and practical React implementation.',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((value) => (value === testimonials.length - 1 ? 0 : value + 1))
    }, 3500)

    return () => window.clearInterval(interval)
  }, [isHovered])

  const prevSlide = () => {
    setCurrentIndex((value) => (value === 0 ? testimonials.length - 1 : value - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((value) => (value === testimonials.length - 1 ? 0 : value + 1))
  }

  const activeTestimonial = testimonials[currentIndex]

  return (
    <section className='rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='flex items-end justify-between gap-4'>
        <div>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Testimonials</p>
          <h2 className='mt-2 text-3xl font-semibold text-white'>Proof that the design feels finished.</h2>
        </div>
        <div className='hidden gap-2 md:flex'>
          <button className='rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white hover:text-slate-950' onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className='rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white hover:text-slate-950' onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className='mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]'>
        <div className='rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-5'>
          <div className='flex items-center gap-3'>
            <div className='flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300 text-slate-950'>
              <FaStar />
            </div>
            <div>
              <div className='text-lg font-semibold text-white'>{activeTestimonial.name}</div>
              <div className='text-sm text-white/50'>{activeTestimonial.role}</div>
            </div>
          </div>
          <p className='mt-5 text-base leading-8 text-white/70'>“{activeTestimonial.review}”</p>
        </div>

        <div className='grid gap-3'>
          {testimonials.map((testimonial, index) => (
            <button key={testimonial.name} className={`rounded-[1.5rem] border px-4 py-4 text-left transition ${index === currentIndex ? 'border-cyan-200/30 bg-cyan-300/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`} onClick={() => setCurrentIndex(index)}>
              <div className='flex items-center justify-between gap-2'>
                <div className='text-sm font-semibold text-white'>{testimonial.name}</div>
                <div className='flex text-cyan-200'>
                  {[0, 1, 2, 3, 4].map((item) => (
                    <FaStar key={item} className='text-[10px]' />
                  ))}
                </div>
              </div>
              <p className='mt-2 text-sm leading-6 text-white/60'>{testimonial.review}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
