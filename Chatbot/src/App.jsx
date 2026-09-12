import { useState } from 'react'
import {ChatInput} from './components/ChatInput'
import ChatMessageComp from './components/ChatMessageComp'

import Appicon from '/ChatGPT Image Sep 10, 2026, 05_39_13 PM.png';
import './App.css'


function App(){
  const [ChatMessages,setChatMessages]=useState(     //React.useState() is used to create a state variable in a functional component. It returns an array with two elements: the current state value and a function to update that state value.
    [
            
    ]
  );
        
        /*const ChatMessages=array[0];                             //current state value
        const setChatMessages=array[1]; */                         //function to update that state value

        // const [Chatmessages,setChatMessages]=array; (shortcut)


  return(
    <>
            
      <div className="js-chat-sidebar">

        <div className="js-chat-header-content">
          <img className="js-chat-icon"
          src={Appicon}/>
          <h2 className="js-chat-title">Chatbot</h2>
        </div>

      </div>
          

      <div className="js-chat-container">
        <ChatMessageComp 
        ChatMessages={ChatMessages}/>
              
        <ChatInput 
        ChatMessages={ChatMessages}
        setChatMessages={setChatMessages}/>
      </div>

    </>
  );
}

export default App
