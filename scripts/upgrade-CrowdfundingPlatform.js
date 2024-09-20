const { ethers, upgrades } = require("hardhat");

async function main() {
  const CrowdfundingPlatformV2 = await ethers.getContractFactory("CrowdfundingPlatformV2");
  const platform = await upgrades.upgradeProxy("0x5FC8d32690cc91D4c39d9d3abcBD16989F875707", CrowdfundingPlatformV2);

  console.log("CrowdfundingPlatform upgraded");
}

main();