import React from "react";
import "../scss/pages/profil.scss"

import BarChartUser from "../components/BarChart";
import AverageSession from "../components/AverageChart";

function Profil ({userInfos, userActivity, userPerformance, userAverageSession}) {
    const currentUserInfo = userInfos.find(user => user.id === 12)
    const currentUserActivity = userActivity.find(user => user.userId === 12)
    

    return (
        <main className="main-profil">
           <h1>Bonjour  <span className="last-name"> {currentUserInfo.userInfos.firstName}</span> </h1>
           <BarChartUser className="daily-activity-graph" data={currentUserActivity.sessions}/>
           <AverageSession className='average-session-graph'/>
        </main>
    )
}
export default Profil