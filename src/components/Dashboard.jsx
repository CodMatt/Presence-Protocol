import React from 'react';
import './Dashboard.css';
import EventsAttendingListComponent from './EventsAttendingList';
import AllEventsListComponent from './AllEventsList';

function DashboardComponent() {
  return (
    <div className="dashboard">
      <h1>Presence Protocol</h1>
      <h1>Your Events</h1>  
      <EventsAttendingListComponent></EventsAttendingListComponent>
      <h1>All Events</h1>
      <AllEventsListComponent></AllEventsListComponent>
    </div>
  );
} 

export default DashboardComponent;