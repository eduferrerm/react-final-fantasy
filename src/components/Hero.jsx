import { useEffect, useState } from 'react';

import videoDesk from '../assets/video/desktop.webm'
import videoPoster from '../assets/video/poster.jpg'
import videoMobile from '../assets/video/mobile.webm'

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
    <section className="relative overflow-hidden h-80">
      <video
        className='absolute top-0 left-0 h-full w-full object-cover z-0'
        autoPlay muted loop playsInline poster={videoPoster} src={returnMobileOrDeskVideo()}
      />
      <div className="relative z-10 w-full h-full flex justify-center items-center">
        <h1>My Favourite Final Fantasy Games</h1>
      </div>
    </section>
  )
}