import React, { useState, useEffect } from "react";
import './email.styles.css';
const Email = ({ email, HandleClick }) => {
    const[readColor, setReadColor] = useState('light gray');
  
    const { id, from, address, time, message, subject, tag, read} = email;
    /*
    const[readState, setReadState] = useState(read);


    
    useEffect(() => {
        if(readState == true){
            setReadColor('blue');
        }else{
            setReadColor('gray');
        }
    }, readState);
    */
    
    //setReadState(read);
    const update = () =>{
        //console.log(read);
        console.log(email.id);
        //setReadState(true);
        HandleClick(email);
    }
    //console.log(readState);
    return (
        <div className="email-container">
            <button onClick={update} style={{backgroundColor:readColor}}>
            <h1>{from}</h1>
            <h2>{subject}</h2>
            <h1>{address}</h1>
            <h2>{time}</h2>
            </button>
            
        </div>
    )

};
export default Email;