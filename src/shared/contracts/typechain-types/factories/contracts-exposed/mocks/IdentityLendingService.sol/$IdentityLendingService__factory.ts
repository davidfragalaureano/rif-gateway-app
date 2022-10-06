/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  $IdentityLendingService,
  $IdentityLendingServiceInterface,
} from "../../../../contracts-exposed/mocks/IdentityLendingService.sol/$IdentityLendingService";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ACME",
        name: "acmeLending",
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
  "0x60806040523480156200001157600080fd5b5060405162001950380380620019508339810160408190526200003491620000ec565b8181620000413362000083565b6000805460ff60a01b19169055600380546001600160a01b039384166001600160a01b03199182161790915560048054929093169116179055506200012b9050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620000e957600080fd5b50565b600080604083850312156200010057600080fd5b82516200010d81620000d3565b60208401519092506200012081620000d3565b809150509250929050565b611815806200013b6000396000f3fe60806040526004361061010e5760003560e01c806397dffc61116100a5578063de74e57b11610074578063f2fde38b11610059578063f2fde38b146102de578063f8b2cb4f146102fe578063fe1c9a241461031e57600080fd5b8063de74e57b14610291578063ebcca707146102c957600080fd5b806397dffc611461021c578063cbaa068f14610224578063db0881a114610243578063dc419a091461027157600080fd5b80634085aaac116100e15780634085aaac146101a95780635c3fec1e146101c9578063715018a6146101e95780638da5cb5b146101fe57600080fd5b8063107a274a146101135780632904df291461014957806332cadf3c146101705780633ccfd60b14610192575b600080fd5b34801561011f57600080fd5b5061013361012e3660046110ee565b61033e565b6040516101409190611181565b60405180910390f35b34801561015557600080fd5b50335b6040516001600160a01b039091168152602001610140565b34801561017c57600080fd5b506101856104b3565b604051610140919061124d565b34801561019e57600080fd5b506101a76104f2565b005b3480156101b557600080fd5b506101a76101c436600461139e565b6107af565b3480156101d557600080fd5b506101a76101e43660046110ee565b6108dd565b3480156101f557600080fd5b506101a7610903565b34801561020a57600080fd5b506000546001600160a01b0316610158565b6101a7610917565b34801561023057600080fd5b506002545b604051908152602001610140565b34801561024f57600080fd5b5060005461026490600160a01b900460ff1681565b604051610140919061149d565b34801561027d57600080fd5b5061023561028c36600461139e565b610b39565b34801561029d57600080fd5b506102b16102ac3660046110ee565b610cbf565b6040516101409c9b9a999897969594939291906114b7565b3480156102d557600080fd5b506101a7610dbe565b3480156102ea57600080fd5b506101a76102f936600461153a565b610dc6565b34801561030a57600080fd5b5061023561031936600461153a565b610e56565b34801561032a57600080fd5b506101a761033936600461153a565b610e4a565b61034661106a565b600082815260016020818152604092839020835161018081018552815481529281015491830191909152600281015492820192909252600380830154606083015260048301546080830152600583015460a0830152600683015460c083015260078301546001600160a01b0390811660e08401526008840154908116610100840152919291610120840191600160a01b90910460ff16908111156103ec576103ec611107565b60038111156103fd576103fd611107565b81526008820154600160a81b900460ff161515602082015260098201805460409092019161042a90611557565b80601f016020809104026020016040519081016040528092919081815260200182805461045690611557565b80156104a35780601f10610478576101008083540402835291602001916104a3565b820191906000526020600020905b81548152906001019060200180831161048657829003601f168201915b5050505050815250509050919050565b60606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092949350505050565b600480546040516316caac1b60e21b815233928101929092526001600160a01b031690635b2ab06c90602401600060405180830381600087803b15801561053857600080fd5b505af115801561054c573d6000803e3d6000fd5b505060048054604051632fea7b8160e01b81523392810192909252600093506001600160a01b03169150632fea7b8190602401602060405180830381865afa15801561059c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c09190611591565b6003546040805160048082526024820183526020820180516001600160e01b0316629032ff60e51b179052915163d79f44eb60e01b81529394506000936001600160a01b038087169463d79f44eb946106209491909216929091016115ae565b600060405180830381865afa15801561063d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261066591908101906115d0565b90506000808280602001905181019061067e9190611647565b600354604051602481018490529294509092506001600160a01b038087169263621091c2929091169060440160408051601f198184030181529181526020820180516001600160e01b03167f2e1a7d4d000000000000000000000000000000000000000000000000000000001790525160e084901b7fffffffff000000000000000000000000000000000000000000000000000000001681526107259291906004016115ae565b6020604051808303816000875af1158015610744573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610768919061166b565b50600033817ffeb2000dca3e617cd6f3a8bbb63014bb54a124aac6ccbf73ee7229b4cd01f120610798858761169e565b60405190815260200160405180910390a450505050565b6107b7610fb3565b805160009081526001602081815260409283902084518155908401519181019190915590820151600282015560608201516003808301919091556080830151600483015560a0830151600583015560c0830151600683015560e083015160078301805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915561010085015160088501805492831691909316908117835561012086015186959490939274ffffffffffffffffffffffffffffffffffffffffff191690911790600160a01b90849081111561089957610899611107565b0217905550610140820151600882018054911515600160a81b0260ff60a81b1990921691909117905561016082015160098201906108d79082611706565b50505050565b6108e5610fb3565b6000908152600160205260409020600801805460ff60a81b19169055565b61090b610fb3565b610915600061100d565b565b34600003610958576040517f3728b83d0000000000000000000000000000000000000000000000000000000081523460048201526024015b60405180910390fd5b600480546040516316caac1b60e21b815233928101929092526001600160a01b031690635b2ab06c90602401600060405180830381600087803b15801561099e57600080fd5b505af11580156109b2573d6000803e3d6000fd5b505060048054604051632fea7b8160e01b81523392810192909252600093506001600160a01b03169150632fea7b8190602401602060405180830381865afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190611591565b6003546040805160048082526024820183526020820180516001600160e01b03167fd0e30db00000000000000000000000000000000000000000000000000000000017905291517fc89acc860000000000000000000000000000000000000000000000000000000081529394506001600160a01b038086169463c89acc86943494610ab89491909316929091016115ae565b60206040518083038185885af1158015610ad6573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610afb919061166b565b50604051348152600090339082907f77c494147cc26c9ccb1f3f1926fb5bffa128633d935fdf7147dff0da6f740db49060200160405180910390a450565b6000610b43610fb3565b6002805460009182610b54836117c6565b9091555080845260008181526001602081815260409283902087518155908701519181019190915590850151600282015560608501516003808301919091556080860151600483015560a0860151600583015560c0860151600683015560e086015160078301805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915561010088015160088501805492831691909316908117835561012089015195965088959374ffffffffffffffffffffffffffffffffffffffffff199092161790600160a01b908490811115610c3b57610c3b611107565b0217905550610140820151600882018054911515600160a81b0260ff60a81b199092169190911790556101608201516009820190610c799082611706565b50505061010083015160405182916001600160a01b0316907ff060b874355dd22d0bc251d61fca3b6d902778149a3048748276c9ee78ead56c90600090a390505b919050565b600160208190526000918252604090912080549181015460028201546003830154600484015460058501546006860154600787015460088801546009890180549899979896979596949593946001600160a01b03938416949383169360ff600160a01b8504811694600160a81b900416929091610d3b90611557565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6790611557565b8015610db45780601f10610d8957610100808354040283529160200191610db4565b820191906000526020600020905b815481529060010190602001808311610d9757829003601f168201915b505050505090508c565b610915610fb3565b610dce610fb3565b6001600160a01b038116610e4a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161094f565b610e538161100d565b50565b60048054604051632fea7b8160e01b8152339281019290925260009182916001600160a01b031690632fea7b8190602401602060405180830381865afa158015610ea4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec89190611591565b90506001600160a01b038116610ee15750600092915050565b6003546040805160048082526024820183526020820180516001600160e01b0316629032ff60e51b179052915163d79f44eb60e01b81526000936001600160a01b038087169463d79f44eb94610f3c949390921692016115ae565b600060405180830381865afa158015610f59573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f8191908101906115d0565b905060008082806020019051810190610f9a9190611647565b9092509050610fa9818361169e565b9695505050505050565b6000546001600160a01b031633146109155760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161094f565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600060038111156110da576110da611107565b815260006020820152606060409091015290565b60006020828403121561110057600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6004811061112d5761112d611107565b9052565b60005b8381101561114c578181015183820152602001611134565b50506000910152565b6000815180845261116d816020860160208601611131565b601f01601f19169290920160200192915050565b6020815281516020820152602082015160408201526040820151606082015260608201516080820152608082015160a082015260a082015160c082015260c082015160e0820152600060e08301516101006111e6818501836001600160a01b03169052565b8401519050610120611202848201836001600160a01b03169052565b84015190506101406112168482018361111d565b840151905061016061122b8482018315159052565b8401516101808481015290506112456101a0840182611155565b949350505050565b6020815260006112606020830184611155565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156112a1576112a1611267565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156112d0576112d0611267565b604052919050565b6001600160a01b0381168114610e5357600080fd5b8035610cba816112d8565b803560048110610cba57600080fd5b8015158114610e5357600080fd5b8035610cba81611307565b600067ffffffffffffffff82111561133a5761133a611267565b50601f01601f191660200190565b600082601f83011261135957600080fd5b813561136c61136782611320565b6112a7565b81815284602083860101111561138157600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156113b057600080fd5b813567ffffffffffffffff808211156113c857600080fd5b9083019061018082860312156113dd57600080fd5b6113e561127d565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015261143160e084016112ed565b60e08201526101006114448185016112ed565b908201526101206114568482016112f8565b90820152610140611468848201611315565b90820152610160838101358381111561148057600080fd5b61148c88828701611348565b918301919091525095945050505050565b60208101600283106114b1576114b1611107565b91905290565b60006101808e83528d60208401528c60408401528b60608401528a60808401528960a08401528860c08401526001600160a01b0380891660e08501528088166101008501525061150b61012084018761111d565b8415156101408401528061016084015261152781840185611155565b9f9e505050505050505050505050505050565b60006020828403121561154c57600080fd5b8135611260816112d8565b600181811c9082168061156b57607f821691505b60208210810361158b57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156115a357600080fd5b8151611260816112d8565b6001600160a01b03831681526040602082015260006112456040830184611155565b6000602082840312156115e257600080fd5b815167ffffffffffffffff8111156115f957600080fd5b8201601f8101841361160a57600080fd5b805161161861136782611320565b81815285602083850101111561162d57600080fd5b61163e826020830160208601611131565b95945050505050565b6000806040838503121561165a57600080fd5b505080516020909101519092909150565b60006020828403121561167d57600080fd5b815161126081611307565b634e487b7160e01b600052601160045260246000fd5b808201808211156116b1576116b1611688565b92915050565b601f82111561170157600081815260208120601f850160051c810160208610156116de5750805b601f850160051c820191505b818110156116fd578281556001016116ea565b5050505b505050565b815167ffffffffffffffff81111561172057611720611267565b6117348161172e8454611557565b846116b7565b602080601f83116001811461176957600084156117515750858301515b600019600386901b1c1916600185901b1785556116fd565b600085815260208120601f198616915b8281101561179857888601518255948401946001909101908401611779565b50858210156117b65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000600182016117d8576117d8611688565b506001019056fea26469706673582212202a8ccdd99b58ec988ad351e4f26a81374b4427a27dc4b78b45ae00375ae74e8964736f6c63430008100033";

type $IdentityLendingServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: $IdentityLendingServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class $IdentityLendingService__factory extends ContractFactory {
  constructor(...args: $IdentityLendingServiceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    acmeLending: PromiseOrValue<string>,
    userIdentityFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<$IdentityLendingService> {
    return super.deploy(
      acmeLending,
      userIdentityFactory,
      overrides || {}
    ) as Promise<$IdentityLendingService>;
  }
  override getDeployTransaction(
    acmeLending: PromiseOrValue<string>,
    userIdentityFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      acmeLending,
      userIdentityFactory,
      overrides || {}
    );
  }
  override attach(address: string): $IdentityLendingService {
    return super.attach(address) as $IdentityLendingService;
  }
  override connect(signer: Signer): $IdentityLendingService__factory {
    return super.connect(signer) as $IdentityLendingService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): $IdentityLendingServiceInterface {
    return new utils.Interface(_abi) as $IdentityLendingServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): $IdentityLendingService {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as $IdentityLendingService;
  }
}
