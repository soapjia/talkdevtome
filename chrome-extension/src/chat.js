import React from 'react';
import Chatbot from './chatbot'; 
import { useNavigate } from 'react-router-dom';
import './chat.css';

function Chat() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
    navigate(0);
  }
  return (
    <div className="Chat">
      <div className="chat-container">
        <Chatbot />
      </div>
      <button onClick={onClick} className="restart-button">Restart</button>
    </div>
  );
}

export default Chat;