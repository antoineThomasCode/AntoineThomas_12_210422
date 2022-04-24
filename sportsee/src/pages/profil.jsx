import React from "react";
import "../scss/pages/profil.scss"

import BarChartUser from "../components/BarChart";

function Profil ({userInfos, userActivity, userPerformance, userAverageSession}) {
    const currentUserInfo = userInfos.find(user => user.id === 12)
    const currentUserActivity = userActivity.find(user => user.userId === 12)
    console.log(currentUserActivity.sessions)
    

    return (
        <main className="main-profil">
           <h1>Bonjour <span className="last-name">{currentUserInfo.userInfos.firstName}</span></h1>

           <div className="chart-container">
                <BarChartUser data={currentUserActivity.sessions}/>
           </div>
        </main>
    )
}
export default Profil