/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Authorization,
  AuthorizationInterface,
} from "../../../contracts/Authorization/Authorization";

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
  "0x608060405234801561001057600080fd5b50610029600080516020610c83833981519152806100b6565b6100617fa1f2d112eefb18f5b33379751750fac0d2da5a6b1194a2557ed2885eb6269d59600080516020610c838339815191526100b6565b6100997fb1295e226936bc270b4829acc516f69e4a4f6a5589c7ea15c4ab1eeff4153cc9600080516020610c838339815191526100b6565b6100b1600080516020610c8383398151915233610101565b6101ad565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b61010b828261010f565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661010b576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556101693390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610ac7806101bc6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80632f54bf6e1161008c5780637065cb48116100665780637065cb48146101c457806391d14854146101d7578063a217fddf1461020e578063d547741f1461021657600080fd5b80632f54bf6e1461018b57806336568abe1461019e57806363656134146101b157600080fd5b8063248a9ca3116100bd578063248a9ca3146101345780632d152f1f146101655780632f2ff15d1461017857600080fd5b806301ffc9a7146100e4578063075d7a6f1461010c5780631dee28f714610121575b600080fd5b6100f76100f2366004610870565b610229565b60405190151581526020015b60405180910390f35b61011f61011a3660046108ce565b6102c2565b005b6100f761012f3660046108ce565b6102ef565b6101576101423660046108e9565b60009081526020819052604090206001015490565b604051908152602001610103565b6100f76101733660046108ce565b61032f565b61011f610186366004610902565b61036f565b6100f76101993660046108ce565b610399565b61011f6101ac366004610902565b6103d9565b61011f6101bf3660046108ce565b61046a565b61011f6101d23660046108ce565b610494565b6100f76101e5366004610902565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610157600081565b61011f610224366004610902565b6104be565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806102bc57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6102ec7fb1295e226936bc270b4829acc516f69e4a4f6a5589c7ea15c4ab1eeff4153cc98261036f565b50565b6001600160a01b03811660009081527f2044b70a0ccad9ae4e59b9438fa9f97669ab5345674d8b7787dfc98d83f970d2602052604081205460ff166102bc565b6001600160a01b03811660009081527feb80d6f0f2f0bd275d79b90845b346021047bdc8ff0b6e74da57905e7b8c48db602052604081205460ff166102bc565b60008281526020819052604090206001015461038a816104e3565b61039483836104ed565b505050565b6001600160a01b03811660009081527f1299b6a38f4cd1a4aadffdac39262d30244a01098753e138ed68abcfd87ee481602052604081205460ff166102bc565b6001600160a01b038116331461045c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b610466828261058b565b5050565b6102ec7fa1f2d112eefb18f5b33379751750fac0d2da5a6b1194a2557ed2885eb6269d598261036f565b6102ec7f6270edb7c868f86fda4adedba75108201087268ea345934db8bad688e1feb91b8261036f565b6000828152602081905260409020600101546104d9816104e3565b610394838361058b565b6102ec813361060a565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610466576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556105473390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610466576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661046657610646816001600160a01b03166014610688565b610651836020610688565b604051602001610662929190610952565b60408051601f198184030181529082905262461bcd60e51b8252610453916004016109d3565b60606000610697836002610a1c565b6106a2906002610a3b565b67ffffffffffffffff8111156106ba576106ba610a4e565b6040519080825280601f01601f1916602001820160405280156106e4576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061071b5761071b610a64565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061076657610766610a64565b60200101906001600160f81b031916908160001a905350600061078a846002610a1c565b610795906001610a3b565b90505b600181111561081a577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106107d6576107d6610a64565b1a60f81b8282815181106107ec576107ec610a64565b60200101906001600160f81b031916908160001a90535060049490941c9361081381610a7a565b9050610798565b5083156108695760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610453565b9392505050565b60006020828403121561088257600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461086957600080fd5b80356001600160a01b03811681146108c957600080fd5b919050565b6000602082840312156108e057600080fd5b610869826108b2565b6000602082840312156108fb57600080fd5b5035919050565b6000806040838503121561091557600080fd5b82359150610925602084016108b2565b90509250929050565b60005b83811015610949578181015183820152602001610931565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161098a81601785016020880161092e565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516109c781602884016020880161092e565b01602801949350505050565b60208152600082518060208401526109f281604085016020870161092e565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610a3657610a36610a06565b500290565b808201808211156102bc576102bc610a06565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610a8957610a89610a06565b50600019019056fea26469706673582212208ac6dc75905c2796444eb3691cfcd2446bac636662b089b3a064d2afca4acbc864736f6c634300081000336270edb7c868f86fda4adedba75108201087268ea345934db8bad688e1feb91b";

type AuthorizationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AuthorizationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Authorization__factory extends ContractFactory {
  constructor(...args: AuthorizationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Authorization> {
    return super.deploy(overrides || {}) as Promise<Authorization>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Authorization {
    return super.attach(address) as Authorization;
  }
  override connect(signer: Signer): Authorization__factory {
    return super.connect(signer) as Authorization__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuthorizationInterface {
    return new utils.Interface(_abi) as AuthorizationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Authorization {
    return new Contract(address, _abi, signerOrProvider) as Authorization;
  }
}