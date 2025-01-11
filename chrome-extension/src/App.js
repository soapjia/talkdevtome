import React from 'react';
import './App.css';
import duckImage from './duck.jpg';

function App() {

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
            <div className="name">cynthia</div>
            <div className="role">student</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(2)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">grass</div>
            <div className="role">student</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(3)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">joy</div>
            <div className="role">student</div>
          </div>
        </div>
        <div className="row">
          <div className="circle-wrapper" onClick={() => handleCircleClick(4)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">cynthia1</div>
            <div className="role">student</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(5)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">grass2</div>
            <div className="role">student</div>
          </div>
          <div className="circle-wrapper" onClick={() => handleCircleClick(6)}>
          <div className="circle" style={{ backgroundImage: `url(${duckImage})`}}></div>
            <div className="name">joy3</div>
            <div className="role">student</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
