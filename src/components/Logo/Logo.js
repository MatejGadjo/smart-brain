import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './icon_brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt w4 br2 shadow-2 h4">
                <div className="pa3">
                    <img style={{paddingTop: '2px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>

        </div>
    )
}

export default Logo;