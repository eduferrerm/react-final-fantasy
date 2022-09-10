import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
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
    <section>
      <ul className="game-row flex flex-col md:flex-row p-4">
        {
          selectedGames.map(({ gameId, picture, title, releaseDate, platform, description }) => (
            <li className={`w-full ${!isDetailPage ? 'md:w-1/3' : 'md:flex'} py-8 md:px-4`} key={`${gameId}`}>
              <div className={`w-full ${!isDetailPage ? '' : 'md:w-1/2'}`}>
                <h2 className="mb-2 text-2xl lg:text-3xl text-slate-400">{title.replace(/0/g, '')}</h2>
                <h3 className="mb-4 text-xs">
                  <span>{releaseDate}</span>
                  <span className='text-teal-500 mx-2'>|</span>
                  <span>{platform}</span>
                </h3>
                <img className={`w-full mb-4`} src={returnNewImage(gameId, picture)} alt=""/>
              </div>
              <div className={`w-full ${!isDetailPage ? '' : 'md:w-1/2'}`}>
                <p className="mb-4">{description}</p>
                {!isDetailPage &&
                  <Button url={returnURL(gameId)} text={"learn more"}></Button>
                }
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
};