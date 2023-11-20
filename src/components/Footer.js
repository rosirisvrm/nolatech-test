import React from 'react'
import styles from '@/styles/footer.module.css'

const Footer = () => {
    return(
        <footer className={`${styles['footer']}`}>
            <div className='container py-5'>
                <div className='row d-flex justify-content-md-between justify-content-center align-items-center text-center text-md-start'>
                    <div className='col-md-4 col-12'>
                        <p className='text-dark f-6 fw-bold mb-0'>
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna
                        </p>
                    </div>
                    {/* <div className='col-md-4 col-12'>
                        <img 
                            src=''
                            alt=''
                        />
                    </div> */}
                    <div className='col-md-4 col-12 mt-4 mt-md-0 text-md-end text-center'>
                        <span className='text-dark f-6 fw-bold'>
                            All rights reserved to
                            <br />
                            Lorem Ipsum© 2022
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer }