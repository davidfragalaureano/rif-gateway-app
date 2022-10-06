/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ACME, ACMEInterface } from "../../../contracts/mocks/ACME";

const _abi = [
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
    ],
    name: "NotEnoughBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "NotEnoughCollateral",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "docBalance",
        type: "uint256",
      },
    ],
    name: "NotEnoughDocBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "debt",
        type: "uint256",
      },
    ],
    name: "PaymentBiggerThanDebt",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "Loan",
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
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ReceivedLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "Repay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "deposited",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interest",
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
        name: "depositor",
        type: "address",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "deposited",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interest",
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
    ],
    name: "getCetCollateralFactor",
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
    ],
    name: "getDebtBalance",
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
        internalType: "address",
        name: "loaner",
        type: "address",
      },
    ],
    name: "getDebtBalance",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "loan",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "loaner",
        type: "address",
      },
    ],
    name: "loan",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        internalType: "address",
        name: "loaner",
        type: "address",
      },
    ],
    name: "repay",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "loaner",
        type: "address",
      },
    ],
    name: "repay",
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
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "factor",
        type: "uint256",
      },
    ],
    name: "updateCollateralFactor",
    outputs: [],
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
        name: "withdrawer",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
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
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526000600355600a60045569043c33c193756480000060055534801561002857600080fd5b5061003233610037565b610087565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611283806100966000396000f3fe6080604052600436106101115760003560e01c80635ceae9c4116100a5578063b13f0de811610074578063f2fde38b11610059578063f2fde38b1461032a578063f340fa011461034a578063f8b2cb4f1461035d57600080fd5b8063b13f0de814610302578063d0e30db01461032257600080fd5b80635ceae9c41461026f578063715018a61461028f5780638da5cb5b146102a4578063ae95b18c146102cc57600080fd5b80632e1a7d4d116100e15780632e1a7d4d146101e15780633fb1bf3e1461020157806358bd5c201461022f5780635b1ae19f1461024f57600080fd5b8062f714ce1461015057806312065fe014610172578063185cc751146101a15780631edd0c6c146101c157600080fd5b3661014b576040513481527f9791a64fa61eb6f0c230c12172500c57b83375e4e802f24b709dd09afc30ab459060200160405180910390a1005b600080fd5b34801561015c57600080fd5b5061017061016b366004611058565b61037d565b005b34801561017e57600080fd5b5061018761038b565b604080519283526020830191909152015b60405180910390f35b3480156101ad57600080fd5b506101706101bc366004611084565b61039f565b3480156101cd57600080fd5b506101706101dc3660046110ae565b6103aa565b3480156101ed57600080fd5b506101706101fc3660046110fb565b6103bc565b34801561020d57600080fd5b5061022161021c366004611114565b6103c9565b604051908152602001610198565b34801561023b57600080fd5b5061022161024a36600461112f565b6103f4565b34801561025b57600080fd5b5061017061026a366004611084565b610424565b34801561027b57600080fd5b5061017061028a366004611159565b610471565b34801561029b57600080fd5b50610170610482565b3480156102b057600080fd5b506000546040516001600160a01b039091168152602001610198565b3480156102d857600080fd5b506102216102e7366004611114565b6001600160a01b031660009081526006602052604090205490565b34801561030e57600080fd5b5061017061031d366004611159565b610496565b6101706104a1565b34801561033657600080fd5b50610170610345366004611114565b6104ab565b610170610358366004611114565b610538565b34801561036957600080fd5b50610187610378366004611114565b610542565b6103878282610557565b5050565b60008061039733610828565b915091509091565b610387828233610858565b6103b684848484610bfe565b50505050565b6103c68133610557565b50565b3360009081526002602090815260408083206001600160a01b03851684529091528120545b92915050565b6001600160a01b0380821660009081526002602090815260408083209386168352929052908120545b9392505050565b61042c610de3565b8060000361045557604051633728b83d60e01b8152600481018290526024015b60405180910390fd5b6001600160a01b03909116600090815260066020526040902055565b61047d83833384610bfe565b505050565b61048a610de3565b6104946000610e3d565b565b61047d838383610858565b6104943433610ea5565b6104b3610de3565b6001600160a01b03811661052f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161044c565b6103c681610e3d565b6103c63482610ea5565b60008061054e83610828565b91509150915091565b6001600160a01b038116600090815260016020908152604080832083805290915290206002015460ff16156105f45760405162461bcd60e51b815260206004820152602160248201527f62616c616e636520636f6d70726f6d6973656420617320636f6c6c617465726160448201527f6c00000000000000000000000000000000000000000000000000000000000000606482015260840161044c565b6001600160a01b0381166000908152600160209081526040808320838052909152902054158061064657506001600160a01b038116600090815260016020908152604080832083805290915290205482115b15610680576040517f74e0caad0000000000000000000000000000000000000000000000000000000081526004810183905260240161044c565b600061068d826000610f9c565b6001600160a01b03831660009081526001602090815260408083208380529091528120805492935085929091906106c59084906111ab565b90915550506001600160a01b0382166000908152600160209081526040808320838052909152812054900361072d576001600160a01b0382166000908152600160208181526040808420848052909152822082815590810191909155600201805460ff191690555b600061073982856111be565b90506000836001600160a01b03168260405160006040518083038185875af1925050503d8060008114610788576040519150601f19603f3d011682016040523d82523d6000602084013e61078d565b606091505b50509050806107de5760405162461bcd60e51b815260206004820152601460248201527f6661696c656420746f2073656e642076616c7565000000000000000000000000604482015260640161044c565b836001600160a01b03167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243648360405161081991815260200190565b60405180910390a25050505050565b6001600160a01b0381166000908152600160209081526040808320838052909152812054819061054e8483610f9c565b6001600160a01b03808416600090815260066020908152604080832054938516835260018252808320838052909152812054600554909190670de0b6b3a7640000906108a490846111d1565b6108ae91906111f0565b90506000670de0b6b3a76400006108c585846111d1565b6108cf91906111f0565b90508581101561090e576040517fcebe85310000000000000000000000000000000000000000000000000000000081526004810184905260240161044c565b6040516370a0823160e01b81523060048201526000906001600160a01b038916906370a0823190602401602060405180830381865afa158015610955573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109799190611212565b6040516370a0823160e01b815230600482015290915087906001600160a01b038a16906370a0823190602401602060405180830381865afa1580156109c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e69190611212565b1015610a21576040517f73f6709e0000000000000000000000000000000000000000000000000000000081526004810182905260240161044c565b6001806000886001600160a01b03166001600160a01b031681526020019081526020016000206000806001600160a01b03166001600160a01b0316815260200190815260200160002060020160006101000a81548160ff02191690831515021790555060405180606001604052808881526020014381526020016000151581525060026000886001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b03168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548160ff021916908315150217905550905050876001600160a01b031663a9059cbb87896040518363ffffffff1660e01b8152600401610b639291906001600160a01b03929092168252602082015260400190565b6020604051808303816000875af1158015610b82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba6919061122b565b50876001600160a01b0316866001600160a01b03167f32f89fab0f3ca5edd25e16d06957892ea56c07dc347227088d3f98a6cbf220bc89604051610bec91815260200190565b60405180910390a35050505050505050565b6001600160a01b0380821660009081526002602090815260408083209388168352929052205480841115610c61576040517ff7aec3b30000000000000000000000000000000000000000000000000000000081526004810182905260240161044c565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152306024830152604482018690528616906323b872dd906064016020604051808303816000875af1158015610ccf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf3919061122b565b506001600160a01b03808316600090815260026020908152604080832093891683529290529081208054869290610d2b9084906111ab565b90915550506001600160a01b0380831660009081526002602090815260408083209389168352929052908120549003610d8f576001600160a01b038083166000908152600260208181526040808420948a16845293905291902001805460ff191690555b846001600160a01b0316826001600160a01b03167f208928674d844f1873d826482474b6f0e021e4592c0384574f00e016d90d979b86604051610dd491815260200190565b60405180910390a35050505050565b6000546001600160a01b031633146104945760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044c565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b81600003610ec957604051633728b83d60e01b81526004810183905260240161044c565b6001600160a01b038116600090815260016020908152604080832083805290915281208054849290610efc9084906111be565b90915550506001600160a01b0381166000908152600160208181526040808420848052909152822001549003610f55576001600160a01b0381166000908152600160208181526040808420848052909152909120439101555b806001600160a01b03167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c83604051610f9091815260200190565b60405180910390a25050565b6001600160a01b038083166000908152600160208181526040808420948616845293905291812090910154808203610fd85760009150506103ee565b6000610fe482436111ab565b6004546001600160a01b038088166000908152600160209081526040808320938a16835292905220549192506127109161101f9084906111d1565b61102991906111d1565b61103391906111f0565b95945050505050565b80356001600160a01b038116811461105357600080fd5b919050565b6000806040838503121561106b57600080fd5b8235915061107b6020840161103c565b90509250929050565b6000806040838503121561109757600080fd5b6110a08361103c565b946020939093013593505050565b600080600080608085870312156110c457600080fd5b6110cd8561103c565b9350602085013592506110e26040860161103c565b91506110f06060860161103c565b905092959194509250565b60006020828403121561110d57600080fd5b5035919050565b60006020828403121561112657600080fd5b61041d8261103c565b6000806040838503121561114257600080fd5b61114b8361103c565b915061107b6020840161103c565b60008060006060848603121561116e57600080fd5b6111778461103c565b92506020840135915061118c6040850161103c565b90509250925092565b634e487b7160e01b600052601160045260246000fd5b818103818111156103ee576103ee611195565b808201808211156103ee576103ee611195565b60008160001904831182151516156111eb576111eb611195565b500290565b60008261120d57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561122457600080fd5b5051919050565b60006020828403121561123d57600080fd5b8151801515811461041d57600080fdfea2646970667358221220a7874dd32c26d42dd271d6edc9f88bff2e03936de58b888aaeaea15ddc3fe0e164736f6c63430008100033";

type ACMEConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ACMEConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ACME__factory extends ContractFactory {
  constructor(...args: ACMEConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ACME> {
    return super.deploy(overrides || {}) as Promise<ACME>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ACME {
    return super.attach(address) as ACME;
  }
  override connect(signer: Signer): ACME__factory {
    return super.connect(signer) as ACME__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ACMEInterface {
    return new utils.Interface(_abi) as ACMEInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ACME {
    return new Contract(address, _abi, signerOrProvider) as ACME;
  }
}
