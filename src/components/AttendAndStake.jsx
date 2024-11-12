import React from 'react';
import { Client, Wallet, xrpToDrops, isoTimeToRippleTime } from 'xrpl'
//import * as xrpl from "xrpl";
//const xrpl = require("xrpl");
//const cc = require('five-bells-condition');

function AttendAndStakeButton({ userWallet, orgWallet, stakeAmount }) {
    console.log("userWallet: ", userWallet); 
    console.log("orgWallet: ", orgWallet)
  const handleAttendAndStake = async () => {
    try {
      const client = new Client("wss://s.altnet.rippletest.net:51233");
      await client.connect();

      const amountInDrops = xrpToDrops(stakeAmount);

      const escrowCreateTx = {
        "TransactionType": "EscrowCreate",
        "Account": userWallet.classicAddress,
        "Destination": orgWallet.classicAddress,
        "Amount": amountInDrops,
        "FinishAfter": isoTimeToRippleTime(new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()),
        "CancelAfter": isoTimeToRippleTime(new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString()),
        "Flags": 0
      };

      const prepared = await client.autofill(escrowCreateTx);
      const signedTransaction = userWallet.sign(prepared);
      console.log("signedTransaction; ", signedTransaction)
      //const result = await client.submitAndWait(signedTransaction.tx_blob);
      const { result } = await client.submitAndWait(signedTransaction.tx_blob);

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