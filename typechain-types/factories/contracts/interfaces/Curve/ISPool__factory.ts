/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISPool,
  ISPoolInterface,
} from "../../../../contracts/interfaces/Curve/ISPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "amounts",
        type: "uint256[4]",
      },
      {
        internalType: "uint256",
        name: "min_mint_amount",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "arg",
        type: "int128",
      },
    ],
    name: "coins",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "mint_amounts",
        type: "uint256[4]",
      },
    ],
    name: "remove_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISPool__factory {
  static readonly abi = _abi;
  static createInterface(): ISPoolInterface {
    return new utils.Interface(_abi) as ISPoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ISPool {
    return new Contract(address, _abi, signerOrProvider) as ISPool;
  }
}