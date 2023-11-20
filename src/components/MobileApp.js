import React from 'react'
import styles from '@/styles/mobile-app.module.css'

const MobileApp = () => {
    return(
        <section className={`${styles['mobile-app']}`} id='mobile-app'>
            <div className='container'>
                <div className='row mx-0 d-flex' style={{ marginTop: 150 }}>
                    <div className='col-lg-5 col-12 p-lg-0'>
                        <h2 className={`text-black fw-bold me-5 mt-lg-5 lh-base ${styles['mobile-app-title']}`}>
                            Lorem ipsum dolor sit
                        </h2>
                        <div className={styles['mobile-app-p']}>
                            <p className='text-black mt-4 lh-sm fw-semibold'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. 
                            </p>
                        </div>
                        <button type="button" className={`btn w-md-50 ${styles['mobile-app-btn']}`}>View All</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { MobileApp };