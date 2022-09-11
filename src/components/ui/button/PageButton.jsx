import { Link } from 'react-router-dom';

export const PageButton = ({text, url, icon}) => {
  return (
    <Link to={url} 
      className="
      uppercase
      inline-flex justify-center items-center 
      text-slate-800 text-sm font-semibold tracking-wider
      bg-teal-500
      hover:bg-teal-600
      border border-teal-300 
      h-10 rounded-sm py-2 px-4"
    > 
      {icon &&
        <img className="w-8 h-auto mr-4" src={icon} alt="" />
      }
      {text}
    </Link>
  )
}