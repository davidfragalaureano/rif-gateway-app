/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  $UserIdentityACL,
  $UserIdentityACLInterface,
} from "../../../../contracts-exposed/userIdentity/UserIdentityACL.sol/$UserIdentityACL";

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
    ],
    name: "CallerNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "arg0",
        type: "address",
      },
      {
        internalType: "address",
        name: "arg1",
        type: "address",
      },
    ],
    name: "$_allowedContractCalls",
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
      {
        internalType: "bool",
        name: "approval",
        type: "bool",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isAllowedToExecuteCallFor",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "isAllowedToExecuteCallFor",
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
  "0x608060405234801561001057600080fd5b5061023a806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630ff51e991461005157806325d4a9be1461009a5780632d1fb389146100ad57806379ee6b52146100f3575b600080fd5b61008661005f36600461017a565b6001600160a01b031660009081526020818152604080832033845290915290205460ff1690565b604051901515815260200160405180910390f35b6100866100a8366004610195565b61012d565b6100f16100bb3660046101c8565b336000908152602081815260408083206001600160a01b0395909516835293905291909120805460ff1916911515919091179055565b005b610086610101366004610195565b6001600160a01b0391821660009081526020818152604080832093909416825291909152205460ff1690565b6001600160a01b0380831660009081526020818152604080832093851683529290529081205460ff165b9392505050565b80356001600160a01b038116811461017557600080fd5b919050565b60006020828403121561018c57600080fd5b6101578261015e565b600080604083850312156101a857600080fd5b6101b18361015e565b91506101bf6020840161015e565b90509250929050565b600080604083850312156101db57600080fd5b6101e48361015e565b9150602083013580151581146101f957600080fd5b80915050925092905056fea264697066735822122031df585d055b54d3a230e7de3bc5bb625458f16f7a87dff786955f4d2dbc6ff964736f6c63430008100033";

type $UserIdentityACLConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: $UserIdentityACLConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class $UserIdentityACL__factory extends ContractFactory {
  constructor(...args: $UserIdentityACLConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<$UserIdentityACL> {
    return super.deploy(overrides || {}) as Promise<$UserIdentityACL>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): $UserIdentityACL {
    return super.attach(address) as $UserIdentityACL;
  }
  override connect(signer: Signer): $UserIdentityACL__factory {
    return super.connect(signer) as $UserIdentityACL__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): $UserIdentityACLInterface {
    return new utils.Interface(_abi) as $UserIdentityACLInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): $UserIdentityACL {
    return new Contract(address, _abi, signerOrProvider) as $UserIdentityACL;
  }
}