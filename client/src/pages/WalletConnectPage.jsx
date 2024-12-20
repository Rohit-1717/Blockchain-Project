import React from "react";
import WalletConnect from "../components/WalletConnect";

const WalletConnectPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Connect Your Wallet</h1>
      <p>
        Please connect your MetaMask wallet to participate in the hackathons and
        earn rewards.
      </p>
      <WalletConnect />
    </div>
  );
};

export default WalletConnectPage;
