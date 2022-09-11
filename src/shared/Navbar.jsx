import { useContext, useState, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import { Link } from 'react-router-dom';

import hamburgerIcon from '../assets/img/icons/bars-solid.svg'
import navLogo from '../assets/img/logos/ff-logo.svg'

export const Navbar = ()=> {
  const { getGamesApi } = useContext(GameContext);
  const [menuIsHidden, setMenuIsHidden] = useState(true)
  const [hasResizeListener, setHasResizeListener] = useState(false)
  const [hasScrollListener, setHasScrollListener] = useState(false)
  const [userTopPage, setUserTopPage] = useState(false)
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

  useEffect(()=>{
    if (hasResizeListener) { return }
    window.addEventListener('scroll', () => { checkIfScroll()});  
    setHasScrollListener(true)
  },[])

  const checkIfScroll = () => {
    if (window.scrollY > 0) {
      setUserTopPage(true)
    } else {
      setUserTopPage(false)
    }
  }
  
  window.addEventListener('scroll', () => { checkIfScroll()});

  return (
    <nav className={`${!userTopPage ? 'absolute' : 'fixed bg-slate-900'} top-0 left-0 w-full z-40 p-4`}>
      <div className='flex w-full max-w-screen-xl mx-auto'>  
        <Link className='mr-auto' to="/">
          <img src={navLogo} alt="" className="h-12 w-auto"  />
        </Link>
        <ul 
          className={`
          transform transition duration-500
          ${menuIsHidden ? 'translate-x-full' : ''}
          lg:translate-x-0
          flex flex-col lg:flex-row
          justify-center items-center
          fixed top-0 right-0 lg:relative 
          h-screen lg:h-auto 
          w-full lg:w-auto 
          bg-gray-900
          lg:bg-transparent
          bg-opacity-95
          ml-auto z-20`}
        >
          {
            getGamesApi.gameDetailPages.map(({url, navTitle})=> (
             <li className="text-teal-400 underline text-2xl lg:text-base mb-8 lg:mb-0 mx-4 flex justify-between items-center" key={`${url}${navTitle}`}>
                <Link to={url} onClick={() => setMenuIsHidden(true)}>
                  {navTitle}
                </Link>
              </li>
            ))
          }
        </ul>
        <button className='absolute w-10 top-5 right-2 lg:hidden z-30' onClick={() => setMenuIsHidden(!menuIsHidden)}>
          <img className='icon-menu' src={hamburgerIcon} alt="" />
        </button>
      </div>
    </nav>
  )
};