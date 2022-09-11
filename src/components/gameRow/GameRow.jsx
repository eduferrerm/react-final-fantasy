import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { Wrapper } from "../layout/Wrapper";
import { Button } from "../ui/button/Button";
import ff3Image from '../../assets/img/ff-3/ff-3-game-img-1.jpeg';
import ff7Image from '../../assets/img/ff-7/ff-7-game-img-1.jpeg';
import ff15Image from '../../assets/img/ff-15/ff-15-game-img-1.jpeg';
import './gameRow.scss';

export const GameRow = ({selectedGames, isDetailPage}) => { 
  const { getGamesApi } = useContext(GameContext);
  
  const returnNewImage = (currentIterationID, defaultImg) => {
    let img;

    switch(currentIterationID) {
      case getGamesApi.gameDetailPages[0].gameId:
        img = ff3Image;
        break;
      case getGamesApi.gameDetailPages[1].gameId:
        img = ff7Image;
        break;
      case getGamesApi.gameDetailPages[2].gameId:
        img = ff15Image;
        break;
      default:
        return defaultImg;
    }
    return img;
  };

  const returnURL = (currentIterationID) => {
    let url;
    switch(currentIterationID) {
      case getGamesApi.gameDetailPages[0].gameId:
        url = getGamesApi.gameDetailPages[0].url;
        break;
      case getGamesApi.gameDetailPages[1].gameId:
        url = getGamesApi.gameDetailPages[1].url;
        break;
      case getGamesApi.gameDetailPages[2].gameId:
        url = getGamesApi.gameDetailPages[2].url;
        break;
    }
    return url;
  };

  return (
    <section className="bg-slate-800 w-full relative z-10">
      
        <ul className="game-row flex flex-col md:flex-row mx-auto max-w-screen-xl">
          {
            selectedGames.map(({ gameId, picture, title, releaseDate, platform, description }) => (
              <li 
                className={`w-full ${!isDetailPage ? 'md:w-1/3 rounded-md bg-gray-600 border border-slate-400 p-4' : ''} 
                py-10 md:px-4 mb-14 md:mb-0 md:mx-2`} key={`${gameId}`}
              >
                <div className="w-full">
                  <h2 className={`${!isDetailPage ? 'text-3xl sm:text-2xl' : 'text-3xl lg:text-6xl'} font-libre font-bold mb-2 uppercase text-white`}>{title.replace(/0/g, '')}</h2>
                  <h3 className="font-cond mb-8 sm:text-lg">
                    <span>{releaseDate}</span>
                    <span className='text-teal-500 mx-2'>|</span>
                    <span>{platform}</span>
                  </h3>
                  <img className={`w-full mb-4`} src={returnNewImage(gameId, picture)} alt=""/>
                </div>
                <div className={`${!isDetailPage ? '' : 'md:px-10' } w-full`}>
                  <p className={`${!isDetailPage ? 'ellipsed-text' : 'pt-8'} sm:text-lg sm:leading-7`}>{description}</p>
                  {!isDetailPage &&
                    <Button url={returnURL(gameId)} text={"learn more"} toPage={true}></Button>
                  }
                </div>
              </li>
            ))
          }
        </ul>
      
    </section>
  )
};