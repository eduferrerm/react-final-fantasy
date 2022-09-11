import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import { Hero } from "../components/hero/Hero";
import { LoadingErrorSuccess } from "../components/LoadingErrorSuccess";
import { GameRow } from "../components/gameRow/GameRow";
import { Composers } from "../components/musicSections/composer/Composers";

import { CONTENT } from "../content/home";

export const Home = () => {
  const { getGamesApi } = useContext(GameContext);
  
  return (
    <>
      <Hero />
      <main className="bg-slate-800 w-full min-h-screen">
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
        <Composers composersData={CONTENT.COMPOSERS}/>
      </main>
    </>
  )
}