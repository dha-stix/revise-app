import React, {useState} from 'react'
import Alegbra1 from './Alegbra1'
import Binary from './Binary'
import CSC203Ques from './CSC203Ques'
import "./CSC203Stack.css"

const CSC203Stack = () => {
    const [binary, setBinary] = useState(false)
    const showBinary = () => {
       setQuine(false)
       setKarnaugh(false)
       setAlgebra2(false)
       setAlgebra(false)
       setLatches(false)
       setBinary(true)
    } 

    const [algebra, setAlgebra] = useState(false)
    const showAlgebra = () => {
       setBinary(false)
       setQuine(false)
       setKarnaugh(false)
       setAlgebra2(false)
       setLatches(false)
       setAlgebra(true)
    }

    const [algebra2, setAlgebra2] = useState(false)
    const showAlgebra2 = () => {
        setAlgebra(false)
       setBinary(false)
       setQuine(false)
       setKarnaugh(false)
       setLatches(false)
       setAlgebra2(true)
    }

    const [karnuagh, setKarnaugh] = useState(false)
    const showKarnaugh = () => {
        setAlgebra(false)
       setBinary(false)
       setAlgebra2(false)
       setQuine(false)
       setLatches(false)
       setKarnaugh(true)
    }
    const [quine, setQuine] = useState(false)
    const showQuine = () => {
        setAlgebra(false)
       setBinary(false)
       setAlgebra2(false)
       setKarnaugh(false)
       setLatches(false)
       setQuine(true)
    }
    const [latches, setLatches] = useState(false)
    const showLatches= () => {
        setAlgebra(false)
        setBinary(false)
        setAlgebra2(false)
        setKarnaugh(false)
        setQuine(false)
        setLatches(true)
       
    }
    return (
        <div className="headings">
            <div className="heading">
            <button onClick={showBinary}> Binary Numbers & Conversions</button> 
            {binary && (<Binary />)} 
            </div>
            <div className="heading">
            <button onClick={showAlgebra}>Boolean Algebra</button> 
            {algebra && (<Alegbra1 />)} 
            </div>
            <div className="heading">
            <button onClick={showAlgebra2}> Boolean Algebra II</button> 
            {algebra2 && (<CSC203Ques />)} 
            </div>
            <div className="heading">
            <button onClick={showKarnaugh}> Karnaugh Maps</button> 
            {karnuagh && (<CSC203Ques />)} 
            </div>
            <div className="heading">
            <button onClick={showQuine}> Quine-McCluskey</button> 
            {quine && (<CSC203Ques />)} 
            </div>
            <div className="heading">
            <button onClick={showLatches}> Latches & Flip Flops</button> 
            {latches && (<CSC203Ques />)} 
            </div>

        </div>
    )
}

export default CSC203Stack
