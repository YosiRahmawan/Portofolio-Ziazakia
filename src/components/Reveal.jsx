import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Membungkus section: elemen ber-class .reveal muncul bertahap saat di-scroll,
// elemen ber-class .drift bergerak parallax.
export default function Reveal({ id, className = '', children }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
      if (ref.current.querySelector('.drift')) {
        gsap.to('.drift', {
          yPercent: -40,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      }
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
    </section>
  )
}
