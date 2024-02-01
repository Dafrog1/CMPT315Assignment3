import React from "react";
import Email from "../email/email.component";
import "./emailList.styles.css";

const EmailList = ({ emails, handleClick }) => (
    <div className="emaillist" >
        {emails.map(email => (
            <Email key={email.id} email={email} HandleClick={handleClick}/>
        ))}
    </div>
);

export default EmailList;