import React from 'react';
import './Dashboard.css';
import EventsAttendingListComponent from './EventsAttendingList';
import AllEventsListComponent from './AllEventsList';

function DashboardComponent() {
  return (
    <div className="dashboard">
      <h1>Welcome</h1>
      <div className="instruction-box">
        <p>Here is some instruction text to follow</p>
      </div>
      <button>Click Me</button>
      <EventsAttendingListComponent></EventsAttendingListComponent>
      <AllEventsListComponent></AllEventsListComponent>
    </div>
  );
}

export default DashboardComponent;