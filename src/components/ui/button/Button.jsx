import { PageButton } from './PageButton';
import { ExternalButton } from './ExternalButton';

export const Button = ({text, url, icon, toPage}) => {
  return (
    <>
      {toPage 
        ? <PageButton text={text} url={url} icon={icon}/>
        : <ExternalButton url={url} text={text} icon={icon}/>
      }
    </>
  )
}
  
