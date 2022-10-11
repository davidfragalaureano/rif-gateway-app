/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPriceOracleProxy,
  IPriceOracleProxyInterface,
} from "../../../../contracts/tropykus/ITropykus.sol/IPriceOracleProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPriceOracleProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IPriceOracleProxyInterface {
    return new utils.Interface(_abi) as IPriceOracleProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPriceOracleProxy {
    return new Contract(address, _abi, signerOrProvider) as IPriceOracleProxy;
  }
}
