import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import { Hero } from "../components/hero/Hero";
import { LoadingErrorSuccess } from "../components/LoadingErrorSuccess";
import { GameRow } from "../components/gameRow/GameRow";

export const Home = () => {
  const { getGamesApi } = useContext(GameContext);
  
  return (
    <>
      <Hero />
        <LoadingErrorSuccess 
          loading={getGamesApi.loading} 
          error={getGamesApi.error} 
          data={getGamesApi.data}
          >
          {getGamesApi.data &&
            <GameRow 
              selectedGames={getGamesApi.data} 
              selectionGameIds={getGamesApi.gameDetailPages} 
              isDetailPage={false}/>
          }
        </LoadingErrorSuccess>
    </>
  )
}