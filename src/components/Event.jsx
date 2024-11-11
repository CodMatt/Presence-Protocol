import React from 'react';
import AttendAndStake from './AttendAndStake';

function Event({ title, description, time, attending ,userWallet, orgWallet, stakeAmount}) {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Time: {time}</p>
      {attending ? 
        <button>Check In</button> : 
        <AttendAndStake userWallet={userWallet}  orgWallet={orgWallet} stakeAmount={30}></AttendAndStake>
      }
    </div>
  );
}

export default Event;