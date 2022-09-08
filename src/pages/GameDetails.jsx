import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import { LoadingErrorSuccess } from "../components/LoadingErrorSuccess";
import { GameRow } from "../components/gameRow/GameRow";

export const GameDetails = ({title, selectedGameID})=> {

  console.log('selectedGameID:', selectedGameID);

  const { getGamesApi, ffGameIds } = useContext(GameContext);

  const returnPageGame = (gamesArr, selectedGameID) => {
    return gamesArr.filter(game => game.gameId === selectedGameID );
  }

  return (
    <>
      <h1>{title}</h1>
      <LoadingErrorSuccess 
        loading={getGamesApi.loading} 
        error={getGamesApi.error} 
        data={getGamesApi.data}
      >
      {getGamesApi.data &&
        <GameRow 
          selectedGames={returnPageGame(getGamesApi.data, selectedGameID)} 
          selectionGameIds={ffGameIds} 
          isDetailPage={true}/>
      }
      </LoadingErrorSuccess>
    </>
  )
}