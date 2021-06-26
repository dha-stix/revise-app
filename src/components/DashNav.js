import React from 'react'
import "./Dashboard.css"
import {Link} from "react-router-dom"
const DashNav = () => {
    return (
        <div className="dash--nav">
                <Link to="/" className="welcome--nav">Welcome</Link>
                <Link to="/question/CSC205" className="nav--course">CSC 205</Link>
                <Link to="/question/CSC207"  className="nav--course">CSC 207</Link>
                <Link to="/question/GNS201" className="nav--course">GNS 201</Link>
                <Link to="/question/CSC203" className="nav--course">CSC203</Link>
                <Link to="/question/ECN214" className="nav--course">ECN214</Link>
            </div>
    )
}

export default DashNav
