import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import duckImage from './duck.jpg';
import ChatPage from './chat.js';

// Main Page Component
function MainPage() {
  const navigate = useNavigate();  // 👈 Add the useNavigate hook

  // When user clicks on a circle
  const handleCircleClick = (circleId) => {
    console.log(`Circle ${circleId} clicked`);

    // ✅ Send the selected role to the server
    fetch('http://localhost:5001/save-persona', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ persona: circleId }),  // Sending the selected role
    })
      .then(response => response.json())
      .then(data => {
        console.log('Persona saved:', data);

        // ✅ Navigate to the ChatPage after successful POST request
        navigate('/chat', { state: { selectedRole: circleId } });
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <div className="title">Who are you talking to today?</div>
      <div className="circle-container">
        <div className="row">
          <div className="circle-wrapper" onClick={() => handleCircleClick("Product Manager")}>
            <div className="circle" style={{ backgroundImage: `url(${duckImage})` }}></div>
            <div className="name">Cooper</div>
            <div className="role">Product Manager</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick("Data Analyst")}>
            <div className="circle" style={{ backgroundImage: `url(${duckImage})` }}></div>
            <div className="name">Dorothy</div>
            <div className="role">Data Analyst</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick("Upper Manager")}>
            <div className="circle" style={{ backgroundImage: `url(${duckImage})` }}></div>
            <div className="name">Chad</div>
            <div className="role">Upper Manager</div>
          </div>
        </div>
        <div className="row">
          <div className="circle-wrapper" onClick={() => handleCircleClick("UX Researcher")}>
            <div className="circle" style={{ backgroundImage: `url(${duckImage})` }}></div>
            <div className="name">Cynthia1</div>
            <div className="role">UX Researcher</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick("Business Dev")}>
            <div className="circle" style={{ backgroundImage: `url(${duckImage})` }}></div>
            <div className="name">Kayla</div>
            <div className="role">Business Dev</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick("Alien")}>
            <div className="circle" style={{ backgroundImage: `url(${duckImage})` }}></div>
            <div className="name">Joy3</div>
            <div className="role">Alien</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// App Component with Router Setup
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main page */}
        <Route path="/" element={<MainPage />} />
        {/* Route for the chat page */}
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;