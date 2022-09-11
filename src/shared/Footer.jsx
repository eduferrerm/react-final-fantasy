import { useEffect, useState } from "react";

import brand from '../assets/img/eekfm-brand/logo-statement.svg';
import avatar from '../assets/img/eekfm-brand/avatar.png';
import linkedin from '../assets/img/icons/linkedin.svg';
import instagram from '../assets/img/icons/instagram.svg';

export const Footer = ()=> {
  const [year, setYear] = useState('')

  useEffect(()=>{
    setYear(new Date().getFullYear())
  },[])

  return (
    <footer className="bg-slate-900 w-full">
      <div className="flex flex-col sm:flex-row px-4 py-16 justify-between items-center">
        <div className="pr-4">
          <span className="flex">
            <img className="h-16 w-auto pr-4" src={avatar} alt="" />
            <img className="h-16 w-auto" src={brand} alt="" />
          </span>
        </div>
        <div className="pr-4 pt-8 md:pt-0">
            <span className="flex">
              <a className="p-2" href="https://www.linkedin.com/in/ekferrerm/" target="_blank" rel="nofollow noopener noreferrer">
                <img className="h-8 w-8" src={linkedin} alt="" />
              </a>
              <a className="p-2" href="https://www.instagram.com/p/BLCFRH7BVCM/" target="_blank" rel="nofollow noopener noreferrer">
                <img className="h-8 w-8" src={instagram} alt="" />
              </a>
            </span>
        </div>
      </div>
      <div className="w-100 text-center bg-teal-500 p-2 text-slate-800">Copyright © {year}<span className="mx-4 text-teal-400">|</span>EEKFM</div>
    </footer>
  )
}