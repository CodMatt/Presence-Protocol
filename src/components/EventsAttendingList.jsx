import React from 'react';
import Event from './Event';

function EventsAttendingListComponent({ userWallet, orgWallet}) {
  const events = [
    {
      id: 1,
      title: "Blockchain Basics Workshop",
      description: "An introductory workshop on blockchain technology.",
      time: "2024-11-15 10:00 AM",
      attending: true
    },
    {
      id: 2,
      title: "DeFi and You",
      description: "Understanding Decentralized Finance in today's economy.",
      time: "2024-11-16 2:00 PM",
      attending: true
    },
    {
      id: 3,
      title: "Smart Contract Coding",
      description: "Learn to write your first smart contract.",
      time: "2024-11-18 1:00 PM",
      attending: true
    }
  ];

  return (
    <div>
      {events.map(event => (
        <Event key={event.id} title={event.title} description={event.description} time={event.time} attending={event.attending} userWallet={userWallet}  orgWallet={orgWallet} />
      ))}
    </div>
  );
}

export default EventsAttendingListComponent;