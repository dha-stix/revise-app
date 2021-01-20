import React from 'react'
import "./Loading.css"
import {motion} from "framer-motion"
const LoadingPage = () => {
    const textVariant = {
       hover : {
        scale: 1.1,
        transition: {
            yoyo:Infinity
        }
       }
    }
    return (
        <div className="lazyload">
            <motion.h2
            variants={textVariant}
            animate="hover">Loading...</motion.h2>
        </div>
    )
}

export default LoadingPage
