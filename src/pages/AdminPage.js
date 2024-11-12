import React from 'react';
import AttendanceChecklistComponent from '../components/AttendanceChecklist';
import { Client, Wallet, classicAddressToXAddress } from 'xrpl';

function AdminPage({userWallet, orgWallet}) {
return(
      <div className="App">
         <AttendanceChecklistComponent userWallet={userWallet} orgWallet={orgWallet}/>
      </div>
      );
}

export default AdminPage;