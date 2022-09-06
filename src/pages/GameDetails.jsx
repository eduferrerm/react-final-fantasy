import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameRow } from "../components/gameRow/GameRow";

export const GameDetails = ({title, selectedGame})=> {
  const { gameSelection, ffGameIds} = useContext(GameContext);
  
  console.log('from detail page:', gameSelection);

  const returnPageGame = (selectedGamesArr) => {
    const selectedGameID = ffGameIds[selectedGame];
    return gameSelection.filter(game => game.gameId === selectedGameID );
  }

  return (
    <>
      <h1>{title}</h1>
      <GameRow selectedGames={returnPageGame()} selectionGameIds={ffGameIds} isDetailPage={true}/>
    </>
  ) 
}