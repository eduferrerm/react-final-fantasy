import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import { LoadingErrorSuccess } from "../components/LoadingErrorSuccess";
import { GameRow } from "../components/gameRow/GameRow";
import { CharacterRow } from "../components/characterRow/CharacterRow";

export const GameDetails = ({title, selectedGameID})=> {
  const { getGamesApi, getCharactersApi } = useContext(GameContext);

  const returnPageGameOrCharacter = (array, filteringGame, filterArgument) => {
    let filteredArray;
    if (filteringGame) {
      filteredArray = array.filter(game => game.gameId === filterArgument);
    } else {
      filteredArray = array.filter(character => character.origin === filterArgument);
    }
    return filteredArray;
  }

  return (
    <>
      <h1>{title} | Details</h1>
      <LoadingErrorSuccess 
        loading={getGamesApi.loading} 
        error={getGamesApi.error} 
        data={getGamesApi.data}
        dataType={'game'}
      >
      {getGamesApi.data &&
        <GameRow 
          selectedGames={returnPageGameOrCharacter(getGamesApi.data, true, selectedGameID)}
          isDetailPage={true}/>
      }
      </LoadingErrorSuccess>
      <LoadingErrorSuccess 
        loading={getCharactersApi.loading} 
        error={getCharactersApi.error} 
        data={getCharactersApi.data}
        dataType={'character'}
      >
      {getCharactersApi.data &&
        <CharacterRow gameCharacters={returnPageGameOrCharacter(getCharactersApi.data, false, title)}/>
      }
      </LoadingErrorSuccess>
    </>
  )
}