import React, {useState, useEffect} from 'react'
import "./Dashboard.css"
import {IconButton} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import {Link} from "react-router-dom"
import Ques from './Ques';
import DashNav from "./DashNav";
import LoadingPage from './LoadingPage';

const CSC207 = () => {
  
    const [nav, showNav] = useState(false)
    const handleClick = () => showNav(!nav)
    const [questions, setQuestions] = useState([])

    useEffect(()=> {
        fetch("https://csc-ques.herokuapp.com/questions/207")
            .then(data => data.json()).then(res => {
            setQuestions(res.doc)
        })
    }, [])


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

                {
                    questions.length !== 0 ?(
                        <Ques questions={questions}/>
                    ) : (
                        <LoadingPage />
                    )
                }
                
                {nav && (
                    <div className="hamburger--nav">
                        <Link to="/" className="nav--home">Home</Link>
                        <Link to="/" className="nav--course">CSC 205</Link>
                        <Link to="/"  className="nav--course">CSC 207</Link>
                        <Link to="/" className="nav--course">GNS 201</Link>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default CSC207
