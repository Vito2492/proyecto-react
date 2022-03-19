import React from "react";
import logo from '../../img/logo.png'
import ig from '../../img/ig.png'
import '../Header/Header.css'


const Header = () => {
    return (
        
        <div className="saludo">
            <img className="logo" src={logo} alt="logo" />            
            <h2 className="titulo">Mirelagocakes</h2>
            <img className="ig" src={ig} alt="ig" />   

            
        </div>
        
    );

    
};

export default Header