import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import genericFetch from "../utils/genericFetch";
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







function Profile ({userInfos, userActivity, userPerformance, userAverageSession}) {

    const  { id } = useParams();
    const currentUserInfo = userInfos.find(user => user.id === parseInt(id))
    const currentUserActivity = userActivity.find(user => user.userId === parseInt(id))
    const currentUserAverageSession = userAverageSession.find(user => user.userId === parseInt(id))
    const currentUserPerformances = userPerformance.find(user => user.userId === parseInt(id))
    
    const [dataState, setDataState] = useState({})

    useEffect(() => {
      const getApi = async () => {
        const data = await genericFetch(parseInt(id), 'activity');
        setDataState(data);
      };
      getApi();
    }, [])
    console.log(dataState.data) 
   
    return (
        <main className="main-profil">
           <h1>Bonjour  <span className="last-name"> {currentUserInfo.userInfos.firstName}</span> </h1>
           <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
           <div className="charts-container">
                <BarChartUser className="daily-activity-graph" data={currentUserActivity.sessions}/>
                <AverageSession className='average-session-graph' session={currentUserAverageSession.sessions}/>
                <Performance data={currentUserPerformances.data} />
                <ScoreChart userScore={currentUserInfo.score} color={'red'} />
           </div>
           <div className="logo-list">
                <InfoCard icon={fire} alt={'icon des calories'} quantity={currentUserInfo.keyData.calorieCount} unity={'kCal'} nutrient={'Calories'}/>
                <InfoCard icon={chicken} alt={'icon des protéines'} quantity={currentUserInfo.keyData.proteinCount} unity={'g'} nutrient={'Proteines'}/>
                <InfoCard icon={apple} alt={'icon des Glucides'} quantity={currentUserInfo.keyData.carbohydrateCount} unity={'g'} nutrient={'Glucides'}/>
                <InfoCard icon={burger} alt={'icon des Lipides'} quantity={currentUserInfo.keyData.lipidCount} unity={'g'} nutrient={'Lipides'}/>
           </div>
        </main>
    )
}

export default Profile