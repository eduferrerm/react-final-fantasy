import { useState } from "react";

export default (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const request = async (...args) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      setData(result.data);
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

  return {
    data,
    error,
    loading,
    request,
    filterGames
  };
};