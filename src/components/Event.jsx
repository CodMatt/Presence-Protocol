import React from 'react';

function Event({ title, description, time, attending }) {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Time: {time}</p>
      {attending ? 
        <button>Check In</button> : 
        <button>Attend and Stake</button>
      }
    </div>
  );
}

export default Event;