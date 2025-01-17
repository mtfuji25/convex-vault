// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Openzeppelin
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IBaseRewardPool {
    function earned(address account) external view returns (uint256);

    function getReward() external returns (bool);

    function withdraw(uint256 amount, bool claim) external returns (bool);
}
