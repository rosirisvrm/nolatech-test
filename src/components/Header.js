import React from "react";
import { Icon } from '@iconify/react';
import styles from '@/styles/header.module.css';

const Header = () => {
    return (
        <header className={`${styles['header']}`}>
            <div className="container-md-fluid">
                <div className="mx-md-auto mx-0 d-md-flex d-block justify-content-md-center">
                    <div className={`px-1 ${styles['live']} d-flex align-items-center justify-content-center`}>
                        <span className="text-white text-uppercase fw-bolder fs-4 me-2">
                            Live
                        </span>
                        <Icon icon="fluent:live-24-filled" className='text-white' width={40} height={40} />
                    </div>
                    <div className="px-3 text-center d-flex align-items-center justify-content-center">
                        <span className="navbar-text text-white fs-4">
                            Lorem ipsum dolor sit amet
                        </span>
                    </div>
                    <div className={`px-4 ${styles['join']} d-flex align-items-center justify-content-center`}>
                        <span className="text-white text-uppercase fw-bolder fs-4 me-4">
                            Join now!
                        </span>
                        <Icon icon="zondicons:play-outline" className='text-white' width={30} height={30} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header };