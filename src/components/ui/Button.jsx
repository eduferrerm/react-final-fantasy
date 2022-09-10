import { Link } from 'react-router-dom';

export const Button = ({text, url}) => {
  return (
    <Link to={url} 
      className="
      uppercase
      inline-flex justify-center items-center 
      text-gray-800 text-sm tracking-wider hover:gray-900
      bg-gradient-to-b from-teal-400 to-teal-500
      hover:bg-gradient-to-b hover:from-teal-600 hover:to-teal-700
      border border-teal-300 
      h-10 rounded-sm py-2 px-4 font-medium">
      {text}
    </Link>
  )
}