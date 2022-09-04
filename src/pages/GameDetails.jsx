import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const GameDetails = ({title})=> {
  const { gameSelection, setGameSelection} = useContext(GameContext);
  console.log('from detail page:', gameSelection);

  return (
    <h1>This is {title}'s' detail page</h1>
  ) 
}