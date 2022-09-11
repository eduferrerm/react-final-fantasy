export const ExternalButton = ({url, icon, text, additionalClasses}) => (
  <a className={`
    uppercase
    font-cond
    inline-flex justify-center items-center 
    text-white text-sm tracking-wider hover:gray-900
    border-2 border-white
    h-10 rounded-sm py-2 px-4 font-medium
    ${additionalClasses? additionalClasses : ''}`
  }
    href={url}
    target="_blank"
    rel="nofollow noopener"
  >
    {icon &&
      <img className="h-6 w-auto mr-4" src={icon} alt="" />
    }
    <span className=" leading-none">{text}</span>
  </a>
)