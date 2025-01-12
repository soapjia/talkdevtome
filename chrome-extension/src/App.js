import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import duckImage from './duck.jpg';
import ChatPage from './chat.js';

function MainPage() {

  // When user clicks on a circle
  const handleCircleClick = (circleId) => {
    console.log(`Circle ${circleId} clicked`);
    // can add another things here
    console.log("clicked");
  };

  return (
    <div className= "App">
      <div className="title">Who are you talking to today?</div>
      <div className="circle-container">
        <div className="row">
          <div className="circle-wrapper" onClick={() => handleCircleClick(1)}>
            <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">Cooper</div>
            <div className="role">Product Manager</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(2)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">Dorothy</div>
            <div className="role">Data Analyst</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(3)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">Chad</div>
            <div className="role">Upper Manager</div>
          </div>
        </div>
        <div className="row">
          <div className="circle-wrapper" onClick={() => handleCircleClick(4)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">cynthia1</div>
            <div className="role">UX Researcher</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(5)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">Kayla</div>
            <div className="role">Business Dev</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(6)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">joy3</div>
            <div className="role">Alien</div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
