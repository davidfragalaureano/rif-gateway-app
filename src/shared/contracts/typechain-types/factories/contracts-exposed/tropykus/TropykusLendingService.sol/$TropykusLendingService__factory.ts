/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  $TropykusLendingService,
  $TropykusLendingServiceInterface,
} from "../../../../contracts-exposed/tropykus/TropykusLendingService.sol/$TropykusLendingService";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "crbtc",
        type: "address",
      },
      {
        internalType: "contract UserIdentityFactory",
        name: "userIdentityFactory",
        type: "address",
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
    inputs: [],
    name: "$_checkOwner",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "$_msgData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "$_msgSender",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "$_transferOwnership",
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
    inputs: [],
    name: "lend",
    outputs: [],
    stateMutability: "payable",
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
  "0x60806040523480156200001157600080fd5b5060405162001b0238038062001b028339810160408190526200003491620000ec565b8181620000413362000083565b6000805460ff60a01b19169055600380546001600160a01b039384166001600160a01b03199182161790915560048054929093169116179055506200012b9050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620000e957600080fd5b50565b600080604083850312156200010057600080fd5b82516200010d81620000d3565b60208401519092506200012081620000d3565b809150509250929050565b6119c7806200013b6000396000f3fe60806040526004361061010e5760003560e01c806397dffc61116100a5578063de74e57b11610074578063f2fde38b11610059578063f2fde38b146102de578063f8b2cb4f146102fe578063fe1c9a241461031e57600080fd5b8063de74e57b14610291578063ebcca707146102c957600080fd5b806397dffc611461021c578063cbaa068f14610224578063db0881a114610243578063dc419a091461027157600080fd5b80634085aaac116100e15780634085aaac146101a95780635c3fec1e146101c9578063715018a6146101e95780638da5cb5b146101fe57600080fd5b8063107a274a146101135780632904df291461014957806332cadf3c146101705780633ccfd60b14610192575b600080fd5b34801561011f57600080fd5b5061013361012e366004611283565b61033e565b6040516101409190611316565b60405180910390f35b34801561015557600080fd5b50335b6040516001600160a01b039091168152602001610140565b34801561017c57600080fd5b506101856104b3565b60405161014091906113e2565b34801561019e57600080fd5b506101a76104f2565b005b3480156101b557600080fd5b506101a76101c4366004611533565b610844565b3480156101d557600080fd5b506101a76101e4366004611283565b610972565b3480156101f557600080fd5b506101a7610998565b34801561020a57600080fd5b506000546001600160a01b0316610158565b6101a76109ac565b34801561023057600080fd5b506002545b604051908152602001610140565b34801561024f57600080fd5b5060005461026490600160a01b900460ff1681565b6040516101409190611632565b34801561027d57600080fd5b5061023561028c366004611533565b610be7565b34801561029d57600080fd5b506102b16102ac366004611283565b610d6d565b6040516101409c9b9a9998979695949392919061164c565b3480156102d557600080fd5b506101a7610e6c565b3480156102ea57600080fd5b506101a76102f93660046116cf565b610e74565b34801561030a57600080fd5b506102356103193660046116cf565b610f04565b34801561032a57600080fd5b506101a76103393660046116cf565b610ef8565b6103466111ff565b600082815260016020818152604092839020835161018081018552815481529281015491830191909152600281015492820192909252600380830154606083015260048301546080830152600583015460a0830152600683015460c083015260078301546001600160a01b0390811660e08401526008840154908116610100840152919291610120840191600160a01b90910460ff16908111156103ec576103ec61129c565b60038111156103fd576103fd61129c565b81526008820154600160a81b900460ff161515602082015260098201805460409092019161042a906116ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610456906116ec565b80156104a35780601f10610478576101008083540402835291602001916104a3565b820191906000526020600020905b81548152906001019060200180831161048657829003601f168201915b5050505050815250509050919050565b60606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092949350505050565b60048054604051632fea7b8160e01b815233928101929092526000916001600160a01b0390911690632fea7b8190602401602060405180830381865afa158015610540573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105649190611726565b6003546040516001600160a01b03808416602483018190529394506000939263d79f44eb9291169060440160408051601f198184030181529181526020820180516001600160e01b03166370a0823160e01b1790525160e084901b7fffffffff000000000000000000000000000000000000000000000000000000001681526105f1929190600401611743565b600060405180830381865afa15801561060e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106369190810190611765565b905060008180602001905181019061064e91906117dc565b60035460408051602480820185905282518083039091018152604490910182526020810180516001600160e01b03167fdb006a750000000000000000000000000000000000000000000000000000000017905290517f621091c20000000000000000000000000000000000000000000000000000000081529293506001600160a01b038681169363621091c2936106eb9392169190600401611743565b6020604051808303816000875af115801561070a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072e91906117f5565b506003546040805160048082526024820183526020820180516001600160e01b031663182df0f560e01b179052915163d79f44eb60e01b81526000936001600160a01b038089169463d79f44eb9461078b94939092169201611743565b600060405180830381865afa1580156107a8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107d09190810190611765565b90506000818060200190518101906107e891906117dc565b9050600033817ffeb2000dca3e617cd6f3a8bbb63014bb54a124aac6ccbf73ee7229b4cd01f120670de0b6b3a76400006108228689611828565b61082c9190611847565b60405190815260200160405180910390a45050505050565b61084c611148565b805160009081526001602081815260409283902084518155908401519181019190915590820151600282015560608201516003808301919091556080830151600483015560a0830151600583015560c0830151600683015560e083015160078301805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915561010085015160088501805492831691909316908117835561012086015186959490939274ffffffffffffffffffffffffffffffffffffffffff191690911790600160a01b90849081111561092e5761092e61129c565b0217905550610140820151600882018054911515600160a81b0260ff60a81b19909216919091179055610160820151600982019061096c90826118b8565b50505050565b61097a611148565b6000908152600160205260409020600801805460ff60a81b19169055565b6109a0611148565b6109aa60006111a2565b565b346000036109ed576040517f3728b83d0000000000000000000000000000000000000000000000000000000081523460048201526024015b60405180910390fd5b600480546040517f5b2ab06c00000000000000000000000000000000000000000000000000000000815233928101929092526001600160a01b031690635b2ab06c90602401600060405180830381600087803b158015610a4c57600080fd5b505af1158015610a60573d6000803e3d6000fd5b505060048054604051632fea7b8160e01b81523392810192909252600093506001600160a01b03169150632fea7b8190602401602060405180830381865afa158015610ab0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad49190611726565b6003546040805160048082526024820183526020820180516001600160e01b03167f1249c58b0000000000000000000000000000000000000000000000000000000017905291517fc89acc860000000000000000000000000000000000000000000000000000000081529394506001600160a01b038086169463c89acc86943494610b66949190931692909101611743565b60206040518083038185885af1158015610b84573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610ba991906117f5565b50604051348152600090339082907f77c494147cc26c9ccb1f3f1926fb5bffa128633d935fdf7147dff0da6f740db49060200160405180910390a450565b6000610bf1611148565b6002805460009182610c0283611978565b9091555080845260008181526001602081815260409283902087518155908701519181019190915590850151600282015560608501516003808301919091556080860151600483015560a0860151600583015560c0860151600683015560e086015160078301805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915561010088015160088501805492831691909316908117835561012089015195965088959374ffffffffffffffffffffffffffffffffffffffffff199092161790600160a01b908490811115610ce957610ce961129c565b0217905550610140820151600882018054911515600160a81b0260ff60a81b199092169190911790556101608201516009820190610d2790826118b8565b50505061010083015160405182916001600160a01b0316907ff060b874355dd22d0bc251d61fca3b6d902778149a3048748276c9ee78ead56c90600090a390505b919050565b600160208190526000918252604090912080549181015460028201546003830154600484015460058501546006860154600787015460088801546009890180549899979896979596949593946001600160a01b03938416949383169360ff600160a01b8504811694600160a81b900416929091610de9906116ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610e15906116ec565b8015610e625780601f10610e3757610100808354040283529160200191610e62565b820191906000526020600020905b815481529060010190602001808311610e4557829003601f168201915b505050505090508c565b6109aa611148565b610e7c611148565b6001600160a01b038116610ef85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016109e4565b610f01816111a2565b50565b60048054604051632fea7b8160e01b8152339281019290925260009182916001600160a01b031690632fea7b8190602401602060405180830381865afa158015610f52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f769190611726565b6003546040805160048082526024820183526020820180516001600160e01b031663182df0f560e01b179052915163d79f44eb60e01b81529394506000936001600160a01b038087169463d79f44eb94610fd7949190921692909101611743565b600060405180830381865afa158015610ff4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261101c9190810190611765565b905060008180602001905181019061103491906117dc565b6003546040516001600160a01b03868116602483018190529394506000939263d79f44eb9291169060440160408051601f198184030181529181526020820180516001600160e01b03166370a0823160e01b1790525160e084901b7fffffffff000000000000000000000000000000000000000000000000000000001681526110c1929190600401611743565b600060405180830381865afa1580156110de573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111069190810190611765565b905060008180602001905181019061111e91906117dc565b9050670de0b6b3a76400006111338285611828565b61113d9190611847565b979650505050505050565b6000546001600160a01b031633146109aa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109e4565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000600381111561126f5761126f61129c565b815260006020820152606060409091015290565b60006020828403121561129557600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b600481106112c2576112c261129c565b9052565b60005b838110156112e15781810151838201526020016112c9565b50506000910152565b600081518084526113028160208601602086016112c6565b601f01601f19169290920160200192915050565b6020815281516020820152602082015160408201526040820151606082015260608201516080820152608082015160a082015260a082015160c082015260c082015160e0820152600060e083015161010061137b818501836001600160a01b03169052565b8401519050610120611397848201836001600160a01b03169052565b84015190506101406113ab848201836112b2565b84015190506101606113c08482018315159052565b8401516101808481015290506113da6101a08401826112ea565b949350505050565b6020815260006113f560208301846112ea565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715611436576114366113fc565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611465576114656113fc565b604052919050565b6001600160a01b0381168114610f0157600080fd5b8035610d688161146d565b803560048110610d6857600080fd5b8015158114610f0157600080fd5b8035610d688161149c565b600067ffffffffffffffff8211156114cf576114cf6113fc565b50601f01601f191660200190565b600082601f8301126114ee57600080fd5b81356115016114fc826114b5565b61143c565b81815284602083860101111561151657600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561154557600080fd5b813567ffffffffffffffff8082111561155d57600080fd5b90830190610180828603121561157257600080fd5b61157a611412565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c08201526115c660e08401611482565b60e08201526101006115d9818501611482565b908201526101206115eb84820161148d565b908201526101406115fd8482016114aa565b90820152610160838101358381111561161557600080fd5b611621888287016114dd565b918301919091525095945050505050565b60208101600283106116465761164661129c565b91905290565b60006101808e83528d60208401528c60408401528b60608401528a60808401528960a08401528860c08401526001600160a01b0380891660e0850152808816610100850152506116a06101208401876112b2565b841515610140840152806101608401526116bc818401856112ea565b9f9e505050505050505050505050505050565b6000602082840312156116e157600080fd5b81356113f58161146d565b600181811c9082168061170057607f821691505b60208210810361172057634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561173857600080fd5b81516113f58161146d565b6001600160a01b03831681526040602082015260006113da60408301846112ea565b60006020828403121561177757600080fd5b815167ffffffffffffffff81111561178e57600080fd5b8201601f8101841361179f57600080fd5b80516117ad6114fc826114b5565b8181528560208385010111156117c257600080fd5b6117d38260208301602086016112c6565b95945050505050565b6000602082840312156117ee57600080fd5b5051919050565b60006020828403121561180757600080fd5b81516113f58161149c565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561184257611842611812565b500290565b60008261186457634e487b7160e01b600052601260045260246000fd5b500490565b601f8211156118b357600081815260208120601f850160051c810160208610156118905750805b601f850160051c820191505b818110156118af5782815560010161189c565b5050505b505050565b815167ffffffffffffffff8111156118d2576118d26113fc565b6118e6816118e084546116ec565b84611869565b602080601f83116001811461191b57600084156119035750858301515b600019600386901b1c1916600185901b1785556118af565b600085815260208120601f198616915b8281101561194a5788860151825594840194600190910190840161192b565b50858210156119685787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006001820161198a5761198a611812565b506001019056fea2646970667358221220cf497ca678688c4fdc074b6272b687901b3a6c961b051486e2d745f5be5dcc7a64736f6c63430008100033";

type $TropykusLendingServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: $TropykusLendingServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class $TropykusLendingService__factory extends ContractFactory {
  constructor(...args: $TropykusLendingServiceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    crbtc: PromiseOrValue<string>,
    userIdentityFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<$TropykusLendingService> {
    return super.deploy(
      crbtc,
      userIdentityFactory,
      overrides || {}
    ) as Promise<$TropykusLendingService>;
  }
  override getDeployTransaction(
    crbtc: PromiseOrValue<string>,
    userIdentityFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      crbtc,
      userIdentityFactory,
      overrides || {}
    );
  }
  override attach(address: string): $TropykusLendingService {
    return super.attach(address) as $TropykusLendingService;
  }
  override connect(signer: Signer): $TropykusLendingService__factory {
    return super.connect(signer) as $TropykusLendingService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): $TropykusLendingServiceInterface {
    return new utils.Interface(_abi) as $TropykusLendingServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): $TropykusLendingService {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as $TropykusLendingService;
  }
}
