import { useState } from "react";
import axios from "axios";

const getGames = () => axios.get('https://www.moogleapi.com/api/v1/games');

export default () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const gameDetailPages = [
    { 
      gameTitle: 'FFIII',
      url: '/ff-iii-details',
      pageTitle: 'FFIII | Details',
      navTitle: 'FFIII',
      gameId: '53da5efb-5925-409b-399b-08d6b0a627a3'
    },
    { 
      gameTitle: 'FFVII',
      url: '/ff-vii-details',
      pageTitle: 'FFVII | Details',
      navTitle: 'FFVII',
      gameId: '9fc1c377-95f1-4a09-399f-08d6b0a627a3'
    },
    { 
      gameTitle: 'FFVXV',
      url: '/ff-xv-details',
      pageTitle: 'FFXV | Details',
      navTitle: 'FFXV',
      gameId: '0da69a55-9ab2-4798-39a7-08d6b0a627a3'
    },
  ]

  const request = async () => {
    setLoading(true);
    try {
      const result = await getGames();
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
        game.gameId === ff3ID || game.gameId === ff7ID || game.gameId === ff15ID
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