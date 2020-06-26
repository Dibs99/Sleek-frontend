import React from 'react';
import './ArtistDatabase.css';
import {
    Link, 
  } from "react-router-dom";



export default function ArtistDatabase(props) {

    
    
    
    return(  
    <div>
    <div className="artistBoxes-container">
        <div className="artistBoxes">
       {props.artistDatabase.map(artist => {
       return  <div className="artistBox" key={artist.id}>
       <Link  to={`/${artist.id}`} style={{textDecoration: 'none'}}>
           <img src={process.env.PUBLIC_URL + 'assets/' + artist.image} alt="artist"/>
         
       <div className='artistDeets boxBottom'>
           <h4>{artist.name}</h4>
       </div>
       </Link>    
     </div>
       })
    }
    </div>
    </div>
    
   
    </div>
    
    );
 
    
}

