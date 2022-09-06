import { useEffect, useState, useContext } from "react";
import { GameContext } from "../context/GameContext";
import axios from "axios";
import fetchApi from "../hooks/fetchApi";

import { LoadingErrorSuccess } from "../components/LoadingErrorSuccess";
import { Hero } from "../components/Hero";
import { GameRow } from "../components/gameRow/GameRow";

const getGames = () => axios.get('https://www.moogleapi.com/api/v1/games');
const getCharacters = ()=> axios.get('https://www.moogleapi.com/api/v1/characters');

export const Home = () => {
  const getGamesApi = fetchApi(getGames);
  const { gameSelection, setGameSelection} = useContext(GameContext);
  const { ffGameIds } = useContext(GameContext);
  const { detailPages } = useContext(GameContext);

  useEffect(() => {
    getGamesApi.request();
  }, []);
  
  useEffect(() => {
    setGameSelection(getGamesApi.filterGames(getGamesApi.data, ffGameIds.ff3, ffGameIds.ff7, ffGameIds.ff15));
  }, [getGamesApi.data]);

  return (
    <>
      <Hero />
      <LoadingErrorSuccess 
        loading={getGamesApi.loading} 
        error={getGamesApi.error} 
        data={getGamesApi.data} 
        dataSelection={gameSelection}
      >
        <GameRow selectedGames={gameSelection} selectionGameIds={ffGameIds} isDetailPage={false}/>
      </LoadingErrorSuccess>
    </>
  )
}