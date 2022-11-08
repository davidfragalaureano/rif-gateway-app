/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  $SmartWallet,
  $SmartWalletInterface,
} from "../../../../contracts-exposed/smartwallet/SmartWallet.sol/$SmartWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "InvalidBlockForNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "InvalidExecutor",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "InvalidNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "UnexpectedError",
    type: "error",
  },
  {
    inputs: [],
    name: "$_buildDomainSeparator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "DATA_VERSION_HASH",
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
    inputs: [],
    name: "__hh_exposed_bytecode_marker",
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
    inputs: [],
    name: "domainSeparator",
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
        name: "suffixData",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "executor",
            type: "address",
          },
        ],
        internalType: "struct IForwarder.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "ret",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeparator",
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
    inputs: [],
    name: "nonce",
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
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionToCall",
        type: "bytes",
      },
    ],
    name: "read",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "suffixData",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "executor",
            type: "address",
          },
        ],
        internalType: "struct IForwarder.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526e1a185c991a185d0b595e1c1bdcd959608a1b60035534801561002657600080fd5b506040516111e83803806111e88339810160408190526100459161013b565b604080516001600160601b0319606084901b16602080830191909152825180830360140181526034830184528051908201207fa7b53796fd2d99cb1f5ae019b54f9e024446c3d12b483f733ccc62ed04eb126a557f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60548301527f2a973805329fb2d82e9972866bbe40b3d04293e648561113684f54a1665890a360748301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660948301524660b48301523060d4808401919091528351808403909101815260f490920190925280519101206001555061016b565b60006020828403121561014d57600080fd5b81516001600160a01b038116811461016457600080fd5b9392505050565b61106e8061017a6000396000f3fe60806040526004361061009a5760003560e01c8063affed0e011610069578063d79f44eb1161004e578063d79f44eb14610171578063ed24911d1461019e578063f698da251461025457600080fd5b8063affed0e014610127578063b3104ef61461013d57600080fd5b8063342db739146100a65780636d08e1e6146100cf57806377480929146100f157806391633f281461010657600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506100bc60035481565b6040519081526020015b60405180910390f35b3480156100db57600080fd5b506100ef6100ea366004610da9565b61026a565b005b3480156100fd57600080fd5b506100ef6102b1565b610119610114366004610e04565b61035c565b6040516100c6929190610f01565b34801561013357600080fd5b506100bc60005481565b34801561014957600080fd5b506100bc7fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681565b34801561017d57600080fd5b5061019161018c366004610f24565b61058b565b6040516100c69190610f77565b3480156101aa57600080fd5b506100bc60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f2a973805329fb2d82e9972866bbe40b3d04293e648561113684f54a1665890a37fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc646604080516020810195909552840192909252606083015260808201523060a082015260c00160405160208183030381529060405280519060200120905090565b34801561026057600080fd5b506100bc60015481565b6102ab848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061063a92505050565b50505050565b61035a7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f2a973805329fb2d82e9972866bbe40b3d04293e648561113684f54a1665890a37fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc646604080516020810195909552840192909252606083015260808201523060a082015260c00160408051601f198184030181529190528051602090910120600155565b565b600060606103698961080e565b6103aa8a8a8a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061063a92505050565b836001600160a01b03163487876040516103c5929190610f8a565b60006040518083038185875af1925050503d8060008114610402576040519150601f19603f3d011682016040523d82523d6000602084013e610407565b606091505b50909250905047801561044f5789516040516001600160a01b039091169082156108fc029083906000818181858888f1935050505015801561044d573d6000803e3d6000fd5b505b6001600160a01b0384161561057d576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b038616906370a0823190602401602060405180830381865afa1580156104be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e29190610f9a565b9050801561057b578a516040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152602481018390529086169063a9059cbb906044016020604051808303816000875af1158015610555573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105799190610fb3565b505b505b509850989650505050505050565b6060600080856001600160a01b031685856040516105aa929190610f8a565b600060405180830381855afa9150503d80600081146105e5576040519150601f19603f3d011682016040523d82523d6000602084013e6105ea565b606091505b50915091508161063157806040517fd62cfc860000000000000000000000000000000000000000000000000000000081526004016106289190610f77565b60405180910390fd5b95945050505050565b8151604051610664919060200160609190911b6bffffffffffffffffffffffff1916815260140190565b604051602081830303815290604052805190602001206106a27fa7b53796fd2d99cb1f5ae019b54f9e024446c3d12b483f733ccc62ed04eb126a5490565b146106ef5760405162461bcd60e51b815260206004820181905260248201527f4e6f7420746865206f776e6572206f662074686520536d61727457616c6c65746044820152606401610628565b60408201516001600160a01b03163314610737576040517f15daef7b000000000000000000000000000000000000000000000000000000008152336004820152602401610628565b6107bd6107b68260015461074b87876108d7565b80516020918201206040516107929392017f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b6040516020818303038152906040528051906020012061096e90919063ffffffff16565b8351610992565b6108095760405162461bcd60e51b815260206004820152601260248201527f5369676e6174757265206d69736d6174636800000000000000000000000000006044820152606401610628565b505050565b8060200151600054036108365760008054908061082a83610fd5565b90915550504360025550565b806020015160005411801561084d57504360025414155b1561088c5780602001516040517f658389f500000000000000000000000000000000000000000000000000000000815260040161062891815260200190565b806020015160005410156108d45780602001516040517fb1373a6c00000000000000000000000000000000000000000000000000000000815260040161062891815260200190565b50565b60607fde79675bdbc9f19d046d9413d7f1ec5140674e00989c909d978c5705ba49566e826000015183602001518460400151604051602001610939939291906001600160a01b0393841681526020810192909252909116604082015260600190565b60408051601f19818403018152908290526109579291602001610ffc565b604051602081830303815290604052905092915050565b600080600061097d85856109ed565b9150915061098a81610a32565b509392505050565b6000816001600160a01b0316836001600160a01b03161480156109d2575073dcc703c0e500b653ca82273b7bfad8045d85a4706001600160a01b03841614155b80156109e657506001600160a01b03831615155b9392505050565b6000808251604103610a235760208301516040840151606085015160001a610a1787828585610be8565b94509450505050610a2b565b506000905060025b9250929050565b6000816004811115610a4657610a46611022565b03610a4e5750565b6001816004811115610a6257610a62611022565b03610aaf5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610628565b6002816004811115610ac357610ac3611022565b03610b105760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610628565b6003816004811115610b2457610b24611022565b03610b7c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610628565b6004816004811115610b9057610b90611022565b036108d45760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610628565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610c1f5750600090506003610ccc565b8460ff16601b14158015610c3757508460ff16601c14155b15610c485750600090506004610ccc565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610c9c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610cc557600060019250925050610ccc565b9150600090505b94509492505050565b80356001600160a01b0381168114610cec57600080fd5b919050565b600060608284031215610d0357600080fd5b6040516060810181811067ffffffffffffffff82111715610d3457634e487b7160e01b600052604160045260246000fd5b604052905080610d4383610cd5565b815260208301356020820152610d5b60408401610cd5565b60408201525092915050565b60008083601f840112610d7957600080fd5b50813567ffffffffffffffff811115610d9157600080fd5b602083019150836020828501011115610a2b57600080fd5b60008060008060a08587031215610dbf57600080fd5b84359350610dd08660208701610cf1565b9250608085013567ffffffffffffffff811115610dec57600080fd5b610df887828801610d67565b95989497509550505050565b600080600080600080600080610100898b031215610e2157600080fd5b88359750610e328a60208b01610cf1565b9650608089013567ffffffffffffffff80821115610e4f57600080fd5b610e5b8c838d01610d67565b909850965060a08b0135915080821115610e7457600080fd5b50610e818b828c01610d67565b9095509350610e94905060c08a01610cd5565b9150610ea260e08a01610cd5565b90509295985092959890939650565b60005b83811015610ecc578181015183820152602001610eb4565b50506000910152565b60008151808452610eed816020860160208601610eb1565b601f01601f19169290920160200192915050565b8215158152604060208201526000610f1c6040830184610ed5565b949350505050565b600080600060408486031215610f3957600080fd5b610f4284610cd5565b9250602084013567ffffffffffffffff811115610f5e57600080fd5b610f6a86828701610d67565b9497909650939450505050565b6020815260006109e66020830184610ed5565b8183823760009101908152919050565b600060208284031215610fac57600080fd5b5051919050565b600060208284031215610fc557600080fd5b815180151581146109e657600080fd5b600060018201610ff557634e487b7160e01b600052601160045260246000fd5b5060010190565b82815260008251611014816020850160208701610eb1565b919091016020019392505050565b634e487b7160e01b600052602160045260246000fdfea26469706673582212203111c0354bb11e8cd928ee8e7ff233168d977e70f0b5bd86f17d25ba8d7c263064736f6c63430008100033";

type $SmartWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: $SmartWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class $SmartWallet__factory extends ContractFactory {
  constructor(...args: $SmartWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<$SmartWallet> {
    return super.deploy(owner, overrides || {}) as Promise<$SmartWallet>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): $SmartWallet {
    return super.attach(address) as $SmartWallet;
  }
  override connect(signer: Signer): $SmartWallet__factory {
    return super.connect(signer) as $SmartWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): $SmartWalletInterface {
    return new utils.Interface(_abi) as $SmartWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): $SmartWallet {
    return new Contract(address, _abi, signerOrProvider) as $SmartWallet;
  }
}