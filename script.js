let abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "bottomTick",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "topTick",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "liquidityAmount",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "bottomTick",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "topTick",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "name": "Collect",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "communityFee0New",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "communityFee1New",
          "type": "uint8"
        }
      ],
      "name": "CommunityFee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "fee",
          "type": "uint16"
        }
      ],
      "name": "Fee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paid0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paid1",
          "type": "uint256"
        }
      ],
      "name": "Flash",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "virtualPoolAddress",
          "type": "address"
        }
      ],
      "name": "Incentive",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint160",
          "name": "price",
          "type": "uint160"
        },
        {
          "indexed": false,
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        }
      ],
      "name": "Initialize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "liquidityCooldown",
          "type": "uint32"
        }
      ],
      "name": "LiquidityCooldown",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "bottomTick",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "topTick",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "liquidityAmount",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "amount0",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "amount1",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint160",
          "name": "price",
          "type": "uint160"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        }
      ],
      "name": "Swap",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "activeIncentive",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "bottomTick",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "topTick",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "bottomTick",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "topTick",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amount0Requested",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1Requested",
          "type": "uint128"
        }
      ],
      "name": "collect",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dataStorageOperator",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "flash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "bottomTick",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "topTick",
          "type": "int24"
        }
      ],
      "name": "getInnerCumulatives",
      "outputs": [
        {
          "internalType": "int56",
          "name": "innerTickCumulative",
          "type": "int56"
        },
        {
          "internalType": "uint160",
          "name": "innerSecondsSpentPerLiquidity",
          "type": "uint160"
        },
        {
          "internalType": "uint32",
          "name": "innerSecondsSpent",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32[]",
          "name": "secondsAgos",
          "type": "uint32[]"
        }
      ],
      "name": "getTimepoints",
      "outputs": [
        {
          "internalType": "int56[]",
          "name": "tickCumulatives",
          "type": "int56[]"
        },
        {
          "internalType": "uint160[]",
          "name": "secondsPerLiquidityCumulatives",
          "type": "uint160[]"
        },
        {
          "internalType": "uint112[]",
          "name": "volatilityCumulatives",
          "type": "uint112[]"
        },
        {
          "internalType": "uint256[]",
          "name": "volumePerAvgLiquiditys",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "globalState",
      "outputs": [
        {
          "internalType": "uint160",
          "name": "price",
          "type": "uint160"
        },
        {
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        },
        {
          "internalType": "uint16",
          "name": "fee",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "timepointIndex",
          "type": "uint16"
        },
        {
          "internalType": "uint8",
          "name": "communityFeeToken0",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "communityFeeToken1",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "unlocked",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint160",
          "name": "initialPrice",
          "type": "uint160"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "liquidity",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "liquidityCooldown",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxLiquidityPerTick",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "bottomTick",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "topTick",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "liquidityDesired",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "liquidityActual",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "positions",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "internalType": "uint32",
          "name": "lastLiquidityAddTimestamp",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "innerFeeGrowth0Token",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "innerFeeGrowth1Token",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "fees0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "fees1",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "communityFee0",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "communityFee1",
          "type": "uint8"
        }
      ],
      "name": "setCommunityFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "virtualPoolAddress",
          "type": "address"
        }
      ],
      "name": "setIncentive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "newLiquidityCooldown",
          "type": "uint32"
        }
      ],
      "name": "setLiquidityCooldown",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "zeroToOne",
          "type": "bool"
        },
        {
          "internalType": "int256",
          "name": "amountRequired",
          "type": "int256"
        },
        {
          "internalType": "uint160",
          "name": "limitSqrtPrice",
          "type": "uint160"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "swap",
      "outputs": [
        {
          "internalType": "int256",
          "name": "amount0",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "amount1",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "zeroToOne",
          "type": "bool"
        },
        {
          "internalType": "int256",
          "name": "amountRequired",
          "type": "int256"
        },
        {
          "internalType": "uint160",
          "name": "limitSqrtPrice",
          "type": "uint160"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "swapSupportingFeeOnInputTokens",
      "outputs": [
        {
          "internalType": "int256",
          "name": "amount0",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "amount1",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tickSpacing",
      "outputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int16",
          "name": "",
          "type": "int16"
        }
      ],
      "name": "tickTable",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "name": "ticks",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "liquidityTotal",
          "type": "uint128"
        },
        {
          "internalType": "int128",
          "name": "liquidityDelta",
          "type": "int128"
        },
        {
          "internalType": "uint256",
          "name": "outerFeeGrowth0Token",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "outerFeeGrowth1Token",
          "type": "uint256"
        },
        {
          "internalType": "int56",
          "name": "outerTickCumulative",
          "type": "int56"
        },
        {
          "internalType": "uint160",
          "name": "outerSecondsPerLiquidity",
          "type": "uint160"
        },
        {
          "internalType": "uint32",
          "name": "outerSecondsSpent",
          "type": "uint32"
        },
        {
          "internalType": "bool",
          "name": "initialized",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "timepoints",
      "outputs": [
        {
          "internalType": "bool",
          "name": "initialized",
          "type": "bool"
        },
        {
          "internalType": "uint32",
          "name": "blockTimestamp",
          "type": "uint32"
        },
        {
          "internalType": "int56",
          "name": "tickCumulative",
          "type": "int56"
        },
        {
          "internalType": "uint160",
          "name": "secondsPerLiquidityCumulative",
          "type": "uint160"
        },
        {
          "internalType": "uint88",
          "name": "volatilityCumulative",
          "type": "uint88"
        },
        {
          "internalType": "int24",
          "name": "averageTick",
          "type": "int24"
        },
        {
          "internalType": "uint144",
          "name": "volumePerLiquidityCumulative",
          "type": "uint144"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token0",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token1",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalFeeGrowth0Token",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalFeeGrowth1Token",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

const ethers = require('ethers');
//const abi = ["function initialize(uint160 price)"];
// The Contract interface
//let abi = require('./artifacts/contracts/AlgebraPool.sol/AlgebraPool.json');
async function main(){
    console.log("vvvvvvvvvvvvvv");
    // Connect to the network
//let provider = ethers.getProvider("https://eth-goerli.g.alchemy.com/v2/1UEHeP-8l-GX1jiTuUF5mQl93tc67sYs_");
const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/b654f4c0f4de49748c0f9e3d23015749");
//console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
// The address from the above deployment example
let contractAddress = "0xf2bA91161DcdCA991519C5703247d60F2bd8CDeF";
let privateKey = '0xbf19b8d725b61f71b8fcbc8e3dce1a614ba40ef059e45360edbe2bd166c76e9e';
// We connect to the Contract using a Provider, so we will only
// have read-only access to the Contract
let signer  =  new ethers.Wallet(privateKey,provider);
let contract = new ethers.Contract(contractAddress, abi, signer);
//console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");

//let wallet = new ethers.Wallet(privateKey, provider);

// Create a new instance of the Contract with a Signer, which allows
// update methods
//let contractWithSigner = contract.connect(wallet);
// ... OR ...
// let contractWithSigner = new Contract(contractAddress, abi, wallet)

// Set a new Value, which returns the transaction
//console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
//console.log(contract)
let tx = await contract.initialize("100000000000000");
//console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv1234");
// See: https://ropsten.etherscan.io/tx/0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364
//console.log(tx.hash);
// "0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364"

// The operation is NOT complete yet; we must wait until it is mined
await tx.wait();

}
main();
