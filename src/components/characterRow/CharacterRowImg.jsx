import unkownCharacterImage from '../../assets/img/unkown-character.jpeg';
import './characterRow.scss'

export const CharacterRowImg = ({src, name}) => (
  <div className='bg-white my-4'>
    <img 
      className='character-row__img'
      src={src !== undefined 
        ? src.url 
        : unkownCharacterImage
      } 
      alt={`An image of ${name}`} />
  </div>
)
  
  


