import { useEffect, useState } from "react";

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

  const filterGames = (data) => {
    if (data !== null) {
      const filteredGames = data.filter(game => 
        game.title === 'Final Fantasy 03' || 
        game.title === 'Final Fantasy 07' || 
        game.title === 'Final Fantasy 15'
      );
      console.log('filteredGames:', filteredGames);
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