
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../scss/pages/profile.scss"


import Loader from "../components/loader";

import BarChartUser from "../components/BarChart";
import AverageSession from "../components/AverageChart";
import Performance from "../components/Performance";
import ScoreChart from "../components/ScoreChart";

// infoCars elements needed 
import InfoCard from "../components/InfoCard";
//img 
import fire from '../assets/images/fire-icon.png'
import chicken from '../assets/images/chicken-icon.png'
import burger from '../assets/images/burger-icon.png'
import apple from '../assets/images/apple-icon.png'
import requestHandler from "../utils/genericFetch";







function Profile ({userInfos, userActivity, userPerformance, userAverageSession}) {
    console.log(process.env.REACT_APP_API)
    const  { id } = useParams();
    const currentUserInfo = userInfos.find(user => user.id === parseInt(id))
    const currentUserActivity = userActivity.find(user => user.userId === parseInt(id))
    const currentUserAverageSession = userAverageSession.find(user => user.userId === parseInt(id))
    const currentUserPerformances = userPerformance.find(user => user.userId === parseInt(id)) 
    
    const [dataUser, setDataUser] = useState()
    const [userActivitySessions, setUserActivitySessions] = useState() 
    const [userPerformanceData, setUserPerformanceData] = useState()
    const [userAverageSessionsData, setAverageSessionsData] = useState()

    useEffect(() => {
      const getApi = async () => {
        const data = await requestHandler({url: `http://localhost:3000/user/${id}/`});
        setDataUser(data.data);
      };
      getApi();
    }, [id])

    useEffect(() => {
      const getApi = async () => {
        const data = await requestHandler({url: `http://localhost:3000/user/${id}/activity`});
        setUserActivitySessions(data.data);
      };
      getApi();
    }, [id])

    useEffect(() => {
      const getApi = async () => {
        const data = await requestHandler({url: `http://localhost:3000/user/${id}/performance`});
        setUserPerformanceData(data.data);
      };
      getApi();
    }, [id])

    useEffect(() => {
      const getApi = async () => {
        const data = await requestHandler({url: `http://localhost:3000/user/${id}/average-sessions`});
        setAverageSessionsData(data.data);
      };
      getApi();
    }, [id])

    const score = dataUser?.todayScore || dataUser?.score;


    if (!dataUser || !userActivitySessions || !userPerformanceData || ! userAverageSessionsData) {
      return <Loader />
    } return <main className="main-profil">
                <h1>Bonjour  <span className="last-name"> {process.env.REACT_APP_API === 'TRUE' ? (dataUser.userInfos.firstName) : currentUserInfo.userInfos.lastName}</span> </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className="charts-container">
                      <BarChartUser className="daily-activity-graph" data={process.env.REACT_APP_API === 'TRUE' ?  (userActivitySessions.sessions) : currentUserActivity.sessions}/>
                      <AverageSession className='average-session-graph' session={process.env.REACT_APP_API === 'TRUE' ? (userAverageSessionsData.sessions) : currentUserAverageSession.sessions }/>
                      <Performance data={process.env.REACT_APP_API === 'TRUE' ? (userPerformanceData.data) : currentUserPerformances.data } />
                      <ScoreChart userScore={score} color={'red'} />
                </div>
                <div className="logo-list">
                      <InfoCard icon={fire} alt={'icon des calories'} quantity={process.env.REACT_APP_API === 'TRUE' ? (dataUser.keyData.calorieCount) : currentUserInfo.keyData.calorieCount} unity={'kCal'} nutrient={'Calories'}/>
                      <InfoCard icon={chicken} alt={'icon des protéines'} quantity={process.env.REACT_APP_API === 'TRUE' ? (dataUser.keyData.proteinCount) : currentUserInfo.keyData.proteinCount} unity={'g'} nutrient={'Proteines'}/>
                      <InfoCard icon={apple} alt={'icon des Glucides'} quantity={process.env.REACT_APP_API === 'TRUE' ? (dataUser.keyData.carbohydrateCount) : currentUserInfo.keyData.carbohydrateCount} unity={'g'} nutrient={'Glucides'}/>
                      <InfoCard icon={burger} alt={'icon des Lipides'} quantity={ process.env.REACT_APP_API === 'TRUE' ? (dataUser.keyData.lipidCount) : currentUserInfo.keyData.lipidCount} unity={'g'} nutrient={'Lipides'}/>
                </div>
            </main>
}

export default Profile