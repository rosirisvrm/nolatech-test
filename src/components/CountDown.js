import React from 'react'
import styles from '@/styles/counter.module.css'

const CountDown = () => {
    return (
        <section id='counter' className={`${styles.counter}`}>
            <div className='container py-lg-4 py-5'>
                <div className='row mx-0'>
                    <div className='col-lg-4 col-12 d-flex align-items-center justify-content-center justify-content-lg-start text-center text-lg-start'>
                        <h4 className='text-white fs-3 fw-bold'>
                            Lorem ipsum dolor sit amet, consetetur
                        </h4>
                    </div>
                    <div className={`col-lg-2 col-12 text-center ${styles['counter-column']} mt-5 mt-lg-0`}>
                        <h6 className={`text-white fw-bold ${styles['counter-number']}`}>
                            179
                        </h6>
                        <span className='fs-4 mb-0 fw-medium' style={{ color: '#02A13E' }}>
                            days
                        </span>
                    </div>
                    <div className={`col-lg-2 col-12 text-center ${styles['counter-column']} mt-5 mt-lg-0`}>
                        <h6 className={`text-white fw-bold ${styles['counter-number']}`}>
                            13
                        </h6>
                        <span className='fs-4 mb-0 fw-medium' style={{ color: '#02A13E' }}>
                            hours
                        </span>
                    </div>
                    <div className={`col-lg-2 col-12 text-center ${styles['counter-column']} mt-5 mt-lg-0`}>
                        <h6 className={`text-white fw-bold ${styles['counter-number']}`}>
                            39
                        </h6>
                        <span className='fs-4 mb-0 fw-medium' style={{ color: '#02A13E' }}>
                            minutes
                        </span>
                    </div>
                    <div className={`col-lg-2 col-12 text-center ${styles['counter-column']} mt-5 mt-lg-0`} style={{ border: 'none' }}>
                        <h6 className={`text-white fw-bold ${styles['counter-number']}`}>
                            29
                        </h6>
                        <span className='fs-4 mb-0 fw-medium' style={{ color: '#02A13E' }}>
                            seconds
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { CountDown };