import React from 'react';
import { Client, Wallet, xrpToDrops, isoTimeToRippleTime } from 'xrpl';
import axios from 'axios';

function AttendAndStakeButton({ userWallet, orgWallet, stakeAmount }) {
    console.log("userWallet: ", userWallet); 
    console.log("orgWallet: ", orgWallet);

    const pinDataToIPFS = async (data) => {
        const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
        try {
            const response = await axios.post(url, data, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Data pinned to IPFS:', response.data);
            return response.data.IpfsHash; // or response.data depending on the API response
        } catch (error) {
            console.error('Failed to pin data to IPFS:', error);
            return null;
        }
    };

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
            const { result } = await client.submitAndWait(signedTransaction.tx_blob);

            console.log('Escrow created successfully:', result);
            alert('Escrow created successfully.');

            // Pinning data to IPFS after successful escrow creation
            const ipfsHash = await pinDataToIPFS(escrowCreateTx);
            console.log('IPFS Hash:', ipfsHash);

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