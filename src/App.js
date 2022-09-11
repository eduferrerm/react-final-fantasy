import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameContext } from './context/GameContext'
import fetchGames from './hooks/fetchGames';
import fetchCharacters from './hooks/fetchCharacters';
import './App.css';

import { Home } from './pages/Home'
import { GameDetails } from './pages/GameDetails'
import { Navbar } from './shared/Navbar';
import { Footer } from './shared/Footer';

export default function App() {
  const getGamesApi = fetchGames();
  const getCharactersApi = fetchCharacters();

  useEffect(()=>{
    getGamesApi.request();
    getCharactersApi.request();
  },[])

  return (
    <GameContext.Provider value={{
      getGamesApi,
      getCharactersApi
    }}>
      <Router>
        <div className="App text-slate-100 overflow-hidden">
          <Navbar />
          <Routes>
            <Route exact path="/"element={<Home />}></Route>
            {getGamesApi.data && 
              getGamesApi.data.map((game, idx)=> (
                <Route
                  key={getGamesApi.gameDetailPages.gameId}
                  exact 
                  path={getGamesApi.gameDetailPages[idx].url} 
                  element={<GameDetails
                  title={getGamesApi.gameDetailPages[idx].gameTitle} 
                  selectedGameID={getGamesApi.gameDetailPages[idx].gameId}/>}>
                </Route>
              ))
            }
          </Routes>
          {!getGamesApi.loading &&
            <Footer />
          }
        </div>
      </Router>
    </GameContext.Provider>
  );
}
