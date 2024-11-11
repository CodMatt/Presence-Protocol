import React from 'react';

import DashboardComponent from './components/Dashboard';  // Make sure the import path is correct
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import { Client, Wallet, classicAddressToXAddress } from 'xrpl';

function App() {
  const userWallet = Wallet.fromSeed("sEdTZMhE5j7LmBDgWGsx34NPaS3mo64")
  const orgWallet = Wallet.fromSeed("sEd7j8QHdYgi1xgmXXZAx7iVR2Kodze")
  return (
   <Router>
   <Routes>
      <Route path="/" element={<DashboardComponent userWallet={userWallet} orgWallet={orgWallet}/>} />
      <Route path="/admin" element={<AdminPage />} />
   </Routes>
   </Router>
   
      
  );
}

export default App;