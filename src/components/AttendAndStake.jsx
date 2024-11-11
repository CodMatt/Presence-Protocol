import React from 'react';
const xrpl = require("xrpl");
//const cc = require('five-bells-condition');

function AttendAndStakeButton({ userWallet, orgWallet, stakeAmount }) {
  const handleAttendAndStake = async () => {
    try {
      const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
      await client.connect();

      const amountInDrops = xrpl.xrpToDrops(stakeAmount);

      const escrowCreateTx = {
        "TransactionType": "EscrowCreate",
        "Account": userWallet.classicAddress,
        "Destination": orgWallet.classicAddress,
        "Amount": amountInDrops,
        "FinishAfter": xrpl.isoTimeToRippleTime(new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()),
        "CancelAfter": xrpl.isoTimeToRippleTime(new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString()),
        "Flags": 0
      };

      const prepared = await client.autofill(escrowCreateTx);
      const {signedTransaction} = userWallet.sign(prepared);
      const result = await client.submitAndWait(signedTransaction);

      console.log('Escrow created successfully:', result);
      alert('Escrow created successfully.');
      await client.disconnect();
    } catch (error) {
      console.error('Failed to create escrow:', error);
      alert('Failed to create escrow.');
    }
  };

  return (
    <button onClick={handleAttendAndStake}>
      Attend And Stake {stakeAmount} XRP
    </button>
  );
}

export default AttendAndStakeButton;