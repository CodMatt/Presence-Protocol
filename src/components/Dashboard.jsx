import React from 'react';
import './Dashboard.css';

function DashboardComponent() {
  return (
    <div className="dashboard">
      <h1>Welcome</h1>
      <div className="instruction-box">
        <p>Here is some instruction text to follow</p>
      </div>
      <button>Click Me</button>
    </div>
  );
}

export default DashboardComponent;