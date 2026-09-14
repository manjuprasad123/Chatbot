import {useRef,useEffect } from 'react'
import {ChatMessage} from './ChatMessage'
import './ChatMessageComp.css';

function ChatMessageComp({ChatMessages}){
  const chatMessagesRef=useRef(null);

  useEffect(()=>{
    const containerElem=chatMessagesRef.current;
    if(containerElem){
      containerElem.scrollTop=containerElem.scrollHeight;
    }
  },[ChatMessages])                   //[ChatMessages]=run this function everytime chat messages is created or updated

  return(
    <div className="js-chat-messages" ref={chatMessagesRef}>
      {ChatMessages.map((chatmsg)=>{
        return(
          <ChatMessage 
            message={chatmsg.message}
            sender={chatmsg.sender}
            key={chatmsg.id}
            id={chatmsg.id}
          />
        );
      })}
    </div>

  );

}

export default ChatMessageComp