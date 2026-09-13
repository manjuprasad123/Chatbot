import { useState } from 'react'
import menuIcon from '../assets/Screenshot 2026-09-13 125154.png';
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
              <img 
                src={menuIcon}
                alt="Chatbot"
                className="sidebar-title-icon"/>
          </button>
          <h2 className="js-chat-title">Chatbot</h2>
        </div>

        <div className="js-chat-header-content">
          <button className="js-chat-btn">
            <img 
              src="https://img.icons8.com/fluency-systems-regular/48/pen-squared.png" 
              alt="NewChat"
              className="sidebar-icon"
            />
          </button>
          <span className="js-chat">NewChat</span>
        </div>

        <div className="js-chat-header-content">
          <button className="js-chat-btn">
            <img 
              src="https://img.icons8.com/fluency-systems-regular/48/stack-of-photos--v1.png" 
              alt="Images"
              className="sidebar-icon"
            />
          </button>
          <span className="js-chat">Images</span>
        </div>

        <div className="js-chat-header-content">
          <button className="js-chat-btn">
            <img 
              src="https://img.icons8.com/fluency-systems-filled/48/search.png" 
              alt="Search"
              className="sidebar-icon"
            />
          </button>
          <span className="js-chat">Search</span>
        </div>
        
        <div className="js-chat-header-content">
          <button className="js-chat-btn">
            <img 
              src="https://img.icons8.com/fluency-systems-regular/48/speech-bubble--v1.png" 
              alt="Recent"
              className="sidebar-icon"
            />
          </button>
          <span className="js-chat">Recent</span>
        </div>

      </div>
  );
}