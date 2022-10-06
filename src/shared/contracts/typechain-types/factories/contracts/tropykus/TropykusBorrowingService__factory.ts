/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TropykusBorrowingService,
  TropykusBorrowingServiceInterface,
} from "../../../contracts/tropykus/TropykusBorrowingService";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract UserIdentityFactory",
        name: "userIdentityFactory",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "comptroller",
            type: "address",
          },
          {
            internalType: "address",
            name: "oracle",
            type: "address",
          },
          {
            internalType: "address",
            name: "crbtc",
            type: "address",
          },
          {
            internalType: "address",
            name: "cdoc",
            type: "address",
          },
        ],
        internalType: "struct TropykusBorrowingService.TropykusContracts",
        name: "contracts",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expectedAmount",
        type: "uint256",
      },
    ],
    name: "InvalidCollateralAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Lend",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    name: "ListingCreated",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Pay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "loanToValue",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "loanToValueTokenAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "enum PayBackOption",
            name: "payBackOption",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "enabled",
            type: "bool",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct ServiceListing",
        name: "listing",
        type: "tuple",
      },
    ],
    name: "addListing",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "calculateAmountToLend",
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
  {
    inputs: [],
    name: "createIdentity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "currentLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    name: "disableListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "getBalance",
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
  {
    inputs: [],
    name: "getLendBalance",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    name: "getListing",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "loanToValue",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "loanToValueTokenAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "enum PayBackOption",
            name: "payBackOption",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "enabled",
            type: "bool",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct ServiceListing",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListingsCount",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "listings",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "loanToValue",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "loanToValueTokenAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "enum PayBackOption",
        name: "payBackOption",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "serviceType",
    outputs: [
      {
        internalType: "enum ServiceType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "loanToValue",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "loanToValueTokenAddr",
            type: "address",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "enum PayBackOption",
            name: "payBackOption",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "enabled",
            type: "bool",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct ServiceListing",
        name: "listing",
        type: "tuple",
      },
    ],
    name: "updateListing",
    outputs: [],
    stateMutability: "nonpayable",
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

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027e1380380620027e1833981016040819052620000349162000147565b6200003f33620000cc565b600080546001919060ff60a01b1916600160a01b8302179055508051600380546001600160a01b03199081166001600160a01b03938416179091556020830151600480548316918416919091179055604083015160058054831691841691909117905560609092015160068054841691831691909117905560078054909216921691909117905562000207565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200013257600080fd5b50565b805162000142816200011c565b919050565b60008082840360a08112156200015c57600080fd5b835162000169816200011c565b92506080601f19820112156200017e57600080fd5b50604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b604052620001c16020850162000135565b8152620001d16040850162000135565b6020820152620001e46060850162000135565b6040820152620001f76080850162000135565b6060820152809150509250929050565b6125ca80620002176000396000f3fe60806040526004361061015f5760003560e01c80638da5cb5b116100c0578063db0881a111610074578063de74e57b11610059578063de74e57b1461037f578063f2fde38b146103b7578063f8b2cb4f146103d757600080fd5b8063db0881a114610331578063dc419a091461035f57600080fd5b80639d7de6b3116100a55780639d7de6b3146102cc578063cbaa068f146102ec578063cd1bef211461030157600080fd5b80638da5cb5b146102845780639cd441da146102ac57600080fd5b80635800bcef116101175780635c3fec1e116100fc5780635c3fec1e1461023c578063715018a61461025c5780638327c2141461027157600080fd5b80635800bcef1461021257806359d21ad91461022757600080fd5b806333de26071161014857806333de2607146101af5780633ccfd60b146101dd5780634085aaac146101f257600080fd5b80630313766f14610164578063107a274a14610179575b600080fd5b610177610172366004611ce1565b6103f7565b005b34801561018557600080fd5b50610199610194366004611d19565b6105f8565b6040516101a69190611dac565b60405180910390f35b3480156101bb57600080fd5b506101cf6101ca366004611d19565b61076d565b6040519081526020016101a6565b3480156101e957600080fd5b50610177610acb565b3480156101fe57600080fd5b5061017761020d366004611f8f565b610e00565b34801561021e57600080fd5b506101cf610f2e565b34801561023357600080fd5b50610177611158565b34801561024857600080fd5b50610177610257366004611d19565b6111ca565b34801561026857600080fd5b506101776111f0565b61017761027f36600461208e565b611204565b34801561029057600080fd5b506000546040516001600160a01b0390911681526020016101a6565b3480156102b857600080fd5b506101776102c73660046120cb565b6116a3565b3480156102d857600080fd5b506101776102e73660046120cb565b6116d5565b3480156102f857600080fd5b506002546101cf565b34801561030d57600080fd5b506101cf61031c366004611d19565b60009081526001602052604090206002015490565b34801561033d57600080fd5b5060005461035290600160a01b900460ff1681565b6040516101a691906120ed565b34801561036b57600080fd5b506101cf61037a366004611f8f565b6116eb565b34801561038b57600080fd5b5061039f61039a366004611d19565b611871565b6040516101a69c9b9a99989796959493929190612107565b3480156103c357600080fd5b506101776103d236600461218a565b611970565b3480156103e357600080fd5b506101cf6103f236600461218a565b611a00565b6000831161044c5760405162461bcd60e51b815260206004820152601060248201527f4e6f6e207a65726f20626f72726f77730000000000000000000000000000000060448201526064015b60405180910390fd5b600754604051632fea7b8160e01b81523360048201526000916001600160a01b031690632fea7b8190602401602060405180830381865afa158015610495573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b991906121ae565b6006546040805160001960248083019190915282518083039091018152604490910182526020810180516001600160e01b03167f0e7527020000000000000000000000000000000000000000000000000000000017905290517fd26b117c0000000000000000000000000000000000000000000000000000000081529293506001600160a01b038085169363d26b117c93610560939216919088908a9084906004016121cb565b6020604051808303816000875af115801561057f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a3919061220d565b50826001600160a01b0316336001600160a01b0316837fece4e547ae0655a2613e99bed9e2f496b3b3dd8b0768cfbae0a6070b05782cea876040516105ea91815260200190565b60405180910390a450505050565b610600611c3d565b600082815260016020818152604092839020835161018081018552815481529281015491830191909152600281015492820192909252600380830154606083015260048301546080830152600583015460a0830152600683015460c083015260078301546001600160a01b0390811660e08401526008840154908116610100840152919291610120840191600160a01b90910460ff16908111156106a6576106a6611d32565b60038111156106b7576106b7611d32565b81526008820154600160a81b900460ff16151560208201526009820180546040909201916106e49061222a565b80601f01602080910402602001604051908101604052809291908181526020018280546107109061222a565b801561075d5780601f106107325761010080835404028352916020019161075d565b820191906000526020600020905b81548152906001019060200180831161074057829003601f168201915b5050505050815250509050919050565b600754604051632fea7b8160e01b815233600482015260009182916001600160a01b0390911690632fea7b8190602401602060405180830381865afa1580156107ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107de91906121ae565b6004546005546040516001600160a01b0391821660248201529293506000928185169263d79f44eb92169060440160408051601f198184030181529181526020820180516001600160e01b031663fc57d4df60e01b1790525160e084901b6001600160e01b0319168152610856929190600401612264565b600060405180830381865afa158015610873573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261089b9190810190612286565b90506000818060200190518101906108b391906122f4565b6004546006546040516001600160a01b0391821660248201529293506000928682169263d79f44eb92169060440160408051601f198184030181529181526020820180516001600160e01b031663fc57d4df60e01b1790525160e084901b6001600160e01b031916815261092b929190600401612264565b600060405180830381865afa158015610948573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109709190810190612286565b905060008180602001905181019061098891906122f4565b6003546005546040516001600160a01b0391821660248201529293506000928882169263d79f44eb92169060440160408051601f198184030181529181526020820180516001600160e01b03167f8e8f294b000000000000000000000000000000000000000000000000000000001790525160e084901b6001600160e01b0319168152610a19929190600401612264565b600060405180830381865afa158015610a36573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a5e9190810190612286565b9050600081806020019051810190610a76919061230d565b509150610a8590508582612366565b83610a988b674563918244f40000612385565b610aa29190612366565b610ab490670de0b6b3a7640000612366565b610abe919061239e565b9998505050505050505050565b600754604051632fea7b8160e01b81523360048201526000916001600160a01b031690632fea7b8190602401602060405180830381865afa158015610b14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3891906121ae565b6005546040516001600160a01b03808416602483018190529394506000939263d79f44eb9291169060440160408051601f198184030181529181526020820180516001600160e01b03166370a0823160e01b1790525160e084901b6001600160e01b0319168152610bad929190600401612264565b600060405180830381865afa158015610bca573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bf29190810190612286565b9050600081806020019051810190610c0a91906122f4565b60055460408051602480820185905282518083039091018152604490910182526020810180516001600160e01b03167fdb006a750000000000000000000000000000000000000000000000000000000017905290517f621091c20000000000000000000000000000000000000000000000000000000081529293506001600160a01b038681169363621091c293610ca79392169190600401612264565b6020604051808303816000875af1158015610cc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cea919061220d565b506005546040805160048082526024820183526020820180516001600160e01b031663182df0f560e01b179052915163d79f44eb60e01b81526000936001600160a01b038089169463d79f44eb94610d4794939092169201612264565b600060405180830381865afa158015610d64573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d8c9190810190612286565b9050600081806020019051810190610da491906122f4565b9050600033817ffeb2000dca3e617cd6f3a8bbb63014bb54a124aac6ccbf73ee7229b4cd01f120670de0b6b3a7640000610dde8689612366565b610de8919061239e565b60405190815260200160405180910390a45050505050565b610e08611b65565b805160009081526001602081815260409283902084518155908401519181019190915590820151600282015560608201516003808301919091556080830151600483015560a0830151600583015560c0830151600683015560e083015160078301805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915561010085015160088501805492831691909316908117835561012086015186959490939274ffffffffffffffffffffffffffffffffffffffffff191690911790600160a01b908490811115610eea57610eea611d32565b0217905550610140820151600882018054911515600160a81b0260ff60a81b199092169190911790556101608201516009820190610f28908261240f565b50505050565b600754604051632fea7b8160e01b815233600482015260009182916001600160a01b0390911690632fea7b8190602401602060405180830381865afa158015610f7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9f91906121ae565b6005546040805160048082526024820183526020820180516001600160e01b031663182df0f560e01b179052915163d79f44eb60e01b81529394506000936001600160a01b038087169463d79f44eb94611000949190921692909101612264565b600060405180830381865afa15801561101d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110459190810190612286565b905060008180602001905181019061105d91906122f4565b6005546040516001600160a01b03868116602483018190529394506000939263d79f44eb9291169060440160408051601f198184030181529181526020820180516001600160e01b03166370a0823160e01b1790525160e084901b6001600160e01b03191681526110d2929190600401612264565b600060405180830381865afa1580156110ef573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111179190810190612286565b905060008180602001905181019061112f91906122f4565b9050670de0b6b3a76400006111448285612366565b61114e919061239e565b9550505050505090565b6007546040517f5b2ab06c0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b0390911690635b2ab06c90602401600060405180830381600087803b1580156111b657600080fd5b505af1158015610f28573d6000803e3d6000fd5b6111d2611b65565b6000908152600160205260409020600801805460ff60a81b19169055565b6111f8611b65565b6112026000611bbf565b565b600084116112545760405162461bcd60e51b815260206004820152601060248201527f4e6f6e207a65726f20626f72726f7773000000000000000000000000000000006044820152606401610443565b600034116112a45760405162461bcd60e51b815260206004820152601360248201527f4e6f6e207a65726f20636f6c6c61746572616c000000000000000000000000006044820152606401610443565b600754604051632fea7b8160e01b81523360048201526000916001600160a01b031690632fea7b8190602401602060405180830381865afa1580156112ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131191906121ae565b9050600061131e8661076d565b905080341015611363576040517f2565b3ee00000000000000000000000000000000000000000000000000000000815234600482015260248101829052604401610443565b6005546040805160048082526024820183526020820180516001600160e01b03167f1249c58b0000000000000000000000000000000000000000000000000000000017905291517fc89acc860000000000000000000000000000000000000000000000000000000081526001600160a01b038087169463c89acc869434946113f19492909316929101612264565b60206040518083038185885af115801561140f573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611434919061220d565b50604080516002808252606082018352600092602083019080368337505060055482519293506001600160a01b031691839150600090611476576114766124cf565b6001600160a01b0392831660209182029290920101526006548251911690829060019081106114a7576114a76124cf565b6001600160a01b0392831660209182029290920101526003546040518583169263c89acc869216906114dd9085906024016124e5565b60408051601f198184030181529181526020820180516001600160e01b03167fc2998238000000000000000000000000000000000000000000000000000000001790525160e084901b6001600160e01b0319168152611540929190600401612264565b6020604051808303816000875af115801561155f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611583919061220d565b50600654604051602481018990526001600160a01b0385811692638058f4789291169060440160408051601f198184030181529181526020820180516001600160e01b03167fc5ebeaec000000000000000000000000000000000000000000000000000000001790525160e084901b6001600160e01b031916815261160e9291908b90600401612532565b6020604051808303816000875af115801561162d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611651919061220d565b5060408051888152602081018690526001600160a01b03881691339188917fef18174796a5d2f91d51dc5e907a4d7867bbd6e800f6225168e0453d581d0dcd910160405180910390a450505050505050565b6116ab611b65565b600081815260016020526040812060020180548492906116cc908490612385565b90915550505050565b6116dd611b65565b6116e78282611c1c565b5050565b60006116f5611b65565b600280546000918261170683612568565b9091555080845260008181526001602081815260409283902087518155908701519181019190915590850151600282015560608501516003808301919091556080860151600483015560a0860151600583015560c0860151600683015560e086015160078301805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915561010088015160088501805492831691909316908117835561012089015195965088959374ffffffffffffffffffffffffffffffffffffffffff199092161790600160a01b9084908111156117ed576117ed611d32565b0217905550610140820151600882018054911515600160a81b0260ff60a81b19909216919091179055610160820151600982019061182b908261240f565b50505061010083015160405182916001600160a01b0316907ff060b874355dd22d0bc251d61fca3b6d902778149a3048748276c9ee78ead56c90600090a390505b919050565b600160208190526000918252604090912080549181015460028201546003830154600484015460058501546006860154600787015460088801546009890180549899979896979596949593946001600160a01b03938416949383169360ff600160a01b8504811694600160a81b9004169290916118ed9061222a565b80601f01602080910402602001604051908101604052809291908181526020018280546119199061222a565b80156119665780601f1061193b57610100808354040283529160200191611966565b820191906000526020600020905b81548152906001019060200180831161194957829003601f168201915b505050505090508c565b611978611b65565b6001600160a01b0381166119f45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610443565b6119fd81611bbf565b50565b600754604051632fea7b8160e01b815233600482015260009182916001600160a01b0390911690632fea7b8190602401602060405180830381865afa158015611a4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7191906121ae565b6006546040516001600160a01b03808416602483018190529394506000939263d79f44eb9291169060440160408051601f198184030181529181526020820180516001600160e01b03167f95dd9193000000000000000000000000000000000000000000000000000000001790525160e084901b6001600160e01b0319168152611aff929190600401612264565b600060405180830381865afa158015611b1c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611b449190810190612286565b9050600081806020019051810190611b5c91906122f4565b95945050505050565b6000546001600160a01b031633146112025760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610443565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600081815260016020526040812060020180548492906116cc908490612581565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006003811115611cad57611cad611d32565b815260006020820152606060409091015290565b6001600160a01b03811681146119fd57600080fd5b803561186c81611cc1565b600080600060608486031215611cf657600080fd5b833592506020840135611d0881611cc1565b929592945050506040919091013590565b600060208284031215611d2b57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b60048110611d5857611d58611d32565b9052565b60005b83811015611d77578181015183820152602001611d5f565b50506000910152565b60008151808452611d98816020860160208601611d5c565b601f01601f19169290920160200192915050565b6020815281516020820152602082015160408201526040820151606082015260608201516080820152608082015160a082015260a082015160c082015260c082015160e0820152600060e0830151610100611e11818501836001600160a01b03169052565b8401519050610120611e2d848201836001600160a01b03169052565b8401519050610140611e4184820183611d48565b8401519050610160611e568482018315159052565b840151610180848101529050611e706101a0840182611d80565b949350505050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715611eb257611eb2611e78565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611ee157611ee1611e78565b604052919050565b80356004811061186c57600080fd5b80151581146119fd57600080fd5b803561186c81611ef8565b600067ffffffffffffffff821115611f2b57611f2b611e78565b50601f01601f191660200190565b600082601f830112611f4a57600080fd5b8135611f5d611f5882611f11565b611eb8565b818152846020838601011115611f7257600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611fa157600080fd5b813567ffffffffffffffff80821115611fb957600080fd5b908301906101808286031215611fce57600080fd5b611fd6611e8e565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015261202260e08401611cd6565b60e0820152610100612035818501611cd6565b90820152610120612047848201611ee9565b90820152610140612059848201611f06565b90820152610160838101358381111561207157600080fd5b61207d88828701611f39565b918301919091525095945050505050565b600080600080608085870312156120a457600080fd5b8435935060208501356120b681611cc1565b93969395505050506040820135916060013590565b600080604083850312156120de57600080fd5b50508035926020909101359150565b602081016002831061210157612101611d32565b91905290565b60006101808e83528d60208401528c60408401528b60608401528a60808401528960a08401528860c08401526001600160a01b0380891660e08501528088166101008501525061215b610120840187611d48565b8415156101408401528061016084015261217781840185611d80565b9f9e505050505050505050505050505050565b60006020828403121561219c57600080fd5b81356121a781611cc1565b9392505050565b6000602082840312156121c057600080fd5b81516121a781611cc1565b60006001600160a01b03808816835260a060208401526121ee60a0840188611d80565b9581166040840152606083019490945250911660809091015292915050565b60006020828403121561221f57600080fd5b81516121a781611ef8565b600181811c9082168061223e57607f821691505b60208210810361225e57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0383168152604060208201526000611e706040830184611d80565b60006020828403121561229857600080fd5b815167ffffffffffffffff8111156122af57600080fd5b8201601f810184136122c057600080fd5b80516122ce611f5882611f11565b8181528560208385010111156122e357600080fd5b611b5c826020830160208601611d5c565b60006020828403121561230657600080fd5b5051919050565b60008060006060848603121561232257600080fd5b835161232d81611ef8565b60208501516040860151919450925061234581611ef8565b809150509250925092565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561238057612380612350565b500290565b8082018082111561239857612398612350565b92915050565b6000826123bb57634e487b7160e01b600052601260045260246000fd5b500490565b601f82111561240a57600081815260208120601f850160051c810160208610156123e75750805b601f850160051c820191505b81811015612406578281556001016123f3565b5050505b505050565b815167ffffffffffffffff81111561242957612429611e78565b61243d81612437845461222a565b846123c0565b602080601f831160018114612472576000841561245a5750858301515b600019600386901b1c1916600185901b178555612406565b600085815260208120601f198616915b828110156124a157888601518255948401946001909101908401612482565b50858210156124bf5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b818110156125265783516001600160a01b031683529284019291840191600101612501565b50909695505050505050565b60006001600160a01b038086168352606060208401526125556060840186611d80565b9150808416604084015250949350505050565b60006001820161257a5761257a612350565b5060010190565b818103818111156123985761239861235056fea2646970667358221220f8e810647c7af6390faa9217129aaa699d152c6e4422d7bcf1109b4ab9e954ae64736f6c63430008100033";

type TropykusBorrowingServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TropykusBorrowingServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TropykusBorrowingService__factory extends ContractFactory {
  constructor(...args: TropykusBorrowingServiceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    userIdentityFactory: PromiseOrValue<string>,
    contracts: TropykusBorrowingService.TropykusContractsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TropykusBorrowingService> {
    return super.deploy(
      userIdentityFactory,
      contracts,
      overrides || {}
    ) as Promise<TropykusBorrowingService>;
  }
  override getDeployTransaction(
    userIdentityFactory: PromiseOrValue<string>,
    contracts: TropykusBorrowingService.TropykusContractsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      userIdentityFactory,
      contracts,
      overrides || {}
    );
  }
  override attach(address: string): TropykusBorrowingService {
    return super.attach(address) as TropykusBorrowingService;
  }
  override connect(signer: Signer): TropykusBorrowingService__factory {
    return super.connect(signer) as TropykusBorrowingService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TropykusBorrowingServiceInterface {
    return new utils.Interface(_abi) as TropykusBorrowingServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TropykusBorrowingService {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TropykusBorrowingService;
  }
}
