import React from "react";
import BarChartUser from "../components/BarChart";
import AverageSession from "../components/AverageChart";
import Performance from "../components/Performance";
import ScoreChart from "../components/ScoreChart";

// infoCards elements needed 
import InfoCard from "../components/InfoCard";
//img 
import fire from '../assets/images/fire-icon.png'
import chicken from '../assets/images/chicken-icon.png'
import burger from '../assets/images/burger-icon.png'
import apple from '../assets/images/apple-icon.png'


function ProfilContentUser ({firstName, dailyActivity, sessions, perf, userScore, kal, prot, gluc, lip}) {
    return (
        <div className="profilContent">
            <h1>Bonjour  <span className="last-name"> {firstName}</span> </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className="charts-container">
                      <BarChartUser className="daily-activity-graph" data={dailyActivity}/>
                      <AverageSession className='average-session-graph' session={sessions}/>
                      <Performance data={perf} />
                      <ScoreChart userScore={userScore} color={'red'} />
                </div>
                <div className="logo-list">
                      <InfoCard icon={fire} alt={'icon des calories'} quantity={kal} unity={'kCal'} nutrient={'Calories'}/>
                      <InfoCard icon={chicken} alt={'icon des protéines'} quantity={prot} unity={'g'} nutrient={'Proteines'}/>
                      <InfoCard icon={apple} alt={'icon des Glucides'} quantity={gluc} unity={'g'} nutrient={'Glucides'}/>
                      <InfoCard icon={burger} alt={'icon des Lipides'} quantity={lip} unity={'g'} nutrient={'Lipides'}/>
                </div>
        </div>
    )
}

export default ProfilContentUser