import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameContext } from './context/GameContext'
import fetchGames from './hooks/fetchGames';
import './App.css';

import { Home } from './pages/Home'
import { GameDetails } from './pages/GameDetails'
import { Navbar } from './shared/Navbar';

export default function App() {
  const getGamesApi = fetchGames();

  useEffect(()=>{
    getGamesApi.request();
  },[])

  return (
    <GameContext.Provider value={{
      getGamesApi
    }}>
      <Router>
        <div className="App bg-slate-900 text-slate-100">
          <Navbar />
          <Routes>
            <Route exact path="/"element={<Home />}></Route>
            {getGamesApi.data && 
              getGamesApi.data.map((game, idx)=> (
                <Route 
                  exact 
                  path={getGamesApi.gameDetailPages[idx].url} 
                  element={<GameDetails
                  title={getGamesApi.gameDetailPages[idx].pageTitle} 
                  selectedGameID={getGamesApi.gameDetailPages[idx].gameId}/>}>
                </Route>
              ))
            }
          </Routes>
        </div>
      </Router>
    </GameContext.Provider>
  );
}
