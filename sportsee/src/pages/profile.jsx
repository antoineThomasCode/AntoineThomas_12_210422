import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../scss/pages/profile.scss"

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

    const  { id } = useParams();
    const currentUserInfo = userInfos.find(user => user.id === parseInt(id))
    /*const currentUserActivity = userActivity.find(user => user.userId === parseInt(id))*/
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

    if (!dataUser || !userActivitySessions || !userPerformanceData || ! userAverageSessionsData) {
      return <main className="main-profil"><div>Chargement des données de l'utilisateur</div></main>
    } return <main className="main-profil">
                <h1>Bonjour  <span className="last-name"> {dataUser ? (dataUser.userInfos.firstName) : 'data non chargé'}</span> </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className="charts-container">
                      <BarChartUser className="daily-activity-graph" data={userActivitySessions ?  (userActivitySessions.sessions) : 'data'}/>
                      <AverageSession className='average-session-graph' session={userAverageSessionsData.sessions}/>
                      <Performance data={userPerformanceData.data} />
                      <ScoreChart userScore={dataUser.score} color={'red'} />
                </div>
                <div className="logo-list">
                      <InfoCard icon={fire} alt={'icon des calories'} quantity={dataUser.keyData.calorieCount} unity={'kCal'} nutrient={'Calories'}/>
                      <InfoCard icon={chicken} alt={'icon des protéines'} quantity={dataUser.keyData.proteinCount} unity={'g'} nutrient={'Proteines'}/>
                      <InfoCard icon={apple} alt={'icon des Glucides'} quantity={dataUser.keyData.carbohydrateCount} unity={'g'} nutrient={'Glucides'}/>
                      <InfoCard icon={burger} alt={'icon des Lipides'} quantity={dataUser.keyData.lipidCount} unity={'g'} nutrient={'Lipides'}/>
                </div>
            </main>
}

export default Profile