//const ethers = require('ethers');

const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Local contract test", function() {
        // let token0: TestERC20;
        // let token1: TestERC20;
        it("Deply",async function () {
          //const [a,v,WETH,wallet,other] = await ethers.getSigners();
          //const fact = await  ethers.getContractFactory("V3");
        //     const ERC20 = await ethers.getContractFactory("t0");
        //     const token0 = await ERC20.deploy(); 
        //     const ERC201 = await ethers.getContractFactory("t1");
        //     const token1 = await ERC201.deploy(); 
        //     const poolD = await ethers.getContractFactory("AlgebraPoolDeployer");
        //     const poold = await poolD.deploy();
            
        //     const V3fact = await ethers.getContractFactory("AlgebraFactory");
        //     const d = await V3fact.deploy(poold.address,poold.saddress);
        //     await poold.setFactory(d.address);

            //await d.createPool(token0.address,token1.address);
           // const pool = await d.poolByPair(token0.address,token1.address);
            
            //const pool1 = await ethers.getContractAt("AlgebraPool",pool);
            //console.log(pool1);
            //await pool1.initialize(1000000000000);
            //const pool0 = await poolD.deploy();
            // const NF = await ethers.getContractFactory("MyNFT");
            // const NFT= await NF.deploy();
            // const NFP = await ethers.getContractFactory("NonfungiblePositionManager");
            // const NFPM = await NFP.deploy(d.address,token0.address,NFT.address,poold.address)
            // await poold.setFactory(d.address);
            //
        
                //*****************FORKING******************//
        
        const fact = await  ethers.getContractFactory("V3");
        const v3 = await fact.deploy();
        // const tx=  await v3.create("0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f","0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",1234565033321);
        // console.log(tx);
        
        //0x52a258ed593c793251a89bfd36cae158ee9fc4f8
        const impersonatedSigner = await ethers.getImpersonatedSigner("0x52A258ED593C793251a89bfd36caE158EE9fC4F8");
//await impersonatedSigner.sendTransaction(...);
          //await signer.connet(impersonatedSigner)
         
          await v3.connect(impersonatedSigner).addLiquidity("0xe7E0eB9F6bCcCfe847fDf62a3628319a092F11a2",10000000,10000000);     

           
           
           //
           // const tx = await v3.createPair(token0.address,token1.address);
            // let pool = await d.poolByPair(token0.address,token1.address);

            //console.log(pool);
    // await token0._mint(a.address,parseEther("10000"));
    // await token1._mint(a.address,parseEther("10000"));
    // await token0.approve(v3.address,parseEther("10000"));
    // await token1.approve(v3.address,parseEther("10000"));
    //const price = encodePriceSqrt(1, 2)
    //console.log(price)
            //await v3.init(pool,encodePriceSqrt(1000000000000000, 1000000000000));
        //   let pool = await d.getPool(token0.address,token1.address,500);
        //   await token0._mint(a.address,parseEther("10000"));
        //   await token1._mint(a.address,parseEther("10000"));
        //   await token0.approve(v3.address,parseEther("10000"));
        //   await token1.approve(v3.address,parseEther("10000"));
        //   await v3.init(pool,encodePriceSqrt(parseEther("10"), parseEther("10")));
        //   await v3.addLiquidity(pool,-1000, 1000, parseEther("10"),parseEther("10"));
        //   await v3.swap(pool,true,parseEther("0.00001"));
        //   await v3.swap(pool,false,parseEther("0.0001"));
        //   await v3.burnLiquidity(pool,-1000,1000,parseEther("10"),parseEther("10"));
        //   //await v3.collect(pool,1000,-1000,parseEther("1"),parseEther("10"))
        });
    
});    