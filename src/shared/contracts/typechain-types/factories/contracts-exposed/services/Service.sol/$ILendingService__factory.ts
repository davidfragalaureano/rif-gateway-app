/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  $ILendingService,
  $ILendingServiceInterface,
} from "../../../../contracts-exposed/services/Service.sol/$ILendingService";

const _abi = [
  {
    inputs: [],
    name: "lend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class $ILendingService__factory {
  static readonly abi = _abi;
  static createInterface(): $ILendingServiceInterface {
    return new utils.Interface(_abi) as $ILendingServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): $ILendingService {
    return new Contract(address, _abi, signerOrProvider) as $ILendingService;
  }
}
