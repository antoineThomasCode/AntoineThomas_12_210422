import React from "react";
import { Link } from "react-router-dom";
import '../scss/components/User.scss'

function User ({url, name}) {

    return (
            <Link className="user-card" to={url}>{name}</Link>
    )
}
export default User