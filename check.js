const { ethers } = require("ethers");

// Base ağ RPC'si
const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

// Kontrat adresi (tam adresini buraya yaz)
const contractAddress = "0x267F...AB8";  // Örn: 0x267F3129834B3F9C60f1eCe20f5e2A7B5aCd8Ab8

// balanceOf fonksiyonu için minimal ABI
const abi = [
  "function balanceOf(address owner) view returns (uint256)"
];

// Kendi cüzdan adresin (tam olarak buraya yaz)
const walletAddress = "0xSeninAdresin";  // Örn: 0x1234...abcd

async function main() {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const balance = await contract.balanceOf(walletAddress);
  console.log(`Balance of ${walletAddress}: ${balance.toString()}`);
}

main().catch(console.error);
