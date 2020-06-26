import React, { useState } from 'react';
import './NavBar.css';
import {NavLink, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';




const Header = () =>{
    
    const [ isCheckbox, setCheckbox ] = useState("unchecked")

    function handleClick () {
        if (isCheckbox === "unchecked") {
        setCheckbox("checked")
        } if (isCheckbox === "checked")
        setCheckbox("unchecked")
    }

  
    
    return(
<div>
    <div className="container">
         
     
        <div className="navBar">
           
            <h1>Sleek</h1>
            <FontAwesomeIcon icon={faAlignJustify} onClick={handleClick} className="checkbox"/>
                <ul className={isCheckbox} >
                    <li><NavLink to='/' className="links" onClick={handleClick}> Home</NavLink></li>
                    <li><NavLink to='/about' className="links" onClick={handleClick}>About</NavLink></li>                
                    <li><NavLink to='/artists' className="links" onClick={handleClick}>Artists</NavLink> </li>                  
                    <li><NavLink to='/contact' className="links" onClick={handleClick}>Contact</NavLink> </li>         
                </ul>
            
                
        </div>
    </div>

</div>              
    );
}

export default Header; 

