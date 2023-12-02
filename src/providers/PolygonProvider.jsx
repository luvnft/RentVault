import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider 
      activeChain="polygon" 
      clientId="TW_CLIENT_ID" // You can get a client id from dashboard settings
    >
      <Component />
    </ThirdwebProvider>
  )
}

function Component() {
  const { contract, isLoading } = useContract("0x71d8395022098505909A7615EF6207c8fc3E5b12");
}