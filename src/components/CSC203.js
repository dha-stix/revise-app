import React, {useState} from 'react'
import "./Dashboard.css"
import {IconButton} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import {Link} from "react-router-dom"
import DashNav from "./DashNav";
import CSC203Stack from "./CSC203Stack"


const CSC203 = () => {
    const [nav, showNav] = useState(false)
    const handleClick = () => showNav(!nav)
    return (
        <div className="dashboard">
        <DashNav/>

        <div className="dash--body">
            <div className="body--nav">
                <Link to="/" className="body--navHome">Home</Link>
                <IconButton className="nav--menuicon" onClick={handleClick}>
                {nav ? <MenuOpenIcon/> :<MenuIcon/>}
            </IconButton>
            </div>

            <CSC203Stack/>
            
            {nav && (
                <div className="hamburger--nav">
                    <Link to="/" className="nav--home">Home</Link>
                    <Link to="/question/CSC205" className="nav--course">CSC 205</Link>
                    <Link to="/question/CSC207"  className="nav--course">CSC 207</Link>
                    <Link to="/question/GNS201" className="nav--course">GNS 201</Link>
                    <Link to="/question/CSC203" className="nav--course">GNS 201</Link>
                </div>
            )}
            
        </div>
    </div>
    )
}

export default CSC203
