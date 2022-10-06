/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  $ACME,
  $ACMEInterface,
} from "../../../../contracts-exposed/mocks/ACME.sol/$ACME";

const _abi = [
  {
    inputs: [],
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
    name: "$_checkOwner",
    outputs: [],
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
        name: "depositor",
        type: "address",
      },
    ],
    name: "$_deposit",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "$_getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "$_getDebtBalance",
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
      {
        internalType: "address",
        name: "loaner",
        type: "address",
      },
    ],
    name: "$_loan",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "$_repay",
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
    name: "$_transferOwnership",
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
    name: "$_withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
  "0x60806040526000600355600a60045569043c33c193756480000060055534801561002857600080fd5b5061003233610037565b610087565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611454806100966000396000f3fe6080604052600436106101af5760003560e01c8063715018a6116100ec578063b507a6fa1161008a578063f2fde38b11610064578063f2fde38b1461045c578063f340fa011461047c578063f8b2cb4f146103c9578063fe1c9a241461048f57600080fd5b8063b507a6fa1461027f578063d0e30db01461043f578063ebcca7071461044757600080fd5b80639abf8c82116100c65780639abf8c82146103c9578063a18de6e7146103e9578063ae95b18c14610409578063b13f0de8146103e957600080fd5b8063715018a6146103965780637d4da6a1146103365780638da5cb5b146103ab57600080fd5b80632904df29116101595780633fb1bf3e116101335780633fb1bf3e1461030857806358bd5c20146103365780635b1ae19f146103565780635ceae9c41461037657600080fd5b80632904df291461029f5780632e1a7d4d146102c657806332cadf3c146102e657600080fd5b8063185cc7511161018a578063185cc7511461025f57806318ab7795146101ee5780631edd0c6c1461027f57600080fd5b8062f714ce146101ee57806312065fe01461021057806313b39b2b1461023f57600080fd5b366101e9576040513481527f9791a64fa61eb6f0c230c12172500c57b83375e4e802f24b709dd09afc30ab459060200160405180910390a1005b600080fd5b3480156101fa57600080fd5b5061020e6102093660046111db565b6104af565b005b34801561021c57600080fd5b506102256104bd565b604080519283526020830191909152015b60405180910390f35b34801561024b57600080fd5b5061020e61025a3660046111db565b6104d1565b34801561026b57600080fd5b5061020e61027a366004611207565b6104db565b34801561028b57600080fd5b5061020e61029a366004611231565b6104e6565b3480156102ab57600080fd5b50335b6040516001600160a01b039091168152602001610236565b3480156102d257600080fd5b5061020e6102e136600461127e565b6104f8565b3480156102f257600080fd5b506102fb610505565b6040516102369190611297565b34801561031457600080fd5b506103286103233660046112e5565b610544565b604051908152602001610236565b34801561034257600080fd5b50610328610351366004611300565b61056f565b34801561036257600080fd5b5061020e610371366004611207565b61059f565b34801561038257600080fd5b5061020e61039136600461132a565b6105ec565b3480156103a257600080fd5b5061020e6105fd565b3480156103b757600080fd5b506000546001600160a01b03166102ae565b3480156103d557600080fd5b506102256103e43660046112e5565b610611565b3480156103f557600080fd5b5061020e61040436600461132a565b610626565b34801561041557600080fd5b506103286104243660046112e5565b6001600160a01b031660009081526006602052604090205490565b61020e610631565b34801561045357600080fd5b5061020e61063b565b34801561046857600080fd5b5061020e6104773660046112e5565b610643565b61020e61048a3660046112e5565b6106d0565b34801561049b57600080fd5b5061020e6104aa3660046112e5565b6106c7565b6104b982826106da565b5050565b6000806104c9336109ab565b915091509091565b6104b982826109db565b6104b9828233610ad2565b6104f284848484610e78565b50505050565b61050281336106da565b50565b60606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092949350505050565b3360009081526002602090815260408083206001600160a01b03851684529091528120545b92915050565b6001600160a01b0380821660009081526002602090815260408083209386168352929052908120545b9392505050565b6105a761105d565b806000036105d057604051633728b83d60e01b8152600481018290526024015b60405180910390fd5b6001600160a01b03909116600090815260066020526040902055565b6105f883833384610e78565b505050565b61060561105d565b61060f60006110b7565b565b60008061061d836109ab565b91509150915091565b6105f8838383610ad2565b61060f34336109db565b61060f61105d565b61064b61105d565b6001600160a01b0381166106c75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105c7565b610502816110b7565b61050234826109db565b6001600160a01b038116600090815260016020908152604080832083805290915290206002015460ff16156107775760405162461bcd60e51b815260206004820152602160248201527f62616c616e636520636f6d70726f6d6973656420617320636f6c6c617465726160448201527f6c0000000000000000000000000000000000000000000000000000000000000060648201526084016105c7565b6001600160a01b038116600090815260016020908152604080832083805290915290205415806107c957506001600160a01b038116600090815260016020908152604080832083805290915290205482115b15610803576040517f74e0caad000000000000000000000000000000000000000000000000000000008152600481018390526024016105c7565b600061081082600061111f565b6001600160a01b038316600090815260016020908152604080832083805290915281208054929350859290919061084890849061137c565b90915550506001600160a01b038216600090815260016020908152604080832083805290915281205490036108b0576001600160a01b0382166000908152600160208181526040808420848052909152822082815590810191909155600201805460ff191690555b60006108bc828561138f565b90506000836001600160a01b03168260405160006040518083038185875af1925050503d806000811461090b576040519150601f19603f3d011682016040523d82523d6000602084013e610910565b606091505b50509050806109615760405162461bcd60e51b815260206004820152601460248201527f6661696c656420746f2073656e642076616c756500000000000000000000000060448201526064016105c7565b836001600160a01b03167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243648360405161099c91815260200190565b60405180910390a25050505050565b6001600160a01b0381166000908152600160209081526040808320838052909152812054819061061d848361111f565b816000036109ff57604051633728b83d60e01b8152600481018390526024016105c7565b6001600160a01b038116600090815260016020908152604080832083805290915281208054849290610a3290849061138f565b90915550506001600160a01b0381166000908152600160208181526040808420848052909152822001549003610a8b576001600160a01b0381166000908152600160208181526040808420848052909152909120439101555b806001600160a01b03167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c83604051610ac691815260200190565b60405180910390a25050565b6001600160a01b03808416600090815260066020908152604080832054938516835260018252808320838052909152812054600554909190670de0b6b3a764000090610b1e90846113a2565b610b2891906113c1565b90506000670de0b6b3a7640000610b3f85846113a2565b610b4991906113c1565b905085811015610b88576040517fcebe8531000000000000000000000000000000000000000000000000000000008152600481018490526024016105c7565b6040516370a0823160e01b81523060048201526000906001600160a01b038916906370a0823190602401602060405180830381865afa158015610bcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf391906113e3565b6040516370a0823160e01b815230600482015290915087906001600160a01b038a16906370a0823190602401602060405180830381865afa158015610c3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6091906113e3565b1015610c9b576040517f73f6709e000000000000000000000000000000000000000000000000000000008152600481018290526024016105c7565b6001806000886001600160a01b03166001600160a01b031681526020019081526020016000206000806001600160a01b03166001600160a01b0316815260200190815260200160002060020160006101000a81548160ff02191690831515021790555060405180606001604052808881526020014381526020016000151581525060026000886001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b03168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548160ff021916908315150217905550905050876001600160a01b031663a9059cbb87896040518363ffffffff1660e01b8152600401610ddd9291906001600160a01b03929092168252602082015260400190565b6020604051808303816000875af1158015610dfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2091906113fc565b50876001600160a01b0316866001600160a01b03167f32f89fab0f3ca5edd25e16d06957892ea56c07dc347227088d3f98a6cbf220bc89604051610e6691815260200190565b60405180910390a35050505050505050565b6001600160a01b0380821660009081526002602090815260408083209388168352929052205480841115610edb576040517ff7aec3b3000000000000000000000000000000000000000000000000000000008152600481018290526024016105c7565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152306024830152604482018690528616906323b872dd906064016020604051808303816000875af1158015610f49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6d91906113fc565b506001600160a01b03808316600090815260026020908152604080832093891683529290529081208054869290610fa590849061137c565b90915550506001600160a01b0380831660009081526002602090815260408083209389168352929052908120549003611009576001600160a01b038083166000908152600260208181526040808420948a16845293905291902001805460ff191690555b846001600160a01b0316826001600160a01b03167f208928674d844f1873d826482474b6f0e021e4592c0384574f00e016d90d979b8660405161104e91815260200190565b60405180910390a35050505050565b6000546001600160a01b0316331461060f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105c7565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03808316600090815260016020818152604080842094861684529390529181209091015480820361115b576000915050610569565b6000611167824361137c565b6004546001600160a01b038088166000908152600160209081526040808320938a1683529290522054919250612710916111a29084906113a2565b6111ac91906113a2565b6111b691906113c1565b95945050505050565b80356001600160a01b03811681146111d657600080fd5b919050565b600080604083850312156111ee57600080fd5b823591506111fe602084016111bf565b90509250929050565b6000806040838503121561121a57600080fd5b611223836111bf565b946020939093013593505050565b6000806000806080858703121561124757600080fd5b611250856111bf565b935060208501359250611265604086016111bf565b9150611273606086016111bf565b905092959194509250565b60006020828403121561129057600080fd5b5035919050565b600060208083528351808285015260005b818110156112c4578581018301518582016040015282016112a8565b506000604082860101526040601f19601f8301168501019250505092915050565b6000602082840312156112f757600080fd5b610598826111bf565b6000806040838503121561131357600080fd5b61131c836111bf565b91506111fe602084016111bf565b60008060006060848603121561133f57600080fd5b611348846111bf565b92506020840135915061135d604085016111bf565b90509250925092565b634e487b7160e01b600052601160045260246000fd5b8181038181111561056957610569611366565b8082018082111561056957610569611366565b60008160001904831182151516156113bc576113bc611366565b500290565b6000826113de57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156113f557600080fd5b5051919050565b60006020828403121561140e57600080fd5b8151801515811461059857600080fdfea26469706673582212206df06c073c5a7df0881ebf29798df157836834e2a00453c2b4a28b1b29923bff64736f6c63430008100033";

type $ACMEConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: $ACMEConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class $ACME__factory extends ContractFactory {
  constructor(...args: $ACMEConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<$ACME> {
    return super.deploy(overrides || {}) as Promise<$ACME>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): $ACME {
    return super.attach(address) as $ACME;
  }
  override connect(signer: Signer): $ACME__factory {
    return super.connect(signer) as $ACME__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): $ACMEInterface {
    return new utils.Interface(_abi) as $ACMEInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): $ACME {
    return new Contract(address, _abi, signerOrProvider) as $ACME;
  }
}
