
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../scss/pages/profile.scss"


import Loader from "../components/Loader";

import requestHandler from "../utils/genericFetch";
import isFromApi from "../utils/isFromApi";
import ProfilContentUser from "../components/ProfilContent";


function Profile ({userInfos, userActivity, userPerformance, userAverageSession}) {


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
      if(!isFromApi) return
      const getApi = async () => {
          const data = await requestHandler({url: `http://localhost:3000/user/${id}/`});
          setDataUser(data.data);
      };
      getApi();
    }, [id])

    useEffect(() => {
      if(!isFromApi) return
      const getApi = async () => {
        const data = await requestHandler({url: `http://localhost:3000/user/${id}/activity`});
        setUserActivitySessions(data.data);
      };
      getApi();
    }, [id])

    useEffect(() => {
      if(!isFromApi) return
      const getApi = async () => {
          const data = await requestHandler({url: `http://localhost:3000/user/${id}/performance`});
          setUserPerformanceData(data.data);
      };
      getApi();
    }, [id])

    useEffect(() => {
      if(!isFromApi) return
      const getApi = async () => {
          const data = await requestHandler({url: `http://localhost:3000/user/${id}/average-sessions`});
          setAverageSessionsData(data.data);
      };
      getApi();
    }, [id])
    // solve issue width returned object score or todayScore from API 
    const score = dataUser?.todayScore || dataUser?.score || currentUserInfo?.score || currentUserInfo?.todayScore
  

    if ((!dataUser || !userActivitySessions || !userPerformanceData || !userAverageSessionsData) && isFromApi) {
      return <Loader />
    } 
    return <main className="main-profil" id="main-container">
                <ProfilContentUser
                firstName={isFromApi ? (dataUser.userInfos.firstName) : currentUserInfo.userInfos.lastName}
                dailyActivity={ isFromApi ? (userActivitySessions.sessions) : currentUserActivity.sessions}
                sessions={isFromApi ? (userAverageSessionsData.sessions) : currentUserAverageSession.sessions}
                perf={isFromApi ? (userPerformanceData.data) : currentUserPerformances.data}
                userScore={score}
                kal={isFromApi ? (dataUser.keyData.calorieCount) : currentUserInfo.keyData.calorieCount}
                prot={isFromApi ? (dataUser.keyData.proteinCount) : currentUserInfo.keyData.proteinCount}
                gluc={isFromApi ? (dataUser.keyData.carbohydrateCount) : currentUserInfo.keyData.carbohydrateCount}
                lip={isFromApi ? (dataUser.keyData.lipidCount) : currentUserInfo.keyData.lipidCount}
                />
            </main>
            
}

export default Profile