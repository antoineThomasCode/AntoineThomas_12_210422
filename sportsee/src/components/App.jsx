
import {Routes, Route } from "react-router-dom";
import React from 'react'
import '../scss/components/App.scss';
import {userInfos, userActivity, userPerformance, userAverageSession} from "../data/data"
import Aside from "./Aside";
import Header from './Header';
import Home from '../pages/home';
import Profile from "../pages/profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:id" element={<Profile userInfos={userInfos} userActivity={userActivity} userPerformance={userPerformance} userAverageSession={userAverageSession} />} />
        </Routes>
    </div>
  );
}

export default App;
