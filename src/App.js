import { useEffect, useState } from 'react';
import useFetch from "react-fetch-hook";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home'
import { GameDetails } from './pages/GameDetails'
import { Navbar, pageURLS } from './shared/Navbar';

import './App.css';

export default function App() {

  const [gameDetailsFF7, setgameDetailsFF7] = useState(null)
  const [charactersFF7, setcharactersFF7] = useState(null)
  
  const { isLoading, gameData, error } = useFetch(
    "https://www.moogleapi.com/api/v1/games"
  );

  return (
    <Router>
      <div className="App bg-slate-900 text-slate-100">
        <Navbar />
        <Routes>
          <Route exact path={pageURLS.home} element={<Home />}></Route>
          <Route exact path={pageURLS.detailsFFVII} element={<GameDetails title={'FFVII'}/>}></Route>
        </Routes>
        {/* <h1>Game Data</h1>
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
    </Router>
  );
}
