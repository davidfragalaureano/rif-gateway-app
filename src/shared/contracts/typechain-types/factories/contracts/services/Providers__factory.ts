/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Providers,
  ProvidersInterface,
} from "../../../contracts/services/Providers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "InvalidProviderAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract Service",
        name: "service",
        type: "address",
      },
    ],
    name: "addService",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getServices",
    outputs: [
      {
        internalType: "contract Service[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "contract Service",
        name: "service",
        type: "address",
      },
    ],
    name: "validate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6108b88061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063754178511161005057806375417851146100a75780638da5cb5b146100c5578063f2fde38b146100e057600080fd5b80631cc0a470146100775780635372a9ce1461008c578063715018a61461009f575b600080fd5b61008a610085366004610763565b6100f3565b005b61008a61009a3660046107a1565b61025e565b61008a61041d565b6100af610431565b6040516100bc91906107c5565b60405180910390f35b6000546040516001600160a01b0390911681526020016100bc565b61008a6100ee3660046107a1565b6105ad565b6100fb61063d565b6000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561013b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015f9190610812565b90508215610259576101cb60038054806020026020016040519081016040528092919081815260200182805480156101c057602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101a2575b505050505082610697565b61021b57600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319166001600160a01b0383161790555b6001600160a01b03818116600090815260016020818152604083208054928301815583529091200180546001600160a01b0319169184169190911790555b505050565b6000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561029e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c29190610812565b90506001600160a01b038116610314576040517f59e3460e0000000000000000000000000000000000000000000000000000000081526001600160a01b03821660048201526024015b60405180910390fd5b61037660048054806020026020016040519081016040528092919081815260200182805480156101c0576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116101a257505050505082610697565b6103c657600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b0383161790555b6001600160a01b038181166000908152600260209081526040822080546001810182559083529082200180546001600160a01b0319169285169290921790915560058054916104148361082f565b91905055505050565b61042561063d565b61042f60006106fe565b565b6060600060055467ffffffffffffffff81111561045057610450610856565b604051908082528060200260200182016040528015610479578160200160208202803683370190505b5090506000805b6003548110156105a557600060016000600384815481106104a3576104a361086c565b60009182526020808320909101546001600160a01b0316835282810193909352604091820190208054825181850281018501909352808352919290919083018282801561051957602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104fb575b5050505050905060005b81518110156105905781818151811061053e5761053e61086c565b60200260200101518585815181106105585761055861086c565b6001600160a01b03909216602092830291909101909101528361057a8161082f565b94505080806105889061082f565b915050610523565b5050808061059d9061082f565b915050610480565b509092915050565b6105b561063d565b6001600160a01b0381166106315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161030b565b61063a816106fe565b50565b6000546001600160a01b0316331461042f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161030b565b6000805b83518110156106f257826001600160a01b03168482815181106106c0576106c061086c565b60200260200101516001600160a01b0316036106e05760019150506106f8565b806106ea8161082f565b91505061069b565b50600090505b92915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461063a57600080fd5b6000806040838503121561077657600080fd5b8235801515811461078657600080fd5b915060208301356107968161074e565b809150509250929050565b6000602082840312156107b357600080fd5b81356107be8161074e565b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156108065783516001600160a01b0316835292840192918401916001016107e1565b50909695505050505050565b60006020828403121561082457600080fd5b81516107be8161074e565b60006001820161084f57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea2646970667358221220383e030f789e766d5e6372bd6f4df3e89dcaa65d2a6387dc4f380ad067bb8ef464736f6c63430008100033";

type ProvidersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProvidersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Providers__factory extends ContractFactory {
  constructor(...args: ProvidersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Providers> {
    return super.deploy(overrides || {}) as Promise<Providers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Providers {
    return super.attach(address) as Providers;
  }
  override connect(signer: Signer): Providers__factory {
    return super.connect(signer) as Providers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProvidersInterface {
    return new utils.Interface(_abi) as ProvidersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Providers {
    return new Contract(address, _abi, signerOrProvider) as Providers;
  }
}
