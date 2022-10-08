import { useEffect, useRef} from "react";

const Chats = ({ messages}) => {
  const messagesDiv = useRef(null);

  useEffect(() => {
    if(messagesDiv.current){
        messagesDiv.current.scrollTop =  Math.pow(10,9);//messagesDiv.current.scrollHeight;
      }
  });

  return (
    <div className="flex-1 flex flex-col justify-items-start  m-0 overflow-y-scroll pb-4" ref={messagesDiv}>
      {messages.map(m => <Message key={m.number} message={m} />)}
    </div>
  )
}

const Message = ({ message }) => {
  let contactMessaClass = "m-4 w-4/5 max-w-[90%] p-4 rounded-[10px] bg-gradient-to-r from-cyan-500 to-blue-500 ";
  let userMessageClass = "m-4 w-4/5 max-w-[90%] p-4  rounded-[10px] bg-gray-600 ml-auto";

  const msgOwner = message.is_user_msg;

  return (
    <div className={msgOwner == true ? userMessageClass : contactMessaClass}> 
      <p >{message.text} </p>
    </div>
  )
}

export default Chats;  
