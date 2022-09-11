
import { Wrapper } from "../layout/Wrapper";
import { ExternalButton } from "../ui/button/ExternalButton";
import logoAmazon from '../../assets/img/icons/amazon.svg'

import ff3Img from '../../assets/img/ff-3/ff-3-cover.png'
import ff7Img from '../../assets/img/ff-7/ff-7-cover.png'
import ff15Img from '../../assets/img/ff-15/ff-15-cover.png'

export const BuyGame = ({buyGameData, selectedIndex}) => {
  const gameCoverImages = [ff3Img, ff7Img, ff15Img];
  return (
    <section className="sec-buy-game full-width bg-slate-900 py-32">
      <Wrapper>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-5xl font-libre text-slate-400 text-center mb-8">Experience the Game</h2>
          <h3 className="text-xl text-center mb-16">Dont loose the opportunity to forever change your life.<br></br>Yes... games can do that.</h3>    
          { selectedIndex !== null &&
          <div class="aspect-ratio__16-9 mb-8">
            <div class="aspect-ratio__16-9-wrapper">
              <iframe 
                className="youtube-video"
                src={`https://www.youtube.com/embed/${buyGameData[selectedIndex].ytEmbedID}`} 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </div>
          </div>
          }
          <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
            <span>
              <img className="w-60 sm:w-72" src={gameCoverImages[selectedIndex]} alt="" />
            </span>
            <span className="flex sm:flex-col justify-center items-center mb-8 pl-8">
              <h4 className="font-cond text-3xl sm:mb-8 text-center sm:text-left">Starting at: ${buyGameData[selectedIndex].price}</h4>
              <ExternalButton url={buyGameData[selectedIndex].urlAmazon} icon={logoAmazon} text={'Buy the game'} />
            </span>
          </div>
        </div>
      </Wrapper>
    </section>
  ) 
};