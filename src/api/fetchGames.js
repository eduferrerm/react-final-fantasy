import { useState } from "react";

export const [gamesData, setGamesData] = useState(null);
export const [gamesLoading, setGamesLoading] = useState(true);
export const [gamesError, setGamesError] = useState(null);

export const getGamesData = async () => {
  try {
    const response = await axios.get('https://www.moogleapi.com/api/v1/games');
    setGamesData(response.data);
    setGamesError(null);
  } catch (err) {
    setGamesError(err.message);
    setGamesData(null);
  } finally {
    setGamesLoading(false);
  }
};