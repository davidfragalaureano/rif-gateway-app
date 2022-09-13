/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  $DummyLendingService,
  $DummyLendingServiceInterface,
} from "../../../../contracts-exposed/mocks/DummyLendingService.sol/$DummyLendingService";

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
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        indexed: false,
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
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
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
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "enum LendingService.PayBackOption",
        name: "payBackOption",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "rewardRate",
        type: "uint256",
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
    inputs: [],
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
        internalType: "address",
        name: "currency",
        type: "address",
      },
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
            name: "minDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDuration",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "enum LendingService.PayBackOption",
            name: "payBackOption",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "rewardRate",
            type: "uint256",
          },
        ],
        internalType: "struct LendingService.LendingServiceListing",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListingCount",
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
        name: "id",
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
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "enum LendingService.PayBackOption",
        name: "payBackOption",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "rewardRate",
        type: "uint256",
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
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
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
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "enum LendingService.PayBackOption",
            name: "payBackOption",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "rewardRate",
            type: "uint256",
          },
        ],
        internalType: "struct LendingService.LendingServiceListing",
        name: "listing",
        type: "tuple",
      },
    ],
    name: "update",
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
  "0x608060405234801561001057600080fd5b50604051610f66380380610f6683398101604081905261002f916100bc565b806100393361006c565b6000805460ff60a01b19169055600380546001600160a01b0319166001600160a01b0392909216919091179055506100ec565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ce57600080fd5b81516001600160a01b03811681146100e557600080fd5b9392505050565b610e6b806100fb6000396000f3fe60806040526004361061010d5760003560e01c8063715018a6116100a557806397dffc6111610074578063ebcca70711610059578063ebcca70714610322578063f2fde38b14610337578063fe1c9a241461035757600080fd5b806397dffc61146102ec578063db0881a1146102f457600080fd5b8063715018a61461027757806387ed92d71461028c57806388700d1c146102a15780638da5cb5b146102ce57600080fd5b806332cadf3c116100e157806332cadf3c146102005780633ccfd60b1461022257806359edbe711461023757806366c5492c1461025757600080fd5b806207df301461011257806312065fe0146101945780632904df29146101b75780632bea10fe146101de575b600080fd5b34801561011e57600080fd5b5061017961012d366004610b67565b6001602081815260009384526040808520909152918352912080549181015460028201546003830154600490930154919290916001600160a01b03821691600160a01b900460ff169086565b60405161018b96959493929190610bbb565b60405180910390f35b3480156101a057600080fd5b506101a9610377565b60405190815260200161018b565b3480156101c357600080fd5b50335b6040516001600160a01b03909116815260200161018b565b3480156101ea57600080fd5b506101fe6101f9366004610c0c565b6103fd565b005b34801561020c57600080fd5b506102156104bd565b60405161018b9190610cc4565b34801561022e57600080fd5b506101fe6104fc565b34801561024357600080fd5b506101fe610252366004610b67565b610642565b34801561026357600080fd5b506101a9610272366004610d12565b6106a7565b34801561028357600080fd5b506101fe6107f9565b34801561029857600080fd5b506002546101a9565b3480156102ad57600080fd5b506102c16102bc366004610b67565b61080d565b60405161018b9190610d60565b3480156102da57600080fd5b506000546001600160a01b03166101c6565b6101fe6108b5565b34801561030057600080fd5b5060005461031590600160a01b900460ff1681565b60405161018b9190610db4565b34801561032e57600080fd5b506101fe6109ac565b34801561034357600080fd5b506101fe610352366004610dce565b6109b4565b34801561036357600080fd5b506101fe610372366004610dce565b610a38565b60035460405163f8b2cb4f60e01b8152336004820152600091829182916001600160a01b03169063f8b2cb4f906024016040805180830381865afa1580156103c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e79190610df0565b90925090506103f68183610e14565b9250505090565b6001600160a01b038083166000908152600160208181526040808420865185528252928390208551815590850151918101919091559083015160028201556060830151600380830180549290941673ffffffffffffffffffffffffffffffffffffffff19831681178555608086015186959093909274ffffffffffffffffffffffffffffffffffffffffff1990911690911790600160a01b9084908111156104a7576104a7610b91565b021790555060a082015181600401559050505050565b60606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092949350505050565b60035460405163f8b2cb4f60e01b815233600482015260009182916001600160a01b039091169063f8b2cb4f906024016040805180830381865afa158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190610df0565b6003546040517ef714ce000000000000000000000000000000000000000000000000000000008152600481018490523360248201529294509092506001600160a01b03169062f714ce90604401600060405180830381600087803b1580156105d357600080fd5b505af11580156105e7573d6000803e3d6000fd5b503392507f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb91506000905061061c8486610e14565b604080516001600160a01b03909316835260208301919091520160405180910390a25050565b61064a610a44565b6001600160a01b0390911660009081526001602081815260408084209484529390529181208181559182018190556002820181905560038201805474ffffffffffffffffffffffffffffffffffffffffff19169055600490910155565b60006106b1610a44565b600060025460016106c29190610e14565b90506040518060c00160405280828152602001888152602001878152602001866001600160a01b0316815260200185600381111561070257610702610b91565b815260209081018590526001600160a01b0380881660009081526001808452604080832087845285529182902085518155938501519084015583015160028301556060830151600380840180549290931673ffffffffffffffffffffffffffffffffffffffff198316811784556080860151939274ffffffffffffffffffffffffffffffffffffffffff19161790600160a01b9084908111156107a7576107a7610b91565b021790555060a0919091015160049091015560405181906001600160a01b038716907ff060b874355dd22d0bc251d61fca3b6d902778149a3048748276c9ee78ead56c90600090a39695505050505050565b610801610a44565b61080b6000610a9e565b565b610815610afb565b6001600160a01b038381166000908152600160208181526040808420878552825292839020835160c081018552815481529281015491830191909152600281015492820192909252600380830154938416606083015290926080840191600160a01b90910460ff169081111561088d5761088d610b91565b600381111561089e5761089e610b91565b815260200160048201548152505090505b92915050565b346000036108f6576040517f3728b83d0000000000000000000000000000000000000000000000000000000081523460048201526024015b60405180910390fd5b6003546040517ff340fa010000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b039091169063f340fa019034906024016000604051808303818588803b15801561095557600080fd5b505af1158015610969573d6000803e3d6000fd5b505060408051600081523460208201523394507f11dd72a5d477527ee1cbe309212bb368745a98cf1dc3befcac7eef4988a957c2935001905060405180910390a2565b61080b610a44565b6109bc610a44565b6001600160a01b038116610a385760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016108ed565b610a4181610a9e565b50565b6000546001600160a01b0316331461080b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ed565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518060c0016040528060008152602001600081526020016000815260200160006001600160a01b0316815260200160006003811115610b3e57610b3e610b91565b8152602001600081525090565b80356001600160a01b0381168114610b6257600080fd5b919050565b60008060408385031215610b7a57600080fd5b610b8383610b4b565b946020939093013593505050565b634e487b7160e01b600052602160045260246000fd5b60048110610bb757610bb7610b91565b9052565b86815260208101869052604081018590526001600160a01b038416606082015260c08101610bec6080830185610ba7565b8260a0830152979650505050505050565b803560048110610b6257600080fd5b60008082840360e0811215610c2057600080fd5b610c2984610b4b565b925060c0601f1982011215610c3d57600080fd5b5060405160c0810181811067ffffffffffffffff82111715610c6f57634e487b7160e01b600052604160045260246000fd5b8060405250602084013581526040840135602082015260608401356040820152610c9b60808501610b4b565b6060820152610cac60a08501610bfd565b608082015260c0939093013560a08401525092909150565b600060208083528351808285015260005b81811015610cf157858101830151858201604001528201610cd5565b506000604082860101526040601f19601f8301168501019250505092915050565b600080600080600060a08688031215610d2a57600080fd5b8535945060208601359350610d4160408701610b4b565b9250610d4f60608701610bfd565b949793965091946080013592915050565b600060c0820190508251825260208301516020830152604083015160408301526001600160a01b0360608401511660608301526080830151610da56080840182610ba7565b5060a092830151919092015290565b6020810160028310610dc857610dc8610b91565b91905290565b600060208284031215610de057600080fd5b610de982610b4b565b9392505050565b60008060408385031215610e0357600080fd5b505080516020909101519092909150565b808201808211156108af57634e487b7160e01b600052601160045260246000fdfea264697066735822122073dd9e6412f606a2385ffb8e4c2cfe653171ca1251d05c91894260fa706d0a7964736f6c63430008100033";

type $DummyLendingServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: $DummyLendingServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class $DummyLendingService__factory extends ContractFactory {
  constructor(...args: $DummyLendingServiceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    acme: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<$DummyLendingService> {
    return super.deploy(acme, overrides || {}) as Promise<$DummyLendingService>;
  }
  override getDeployTransaction(
    acme: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(acme, overrides || {});
  }
  override attach(address: string): $DummyLendingService {
    return super.attach(address) as $DummyLendingService;
  }
  override connect(signer: Signer): $DummyLendingService__factory {
    return super.connect(signer) as $DummyLendingService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): $DummyLendingServiceInterface {
    return new utils.Interface(_abi) as $DummyLendingServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): $DummyLendingService {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as $DummyLendingService;
  }
}
