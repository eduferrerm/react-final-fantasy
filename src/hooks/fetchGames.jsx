import { useState } from "react";
import axios from "axios";
import { API_BASE_URL, GAME_DETAIL_PAGES as gameDetailPages } from "../constants";

const fetchGames = () => axios.get(`${API_BASE_URL}/games`);

export default () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    try {
      const result = await fetchGames();
      setData(filterGames(result.data, gameDetailPages[0].gameId, gameDetailPages[1].gameId, gameDetailPages[2].gameId));
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  const filterGames = (data, ff3ID, ff7ID, ff15ID) => {
    if (data !== null) {
      const filteredGames = data.filter(game => 
        game.gameId === ff3ID || 
        game.gameId === ff7ID || 
        game.gameId === ff15ID
      );
      return filteredGames;
    }  
  }

  const logData = () => {
    console.log('data:', data);
  }

  return {
    data,
    error,
    loading,
    request,
    gameDetailPages,
    logData
  };
};