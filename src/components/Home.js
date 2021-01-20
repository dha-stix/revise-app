import React from 'react'
import "./Home.css"
import {IconButton} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home">
            <nav className="home--nav">
                <Link to="/" className="home--title"> Revise</Link>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
            </nav>
            <div className="home--hero">
                <h1 className="hero--header">Score an A!</h1>
                <h3 className="hero--h3">Want to test if you are ready for the test or exam? </h3>
                <Link className="header--btn" to="/question/GNS201"> START NOW</Link>
            </div>
        </div>
    )
}

export default Home
