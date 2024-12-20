import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const WalletConnect = () => {
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [balance, setBalance] = useState("");

  // Function to fetch the balance of the connected account
  const fetchBalance = async (account) => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balanceInWei = await provider.getBalance(account);
      setBalance(ethers.utils.formatEther(balanceInWei)); // Convert balance from Wei to Ether
    }
  };

  // Function to connect to MetaMask wallet
  const connectWallet = async () => {
    setLoading(true);
    setError("");
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        await fetchBalance(accounts[0]); // Fetch balance after connecting
      } catch (err) {
        setError("Error connecting to MetaMask: " + err.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError("MetaMask is not installed. Please install it.");
      setLoading(false);
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setAccount("");
    setBalance("");
  };

  return (
    <div className="container mx-auto mt-8 p-4 border border-gray-300 rounded shadow-md">
      {account ? (
        <div>
          <p className="text-lg font-semibold">Connected account: {account}</p>
          <p className="text-md">Balance: {balance} ETH</p>
          <button
            onClick={disconnectWallet}
            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Connecting..." : "Connect MetaMask"}
        </button>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default WalletConnect;
