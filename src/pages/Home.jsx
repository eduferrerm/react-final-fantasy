import { useEffect, useState, useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Hero } from "../components/Hero";
import axios from "axios";
import { Api } from '../api/fetchApi';

export const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiTest = new Api();
  apiTest.fetch('https://www.moogleapi.com/api/v1/games');
  console.log('apiTest data:', apiTest.getData());

  const { gameSelection, setGameSelection} = useContext(GameContext);

  const filterGames = (rawData) => {
    if (rawData !== null) {
      const select = rawData.filter(game => game.title === 'Final Fantasy 03' || game.title === 'Final Fantasy 07' || game.title === 'Final Fantasy 15' );
      setGameSelection(select);
      console.log('gameSelection:', gameSelection);
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://www.moogleapi.com/api/v1/games');
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  
  useEffect(() => {
    filterGames(data);
  }, [data]);

  return (
    <>
      {loading && <div>Loading game data! please wait...</div>}
        {error && (
          <div>{`Oops! there seems to be an issue fetching the data - ERROR: ${error}`}</div>
        )}
        <ul>
          {data &&
            data.map(({ id, title }) => (
              <li key={`${id}${title}`}>
                <h3>{title}</h3>
              </li>
            ))}
        </ul>
      <Hero />
    </>
  )
}