import React, {useState} from 'react';

  import {useInput} from '../FormHooks';
  import Axios from "axios";
  import '../Contact/Contact.css'



export default function GetAQuote({artist}) {
  

    const { value:name, bind:bindName, reset:resetName } = useInput('');
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const { value:eventDate, bind:bindEventDate, reset:resetEventDate } = useInput('');
    const { value:eventType, bind:bindEventType, reset:resetEventType } = useInput('');
    const { value:message, bind:bindMessage, reset:resetMessage } = useInput('');

    const [submit, setSubmit] = useState('Send')

    const handleSubmit = (evt) => {
        evt.preventDefault();

        Axios({
            method: "POST",
            url: "http://188.166.240.15:4000/email",
            data: {
                name: name,
                email: email,
                eventDate: eventDate,
                eventType: eventType,
                message: message,
                artistName: artist.name
            }
         })
         setSubmit('Sent')
         resetName();
         resetEmail();
         resetEventDate();
         resetEventType();
         resetMessage();
        }


   
    return(
    <div className="getAQuote">
        <h1>Quote from {artist.name}</h1>
        <p>Fill out the form and they'll get back to you in a jiffy!</p>
        
        <form className="form" onSubmit={handleSubmit}>
            <div className="formElement">
                <input type="text" name="name" required {...bindName}/>
                <label for="name" className="label-name"><span className="content-name">Name</span></label>
            </div>    
                <br></br>
            <div className="formElement">                
                <input type="text" name="email"{...bindEmail} required/>
                <label for="email" className="label-name"><span className="content-name">Email</span></label>
            </div>    
                <br></br>
            <div className="formElement">                
                <input type="text" name="eventDate" {...bindEventDate} required/>
                <label for="eventDate" className="label-name"><span className="content-name">Event Date</span></label>
            </div>    
                <br></br>
            <div className="formElement">                
                <input type="text" name="eventType" {...bindEventType} required/>
                <label for="eventType" className="label-name"><span className="content-name">Event Type</span></label>
            </div>    
                <br></br>
            <div className="formTextArea">                
                <textarea type="text" name="message" {...bindMessage} rows="4" cols="10"/>
                <label for="message" className="label-name"><span className="content-name">Message</span></label>
            </div>   
            <div className="submit-container"><input className="submit" type="submit" value={submit}/></div>
        </form>
        
    </div>
          
    );
    
}


