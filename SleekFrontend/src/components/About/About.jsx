import React from 'react';
import './About.css';
import {
    Link,
  } from "react-router-dom";

const About = () =>{
    return(
        <div>
            <div className="aboutCover">
                <div className="color"></div>
                <div className="aboutTitle">
                    <h1>Find quality entertainers,<br></br> then book direct</h1>
                    <Link to={`/artists`}> <button>Browse artists</button></Link >
                </div>
            </div>
            <div className="hire-for">  
                     <h2>Weddings</h2>
                    <h2>Birthdays</h2>
                    <h2>Corporates</h2>
                    <h2>Just 'Cos!</h2>
            </div>
            <div className="about-us-background">
                 <div className="about-us-inner-background">
                    <div className="about-us">
                        <h1>About Us</h1>
                        <p>There are pros and cons to having your entertainment booked by an agent vs booking direct. At Sleek Entertainment we give you the option of either.
                            We encourage you to book with the artist directly, but if you would prefer to have an agent pick your entertainment for you, then click the button below.
                     </p>
                     <Link to={`/contact`}> <button>Contact Us!</button> </Link >
                     </div>
                     
                 </div>
            </div>
        </div>
    );
}

export default About; 