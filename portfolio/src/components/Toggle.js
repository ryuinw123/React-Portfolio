import React, { useContext } from 'react';
import "./Toggle.css"
import Sun from "../img/Sun.png"
import Moon from "../img/Moon.png"
import { ThemeContext } from '../Context';
function Toggle() {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type : "TOGGLE" })
    }
    return (
        <div className="t">
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div className="t-button" onClick = {handleClick} style = {{left : theme.state.darkMode ? 0 : 25}}></div>
        </div>
    );
}

export default Toggle;
