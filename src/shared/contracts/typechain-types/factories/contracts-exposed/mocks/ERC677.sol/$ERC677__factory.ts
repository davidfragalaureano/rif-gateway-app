/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  $ERC677,
  $ERC677Interface,
} from "../../../../contracts-exposed/mocks/ERC677.sol/$ERC677";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "$_afterTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "$_approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "$_beforeTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "$_burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "$_mint",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "$_spendAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "$_transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200237438038062002374833981810160405281019062000037919062000438565b83838383818181600390816200004e919062000729565b50806004908162000060919062000729565b5050506200007584846200008360201b60201c565b50505050505050506200092b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000f5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000ec9062000871565b60405180910390fd5b6200010960008383620001fb60201b60201c565b80600260008282546200011d9190620008c2565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001749190620008c2565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001db91906200090e565b60405180910390a3620001f7600083836200020060201b60201c565b5050565b505050565b505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002468262000219565b9050919050565b620002588162000239565b81146200026457600080fd5b50565b60008151905062000278816200024d565b92915050565b6000819050919050565b62000293816200027e565b81146200029f57600080fd5b50565b600081519050620002b38162000288565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200030e82620002c3565b810181811067ffffffffffffffff8211171562000330576200032f620002d4565b5b80604052505050565b60006200034562000205565b905062000353828262000303565b919050565b600067ffffffffffffffff821115620003765762000375620002d4565b5b6200038182620002c3565b9050602081019050919050565b60005b83811015620003ae57808201518184015260208101905062000391565b60008484015250505050565b6000620003d1620003cb8462000358565b62000339565b905082815260208101848484011115620003f057620003ef620002be565b5b620003fd8482856200038e565b509392505050565b600082601f8301126200041d576200041c620002b9565b5b81516200042f848260208601620003ba565b91505092915050565b600080600080608085870312156200045557620004546200020f565b5b6000620004658782880162000267565b94505060206200047887828801620002a2565b935050604085015167ffffffffffffffff8111156200049c576200049b62000214565b5b620004aa8782880162000405565b925050606085015167ffffffffffffffff811115620004ce57620004cd62000214565b5b620004dc8782880162000405565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200053b57607f821691505b602082108103620005515762000550620004f3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005bb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200057c565b620005c786836200057c565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200060a62000604620005fe846200027e565b620005df565b6200027e565b9050919050565b6000819050919050565b6200062683620005e9565b6200063e620006358262000611565b84845462000589565b825550505050565b600090565b6200065562000646565b620006628184846200061b565b505050565b5b818110156200068a576200067e6000826200064b565b60018101905062000668565b5050565b601f821115620006d957620006a38162000557565b620006ae846200056c565b81016020851015620006be578190505b620006d6620006cd856200056c565b83018262000667565b50505b505050565b600082821c905092915050565b6000620006fe60001984600802620006de565b1980831691505092915050565b6000620007198383620006eb565b9150826002028217905092915050565b6200073482620004e8565b67ffffffffffffffff81111562000750576200074f620002d4565b5b6200075c825462000522565b620007698282856200068e565b600060209050601f831160018114620007a157600084156200078c578287015190505b6200079885826200070b565b86555062000808565b601f198416620007b18662000557565b60005b82811015620007db57848901518255600182019150602085019450602081019050620007b4565b86831015620007fb5784890151620007f7601f891682620006eb565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000859601f8362000810565b9150620008668262000821565b602082019050919050565b600060208201905081810360008301526200088c816200084a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620008cf826200027e565b9150620008dc836200027e565b9250828201905080821115620008f757620008f662000893565b5b92915050565b62000908816200027e565b82525050565b6000602082019050620009256000830184620008fd565b92915050565b611a39806200093b6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063861e3d3d116100ad578063c740204b11610071578063c740204b14610359578063cc461d6214610375578063dd62ed3e14610391578063e047838d146103c1578063efb43b07146103dd5761012c565b8063861e3d3d146102a357806395d89b41146102bf578063a457c2d7146102dd578063a9059cbb1461030d578063b2331d7d1461033d5761012c565b8063313ce567116100f4578063313ce567146101eb57806332cadf3c14610209578063395093511461022757806342a0299d1461025757806370a08231146102735761012c565b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017f57806323b872dd1461019d5780632904df29146101cd575b600080fd5b6101396103f9565b60405161014691906110b1565b60405180910390f35b6101696004803603810190610164919061116c565b61048b565b60405161017691906111c7565b60405180910390f35b6101876104ae565b60405161019491906111f1565b60405180910390f35b6101b760048036038101906101b2919061120c565b6104c2565b6040516101c491906111c7565b60405180910390f35b6101d56104f1565b6040516101e2919061126e565b60405180910390f35b6101f3610500565b60405161020091906112a5565b60405180910390f35b610211610509565b60405161021e9190611315565b60405180910390f35b610241600480360381019061023c919061116c565b61055b565b60405161024e91906111c7565b60405180910390f35b610271600480360381019061026c919061120c565b610592565b005b61028d60048036038101906102889190611337565b6105a2565b60405161029a91906111f1565b60405180910390f35b6102bd60048036038101906102b8919061120c565b6105ea565b005b6102c76105fa565b6040516102d491906110b1565b60405180910390f35b6102f760048036038101906102f2919061116c565b61068c565b60405161030491906111c7565b60405180910390f35b6103276004803603810190610322919061116c565b610703565b60405161033491906111c7565b60405180910390f35b6103576004803603810190610352919061120c565b610726565b005b610373600480360381019061036e919061120c565b610736565b005b61038f600480360381019061038a919061116c565b610746565b005b6103ab60048036038101906103a69190611364565b610754565b6040516103b891906111f1565b60405180910390f35b6103db60048036038101906103d6919061116c565b6107db565b005b6103f760048036038101906103f2919061120c565b6107e9565b005b606060038054610408906113d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610434906113d3565b80156104815780601f1061045657610100808354040283529160200191610481565b820191906000526020600020905b81548152906001019060200180831161046457829003601f168201915b5050505050905090565b6000806104966107f9565b90506104a3818585610801565b600191505092915050565b60006b033b2e3c9fd0803ce8000000905090565b6000806104cd6107f9565b90506104da8582856109ca565b6104e5858585610a56565b60019150509392505050565b60006104fb6107f9565b905090565b60006012905090565b6060610513610cd5565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905090565b6000806105666107f9565b90506105878185856105788589610754565b6105829190611433565b610801565b600191505092915050565b61059d838383610ce2565b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6105f5838383610801565b505050565b606060048054610609906113d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610635906113d3565b80156106825780601f1061065757610100808354040283529160200191610682565b820191906000526020600020905b81548152906001019060200180831161066557829003601f168201915b5050505050905090565b6000806106976107f9565b905060006106a58286610754565b9050838110156106ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e1906114d9565b60405180910390fd5b6106f78286868403610801565b60019250505092915050565b60008061070e6107f9565b905061071b818585610a56565b600191505092915050565b6107318383836109ca565b505050565b610741838383610ce7565b505050565b6107508282610cec565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6107e58282610e4b565b5050565b6107f4838383610a56565b505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610870576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108679061156b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d6906115fd565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109bd91906111f1565b60405180910390a3505050565b60006109d68484610754565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a505781811015610a42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3990611669565b60405180910390fd5b610a4f8484848403610801565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ac5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abc906116fb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2b9061178d565b60405180910390fd5b610b3f838383610ce7565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bc5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbc9061181f565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c589190611433565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cbc91906111f1565b60405180910390a3610ccf848484610ce2565b50505050565b3660008036915091509091565b505050565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d529061188b565b60405180910390fd5b610d6760008383610ce7565b8060026000828254610d799190611433565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dce9190611433565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e3391906111f1565b60405180910390a3610e4760008383610ce2565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610eba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb19061191d565b60405180910390fd5b610ec682600083610ce7565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f43906119af565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610fa391906119cf565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161100891906111f1565b60405180910390a361101c83600084610ce2565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561105b578082015181840152602081019050611040565b60008484015250505050565b6000601f19601f8301169050919050565b600061108382611021565b61108d818561102c565b935061109d81856020860161103d565b6110a681611067565b840191505092915050565b600060208201905081810360008301526110cb8184611078565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611103826110d8565b9050919050565b611113816110f8565b811461111e57600080fd5b50565b6000813590506111308161110a565b92915050565b6000819050919050565b61114981611136565b811461115457600080fd5b50565b60008135905061116681611140565b92915050565b60008060408385031215611183576111826110d3565b5b600061119185828601611121565b92505060206111a285828601611157565b9150509250929050565b60008115159050919050565b6111c1816111ac565b82525050565b60006020820190506111dc60008301846111b8565b92915050565b6111eb81611136565b82525050565b600060208201905061120660008301846111e2565b92915050565b600080600060608486031215611225576112246110d3565b5b600061123386828701611121565b935050602061124486828701611121565b925050604061125586828701611157565b9150509250925092565b611268816110f8565b82525050565b6000602082019050611283600083018461125f565b92915050565b600060ff82169050919050565b61129f81611289565b82525050565b60006020820190506112ba6000830184611296565b92915050565b600081519050919050565b600082825260208201905092915050565b60006112e7826112c0565b6112f181856112cb565b935061130181856020860161103d565b61130a81611067565b840191505092915050565b6000602082019050818103600083015261132f81846112dc565b905092915050565b60006020828403121561134d5761134c6110d3565b5b600061135b84828501611121565b91505092915050565b6000806040838503121561137b5761137a6110d3565b5b600061138985828601611121565b925050602061139a85828601611121565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806113eb57607f821691505b6020821081036113fe576113fd6113a4565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061143e82611136565b915061144983611136565b925082820190508082111561146157611460611404565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006114c360258361102c565b91506114ce82611467565b604082019050919050565b600060208201905081810360008301526114f2816114b6565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061155560248361102c565b9150611560826114f9565b604082019050919050565b6000602082019050818103600083015261158481611548565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006115e760228361102c565b91506115f28261158b565b604082019050919050565b60006020820190508181036000830152611616816115da565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611653601d8361102c565b915061165e8261161d565b602082019050919050565b6000602082019050818103600083015261168281611646565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006116e560258361102c565b91506116f082611689565b604082019050919050565b60006020820190508181036000830152611714816116d8565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061177760238361102c565b91506117828261171b565b604082019050919050565b600060208201905081810360008301526117a68161176a565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061180960268361102c565b9150611814826117ad565b604082019050919050565b60006020820190508181036000830152611838816117fc565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611875601f8361102c565b91506118808261183f565b602082019050919050565b600060208201905081810360008301526118a481611868565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061190760218361102c565b9150611912826118ab565b604082019050919050565b60006020820190508181036000830152611936816118fa565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b600061199960228361102c565b91506119a48261193d565b604082019050919050565b600060208201905081810360008301526119c88161198c565b9050919050565b60006119da82611136565b91506119e583611136565b92508282039050818111156119fd576119fc611404565b5b9291505056fea26469706673582212201d8be659f59bf6087600060c487b21772596ed1c376a9663dbb4602d85062ab164736f6c63430008100033";

type $ERC677ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: $ERC677ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class $ERC677__factory extends ContractFactory {
  constructor(...args: $ERC677ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialAccount: PromiseOrValue<string>,
    initialBalance: PromiseOrValue<BigNumberish>,
    tokenName: PromiseOrValue<string>,
    tokenSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<$ERC677> {
    return super.deploy(
      initialAccount,
      initialBalance,
      tokenName,
      tokenSymbol,
      overrides || {}
    ) as Promise<$ERC677>;
  }
  override getDeployTransaction(
    initialAccount: PromiseOrValue<string>,
    initialBalance: PromiseOrValue<BigNumberish>,
    tokenName: PromiseOrValue<string>,
    tokenSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialAccount,
      initialBalance,
      tokenName,
      tokenSymbol,
      overrides || {}
    );
  }
  override attach(address: string): $ERC677 {
    return super.attach(address) as $ERC677;
  }
  override connect(signer: Signer): $ERC677__factory {
    return super.connect(signer) as $ERC677__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): $ERC677Interface {
    return new utils.Interface(_abi) as $ERC677Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): $ERC677 {
    return new Contract(address, _abi, signerOrProvider) as $ERC677;
  }
}
