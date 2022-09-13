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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
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
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "interestRate",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "ListingRemoved",
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
        name: "index",
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
        ],
        internalType: "struct BorrowService.BorrowServiceListing",
        name: "listing",
        type: "tuple",
      },
    ],
    name: "addListing",
    outputs: [
      {
        internalType: "uint256",
        name: "index",
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
        name: "index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "getListing",
    outputs: [
      {
        components: [
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
        ],
        internalType: "struct BorrowService.BorrowServiceListing",
        name: "listing",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
    name: "getListingsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
    name: "removeLiquidity",
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
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "removeListing",
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
        internalType: "enum IServiceData.ServiceType",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161117438038061117483398101604081905261002f916100c0565b61003833610070565b6000805460ff60a01b1916600160a01b179055600380546001600160a01b0319166001600160a01b03929092169190911790556100f0565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100d257600080fd5b81516001600160a01b03811681146100e957600080fd5b9392505050565b611075806100ff6000396000f3fe6080604052600436106100dc5760003560e01c80638da5cb5b1161007f578063c4ccdeea11610059578063c4ccdeea14610321578063db0881a114610341578063f2fde38b14610380578063f725252a146103a057600080fd5b80638da5cb5b14610254578063935b74c81461027c5780639aa5d4621461030157600080fd5b80634069b8a2116100bb5780634069b8a2146101d6578063715018a61461020c5780638327c214146102215780638d802ba51461023457600080fd5b806207df30146100e15780630313766f146101935780631dd04c59146101a8575b600080fd5b3480156100ed57600080fd5b5061014d6100fc366004610e04565b60016020818152600093845260408085209091529183529120805491810154600282015460038301546004840154600585015460069095015493949293919290916001600160a01b03918216911687565b60408051978852602088019690965294860193909352606085019190915260808401526001600160a01b0390811660a08401521660c082015260e0015b60405180910390f35b6101a66101a1366004610e2e565b6103e6565b005b3480156101b457600080fd5b506101c86101c3366004610e63565b6105e6565b60405190815260200161018a565b3480156101e257600080fd5b506101c86101f1366004610f00565b6001600160a01b031660009081526002602052604090205490565b34801561021857600080fd5b506101a66106f4565b6101a661022f366004610f22565b610708565b34801561024057600080fd5b506101a661024f366004610f5d565b61099a565b34801561026057600080fd5b506000546040516001600160a01b03909116815260200161018a565b34801561028857600080fd5b5061029c610297366004610f5d565b610b3f565b60405161018a9190600060e082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a08301516001600160a01b0380821660a08501528060c08601511660c0850152505092915050565b34801561030d57600080fd5b506101a661031c366004610e2e565b610c0f565b34801561032d57600080fd5b506101a661033c366004610e2e565b610c55565b34801561034d57600080fd5b506000546103739074010000000000000000000000000000000000000000900460ff1681565b60405161018a9190610f89565b34801561038c57600080fd5b506101a661039b366004610f00565b610c6d565b3480156103ac57600080fd5b506101c86103bb366004610e04565b6001600160a01b03919091166000908152600160208181526040808420948452939052919020015490565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018490526001600160a01b038316906323b872dd906064016020604051808303816000875af1158015610452573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104769190610fb1565b506003546040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152602481018590529083169063095ea7b3906044016020604051808303816000875af11580156104e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105079190610fb1565b506003546040517f1edd0c6c0000000000000000000000000000000000000000000000000000000081526001600160a01b0384811660048301526024820186905230604483015233606483015290911690631edd0c6c90608401600060405180830381600087803b15801561057b57600080fd5b505af115801561058f573d6000803e3d6000fd5b50505050816001600160a01b0316336001600160a01b0316827fece4e547ae0655a2613e99bed9e2f496b3b3dd8b0768cfbae0a6070b05782cea866040516105d991815260200190565b60405180910390a4505050565b60006105f0610cfd565b60c0820180516001600160a01b039081166000908152600160208181526040808420865186168552600280845282862054865290835281852089518155838a0151948101949094558189015184820155606089015160038501556080890151600485015560a089015160058501805491881673ffffffffffffffffffffffffffffffffffffffff19928316179055965160069094018054949096169390961683179094559082529290925281208054916106a983610fe9565b91905055905081606001518260c001516001600160a01b0316827f9adf89188ff96bbe0e772b6a9345d935a240c2bd656be8db63db0d091e92cb9d60405160405180910390a4919050565b6106fc610cfd565b6107066000610d57565b565b6000841161075d5760405162461bcd60e51b815260206004820152601060248201527f4e6f6e207a65726f20626f72726f77730000000000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0383166000908152600160208181526040808420868552909152909120015484106107d15760405162461bcd60e51b815260206004820152601260248201527f4c697175696469747920657863656564656400000000000000000000000000006044820152606401610754565b6001600160a01b038316600090815260016020908152604080832085845290915290205484116108435760405162461bcd60e51b815260206004820152601260248201527f4d696e20616d6f756e74206e6f74206d657400000000000000000000000000006044820152606401610754565b6003546040517ff340fa010000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b039091169063f340fa019034906024016000604051808303818588803b1580156108a257600080fd5b505af11580156108b6573d6000803e3d6000fd5b50506003546040517fb13f0de80000000000000000000000000000000000000000000000000000000081526001600160a01b038881166004830152602482018a9052336044830152909116935063b13f0de892506064019050600060405180830381600087803b15801561092957600080fd5b505af115801561093d573d6000803e3d6000fd5b5050505061094c848484610db4565b60408051858152602081018390526001600160a01b03851691339185917fef18174796a5d2f91d51dc5e907a4d7867bbd6e800f6225168e0453d581d0dcd910160405180910390a450505050565b6109a2610cfd565b6001600160a01b038116600090815260026020526040812054906109c7846001611002565b90505b81811015610a7a576001600160a01b0383811660009081526001602081815260408084208685529091528083208884529220825481558282015491810191909155600280830154908201556003808301549082015560048083015490820155600580830154908201805491851673ffffffffffffffffffffffffffffffffffffffff1992831617905560069283015492909101805492909316911617905580610a7281610fe9565b9150506109ca565b506001600160a01b038216600081815260016020818152604080842086855282528084208481559283018490556002808401859055600384018590556004840185905560058401805473ffffffffffffffffffffffffffffffffffffffff199081169091556006909401805490941690935593835252908120805491610aff83611015565b90915550506040516001600160a01b0383169084907f58b0852506006c4be6c7ae72afcd195d9e64d7f5d8947905e914b778e47b7cf390600090a3505050565b610b916040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b506001600160a01b038082166000908152600160208181526040808420878552825292839020835160e08101855281548152928101549183019190915260028101549282019290925260038201546060820152600482015460808201526005820154831660a082015260069091015490911660c08201525b92915050565b610c17610cfd565b6001600160a01b03821660009081526001602081815260408084208585529091528220018054859290610c4b908490611002565b9091555050505050565b610c5d610cfd565b610c68838383610db4565b505050565b610c75610cfd565b6001600160a01b038116610cf15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610754565b610cfa81610d57565b50565b6000546001600160a01b031633146107065760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610754565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03821660009081526001602081815260408084208585529091528220018054859290610c4b90849061102c565b80356001600160a01b0381168114610dff57600080fd5b919050565b60008060408385031215610e1757600080fd5b610e2083610de8565b946020939093013593505050565b600080600060608486031215610e4357600080fd5b83359250610e5360208501610de8565b9150604084013590509250925092565b600060e08284031215610e7557600080fd5b60405160e0810181811067ffffffffffffffff82111715610ea657634e487b7160e01b600052604160045260246000fd5b80604052508235815260208301356020820152604083013560408201526060830135606082015260808301356080820152610ee360a08401610de8565b60a0820152610ef460c08401610de8565b60c08201529392505050565b600060208284031215610f1257600080fd5b610f1b82610de8565b9392505050565b60008060008060808587031215610f3857600080fd5b84359350610f4860208601610de8565b93969395505050506040820135916060013590565b60008060408385031215610f7057600080fd5b82359150610f8060208401610de8565b90509250929050565b6020810160028310610fab57634e487b7160e01b600052602160045260246000fd5b91905290565b600060208284031215610fc357600080fd5b81518015158114610f1b57600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610ffb57610ffb610fd3565b5060010190565b80820180821115610c0957610c09610fd3565b60008161102457611024610fd3565b506000190190565b81810381811115610c0957610c09610fd356fea2646970667358221220d3f6ed44a4b7fa0d3777f457b710d64c1274a6198e90495f805d34f46a2a2ced64736f6c63430008100033";

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
