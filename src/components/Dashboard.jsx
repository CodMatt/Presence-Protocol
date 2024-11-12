import React from 'react';
import './Dashboard.css';
import EventsAttendingListComponent from './EventsAttendingList';
import AllEventsListComponent from './AllEventsList';


function DashboardComponent({ userWallet, orgWallet }) {
  return (
    <div className="dashboard">
      <h1>Presence Protocol</h1>
      <h1>Your Events</h1>  
      <EventsAttendingListComponent userWallet={userWallet} orgWallet={orgWallet}></EventsAttendingListComponent>
      <h1>All Events</h1>
      <AllEventsListComponent userWallet={userWallet} orgWallet={orgWallet}></AllEventsListComponent>
    </div>
  );
} 

export default DashboardComponent;