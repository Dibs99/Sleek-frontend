import React, {useState} from 'react';
import {
    useParams
  } from "react-router-dom";
  import './ArtistId.css';

import NotFound from '../NotFound/NotFound';
import GetAQuote from '../GetAQuote/GetAQuote'

 

export default function ArtistId (props) { 
    //click handlers
    const [isButton, setButton] = useState('artist-button')
    const [isQuote, setQuote] = useState(false)

    
   

    const handleClick = (event) => {
        event.preventDefault();
        setButton('artist-button-hide');
        setQuote(true)
        setTimeout(function(){
            window.scrollBy({
                top: 500,
                behavior: 'smooth'
              })}, 300)
    }

    


    //page logic
        let {id} = useParams();
        function find(id) {
            return props.artist.find(p => p.id === id)
        }
        let artist = find(parseInt(id));
        let quote; 
         if (isQuote === false) {
            quote=null
        } if (isQuote === true) {
             quote=<GetAQuote artist={artist}/>
         };

        if (artist === undefined) {
            return <NotFound />
        } else {
        return (
            <div className="artistId">
                
                <div className="heroImage"><img src={process.env.PUBLIC_URL + '/assets/' + artist.image} alt={artist.name}></img>
                <h1>{artist.name}</h1></div>
                <div className="bodyBackground">
                    <div className="body">
                        <h2>Genre: {artist.style}</h2>
                        <h2>Members: {artist.members}</h2>
                        <h2>Favourite Fruit: {artist.favouriteFruit}</h2>
                        
                        
                        <div className="description">
                            <p>{artist.description}</p><iframe width="420" height="315"src={`https://www.youtube.com/embed/${artist.video}`} title={artist.name}></iframe>
                        </div>
                        <div className="artist-review">
                            <h4>{artist.review}</h4>
                            <h3>-{artist.reviewName}</h3>
                            
                        </div>
                        <div className={isButton}> <button onClick={handleClick}>Get A Quote</button>  </div>
                        {quote}
                        
                </div>    
                </div>

                
            </div>
        )
}
}
 


