
import { useEffect } from "react";

import { Wrapper } from "../layout/Wrapper";
import { ExternalButton } from "../ui/button/ExternalButton";
import logoAmazon from '../../assets/img/icons/amazon.svg'

export const BuyGame = ({buyGameData, selectedIndex, selectedID}) => {
  
  console.log({selectedID});
  console.log({buyGameData});
  console.log({selectedIndex});
  
  useEffect(()=>{
    console.log({selectedIndex});
  },[selectedID]);

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
          <ExternalButton url={buyGameData[selectedIndex].urlAmazon} icon={logoAmazon} text={'Buy the game'} />
        </div>
      </Wrapper>
    </section>
  ) 
};