import React, { useState } from 'react';

function AttendanceChecklist() {
   // Sample list of names
   const namesList = ["Chad Coinson", "Brody Blockwell", "Tyler Satoshi", "Max HODLman", "Jax Etheridge", "Vinny Chainz", "Skyler Miner", "Dex Bullman", "Blaze Nakamoto", "Neo Moon"];
   
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