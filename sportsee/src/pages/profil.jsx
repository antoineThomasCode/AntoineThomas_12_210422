import React from "react";
import "../scss/pages/profil.scss"

import BarChartUser from "../components/BarChart";
import AverageSession from "../components/AverageChart";
import Performance from "../components/Performance";
import ScoreChart from "../components/ScoreChart";

const userIdFix = 12
function Profil ({userInfos, userActivity, userPerformance, userAverageSession}) {
    const currentUserInfo = userInfos.find(user => user.id === userIdFix)
    const currentUserActivity = userActivity.find(user => user.userId === userIdFix)
    const currentUserAverageSession = userAverageSession.find(user => user.userId === userIdFix)
    const currentUserPerformances = userPerformance.find(user => user.userId === userIdFix)

    
    return (
        <main className="main-profil">
           <h1>Bonjour  <span className="last-name"> {currentUserInfo.userInfos.firstName}</span> </h1>
           <div className="charts-container">
                <BarChartUser className="daily-activity-graph" data={currentUserActivity.sessions}/>
                <AverageSession className='average-session-graph' data={currentUserAverageSession.sessions}/>
                <Performance data={currentUserPerformances.data} />
                <ScoreChart userScore={currentUserInfo.score} color={'red'} />
           </div>
           <div className="logo-list">

           </div>
        </main>
    )
}
export default Profil