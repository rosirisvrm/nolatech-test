import React from 'react'
import styles from '@/styles/hero.module.css'

const sections = [
    { 
        name: 'Lorem ipsum',
        id: '#about-us',
    },
    { 
        name: 'Lorem ipsum',
        id: '#services',
    },
    { 
        name: 'Lorem ipsum',
        id: '#call-to-action',
    },
    { 
        name: 'Lorem ipsum',
        id: '#latest-videos',
    },
    { 
        name: 'Lorem ipsum',
        id: '#join-us',
    },
    { 
        name: 'Lorem ipsum',
        id: '#mobile-app',
    },
    { 
        name: 'Lorem ipsum',
        id: '#carousel',
    },
]

const Hero = () => {
    return(
        <section className={`${styles.hero}`} id='hero'>
            <nav className="navbar pt-4 navbar-expand-lg">
                <div className="container d-flex justify-content-end d-lg-block justify-content-lg-between">
                    {/* <a className="navbar-brand" href="/">Logo</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            {sections.map((section) => (
                                <li key={section.id} className="nav-item text-uppercase fs-6 fw-bold">
                                    <a className="nav-link text-white" aria-current="page" href={section.id}>{section.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container'>
                <div className='row mx-0 d-flex justify-content-sm-end' style={{ marginTop: 80 }}>
                    <div className='col-md-8 col-sm-10 col-12 p-lg-0'>
                        <div style={{ width: '85%' }}>
                            <h1 className={`text-white ${[styles['hero-title']]}`}>Lorem ipsum</h1>
                            <h1 className={`text-black bg-white ps-2 ${[styles['hero-title']]}`}>Lorem ipsum dolor</h1>
                            <h1 className={`text-white ${[styles['hero-title']]}`}>Lorem ipsum</h1>
                        </div>
                        <button type="button" className={`btn ${styles['hero-btn']}`}>What is next</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Hero };