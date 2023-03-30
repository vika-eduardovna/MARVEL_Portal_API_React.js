import React, { useRef, useEffect } from 'react'
import { gsap, Power3 } from 'gsap'

import decoration from '../../resources/img/vision.png'
import './notFound.scss'
import { TweenMax } from 'gsap/gsap-core'

export default function NotFound() {

  let textRef = useRef(null)
  let imgref = useRef(null)
  useEffect(() => {
    gsap.from(imgref,
      1.8, {
      opacity: 1,
      y: 75,
      scale:2,
      duration:10,
      x: 60,
      ease: Power3.easeInOut,
      delay: .2
    })
  },
    gsap.from(textRef,
      0.8, {
      opacity: 1,
      y: -30,
      ease: Power3.easeOut,
      delay: .2
    }),
    [])


  return (
    <section className='section'>
      <h2 ref={el => { textRef = el }}>404 Error... Page not found...</h2>
      <img
        ref={el => { imgref = el }}
        src={decoration}
        alt="" />
    </section>
  )
}
