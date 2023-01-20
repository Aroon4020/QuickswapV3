require("@nomicfoundation/hardhat-toolbox");
//require("@nomicfoundation/hardhat-etherscan");
const chainIds = {
  "arbitrum-mainnet": 42161,
  avalanche: 43114,
  bsc: 56,
  goerli: 5,
  hardhat: 31337,
  mainnet: 1,
  "optimism-mainnet": 10,
  "polygon-mainnet": 137,
  "polygon-mumbai": 80001,
};
const PRIVATE_KEY = "bf19b8d725b61f71b8fcbc8e3dce1a614ba40ef059e45360edbe2bd166c76e9e";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    etherscan: {
      apiKey: {
        arbitrumOne: process.env.ARBISCAN_API_KEY || "",
        avalanche: process.env.SNOWTRACE_API_KEY || "",
        bsc: process.env.BSCSCAN_API_KEY || "",
        goerli: process.env.ETHERSCAN_API_KEY || "TK218GG79E249UN3TYBQ9UCPZZY4BYC2KW",
        mainnet: process.env.ETHERSCAN_API_KEY || "",
        optimisticEthereum: process.env.OPTIMISM_API_KEY || "",
        polygon: process.env.POLYGONSCAN_API_KEY || "",
        polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
      },
    },
    gasReporter: {
      currency: "USD",
      //enabled: process.env.REPORT_GAS ? true : false,
      //excludeContracts: [],
      //src: "./contracts",
    },
    networks: {
      hardhat: {
        forking: {
          url: "https://polygon-mainnet.g.alchemy.com/v2/YXmXmZ7pUHmxJQ8pzf0Ocf2MnwXyenaV",
          blockNumber: 38274300 
        },
        allowUnlimitedContractSize: true,
      },
  
      kovon: {
        url: "https://rinkeby.infura.io/v3/0b40e4fd2cca41138c8ebbc5ee029842", //Infura url with projectId
        accounts: [PRIVATE_KEY] // add the account that will deploy the contract (private key)
      },
  
      mainnet: {
        url: "https://mainnet.infura.io/v3/0b40e4fd2cca41138c8ebbc5ee029842", //Infura url with projectId
        accounts: [PRIVATE_KEY] // add the account that will deploy the contract (private key)
      },
      local: {
        url: 'http://127.0.0.1:8545'
      },
      mumbai: {
        url: "https://polygon-mumbai.g.alchemy.com/v2/YXmXmZ7pUHmxJQ8pzf0Ocf2MnwXyenaV",
        accounts: ["bf19b8d725b61f71b8fcbc8e3dce1a614ba40ef059e45360edbe2bd166c76e9e"]
      },
      goerli:{
        url: "https://eth-goerli.g.alchemy.com/v2/1UEHeP-8l-GX1jiTuUF5mQl93tc67sY_",
        accounts: ["0xbf19b8d725b61f71b8fcbc8e3dce1a614ba40ef059e45360edbe2bd166c76e9e"]
      },
  
      matic: {
        url: "https://polygon-mainnet.g.alchemy.com/v2/YXmXmZ7pUHmxJQ8pzf0Ocf2MnwXyenaV",
        accounts: [PRIVATE_KEY]
      },
      // arbitrum: getChainConfig("arbitrum-mainnet"),
      // avalanche: getChainConfig("avalanche"),
      // bsc: getChainConfig("bsc"),
      // goerli: getChainConfig("goerli"),
      // mainnet: getChainConfig("mainnet"),
      // optimism: getChainConfig("optimism-mainnet"),
      // "polygon-mainnet": getChainConfig("polygon-mainnet"),
      // "polygon-mumbai": getChainConfig("polygon-mumbai"),
    },
  
    // mocha: {
    //   reporter: 'eth-gas-reporter',
    //   //reporterOptions : { ... } // See options below
    // },
    paths: {
      artifacts: "./artifacts",
      cache: "./cache",
      sources: "./contracts",
      tests: "./test",
    },
    etherscan: {
      apiKey: {
        goerli:"TK218GG79E249UN3TYBQ9UCPZZY4BYC2KW",
      },
    },  
  solidity: "0.7.6",
};
