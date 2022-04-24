import React from "react";
import "../scss/pages/profil.scss"

function Profil ({userInfos, userActivity, userPerformance, userAverageSession}) {
    const currentUserInfo = userInfos.find(user => user.id === 12)
    console.log(currentUserInfo)

    return (
        <main className="main-profil">
           <h1>Bonjour <span className="last-name">{currentUserInfo.userInfos.firstName}</span></h1>
           <div>1er graph</div>
           <div>1er graph</div>
           <div>1er graph</div>
           <div>1er graph</div>
        </main>
    )
}
export default Profil