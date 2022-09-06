import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { GameDetails } from './pages/GameDetails'
import { Navbar } from './shared/Navbar';
import { GameContext } from './context/GameContext'

import './App.css';

export default function App() {

  const [gameSelection, setGameSelection] = useState([]);
  
  const ffGameIds = {
    ff3: '53da5efb-5925-409b-399b-08d6b0a627a3',
    ff7: '9fc1c377-95f1-4a09-399f-08d6b0a627a3',
    ff15: '0da69a55-9ab2-4798-39a7-08d6b0a627a3'
  };

  const detailPages = [
    { 
      gameTitle: 'FFIII',
      url: '/ff-iii-details',
      pageTitle: 'FFIII | Details',
      navTitle: 'FFIII',
      ffGameIdsKey: 'ff3'
    },
    { 
      gameTitle: 'FFVII',
      url: '/ff-vii-details',
      pageTitle: 'FFVII | Details',
      navTitle: 'FFVII',
      ffGameIdsKey: 'ff7'
    },
    { 
      gameTitle: 'FFVXV',
      url: '/ff-xv-details',
      pageTitle: 'FFXV | Details',
      navTitle: 'FFXV',
      ffGameIdsKey: 'ff15'
    },
  ]

  return (
    <GameContext.Provider value={{
      detailPages,
      ffGameIds,
      gameSelection, 
      setGameSelection
    }}>
      <Router>
        <div className="App bg-slate-900 text-slate-100">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path={detailPages[0].url} element={<GameDetails title={detailPages[0].pageTitle} selectedGame={detailPages[0].ffGameIdsKey}/>}
            >
            </Route>
            <Route exact path={detailPages[1].url} element={<GameDetails title={detailPages[1].pageTitle} selectedGame={detailPages[1].ffGameIdsKey}/>}>
            </Route>
            <Route exact path={detailPages[2].url} element={<GameDetails title={detailPages[2].pageTitle} selectedGame={detailPages[2].ffGameIdsKey}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </GameContext.Provider>
  );
}
