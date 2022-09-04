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
  
  const returnMobileOrDeskVideo = () => window.innerWidth < 1200 ? videoMobile : videoDesk;

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
  }, [hasResizeListener]);

  return (
    <div className="sec-hero">
      <video
        className='h-full w-full object-cover'
        autoPlay muted loop playsInline poster={videoPoster} src={returnMobileOrDeskVideo()}
      />
      <h1>My Favourite Final Fantasy Games</h1>
      <h2>Width: {window.innerWidth}</h2>
    </div>
  )
}