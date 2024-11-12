import React from 'react';
import Event from './Event';

function AllEventsListComponent({ userWallet, orgWallet}) {
  const events = [
    {
      id: 4,
      title: "NFT Market Trends",
      description: "Explore the latest trends in the NFT market.",
      time: "2024-11-20 11:00 AM",
      attending: false
    },
    {
      id: 5,
      title: "Ethereum 2.0 Updates",
      description: "Deep dive into the updates and features of Ethereum 2.0.",
      time: "2024-11-22 3:00 PM",
      attending: false
    },
    {
      id: 6,
      title: "Web3 Security Best Practices",
      description: "Learn about the best practices to secure your web3 applications.",
      time: "2024-11-24 5:00 PM",
      attending: false
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

export default AllEventsListComponent;