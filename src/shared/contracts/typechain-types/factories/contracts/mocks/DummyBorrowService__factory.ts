/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DummyBorrowService,
  DummyBorrowServiceInterface,
} from "../../../contracts/mocks/DummyBorrowService";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ACME",
        name: "acme",
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
  "0x608060405234801561001057600080fd5b5060405161178b38038061178b83398101604081905261002f916100c0565b61003833610070565b6000805460ff60a01b1916600160a01b179055600380546001600160a01b0319166001600160a01b03929092169190911790556100f0565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100d257600080fd5b81516001600160a01b03811681146100e957600080fd5b9392505050565b61168c806100ff6000396000f3fe60806040526004361061010e5760003560e01c80639cd441da116100a5578063db0881a111610074578063de74e57b11610059578063de74e57b146102d7578063f2fde38b1461030f578063f8b2cb4f1461032f57600080fd5b8063db0881a114610289578063dc419a09146102b757600080fd5b80639cd441da146101fa5780639d7de6b31461021a578063cbaa068f1461023a578063cd1bef211461025957600080fd5b80635c3fec1e116100e15780635c3fec1e1461018a578063715018a6146101aa5780638327c214146101bf5780638da5cb5b146101d257600080fd5b80630313766f14610113578063107a274a146101285780633ccfd60b1461015e5780634085aaac1461016a575b600080fd5b610126610121366004610fe8565b61034f565b005b34801561013457600080fd5b5061014861014336600461101d565b61054f565b60405161015591906110a6565b60405180910390f35b34801561012657600080fd5b34801561017657600080fd5b50610126610185366004611267565b6106c6565b34801561019657600080fd5b506101266101a536600461101d565b6107f4565b3480156101b657600080fd5b5061012661081a565b6101266101cd366004611366565b61082c565b3480156101de57600080fd5b506000546040516001600160a01b039091168152602001610155565b34801561020657600080fd5b506101266102153660046113a1565b610a84565b34801561022657600080fd5b506101266102353660046113a1565b610ab6565b34801561024657600080fd5b506002545b604051908152602001610155565b34801561026557600080fd5b5061024b61027436600461101d565b60009081526001602052604090206002015490565b34801561029557600080fd5b506000546102aa90600160a01b900460ff1681565b60405161015591906113c3565b3480156102c357600080fd5b5061024b6102d2366004611267565b610acc565b3480156102e357600080fd5b506102f76102f236600461101d565b610c52565b6040516101559c9b9a999897969594939291906113dd565b34801561031b57600080fd5b5061012661032a366004611460565b610d51565b34801561033b57600080fd5b5061024b61034a366004611460565b610de1565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018490526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156103bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103df9190611482565b506003546040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152602481018590529083169063095ea7b3906044016020604051808303816000875af115801561044c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104709190611482565b506003546040517f1edd0c6c0000000000000000000000000000000000000000000000000000000081526001600160a01b0384811660048301526024820186905230604483015233606483015290911690631edd0c6c90608401600060405180830381600087803b1580156104e457600080fd5b505af11580156104f8573d6000803e3d6000fd5b50505050816001600160a01b0316336001600160a01b0316827fece4e547ae0655a2613e99bed9e2f496b3b3dd8b0768cfbae0a6070b05782cea8660405161054291815260200190565b60405180910390a4505050565b610557610f4d565b600082815260016020818152604092839020835161018081018552815481529281015491830191909152600281015492820192909252600380830154606083015260048301546080830152600583015460a0830152600683015460c083015260078301546001600160a01b0390811660e08401526008840154908116610100840152919291610120840191600160a01b90910460ff16908111156105fd576105fd611036565b600381111561060e5761060e611036565b81526008820154600160a81b900460ff161515602082015260098201805460409092019161063b9061149f565b80601f01602080910402602001604051908101604052809291908181526020018280546106679061149f565b80156106b45780601f10610689576101008083540402835291602001916106b4565b820191906000526020600020905b81548152906001019060200180831161069757829003601f168201915b5050505050815250509050919050565b565b6106ce610e75565b805160009081526001602081815260409283902084518155908401519181019190915590820151600282015560608201516003808301919091556080830151600483015560a0830151600583015560c0830151600683015560e083015160078301805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915561010085015160088501805492831691909316908117835561012086015186959490939274ffffffffffffffffffffffffffffffffffffffffff191690911790600160a01b9084908111156107b0576107b0611036565b0217905550610140820151600882018054911515600160a81b0260ff60a81b1990921691909117905561016082015160098201906107ee9082611528565b50505050565b6107fc610e75565b6000908152600160205260409020600801805460ff60a81b19169055565b610822610e75565b6106c46000610ecf565b3460000361086d576040517f3728b83d0000000000000000000000000000000000000000000000000000000081523460048201526024015b60405180910390fd5b60008281526001602052604090206002015484106108cd5760405162461bcd60e51b815260206004820152601260248201527f4c697175696469747920657863656564656400000000000000000000000000006044820152606401610864565b60008281526001602081905260409091200154841161092e5760405162461bcd60e51b815260206004820152601260248201527f4d696e20616d6f756e74206e6f74206d657400000000000000000000000000006044820152606401610864565b6003546040517ff340fa010000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b039091169063f340fa019034906024016000604051808303818588803b15801561098d57600080fd5b505af11580156109a1573d6000803e3d6000fd5b50506003546040517fb13f0de80000000000000000000000000000000000000000000000000000000081526001600160a01b038881166004830152602482018a9052336044830152909116935063b13f0de892506064019050600060405180830381600087803b158015610a1457600080fd5b505af1158015610a28573d6000803e3d6000fd5b50505050610a368483610f2c565b60408051858152602081018390526001600160a01b03851691339185917fef18174796a5d2f91d51dc5e907a4d7867bbd6e800f6225168e0453d581d0dcd910160405180910390a450505050565b610a8c610e75565b60008181526001602052604081206002018054849290610aad9084906115fe565b90915550505050565b610abe610e75565b610ac88282610f2c565b5050565b6000610ad6610e75565b6002805460009182610ae783611611565b9091555080845260008181526001602081815260409283902087518155908701519181019190915590850151600282015560608501516003808301919091556080860151600483015560a0860151600583015560c0860151600683015560e086015160078301805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915561010088015160088501805492831691909316908117835561012089015195965088959374ffffffffffffffffffffffffffffffffffffffffff199092161790600160a01b908490811115610bce57610bce611036565b0217905550610140820151600882018054911515600160a81b0260ff60a81b199092169190911790556101608201516009820190610c0c9082611528565b50505061010083015160405182916001600160a01b0316907ff060b874355dd22d0bc251d61fca3b6d902778149a3048748276c9ee78ead56c90600090a390505b919050565b600160208190526000918252604090912080549181015460028201546003830154600484015460058501546006860154600787015460088801546009890180549899979896979596949593946001600160a01b03938416949383169360ff600160a01b8504811694600160a81b900416929091610cce9061149f565b80601f0160208091040260200160405190810160405280929190818152602001828054610cfa9061149f565b8015610d475780601f10610d1c57610100808354040283529160200191610d47565b820191906000526020600020905b815481529060010190602001808311610d2a57829003601f168201915b505050505090508c565b610d59610e75565b6001600160a01b038116610dd55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610864565b610dde81610ecf565b50565b6003546040517f58bd5c200000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015233602483015260009216906358bd5c2090604401602060405180830381865afa158015610e4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6f919061162a565b92915050565b6000546001600160a01b031633146106c45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610864565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008181526001602052604081206002018054849290610aad908490611643565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006003811115610fbd57610fbd611036565b815260006020820152606060409091015290565b80356001600160a01b0381168114610c4d57600080fd5b600080600060608486031215610ffd57600080fd5b8335925061100d60208501610fd1565b9150604084013590509250925092565b60006020828403121561102f57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6004811061105c5761105c611036565b9052565b6000815180845260005b818110156110865760208185018101518683018201520161106a565b506000602082860101526020601f19601f83011685010191505092915050565b6020815281516020820152602082015160408201526040820151606082015260608201516080820152608082015160a082015260a082015160c082015260c082015160e0820152600060e083015161010061110b818501836001600160a01b03169052565b8401519050610120611127848201836001600160a01b03169052565b840151905061014061113b8482018361104c565b84015190506101606111508482018315159052565b84015161018084810152905061116a6101a0840182611060565b949350505050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156111ac576111ac611172565b60405290565b803560048110610c4d57600080fd5b8015158114610dde57600080fd5b8035610c4d816111c1565b600082601f8301126111eb57600080fd5b813567ffffffffffffffff8082111561120657611206611172565b604051601f8301601f19908116603f0116810190828211818310171561122e5761122e611172565b8160405283815286602085880101111561124757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561127957600080fd5b813567ffffffffffffffff8082111561129157600080fd5b9083019061018082860312156112a657600080fd5b6112ae611188565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c08201526112fa60e08401610fd1565b60e082015261010061130d818501610fd1565b9082015261012061131f8482016111b2565b908201526101406113318482016111cf565b90820152610160838101358381111561134957600080fd5b611355888287016111da565b918301919091525095945050505050565b6000806000806080858703121561137c57600080fd5b8435935061138c60208601610fd1565b93969395505050506040820135916060013590565b600080604083850312156113b457600080fd5b50508035926020909101359150565b60208101600283106113d7576113d7611036565b91905290565b60006101808e83528d60208401528c60408401528b60608401528a60808401528960a08401528860c08401526001600160a01b0380891660e08501528088166101008501525061143161012084018761104c565b8415156101408401528061016084015261144d81840185611060565b9f9e505050505050505050505050505050565b60006020828403121561147257600080fd5b61147b82610fd1565b9392505050565b60006020828403121561149457600080fd5b815161147b816111c1565b600181811c908216806114b357607f821691505b6020821081036114d357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561152357600081815260208120601f850160051c810160208610156115005750805b601f850160051c820191505b8181101561151f5782815560010161150c565b5050505b505050565b815167ffffffffffffffff81111561154257611542611172565b61155681611550845461149f565b846114d9565b602080601f83116001811461158b57600084156115735750858301515b600019600386901b1c1916600185901b17855561151f565b600085815260208120601f198616915b828110156115ba5788860151825594840194600190910190840161159b565b50858210156115d85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b80820180821115610e6f57610e6f6115e8565b600060018201611623576116236115e8565b5060010190565b60006020828403121561163c57600080fd5b5051919050565b81810381811115610e6f57610e6f6115e856fea2646970667358221220f9abe3da96ae97d8df71d3a6361b6380a201a9763f3e20a5157e444cc16b07ee64736f6c63430008100033";

type DummyBorrowServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyBorrowServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyBorrowService__factory extends ContractFactory {
  constructor(...args: DummyBorrowServiceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    acme: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DummyBorrowService> {
    return super.deploy(acme, overrides || {}) as Promise<DummyBorrowService>;
  }
  override getDeployTransaction(
    acme: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(acme, overrides || {});
  }
  override attach(address: string): DummyBorrowService {
    return super.attach(address) as DummyBorrowService;
  }
  override connect(signer: Signer): DummyBorrowService__factory {
    return super.connect(signer) as DummyBorrowService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyBorrowServiceInterface {
    return new utils.Interface(_abi) as DummyBorrowServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyBorrowService {
    return new Contract(address, _abi, signerOrProvider) as DummyBorrowService;
  }
}
