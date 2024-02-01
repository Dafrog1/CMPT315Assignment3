import React from "react";
import "./emailBody.styles.css";

const EmailBody = ( {email} )  => {
    const { id, from, address, time, message, subject, tag, read} = email;

    return(
        <div className="emailBody-container">
            <h1>{from}</h1>
            <h2>{subject}</h2>
            <h1>{address}</h1>
            <h2>{time}</h2>
            <p>{message}</p>
        </div>
    )
};
export default EmailBody;