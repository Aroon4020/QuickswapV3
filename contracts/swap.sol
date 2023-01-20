// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import '@cryptoalgebra/core/contracts/interfaces/IAlgebraPool.sol';
import '@cryptoalgebra/core/contracts/interfaces/IAlgebraFactory.sol';
// import '@cryptoalgebra/core/contracts/AlgebraFactory.sol';
import '@cryptoalgebra/core/contracts/interfaces/IAlgebraPool.sol';
import '@cryptoalgebra/core/contracts/libraries/TickMath.sol';
//import '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
import '@cryptoalgebra/core/contracts/interfaces/IERC20Minimal.sol';
import '@cryptoalgebra/periphery/contracts/interfaces/ISwapRouter.sol';
import '@cryptoalgebra/periphery/contracts/libraries/LiquidityAmounts.sol';
import '@cryptoalgebra/periphery/contracts/libraries/TransferHelper.sol';
//import '@cryptoalgebra/periphery/contracts/interfaces/ISwapRouter.sol';
//import '@cryptoalgebra/periphery/contracts/base/LiquidityManagement.sol';
import "hardhat/console.sol";

contract V3{
    
    address factory = 0x411b0fAcC3489691f28ad58c47006AF5E3Ab3A28;
    //IAlgebraPool public pool;
    //address swapRouter = 0x89D6B81A1Ef25894620D05ba843d83B0A296239e;
    address link = 0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39;
    address oneInch = 0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f;
    ISwapRouter public immutable swapRouter = ISwapRouter(0x89D6B81A1Ef25894620D05ba843d83B0A296239e); 
    function create(
        address token0,
        address token1,
        uint160 sqrtPriceX96
    ) external payable returns (address _pool) {
        //require(token0 < token1);

        _pool = IAlgebraFactory(factory).poolByPair(token0, token1);

        if (_pool == address(0)) {
            _pool = IAlgebraFactory(factory).createPool(token0, token1);

            IAlgebraPool(_pool).initialize(sqrtPriceX96);
        } else {
            (uint160 sqrtPriceX96Existing, , , , , , ) = IAlgebraPool(_pool).globalState();
            if (sqrtPriceX96Existing == 0) {
                IAlgebraPool(_pool).initialize(sqrtPriceX96);
            }
        }
        //pool = IAlgebraPool(_pool);
    }

    function addLiquidity(
        address pool,
        uint256 amount0,
        uint256 amount1
        
    ) external {
        
        (,int160 sqrtRatioX96, , , , ,) = IAlgebraPool(pool).globalState();
        console.logInt(sqrtRatioX96);
        uint128 liquidity =
            LiquidityAmounts.getLiquidityForAmounts(
                uint160(sqrtRatioX96),
                TickMath.getSqrtRatioAtTick(276314),
                TickMath.getSqrtRatioAtTick(276334),
                amount0,
                amount1
            );
            
            IERC20Minimal(IAlgebraPool(pool).token0()).transferFrom(
                msg.sender,
                address(this),
                uint256(amount0)
            );

            IERC20Minimal(IAlgebraPool(pool).token1()).transferFrom(
                msg.sender,
                address(this),
                uint256(amount1)
            );
            
        IAlgebraPool(pool).mint(address(this),address(this), 276314, 276334, liquidity, abi.encode(address(this)));
    }

    


    function algebraSwapCallback(
        int256 amount0,
        int256 amount1,
        bytes calldata data
    ) external {
        if (amount0 > 0) {
            IERC20Minimal(IAlgebraPool(msg.sender).token0()).transferFrom(
                abi.decode(data, (address)),
                msg.sender,
                uint256(amount0)
            );
        } else if (amount1 > 0) {
            IERC20Minimal(IAlgebraPool(msg.sender).token1()).transferFrom(
                abi.decode(data, (address)),
                msg.sender,
                uint256(amount1)
            );
        }
    }

    // // ISwapRouter public immutable swapRouter;
    // address public constant DAI = 0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063;
    // address public constant WMATIC = 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;
    
    // // constructor(ISwapRouter _swapRouter) {
    // //     swapRouter = _swapRouter;
    // // }
    
    // function swapFor(uint256 amountIn) external returns (uint256 amountOut) {

    //     // Transfer the specified amount of MATIC to this contract.
    //     TransferHelper.safeTransferFrom(WMATIC, msg.sender, address(this), amountIn);
    //     console.log("ffff");
    //     // // Approve the router to spend MATIC.
    //     TransferHelper.safeApprove(WMATIC, address(swapRouter), amountIn);
    //     // Note: To use this example, you should explicitly set slippage limits, omitting for simplicity
    //     uint256 minOut = /* Calculate min output */ 0; 
    //     uint160 priceLimit = /* Calculate price limit */ 0; 
    //     // Create the params that will be used to execute the swap
    //     ISwapRouter.ExactInputSingleParams memory params =
    //         ISwapRouter.ExactInputSingleParams({
    //             tokenIn: WMATIC,
    //             tokenOut: DAI,
    //             recipient: msg.sender,
    //             deadline: block.timestamp,
    //             amountIn: amountIn,
    //             amountOutMinimum: minOut,
    //             limitSqrtPrice: priceLimit
    //         });
    //     // The call to `exactInputSingle` executes the swap.
    //     amountOut = swapRouter.exactInputSingle(params);
    // }
}