
import {Routes, Route } from "react-router-dom";
import React from 'react'
import './App.scss';
import {userInfos, userActivity, userPerformance, userAverageSession} from "./data/data"
import Aside from "./components/Aside";
import Header from './components/Header';
import Home from './pages/home';
import Profil from "./pages/profil";

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:id" element={<Profil userInfos={userInfos} userActivity={userActivity} userPerformance={userPerformance} userAverageSession={userAverageSession} />} />
      
        </Routes>
    </div>
  );
}

export default App;
