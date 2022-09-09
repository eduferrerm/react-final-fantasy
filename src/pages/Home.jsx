import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import { Hero } from "../components/Hero";
import { LoadingErrorSuccess } from "../components/LoadingErrorSuccess";
import { GameRow } from "../components/gameRow/GameRow";
import { Wrapper } from "../components/layout/Wrapper";

export const Home = () => {
  const { getGamesApi } = useContext(GameContext);
  
  return (
    <>
      <Hero />
      <Wrapper>
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
      </Wrapper>
    </>
  )
}