import React from "react";
import "../scss/pages/profil.scss"

import BarChartUser from "../components/BarChart";

function Profil ({userInfos, userActivity, userPerformance, userAverageSession}) {
    const currentUserInfo = userInfos.find(user => user.id === 12)
    const currentUserActivity = userActivity.find(user => user.userId === 12)
    console.log(currentUserActivity.sessions)
    

    return (
        <main className="main-profil">
           <h1>Bonjour  <span className="last-name"> {currentUserInfo.userInfos.firstName}</span> </h1>
           <BarChartUser className="daily-activity-graph" data={currentUserActivity.sessions}/>
           <div className="chart-container">
                <p>autre graph </p>
                <p>autre graph </p>
                <p>autre graph </p>
                <p>autre graph </p>
           </div>
        </main>
    )
}
export default Profil