import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK("polygon", {
  clientId: "TW_CLIENT_ID",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
const sdk = new ThirdwebSDK("polygon", {
  secretKey: "TW_SECRET_KEY",
});

const contract = await sdk.getContract("0x71d8395022098505909A7615EF6207c8fc3E5b12");