import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css';

export function ChatInput({ChatMessages,setChatMessages})    //Creating Components(ex:ChatInput(),ChatMessage())  //Using Fragment <></>
{       
  const [InputText,setInputText]=useState("");

  function SaveInputText(event){
    setInputText(event.target.value);
  }

  function HandleEnter(event) {
    if (event.key === "Enter") {
      SendMessage();
    }
  }

  function SendMessage(){
    if (!InputText.trim()) return;

    const messages=ChatMessages.length===1 && ChatMessages[0].id==="welcome"?
    []:ChatMessages;

    const newChatMsg=[
      ...messages,
      {
        message:InputText,
        sender:"user",
        id:crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMsg);
          
    const response=Chatbot.getResponse(InputText);
          
      
    setChatMessages([
      ...newChatMsg,
      {
        message:response,
        sender:"robot",
        id:crypto.randomUUID()
      }
    ])

    setInputText("");  //clearing the input field after sending the message
  }
       
        
  return(
    <div className="js-chat-input">                    
      <input 
        className="js-input"
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={SaveInputText}
        onKeyDown={HandleEnter} 
        value={InputText}
      />
      <button
      className="js-send-btn"
      onClick={SendMessage}>
        Send
      </button>
    </div>
  );
}