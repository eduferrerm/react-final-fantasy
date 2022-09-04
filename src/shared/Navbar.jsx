import { Link } from 'react-router-dom';

export const pageURLS = {
  home: '/',
  detailsFFVIII: '/ff-iii-details',
  detailsFFVII: '/ff-vii-details',
  detailsFFXV: '/ff-xv-details'
}

export const Navbar = ()=> (
  <nav className="sticky top-0 left-0 w-full flex justify-between z-10">
    <Link to={pageURLS.home}>Logo</Link>
    <ul className="flex">
      <li className="mx-4"><Link to={pageURLS.home}>Home</Link></li>
      <li className="mx-4"><Link to={pageURLS.detailsFFVII}>FFVII Details</Link></li>
    </ul>
  </nav>
);