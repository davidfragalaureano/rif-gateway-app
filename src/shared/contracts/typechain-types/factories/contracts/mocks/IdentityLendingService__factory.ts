/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  IdentityLendingService,
  IdentityLendingServiceInterface,
} from "../../../contracts/mocks/IdentityLendingService";

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
        internalType: "enum Service.ServiceType",
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
  "0x608060405234801561001057600080fd5b506040516200139c3803806200139c833981016040819052610031916100e0565b61003a33610078565b6000805460ff60a01b19169055600380546001600160a01b039384166001600160a01b0319918216179091556004805492909316911617905561011a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100dd57600080fd5b50565b600080604083850312156100f357600080fd5b82516100fe816100c8565b602084015190925061010f816100c8565b809150509250929050565b611272806200012a6000396000f3fe6080604052600436106100d15760003560e01c8063715018a61161007f57806397dffc611161005957806397dffc611461025c578063cbaa068f14610264578063db0881a114610279578063f2fde38b146102a757600080fd5b8063715018a6146101f257806388700d1c146102075780638da5cb5b1461023457600080fd5b80633ccfd60b116100b05780633ccfd60b1461019d57806359edbe71146101b257806366c5492c146101d257600080fd5b806207df30146100d657806312065fe0146101585780632bea10fe1461017b575b600080fd5b3480156100e257600080fd5b5061013d6100f1366004610e1a565b6001602081815260009384526040808520909152918352912080549181015460028201546003830154600490930154919290916001600160a01b03821691600160a01b900460ff169086565b60405161014f96959493929190610e70565b60405180910390f35b34801561016457600080fd5b5061016d6102c7565b60405190815260200161014f565b34801561018757600080fd5b5061019b610196366004610edc565b610422565b005b3480156101a957600080fd5b5061019b6104e2565b3480156101be57600080fd5b5061019b6101cd366004610e1a565b6107af565b3480156101de57600080fd5b5061016d6101ed366004610f8a565b610828565b3480156101fe57600080fd5b5061019b61098f565b34801561021357600080fd5b50610227610222366004610e1a565b6109a3565b60405161014f9190610fda565b34801561024057600080fd5b506000546040516001600160a01b03909116815260200161014f565b61019b610a4b565b34801561027057600080fd5b5060025461016d565b34801561028557600080fd5b5060005461029a90600160a01b900460ff1681565b60405161014f919061102e565b3480156102b357600080fd5b5061019b6102c2366004611048565b610c6e565b60048054604051632fea7b8160e01b8152339281019290925260009182916001600160a01b031690632fea7b8190602401602060405180830381865afa158015610315573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610339919061106c565b90506001600160a01b03811661035157600091505090565b6003546040805160048082526024820183526020820180516001600160e01b0316629032ff60e51b179052915163d79f44eb60e01b81526000936001600160a01b038087169463d79f44eb946103ac949390921692016110ad565b600060405180830381865afa1580156103c9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103f191908101906110f0565b90506000808280602001905181019061040a919061119d565b909250905061041981836111d7565b94505050505090565b6001600160a01b038083166000908152600160208181526040808420865185528252928390208551815590850151918101919091559083015160028201556060830151600380830180549290941673ffffffffffffffffffffffffffffffffffffffff19831681178555608086015186959093909274ffffffffffffffffffffffffffffffffffffffffff1990911690911790600160a01b9084908111156104cc576104cc610e46565b021790555060a082015181600401559050505050565b600480546040516316caac1b60e21b815233928101929092526001600160a01b031690635b2ab06c90602401600060405180830381600087803b15801561052857600080fd5b505af115801561053c573d6000803e3d6000fd5b505060048054604051632fea7b8160e01b81523392810192909252600093506001600160a01b03169150632fea7b8190602401602060405180830381865afa15801561058c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b0919061106c565b6003546040805160048082526024820183526020820180516001600160e01b0316629032ff60e51b179052915163d79f44eb60e01b81529394506000936001600160a01b038087169463d79f44eb946106109491909216929091016110ad565b600060405180830381865afa15801561062d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261065591908101906110f0565b90506000808280602001905181019061066e919061119d565b600354604051602481018490529294509092506001600160a01b038087169263621091c2929091169060440160408051601f198184030181529181526020820180516001600160e01b03167f2e1a7d4d000000000000000000000000000000000000000000000000000000001790525160e084901b7fffffffff000000000000000000000000000000000000000000000000000000001681526107159291906004016110ad565b6020604051808303816000875af1158015610734573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075891906111ea565b50337f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb600061078784866111d7565b604080516001600160a01b03909316835260208301919091520160405180910390a250505050565b6107b7610cfe565b6001600160a01b03821660009081526001602081815260408084208585529091528220828155908101829055600280820183905560038201805474ffffffffffffffffffffffffffffffffffffffffff19169055600490910182905580549161081f8361120c565b91905055505050565b6000610832610cfe565b6000600254600161084391906111d7565b90506040518060c00160405280828152602001888152602001878152602001866001600160a01b0316815260200185600381111561088357610883610e46565b815260209081018590526001600160a01b0380881660009081526001808452604080832087845285529182902085518155938501519084015583015160028301556060830151600380840180549290931673ffffffffffffffffffffffffffffffffffffffff198316811784556080860151939274ffffffffffffffffffffffffffffffffffffffffff19161790600160a01b90849081111561092857610928610e46565b021790555060a091909101516004909101556002805490600061094a83611223565b909155505060405181906001600160a01b038716907ff060b874355dd22d0bc251d61fca3b6d902778149a3048748276c9ee78ead56c90600090a39695505050505050565b610997610cfe565b6109a16000610d58565b565b6109ab610db5565b6001600160a01b038381166000908152600160208181526040808420878552825292839020835160c081018552815481529281015491830191909152600281015492820192909252600380830154938416606083015290926080840191600160a01b90910460ff1690811115610a2357610a23610e46565b6003811115610a3457610a34610e46565b815260200160048201548152505090505b92915050565b34600003610a8c576040517f3728b83d0000000000000000000000000000000000000000000000000000000081523460048201526024015b60405180910390fd5b600480546040516316caac1b60e21b815233928101929092526001600160a01b031690635b2ab06c90602401600060405180830381600087803b158015610ad257600080fd5b505af1158015610ae6573d6000803e3d6000fd5b505060048054604051632fea7b8160e01b81523392810192909252600093506001600160a01b03169150632fea7b8190602401602060405180830381865afa158015610b36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5a919061106c565b6003546040805160048082526024820183526020820180516001600160e01b03167fd0e30db00000000000000000000000000000000000000000000000000000000017905291517fc89acc860000000000000000000000000000000000000000000000000000000081529394506001600160a01b038086169463c89acc86943494610bec9491909316929091016110ad565b60206040518083038185885af1158015610c0a573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610c2f91906111ea565b50604080516000815234602082015233917f11dd72a5d477527ee1cbe309212bb368745a98cf1dc3befcac7eef4988a957c2910160405180910390a250565b610c76610cfe565b6001600160a01b038116610cf25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610a83565b610cfb81610d58565b50565b6000546001600160a01b031633146109a15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a83565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518060c0016040528060008152602001600081526020016000815260200160006001600160a01b0316815260200160006003811115610df857610df8610e46565b8152602001600081525090565b6001600160a01b0381168114610cfb57600080fd5b60008060408385031215610e2d57600080fd5b8235610e3881610e05565b946020939093013593505050565b634e487b7160e01b600052602160045260246000fd5b60048110610e6c57610e6c610e46565b9052565b86815260208101869052604081018590526001600160a01b038416606082015260c08101610ea16080830185610e5c565b8260a0830152979650505050505050565b634e487b7160e01b600052604160045260246000fd5b803560048110610ed757600080fd5b919050565b60008082840360e0811215610ef057600080fd5b8335610efb81610e05565b925060c0601f1982011215610f0f57600080fd5b5060405160c0810181811067ffffffffffffffff82111715610f3357610f33610eb2565b80604052506020840135815260408401356020820152606084013560408201526080840135610f6181610e05565b6060820152610f7260a08501610ec8565b608082015260c0939093013560a08401525092909150565b600080600080600060a08688031215610fa257600080fd5b85359450602086013593506040860135610fbb81610e05565b9250610fc960608701610ec8565b949793965091946080013592915050565b600060c0820190508251825260208301516020830152604083015160408301526001600160a01b036060840151166060830152608083015161101f6080840182610e5c565b5060a092830151919092015290565b602081016002831061104257611042610e46565b91905290565b60006020828403121561105a57600080fd5b813561106581610e05565b9392505050565b60006020828403121561107e57600080fd5b815161106581610e05565b60005b838110156110a457818101518382015260200161108c565b50506000910152565b6001600160a01b038316815260406020820152600082518060408401526110db816060850160208701611089565b601f01601f1916919091016060019392505050565b60006020828403121561110257600080fd5b815167ffffffffffffffff8082111561111a57600080fd5b818401915084601f83011261112e57600080fd5b81518181111561114057611140610eb2565b604051601f8201601f19908116603f0116810190838211818310171561116857611168610eb2565b8160405282815287602084870101111561118157600080fd5b611192836020830160208801611089565b979650505050505050565b600080604083850312156111b057600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601160045260246000fd5b80820180821115610a4557610a456111c1565b6000602082840312156111fc57600080fd5b8151801515811461106557600080fd5b60008161121b5761121b6111c1565b506000190190565b600060018201611235576112356111c1565b506001019056fea2646970667358221220ee0cdf8dcf72248116cabfc36f7fa5c1a1d545f4e6665d48d5f259c071dd0e7164736f6c63430008100033";

type IdentityLendingServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IdentityLendingServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IdentityLendingService__factory extends ContractFactory {
  constructor(...args: IdentityLendingServiceConstructorParams) {
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
  ): Promise<IdentityLendingService> {
    return super.deploy(
      acmeLending,
      userIdentityFactory,
      overrides || {}
    ) as Promise<IdentityLendingService>;
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
  override attach(address: string): IdentityLendingService {
    return super.attach(address) as IdentityLendingService;
  }
  override connect(signer: Signer): IdentityLendingService__factory {
    return super.connect(signer) as IdentityLendingService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IdentityLendingServiceInterface {
    return new utils.Interface(_abi) as IdentityLendingServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdentityLendingService {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IdentityLendingService;
  }
}
