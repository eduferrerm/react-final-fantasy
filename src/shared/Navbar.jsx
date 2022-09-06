import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { Link } from 'react-router-dom';

export const Navbar = ()=> {
  const { detailPages } = useContext(GameContext);

  return (
    <nav className="sticky top-0 left-0 w-full flex justify-between z-10">
      <Link to="/">Logo</Link>
      <ul className="flex">
        {
          detailPages.map(({url, navTitle})=>{
            return <li className="mx-4" key={`${url}${navTitle}`}><Link to={url}>{navTitle}</Link></li>
          })
        }
      </ul>
    </nav>
  )
};