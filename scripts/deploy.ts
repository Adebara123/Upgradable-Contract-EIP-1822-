import { ethers } from "hardhat";

async function main() {
  const ImpA = await ethers.getContractFactory("ImplementationA");
  const impA = await ImpA.deploy();

  await impA.deployed();

  console.log(`ImplementationA deployed to ${impA.address}`);
  /// ImplementationA deployed on Goerli at address: 0x1A74c4f67709570dBE85D5297Eb002D512a439FD
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
