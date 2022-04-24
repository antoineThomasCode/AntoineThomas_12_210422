import React from "react";
import '../scss/pages/home.scss'

import User from "../components/User";

function Home () {
    return (
        <main className="main-home">
            <div className="user-container">
                <User url={'/12'} name={'Karl Dovineau'}/>
                <User url={'/18'} name={'Cécilia Ratorez'}/>
            </div>
        </main>
    )
}
export default Home