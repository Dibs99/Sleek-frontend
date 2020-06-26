import React, { useLayoutEffect, useRef, useState } from 'react';
import './Body.css';
import ArtistDatabase from '../ArtistDatabase/ArtistDatabase';

export default function Body (props) {

    const [isVisible1, setVisible1] = useState(false)
    const [isVisible2, setVisible2] = useState(false)
    
    const domRef1 = useRef(null);
    const domRef2 = useRef(null);


    useLayoutEffect(() => {
      const topPos = element => element.getBoundingClientRect().top;
      const divPos1 = topPos(domRef1.current);
      const divPos2 = topPos(domRef2.current);

      const onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        if (divPos1 < scrollPos){
        setVisible1(true);
      } if (divPos2 < scrollPos) {
        setVisible2(true);
      }
    }

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    

    return(

    <div className='body'>
      <div className="cover"><div className='triangle'></div><h1>Sleek Entertainment <br></br> & Sound</h1></div>
      <hr></hr>
      <div className={`fade-in-section title ${isVisible1 ? 'is-visible' : ''}`} ref={domRef1}>
        <h1>BEST AUCKLAND <br></br>MUSICIANS</h1></div>
       <div className='title'><h3>No agency fees</h3></div>
    
        <hr></hr>
     <div className={`fade-in-section ${isVisible2 ? 'is-visible' : ''}`} ref={domRef2}><ArtistDatabase artistDatabase={props.artistDatabase}/></div>
    </div>
            
    
    
           
        
    );
}


