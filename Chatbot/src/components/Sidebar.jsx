import { useState } from 'react'
import './Sidebar.css'

export function Menubar(){
  const[isSideBar,setIsSideBar]=useState(false);

  const ToogleSideBar=()=>{
    setIsSideBar(!isSideBar);
  }

  return(
      <div className={isSideBar? "sidebar-extend" : "sidebar-shrink"}>

        <div className="js-chat-header-content">
          <button className="js-chat-title-btn"
          onClick={ToogleSideBar} >
            M
          </button>
          <h2 className="js-chat-title">Chatbot</h2>
        </div>
        
      </div>
  );
}