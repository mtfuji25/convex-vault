// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Openzeppelin
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IBaseRewardPool {
    function getReward() external returns (bool);

    function withdrawAndUnwrap(
        uint256 amount,
        bool claim
    ) external returns (bool);
}