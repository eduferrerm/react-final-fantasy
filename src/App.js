import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home'
import { GameDetails } from './pages/GameDetails'
import { Navbar, pageURLS } from './shared/Navbar';

import './App.css';

export default function App() {

  return (
    <Router>
      <div className="App bg-slate-900 text-slate-100">
        <Navbar />
        <Routes>
          <Route exact path={pageURLS.home} element={<Home />}></Route>
          <Route exact path={pageURLS.detailsFFVII} element={<GameDetails title={'FFVII'}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
