import React from 'react'
import styles from '@/styles/join-us.module.css'

const JoinUs = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <section className={`${styles['join-us']}`} id='join-us'>
            <div className='container'>
                <div className='row mx-0 d-flex justify-content-lg-end justify-content-center py-5'>
                    <div className='col-lg-5 col-12 p-lg-0'>
                        <h2 className={`text-white fw-bold mt-lg-5 text-uppercase ${styles['join-us-title']}`}>
                           Join us
                        </h2>
                        <p className={`text-white mt-4 ${styles['join-us-p']}`}> 
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                        </p>                        
                        <form onSubmit={handleSubmit}>
                            <div className='row mx-0 mt-4'>
                                <div className='col-md-6 col-12 mb-2 mb-lg-4 ps-0'>
                                    <input type="text" className={`form-control ${styles['join-us-input']}`} id="name" placeholder='name' />
                                </div>
                                <div className='col-md-6 col-12 mb-2 mb-lg-4 ps-0'>
                                    <input type="text" className={`form-control ${styles['join-us-input']}`} id="surname" placeholder='surname' />
                                </div>
                                <div className='col-md-6 col-12 mb-2 mb-lg-4 ps-0'>
                                    <input type="text" className={`form-control ${styles['join-us-input']}`} id="phone" placeholder='phone' />
                                </div>
                                <div className='col-md-6 col-12 mb-2 mb-lg-4 ps-0'>
                                    <input type="email" className={`form-control ${styles['join-us-input']}`} id="email" placeholder='email' />
                                </div>
                                <div className='col-12 mb-2 mb-lg-4 ps-0'>
                                    <input type="text" className={`form-control ${styles['join-us-input']}`} id="department" placeholder='department' />
                                </div>
                                <div className='col-12 mb-2 mb-lg-4 ps-0'>
                                    <textarea type="text" rows={5} className={`form-control ${styles['join-us-input']}`} id="message" placeholder='message' />
                                </div>
                                <div className='col-md-6 col-12 mb-2 mb-lg-4 ps-0'>
                                    <button type='submit' className={`btn w-100 ${styles['join-us-btn']}`}>
                                        I’M IN
                                    </button>
                                </div>
                            </div> 
                        </form>
                        <p className='text-white mt-4 mb-lg-5 text-center fs-6'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        </p>                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export { JoinUs };