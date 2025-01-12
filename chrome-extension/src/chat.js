import React from 'react';
import Chatbot from './chatbot'; 
import { useNavigate } from 'react-router-dom';

function Chat() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
    navigate(0);
  }
  return (
    <div className="Chat">
      <h1>Welcome to the chatbot page</h1>
      <button onClick={onClick}>Restart</button>
      <div ClassName="chat-container">
        <Chatbot />
      </div>
    </div>
  );
}

export default Chat;