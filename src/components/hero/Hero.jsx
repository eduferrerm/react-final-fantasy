import './hero.scss'
import { useEffect, useState } from 'react';

import videoDesk from '../../assets/video/desktop.webm'
import videoPoster from '../../assets/video/poster.jpg'
import videoMobile from '../../assets/video/mobile.webm'
import heroTexture from '../../assets/img/hero/paper-texture.png'
import avatar from '../../assets/img/eekfm-brand/avatar.png'
import brand from '../../assets/img/eekfm-brand/brand.svg'

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
    <section className="hero relative overflow-hidden h-80">
      <video
        className='fixed top-0 left-0 w-full object-cover z-0'
        autoPlay muted loop playsInline poster={videoPoster} src={returnMobileOrDeskVideo()}
      />
      <div className="relative z-30 w-full h-full flex flex-col justify-center items-center">
        <h1>
          <span className='flex w-full p-4'>
            <img className='w-20 md:w-32 h-auto' src={avatar} alt="EEKFM Web Design & Development" />
            <img className='ml-4 w-2/3' src={brand} alt="EEKFM Web Design & Development" />
          </span>
        </h1>
        <h2 className='text-green-900'>My Favourite Final Fantasy Games</h2>
      </div>
      <img className="hero-texture" src={heroTexture} alt="" />
    </section>
  )
}