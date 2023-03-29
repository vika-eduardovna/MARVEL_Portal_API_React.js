import React from 'react'
import decoration from '../../resources/img/vision.png'
import './notFound.scss'

export default function NotFound() {
  return (
    <section className='section'>
        <h2>404 Error... Page not found...</h2>
        <img src={decoration} alt="" />
    </section>
  )
}
