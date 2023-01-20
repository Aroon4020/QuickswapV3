// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//   const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

//   const lockedAmount = hre.ethers.utils.parseEther("1");

//   const Lock = await hre.ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   await lock.deployed();

//   console.log(
//     `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


const hre = require("hardhat");


async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using node you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
    const vault = "0xBe56E9aA7792B2f1F4132631B7A0E1927090D78A";
  // We get the contract to deploy
    const PoolDeployerFactory = await hre.ethers.getContractFactory("AlgebraPoolDeployer");
    const poolDeployer  = await PoolDeployerFactory.deploy();
    await poolDeployer.deployed();
    const AlgebraFactory = await hre.ethers.getContractFactory("AlgebraFactory");
    const Algebra = await AlgebraFactory.deploy(poolDeployer.address, vault);

    await Algebra.deployed();

    await poolDeployer.setFactory(Algebra.address)

    

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });