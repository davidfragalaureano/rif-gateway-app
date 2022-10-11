/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUserIdentityFactory,
  IUserIdentityFactoryInterface,
} from "../../../contracts/userIdentity/IUserIdentityFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceProvider",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approval",
        type: "bool",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "createIdentity",
    outputs: [
      {
        internalType: "contract UserIdentity",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getIdentity",
    outputs: [
      {
        internalType: "contract UserIdentity",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isAllowedToExecuteCallFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "isAllowedToExecuteCallFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IUserIdentityFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IUserIdentityFactoryInterface {
    return new utils.Interface(_abi) as IUserIdentityFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUserIdentityFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUserIdentityFactory;
  }
}
