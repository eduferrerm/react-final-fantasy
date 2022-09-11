import { useEffect } from "react";

import { Wrapper } from "../../layout/Wrapper";
import { SpotifyPlayer } from "../SpotifyEmbed"
import { ComposerMapDetails } from "./ComposerMapDetails";
import { ExternalButton } from "../../ui/button/ExternalButton";

import nobuoImg from '../../../assets/img/composers/nobuo-img.jpg';
import shimomuraImg from '../../../assets/img/composers/shimomura-img.jpg';
import wikiIcon from '../../../assets/img/icons/wikipedia-w.svg';
import spotifyIcon from '../../../assets/img/icons/spotify.svg';

export const Composers = ({composersData}) => {
  const composerImages = [nobuoImg, shimomuraImg];

  return (
    <section className="bg-slate-800 w-full">
      <Wrapper>
        <h2>{composersData.title}</h2>
        <h3>{composersData.subtitle}</h3>
        {
          composersData.items.map((composer, idx)=>(
            <div key={composer.name} className={`flex flex-col ${(idx + 1) % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} py-10`}>
              <div className={`w-full md:w-1/2 ${(idx + 1) % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <img src={composerImages[idx]} alt="" />
              </div>
              <div className="w-full md:w-1/2">
                <div>
                  <h3>{composer.name}<br></br><span>{composer.japaneseName}</span></h3>
                  <h4><ComposerMapDetails detail={composer.born}/></h4>
                  <h5><ComposerMapDetails detail={composer.genres}/></h5>
                  <h6><ComposerMapDetails detail={composer.occupation}/></h6>
                  <iframe
                    src={`https://open.spotify.com/embed/album/${composer.spotifyEmbedID}`} 
                    width="100%" height="80" frameBorder="0" allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                  </iframe>
                  <div className="flex items-center mt-8">
                    <ExternalButton url={composer.wikiLink} icon={wikiIcon} text={'View Wiki'} additionalClasses='mr-4'/>
                    <ExternalButton url={composer.spotifyLink} icon={spotifyIcon} text={'View Spotify'}/>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </Wrapper>
    </section>
  )
}