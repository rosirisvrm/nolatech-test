import React from 'react'
import styles from '@/styles/about-us.module.css'

const AboutUs = () => {
  return(
    <section id='about-us' className={`${styles['about-us']}`}>
      <div className='container py-5'>
        <div className='row mx-0 py-5'>
          <div className='col-12 col-lg-6'>
            <h2 className={`text-black fw-bold me-5 ${styles['about-us-title']}`}>
              Lorem ipsum dolor sit amet
            </h2>

            <p className={`text-black pt-5 me-5 lh-sm fw-semibold ${styles['about-us-p']}`}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            </p>
          </div>
          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0'>
            <img 
              src='images/Pic1.png'
              alt='Pic 1'
              className={`${styles['about-us-img']}`}
            />
          </div>
        </div>
      </div>
    </section>
  )

}

export { AboutUs };