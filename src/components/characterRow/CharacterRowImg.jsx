import unkownCharacterImage from '../../assets/img/unkown-character.jpeg';
import './characterRow.scss'

export const CharacterRowImg = ({src, name}) => (
  <img 
    className='character-row__img'
    src={src !== undefined 
      ? src.url 
      : unkownCharacterImage
    } 
    alt={`An image of ${name}`} />
)
  
  


