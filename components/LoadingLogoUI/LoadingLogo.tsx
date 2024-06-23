import React from 'react'
import classes from "./LoadingLogo.module.css"
import MainLogo from '../LogoSVGs/MainLogo'
import SecondaryLogo from '../LogoSVGs/SecondaryLogo'


const LoadingLogo = () => {
  return (    
    <div className="container">
        <div className="cube">
            <div className="face top"></div>
            <div className="face bottom">Bottom</div>
            <div className="face left">Left</div>
            <div className="face right">Right</div>

            <div className="face front">
                <SecondaryLogo size="50px" color="#0000"/>
            </div>
            <div className="face back">
                <MainLogo size="50px"color="#0000"/>
            </div>
        </div>
    </div>
  )
}

export default LoadingLogo