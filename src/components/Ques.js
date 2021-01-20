import React, {useState} from 'react'
import "./Dashboard.css"
import {useHistory} from "react-router-dom"

const Ques = ({questions}) => {
    const [ans, showAns] = useState(false)
    const toggleAnswer = () => showAns(!ans)
    const [count, setCount] = useState(0)
    const history = useHistory()

    const goHomeFunction = () => history.push("/")
    const nextFunction = () => {
    if (count < questions.length - 1) {
      setCount(count + 1);
      showAns(false)
    }
  };
  const prevFunction = () => {
    if (count > 0) {
      setCount(count - 1);
      showAns(false)
    }
  };
    return (
        <div className="body--questionsContainer">

                    <div className="body--questionsBtn">
                        <button onClick={prevFunction}>PREVIOUS</button>
                        {(count === questions.length - 1) ? (
                            <button onClick={ goHomeFunction}>FINISH</button> 
                        ) :
                        (
                            <button onClick={ nextFunction}>NEXT</button>
                        )}
                        
                    </div>

                    <div key={questions[count].id}>
                        <h3 className="body--question">{questions[count].question}</h3>
                        {ans && (
                            <p className="body--answer">{questions[count].answer}</p>
                        )}
                        <button className="body--answerBtn" onClick={toggleAnswer}>{ ans ? "Hide" : "Show"} Answer</button>  
                        </div>
                     
                </div>
    
    )
}

export default Ques
