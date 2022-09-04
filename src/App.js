import { useEffect, useState } from 'react';
import useFetch from "react-fetch-hook";

import { Hero } from './components/Hero'
import './App.css';

export default function App() {

  const [gameDetailsFF7, setgameDetailsFF7] = useState(null)
  const [charactersFF7, setcharactersFF7] = useState(null)
  
  const { isLoading, gameData, error } = useFetch(
    "https://www.moogleapi.com/api/v1/games"
  );

  return (
    <div className="App bg-slate-900 text-slate-100">
      <Hero />
      {/* <h1>API Posts</h1>
      {isLoading && <div>Please wait =)...</div>}
      {error && (
        <div>{`Opps! something went wrong, error: - ${error}`}</div>
      )}
      <ul>
        {gameData &&
          gameData.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul> */}
    </div>
  );
}
