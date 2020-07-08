This is a website for a music agency which shows all the information for the performers dynamically. It can be used to send an email straight to the performer, or through the contact form to have an agent organise the entertainer on your behalf. The website is fully responsive, and supports all latest browsers.

``` javascript
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

