import { Interface } from '@ethersproject/abi'

export const encodeFn = (functionName, paramValues) => {
  const abi = [
    'function transfer(address to, uint value)',
    'function decimals() view returns (uint8)',
    'function symbol() view returns (string)',
    'function balanceOf(address owner) view returns (uint256)'
  ]
  const iface = new Interface(abi)
  const data = iface.encodeFunctionData(functionName, paramValues)

  return data
}

export const encodeFnResult = (functionName, paramValues) => {
  const abi = [
    'function transfer(address to, uint value)',
    'function decimals() view returns (uint8)',
    'function symbol() view returns (string)',
    'function balanceOf(address owner) view returns (uint256)'
  ]
  const iface = new Interface(abi)
  const data = iface.encodeFunctionResult(functionName, paramValues)

  return data
}
