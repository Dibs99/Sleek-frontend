import React, { useState } from 'react';
import ArtistDatabase from '../ArtistDatabase/ArtistDatabase';
import './Artists.css'


export default function Artists (props){ 

    const [isArtistStyle, setArtistStyle] = useState('Default')
    
    
    function handleAcouticCheckbox(event)  {
        setArtistStyle(event.target.value)
    }

    
       const artistStyle = props.artistDatabase.filter(artist => artist.style === isArtistStyle);
       let component;
       if(isArtistStyle === 'Default'){
            component=<ArtistDatabase artistDatabase={props.artistDatabase}/>
       } else {
        component=<ArtistDatabase artistDatabase={artistStyle} />
       };

       const styleArray = props.artistDatabase.map(artist => artist.style)
       let unique = [...new Set(styleArray)]
       
    return (
        <div className="artist-container">
            <div className="artist-title">
                <h1>Artists</h1>
                <p>Pick an artist<br></br> then click get a quote</p>
            </div>    
            <form className="artist-form">
                
                    <select value={isArtistStyle} onChange={handleAcouticCheckbox}>
                    <option value='Default' key='default'>Pick your genre</option>
                        { unique.map(value => {
                            return <option value={value} key={value}>{value}</option>
                        })
                        }
                    </select>
                    
                
            </form>
            {component}
            
        </div>
    );
    };    

