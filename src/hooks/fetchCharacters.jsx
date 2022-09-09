import { useState } from "react";
import axios from "axios";
import { API_BASE_URL, GAME_DETAIL_PAGES as gameDetailPages, GAME_DETAIL_PAGES } from "../constants";

const fetchCharacters = () => axios.get(`${API_BASE_URL}/characters`);

export default () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    try {
      const result = await fetchCharacters();
      setData(filterSelectionCharacters(result.data, gameDetailPages[0].gameTitle, gameDetailPages[1].gameTitle, gameDetailPages[2].gameTitle));      
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  const filterSelectionCharacters = (data, ff3Title, ff7Title, ff15Title) => {
    if (data !== null) {
      const filteredCharacters = data.filter((character) =>
        character.origin === ff3Title || 
        character.origin === ff7Title || 
        character.origin === ff15Title
      );
      return filteredCharacters;
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