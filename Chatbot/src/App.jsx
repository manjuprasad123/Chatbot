import { useState } from 'react'
import {ChatInput} from './components/ChatInput'
import ChatMessageComp from './components/ChatMessageComp'
import {Menubar} from './components/Sidebar.jsx'
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
          <Menubar/>
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
