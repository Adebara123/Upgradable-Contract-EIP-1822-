import { ethers } from "hardhat";

async function main() {
  const Proxy = await ethers.getContractFactory("Proxy");
  const proxy = await Proxy.deploy("0x473be604", "0x1A74c4f67709570dBE85D5297Eb002D512a439FD");

  await proxy.deployed();

  console.log(`Proxy contract deployed to ${proxy.address}`);
  /// Proxy deployed on Goerli at address: 0x238aB11eAb9D5812261098f779CE5Ebd856a3d79
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
