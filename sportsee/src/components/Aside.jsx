import React from "react";
import '../scss/components/Aside.scss'

import icon1 from "../assets/images/aside-icon-1.svg"
import icon2 from "../assets/images/aside-icon-2.svg"
import icon3 from "../assets/images/aside-icon-3.svg"
import icon4 from "../assets/images/aside-icon-4.svg"

function Aside () {
    return (
        <aside className="App-aside">
            <div><img src={icon1} alt="" /></div>
            <div><img src={icon2} alt="" /></div>
            <div><img src={icon3} alt="" /></div>
            <div><img src={icon4} alt="" /></div>
            <p>Copiryght, SportSee 2020</p>
        </aside>
    )
}
export default Aside