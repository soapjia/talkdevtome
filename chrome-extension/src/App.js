import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import duckImage from './duck.jpg';
import basketballImage from './basketball duck.jpg';
import bubbleImage from './bubble duck.jpg';
import businessImage from './business duck.jpg';
import coolImage from './cool duck.jpg';
import knifeImage from './knife duck.jpg';
import alienImage from './alien.jpg';
import ChatPage from './chat.js';

function MainPage() {
  const navigate = useNavigate();
  // When user clicks on a circle
  const handleCircleClick = (circleId) => {
    navigate('/chat', { state: { circleId } });
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
            <div className="circle" style={{ backgroundImage: `url(${basketballImage})`}}></div>
            <div className="name">Pete</div>
            <div className="role">Product Manager</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(2)}>
          <div className="circle" style={{ backgroundImage: `url(${bubbleImage})`}}></div>
            <div className="name">Dorothy</div>
            <div className="role">Data Analyst</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(3)}>
          <div className="circle" style={{ backgroundImage: `url(${businessImage})`}}></div>
            <div className="name">Unc</div>
            <div className="role">Upper Manager</div>
          </div>
        </div>
        <div className="row">
          <div className="circle-wrapper" onClick={() => handleCircleClick(4)}>
          <div className="circle" style={{ backgroundImage: `url(${coolImage})`}}></div>
            <div className="name">Usher</div>
            <div className="role">UX Researcher</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(5)}>
          <div className="circle" style={{ backgroundImage: `url(${knifeImage})`}}></div>
            <div className="name">Betty</div>
            <div className="role">Business Dev</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(6)}>
          <div className="circle" style={{ backgroundImage: `url(${alienImage})`}}></div>
            <div className="name">Al</div>
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
