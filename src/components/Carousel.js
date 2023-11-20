import React from 'react'
import styles from '@/styles/carousel.module.css'

const Carousel = () => {
  return(
    <section id='carosusel' className={`${styles['carousel']}`}>
      <div className='container py-5'>
        <h2 className={`text-white text-center fw-bold pt-4 pt-lg-5 ${styles['carousel-title']}`}>
            Lorem ipsum dolor sit amet
        </h2>

        <div className={`d-flex justify-content-center mb-5`}>
          <button type="button" className={`btn w-25 ${styles['carousel-btn']}`}>View all</button>
        </div>
      </div>
    </section>
  )
}

export { Carousel };