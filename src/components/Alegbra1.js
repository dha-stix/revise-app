import React from 'react'
import "./CSC203Stack.css"
const Alegbra1 = () => {
    const ques = [
        {
            id: 1,
            note: "The basic operation of a boolean algebra are : AND, OR and NOT. AND is mostly represented with a dot (kind of similar to multiplication), while OR is represented with a plus sign (similar to addition)."
        }, {
            id : 2,
            note : "Kindly, learn about their symbols and extend your learning to NAND, NOR, XOR & XNOR"
        }, {
            id : 3,
            note : "When constructing the truth table for XOR, the output is 1 only if both inputs are different, while for XNOR, the output is 1 if both inputs are the same."
        }
    ]
    return (
        <div className="binary">
            {
                ques.map(que => (<p key={que.id}><span id="number">{que.id})</span> {que.note}</p>))
            }
            
        </div>
    )
}

export default Alegbra1
