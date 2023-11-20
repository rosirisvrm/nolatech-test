import React from 'react'
import styles from '@/styles/call-to-action.module.css'

const CallToAction = () => {
  return(
    <section id='call-to-action' className={`${styles['cta']}`}>
      <div className='row mx-0'>
        <div className={`col-12 col-lg-6 ${styles['cta-left-column']} p-3 p-lg-5`}>
            <h2 className={`text-white mx-md-5 mx-2 mt-md-5 mt-0 fw-bold ${styles['cta-title']}`}>
              Lorem ipsum dolor sit amet, consetetur
            </h2>
            <div className={`mx-md-5 mx-2 my-5 pt-lg-5 pt-0 pe-lg-5 pe-0`}>
              <button type="button" className={`btn w-100 ${styles['cta-btn']}`}>Lorem ipsum dolor sit</button>
              <button type="button" className={`btn w-100 mt-3 ${styles['cta-btn-outlined']}`}>Lorem ipsum dolor sit</button>
            </div>
        </div>
        <div className={`col-12 col-lg-6 mt-0 ${styles['cta-right-column']} pt-5 p-0`}>
          <img 
            src='images/Pic5.png'
            alt='Pic 1'
            className={`${styles['cta-img']}`}
          />
        </div>
      </div>
    </section>
  )
}

export { CallToAction };