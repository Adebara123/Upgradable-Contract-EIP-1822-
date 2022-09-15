import { ethers } from "hardhat";

async function main() {
  const ImpB = await ethers.getContractFactory("ImplementationB");
  const impB = await ImpB.deploy();

  await impB.deployed();

  console.log(`ImplementationB deployed to ${impB.address}`);
  /// ImplementationB deployed on Goerli at address: 0x61e8977Df46761e3519B3e596d1c20cA41bF0D0D
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
