import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { Wrapper } from "../layout/Wrapper";
import { Button } from "../ui/Button";
import ff3Image from '../../assets/img/ff-3/ff-3-game-img-1.jpeg';
import ff7Image from '../../assets/img/ff-7/ff-7-game-img-1.jpeg';
import ff15Image from '../../assets/img/ff-15/ff-15-game-img-1.jpeg';
import './gameRow.scss';

export const GameRow = ({selectedGames, isDetailPage}) => { 
  const { getGamesApi } = useContext(GameContext);
  
  const returnNewImage = (currentIterationID, defaultImg) => {
    switch(currentIterationID) {
      case getGamesApi.gameDetailPages[0].gameId:
        return ff3Image;
        break;
      case getGamesApi.gameDetailPages[1].gameId:
        return ff7Image;
        break;
      case getGamesApi.gameDetailPages[2].gameId:
        return ff15Image;
        break;
      default:
        return defaultImg;
    }
  };

  const returnURL = (currentIterationID) => {
    switch(currentIterationID) {
      case getGamesApi.gameDetailPages[0].gameId:
        return getGamesApi.gameDetailPages[0].url;
        break;
      case getGamesApi.gameDetailPages[1].gameId:
        return getGamesApi.gameDetailPages[1].url;
        break;
      case getGamesApi.gameDetailPages[2].gameId:
        return getGamesApi.gameDetailPages[2].url;
        break;
    }
  };

  return (
    <section className="bg-slate-800 w-full relative z-10">
      <Wrapper>
        <ul className="game-row flex flex-col md:flex-row">
          {
            selectedGames.map(({ gameId, picture, title, releaseDate, platform, description }) => (
              <li className={`w-full ${!isDetailPage ? 'md:w-1/3' : 'md:flex'} p-4 py-10 md:px-4 mb-14 md:mb-0 
              rounded-md bg-gray-600 border border-slate-400 md:mx-2`} key={`${gameId}`}
              >
                <div className={`w-full ${!isDetailPage ? '' : 'md:w-1/2'}`}>
                  <h2 className="mb-2 text-2xl lg:text-3xl text-teal-500">{title.replace(/0/g, '')}</h2>
                  <h3 className="mb-4 text-xs">
                    <span>{releaseDate}</span>
                    <span className='text-teal-500 mx-2'>|</span>
                    <span>{platform}</span>
                  </h3>
                  <img className={`w-full mb-4`} src={returnNewImage(gameId, picture)} alt=""/>
                </div>
                <div className={`w-full ${!isDetailPage ? '' : 'md:w-1/2 md:px-10'}`}>
                  <p className={`${isDetailPage ? '' : 'ellipsed-text'}`}>{description}</p>
                  {!isDetailPage &&
                    <Button url={returnURL(gameId)} text={"learn more"}></Button>
                  }
                </div>
              </li>
            ))
          }
        </ul>
      </Wrapper>
    </section>
  )
};