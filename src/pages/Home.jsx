import { useEffect, useState, useContext } from "react";
import { GameContext } from "../context/GameContext";
import axios from "axios";
import fetchApi from "../hooks/fetchApi";

import { LoadingErrorSuccess } from "../components/LoadingErrorSuccess";
import { Hero } from "../components/Hero";
import { GameRow } from "../components/GameRow";

const getGames = () => axios.get('https://www.moogleapi.com/api/v1/games');
const getCharacters = ()=> axios.get('https://www.moogleapi.com/api/v1/characters');
// const gamesInPage = ['Final Fantasy 03', 'Final Fantasy 07', 'Final Fantasy 15'];

export const Home = () => {
  const getGamesApi = fetchApi(getGames);
  const { gameSelection, setGameSelection} = useContext(GameContext);
  
  useEffect(() => {
    getGamesApi.request();
  }, []);
  
  useEffect(() => {
    setGameSelection(getGamesApi.filterGames(getGamesApi.data));
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
        <GameRow data={gameSelection}/>
      </LoadingErrorSuccess>
    </>
  )
}