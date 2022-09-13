/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  $Authorization,
  $AuthorizationInterface,
} from "../../../../contracts-exposed/Authorization/Authorization.sol/$Authorization";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "NotAuthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "$_checkRole",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "$_checkRole",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "$_grantRole",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "$_revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "adminRole",
        type: "bytes32",
      },
    ],
    name: "$_setRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "$_setupRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "addOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceProvider",
        type: "address",
      },
    ],
    name: "addServiceProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletProvider",
        type: "address",
      },
    ],
    name: "addWalletProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceProvider",
        type: "address",
      },
    ],
    name: "isServiceProvider",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletProvider",
        type: "address",
      },
    ],
    name: "isWalletProvider",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610029600080516020610e99833981519152806100b6565b6100617fa1f2d112eefb18f5b33379751750fac0d2da5a6b1194a2557ed2885eb6269d59600080516020610e998339815191526100b6565b6100997fb1295e226936bc270b4829acc516f69e4a4f6a5589c7ea15c4ab1eeff4153cc9600080516020610e998339815191526100b6565b6100b1600080516020610e9983398151915233610101565b6101ad565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b61010b828261010f565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661010b576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556101693390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610cdd806101bc6000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806336568abe116100d857806391d148541161008c578063a217fddf11610066578063a217fddf14610328578063d547741f14610330578063d7bdcee91461034357600080fd5b806391d14854146102cb5780639263e81e1461030257806398dd54c11461031557600080fd5b80634286d2f1116100bd5780634286d2f11461029257806363656134146102a55780637065cb48146102b857600080fd5b806336568abe1461026c57806341b45f711461027f57600080fd5b80632904df291161012f5780632f2ff15d116101145780632f2ff15d146102315780632f54bf6e1461024457806332cadf3c1461025757600080fd5b80632904df29146102105780632d152f1f1461021e57600080fd5b80631dee28f7116101605780631dee28f7146101b9578063248a9ca3146101cc578063270db874146101fd57600080fd5b806301ffc9a71461017c578063075d7a6f146101a4575b600080fd5b61018f61018a366004610a58565b610356565b60405190151581526020015b60405180910390f35b6101b76101b2366004610ab6565b6103ef565b005b61018f6101c7366004610ab6565b61041c565b6101ef6101da366004610ad1565b60009081526020819052604090206001015490565b60405190815260200161019b565b6101b761020b366004610aea565b61045c565b60405133815260200161019b565b61018f61022c366004610ab6565b61046a565b6101b761023f366004610aea565b6104aa565b61018f610252366004610ab6565b6104d4565b61025f610514565b60405161019b9190610b66565b6101b761027a366004610aea565b610553565b6101b761028d366004610aea565b6105e0565b6101b76102a0366004610aea565b6105d6565b6101b76102b3366004610ab6565b6105ea565b6101b76102c6366004610ab6565b610614565b61018f6102d9366004610aea565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6101b7610310366004610aea565b61063e565b6101b7610323366004610ad1565b610648565b6101ef600081565b6101b761033e366004610aea565b610651565b6101b7610351366004610b79565b610676565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806103e957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6104197fb1295e226936bc270b4829acc516f69e4a4f6a5589c7ea15c4ab1eeff4153cc9826104aa565b50565b6001600160a01b03811660009081527f2044b70a0ccad9ae4e59b9438fa9f97669ab5345674d8b7787dfc98d83f970d2602052604081205460ff166103e9565b6104668282610680565b5050565b6001600160a01b03811660009081527feb80d6f0f2f0bd275d79b90845b346021047bdc8ff0b6e74da57905e7b8c48db602052604081205460ff166103e9565b6000828152602081905260409020600101546104c58161071e565b6104cf8383610680565b505050565b6001600160a01b03811660009081527f1299b6a38f4cd1a4aadffdac39262d30244a01098753e138ed68abcfd87ee481602052604081205460ff166103e9565b60606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092949350505050565b6001600160a01b03811633146105d65760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6104668282610728565b61046682826107a7565b6104197fa1f2d112eefb18f5b33379751750fac0d2da5a6b1194a2557ed2885eb6269d59826104aa565b6104197f6270edb7c868f86fda4adedba75108201087268ea345934db8bad688e1feb91b826104aa565b610466828261045c565b6104198161071e565b60008281526020819052604090206001015461066c8161071e565b6104cf8383610728565b6104668282610825565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610466576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556106da3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61041981336107a7565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610466576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610466576107e3816001600160a01b03166014610870565b6107ee836020610870565b6040516020016107ff929190610b9b565b60408051601f198184030181529082905262461bcd60e51b82526105cd91600401610b66565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6060600061087f836002610c32565b61088a906002610c51565b67ffffffffffffffff8111156108a2576108a2610c64565b6040519080825280601f01601f1916602001820160405280156108cc576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061090357610903610c7a565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061094e5761094e610c7a565b60200101906001600160f81b031916908160001a9053506000610972846002610c32565b61097d906001610c51565b90505b6001811115610a02577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106109be576109be610c7a565b1a60f81b8282815181106109d4576109d4610c7a565b60200101906001600160f81b031916908160001a90535060049490941c936109fb81610c90565b9050610980565b508315610a515760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105cd565b9392505050565b600060208284031215610a6a57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610a5157600080fd5b80356001600160a01b0381168114610ab157600080fd5b919050565b600060208284031215610ac857600080fd5b610a5182610a9a565b600060208284031215610ae357600080fd5b5035919050565b60008060408385031215610afd57600080fd5b82359150610b0d60208401610a9a565b90509250929050565b60005b83811015610b31578181015183820152602001610b19565b50506000910152565b60008151808452610b52816020860160208601610b16565b601f01601f19169290920160200192915050565b602081526000610a516020830184610b3a565b60008060408385031215610b8c57600080fd5b50508035926020909101359150565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610bd3816017850160208801610b16565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351610c10816028840160208801610b16565b01602801949350505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610c4c57610c4c610c1c565b500290565b808201808211156103e9576103e9610c1c565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610c9f57610c9f610c1c565b50600019019056fea264697066735822122076cec22b63d7ef39a8e62d827a36fdf31dba6766877022c939f0618d3241425864736f6c634300081000336270edb7c868f86fda4adedba75108201087268ea345934db8bad688e1feb91b";

type $AuthorizationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: $AuthorizationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class $Authorization__factory extends ContractFactory {
  constructor(...args: $AuthorizationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<$Authorization> {
    return super.deploy(overrides || {}) as Promise<$Authorization>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): $Authorization {
    return super.attach(address) as $Authorization;
  }
  override connect(signer: Signer): $Authorization__factory {
    return super.connect(signer) as $Authorization__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): $AuthorizationInterface {
    return new utils.Interface(_abi) as $AuthorizationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): $Authorization {
    return new Contract(address, _abi, signerOrProvider) as $Authorization;
  }
}
