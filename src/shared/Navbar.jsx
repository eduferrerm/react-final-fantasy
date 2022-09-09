import { useContext, useState, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import { Link } from 'react-router-dom';

import hamburgerIcon from '../assets/img/icons/bars-solid.svg'

export const Navbar = ()=> {
  const { getGamesApi } = useContext(GameContext);
  const [menuIsHidden, setMenuIsHidden] = useState(true)
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
      setMenuIsHidden(true)
    }
    if (!hasResizeListener) {
      // #NOTE: Debounce
      window.addEventListener('resize', handleResize);
      setHasResizeListener(true);
    }
  },[hasResizeListener]);

  return (
    <nav className="sticky top-0 left-0 w-full z-20 p-4">
      <div className='flex w-full max-w-screen-xl mx-auto'>  
        <Link className='mr-auto' to="/">Logo</Link>
        <ul 
          className={`
          transform
          ${menuIsHidden ? 'translate-x-full' : ''}
          lg:translate-x-0
          flex flex-col lg:flex-row
          justify-center items-center
          absolute top-0 right-0 lg:relative 
          h-screen lg:h-auto 
          w-full lg:w-auto 
          bg-slate-600 lg:bg-transparent 
          ml-auto z-20`}
        >
          {
            getGamesApi.gameDetailPages.map(({url, navTitle})=>{
              return <li className="mx-4 flex justify-between items-center" key={`${url}${navTitle}`}><Link to={url}>{navTitle}</Link></li>
            })
          }
        </ul>
        <button className='absolute top-2 right-2 lg:hidden z-30' onClick={() => setMenuIsHidden(!menuIsHidden)}>
          <img className='icon-menu' src={hamburgerIcon} alt="" />
        </button>
      </div>
    </nav>
  )
};