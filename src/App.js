import logo from './logo.svg';
import './App.css';
import EmailList from './Components/emailList/emailList.component';
import EmailBody from './Components/emailBody/emailBody.component'
import React, {useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const[emails, setEmails] = useState([]);
  const[body, setBody] = useState([]);
  const[myemailBody, setEmailBody] = useState([]);

  useEffect(() => {
    const fetchEmails = async() => {
      const response = await axios.get("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      setEmails(response.data);
    };

    fetchEmails();
  }, []);

  useEffect(() => {
    if(body != []){
      setEmailBody(body);
      console.log("changed Body");
    }
  }, [body]);

  const handleClick = function(myBody){
    setBody(myBody);
  }
  

  return (
    <div className="App">
     <h1>Emails
     <EmailList emails={emails} handleClick={handleClick}/>
     </h1>
     <EmailBody email={myemailBody}/>
    </div>
  );
}

export default App;
