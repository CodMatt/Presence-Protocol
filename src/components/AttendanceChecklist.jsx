import React, { useState } from 'react';
import { Client, Wallet, xrpToDrops, isoTimeToRippleTime } from 'xrpl'

function AttendanceChecklist({ userWallet, orgWallet, sequence }) {
   // Sample list of names
   const namesList = ["Chad Coinson"];
   
   // State to track checked names
   const [attendance, setAttendance] = useState(
      namesList.reduce((acc, name) => ({ ...acc, [name]: false }), {})
   );

   // Handler for toggling checkboxes
   const handleCheckboxChange = (name) => {
      setAttendance((prevAttendance) => ({
         ...prevAttendance,
         [name]: !prevAttendance[name],
      }));
   };

   // Handler for verifying attendance
   const handleVerifyAttendance = () => {
      console.log("userWallet: ", userWallet); 
      console.log("orgWallet: ", orgWallet)
      const returnStake = async () => {
      try {
      const client = new Client("wss://s.altnet.rippletest.net:51233");
      await client.connect();


      const escrowFinishTx = {
         TransactionType: "EscrowFinish",
         Account: orgWallet.classicAddress,            // The address finishing the escrow
         OfferSequence: sequence, 
      };

      const prepared = await client.autofill(escrowFinishTx);
      const signedTransaction = orgWallet.sign(prepared);
      console.log("signedTransaction; ", signedTransaction)
      //const result = await client.submitAndWait(signedTransaction.tx_blob);
      const { result } = await client.submitAndWait(signedTransaction.tx_blob);

      console.log('Escrow finished successfully:', result);
      alert('Escrow finished successfully.');
      await client.disconnect();
    } catch (error) {
      console.error('Failed to finish escrow:', error);
      alert('Failed to finish escrow:');
    }
  };

      const presentNames = Object.keys(attendance).filter(name => attendance[name]);
      alert(`Attendance verified for: ${presentNames.join(", ") || "No one"}`);
   };

   return (
      <div style={{ padding: "20px", maxWidth: "300px", margin: "auto", textAlign: "center" }}>
         <h2>Attendance Checklist</h2>
         <ul style={{ listStyle: "none", padding: 0 }}>
            {namesList.map((name) => (
               <li key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <label>
                     <input
                        type="checkbox"
                        checked={attendance[name]}
                        onChange={() => handleCheckboxChange(name)}
                     />
                     {name}
                  </label>
               </li>
            ))}
         </ul>
         <button onClick={handleVerifyAttendance} style={{ padding: "8px 12px", marginTop: "12px" }}>
            Verify Attendance and Return Stake
         </button>
      </div>
   );
}

export default AttendanceChecklist;