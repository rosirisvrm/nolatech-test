import React from 'react'
import styles from '@/styles/services.module.css'

const services = [
  {
    urlImg: 'images/Pic2.png',
    name: 'Lorem ipsum'
  },
  {
    urlImg: 'images/Pic3.png',
    name: 'Lorem ipsum'
  },
  {
    urlImg: 'images/Pic4.png',
    name: 'Lorem ipsum'
  }
]

const Services = () => {
  return(
    <section id='services' className={`${styles['services']}`}>
      <div className='container py-5'>
        <h2 className={`text-black text-center fw-bold pt-4 pt-lg-5 ${styles['services-title']}`}>
          Lorem ipsum
        </h2>
        <div className={styles['services-p']}>
          <p className='text-black mt-5 lh-sm text-center fw-semibold'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. 
          </p>
        </div>
        <div className='row mx-0 mt-5 d-flex justify-content-center align-items-center'>
          {services.map((service, index) => (
            <div className='col-12 col-lg-4 mt-4 mt-lg-0' key={index}>
              <div className="card">
                <img 
                  src={service.urlImg}
                  alt={service.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-uppercase text-center text-white">{service.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles['services-p']} d-flex justify-content-center mb-5`}>
          <button type="button" className={`btn ${styles['services-btn']}`}>Learn more</button>
        </div>
      </div>
    </section>
  )
}

export { Services };