import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { Link } from 'react-router-dom';

export const Navbar = ()=> {
  const { getGamesApi } = useContext(GameContext);

  return (
    <nav className="sticky top-0 left-0 w-full flex justify-between z-20">
      <Link to="/">Logo</Link>
      <ul className="flex">
        {
          getGamesApi.gameDetailPages.map(({url, navTitle})=>{
            return <li className="mx-4" key={`${url}${navTitle}`}><Link to={url}>{navTitle}</Link></li>
          })
        }
      </ul>
    </nav>
  )
};