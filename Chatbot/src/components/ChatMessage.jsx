import './ChatMessage.css';

export function ChatMessage({message,sender,id}){
  // const msg=props.message;
  // const sen=props.sender;

  //const{message,sender}=props;

  /* if(sender==="robot"){
    return(
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );
  } */
  
  //Guard Operator && works as if-statement
  return(           
    <div 
    id={id==="welcome"?"welcome":undefined}

    className={
      sender==="robot"
      ?"js-robot-msg"
      :"js-user-msg"
    }>

      <div className="js-msg-text">
        {message}
      </div>

    </div>
  );

}