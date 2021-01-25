import React from 'react'
import "./CSC203Stack.css"
const Binary = () => {
    const ques = [
        {
            id : 1,
            note: "DIGITAL Systems are preferred over ANALOG because their physical quantities assume discrete values, i.e exact values unlike ANALOG where physical quantities may vary continuously over a specified range."
        },
        {
            id: 2,
            note: "COMBINATIONAL circuits depends only on the present values of the INPUTS while SEQUENTIAL circuits depend on the past and present values of the INPUTS."
        },
        {
            id: 3,
            note : "LOGIC GATES are the basic building blocks used to construct COMBINATIONAL circuits."
        }, {
            id: 4,
            note : "FLIPFLOPS are the basic MEMORY ELEMENTS used in the design of sequential circuits."
        }, {
            id : 5,
            note : "Conversion from BASE 10 to other bases - LONG DIVISION METHOD."
        }, {
            id : 6,
            note : "Conversion of DECIMAL numbers in BASE 10 to other bases is by MULTIPLICATION of the decimal part by that base until 1.00 is achieved. Kindly check the required text for examples."
        },
        {
            id : "7a",
            note : "Numbers in Base 8 and Base 16 are converted to Base 2 by seperation. If it is in Base 8 or Base 16, it is seperated into 3 per part for the later and 4 per part in Base 16, starting from the least significant figure (R.H.S) to the left, if the most significant figure can't be grouped into 3 or (4 in base 16), zeroes are added in front of such number"
        }, 
        {
            id : "7b",
            note : "Same method in number 7a is used for conversions from Base 2 to Base 16 (4 per part) and to Base 8 (3 per part)."
        }, {
            id : "7c",
            note : "If the number to be converted is a decimal number, the seperation should start from the decimal point."
        },{
            id: 8,
            note : "Formula for finding the 1s complement of a binary number is simply changing the 0s to 1s and 1s to 0s"
        },
        {
            id : 9,
            note : "Formula for finding the 2s complement is simply by leaving the less significant 0s before any 1s (R.H.S) unchanged and the first 1 from the back (R.H.S.) unchanged, then the remaining should be changed, 0s to 1 and 1s to 0.  For example :  0101101100. The 2s complement is : 1010010100"
        },
        {
            id : 10,
            note : "Kindly check your note for the formula for finding the radix complement and dimininished radix complement of a number. E.g The 8s complement of 3547 is 5341"
        },
         {
            id : 11,
            note : "GREY CODES differ from the preceeding by 1 bit"
        },
        {
            id : 13,
            note : "BCD - Binary Coded Decimal requires more bits than the binary. BCD numbers are decimal numbers not binary numbers, though they use the binary code 0000, 0001, etc."
        }, {
            id: 14,
            note: "When finding the sum of two numbers in BCD, if the sum of the numbers is >= 1010 (9 in base 10), 0110 (6 in base 10) is added to the sum in order to obtain the correct BCD sum."
        }, {
            id : 15,
            note : "A Binary Cell is a device that possess two stable states and is capable of storing one bit (0 or 1) of information."
        }, 
        {
            id : 16,
            note : "A Register is a group of binary cells. A register with n-cells can store any discrete quantity of information that contains n-bits."
        }
    ]
    return (
        <div className="binary">
            {
                ques.map(que => (<p key={que.id}><span id="number">{que.id})</span> {que.note}</p>))
            }
            <p><strong>For Conversion of Gray codes to Binary and binary to gray codes. Check out this link :- <a href="https://www.youtube.com/watch?v=cbmh1DPPQyI" target="_blank" rel="noreferrer">Watch short video</a></strong></p>
        </div>
    )
}

export default Binary
