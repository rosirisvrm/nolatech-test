import React from 'react'
import { Icon } from '@iconify/react'
import styles from '@/styles/latest-videos.module.css'

const videos = [
  {
    urlImg: 'images/Pic7.png',
    description: 'Lorem ipsum dolor sit amet, consetetur'
  },
  {
    urlImg: 'images/Pic8.png',
    description: 'Lorem ipsum dolor sit amet, consetetur'
  },
  {
    urlImg: 'images/Pic9.png',
    description: 'Lorem ipsum dolor sit amet, consetetur'
  },
  {
    urlImg: 'images/Pic10.png',
    description: 'Lorem ipsum dolor sit amet, consetetur'
  },
  {
    urlImg: 'images/Pic1.png',
    description: 'Lorem ipsum dolor sit amet, consetetur'
  },
  {
    urlImg: 'images/Pic2.png',
    description: 'Lorem ipsum dolor sit amet, consetetur'
  }
]

const LatestVideos = () => {
    
  const handleOnClick = () => {
    console.log('onClick');
  }

  return(
    <section id='latest-videos' className={`${styles['videos']}`}>
      <div className='container py-5'>
        <h2 className={`text-black text-center fw-bold pt-4 pt-lg-5 ${styles['videos-title']}`}>
            Latest videos
        </h2>
        <div className='row mx-0 mt-5 d-flex justify-content-center align-items-center'>
          {videos.map((video, index) => (
            <div className='col-12 col-lg-4 mt-4 mt-lg-5 px-5' key={index}>
              <div className="card" style={{ border: 'none', borderRadius: 0 }}>
                <div>
                    <img 
                        src={video.urlImg}
                        alt={index}
                        className={`card-img-top ${styles['videos-img']}`}
                    />
                    <Icon 
                        icon="zondicons:play-outline" 
                        className={`text-white ${styles['videos-icon']}`} 
                        width={60} 
                        height={60} 
                        onClick={handleOnClick}
                    />
                </div>
                <div className="py-4">
                  <p className="card-text text-dark fs-5 fw-semibold">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`d-flex justify-content-center mb-5`}>
          <button type="button" className={`btn w-25 ${styles['videos-btn']}`}>View all</button>
        </div>
      </div>
    </section>
  )
}

export { LatestVideos };