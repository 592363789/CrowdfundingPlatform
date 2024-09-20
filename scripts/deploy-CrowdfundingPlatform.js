const { ethers, upgrades } = require("hardhat");

async function main() {
  const CrowdfundingPlatform = await ethers.getContractFactory("CrowdfundingPlatform");
  // 在这里传递你想要的 initialOwner 地址
  const initialOwner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // 这边
  
  // 传递参数 initialOwner 给 initialize 函数
  const platform = await upgrades.deployProxy(CrowdfundingPlatform, [initialOwner], { initializer: "initialize" });

  await platform.waitForDeployment();
 console.log("CrowdfundingPlatform deployed to:", platform.target);
}

main();