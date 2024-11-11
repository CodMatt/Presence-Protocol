import React from 'react';

import DashboardComponent from './components/Dashboard';  // Make sure the import path is correct
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';

function App() {
  return (
   <Router>
   <Routes>
      <Route path="/" element={<DashboardComponent />} />
      <Route path="/admin" element={<AdminPage />} />
   </Routes>
   </Router>
   
      
  );
}

export default App;