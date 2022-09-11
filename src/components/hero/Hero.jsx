import './hero.scss'
import { useEffect, useState } from 'react';

import videoDesk from '../../assets/video/desktop.webm'
import videoPoster from '../../assets/video/poster.jpg'
import videoMobile from '../../assets/video/mobile.webm'
import heroTexture from '../../assets/img/hero/paper-texture.png'
import brand from '../../assets/img/eekfm-brand/logo-statement.svg'

export const Hero = () => {
  const [hasResizeListener, setHasResizeListener] = useState(false)
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    if (!hasResizeListener) {
      // #NOTE: Debounce
      window.addEventListener('resize', handleResize);
      setHasResizeListener(true);
    }
  },[hasResizeListener]);
  
  const returnMobileOrDeskVideo = () => window.innerWidth < 1200 ? videoMobile : videoDesk;

  return (
    <section className="hero relative overflow-hidden h-8 p-4">
      <video
        className='fixed top-0 left-0 w-full object-cover z-0'
        autoPlay muted loop playsInline poster={videoPoster} src={returnMobileOrDeskVideo()}
      />
      <div className="relative z-30 w-full max-w-3/4 h-full flex flex-col justify-center sm:items-center mx-auto">
        <div>
          <h1>
              <img className='w-full' src={brand} alt="EEKFM Web Design & Development" />
          </h1>
          <h2 className='text-teal-500'>My Favourite Final Fantasy Games</h2>
        </div>
      </div>
      <img className="hero-texture" src={heroTexture} alt="" />
    </section>
  )
}