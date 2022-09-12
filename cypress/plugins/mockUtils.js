import { encodeFn, encodeFnResult } from './erc20encode'

export const mockRBTCBalance = (mockResult) => (props) => {
  const rbtcWeiBalance = mockResult.toString(16)
  return Promise.resolve(`0x${rbtcWeiBalance}`)
}

export const mockTokensBalances = (mockResult) => (props) => {
  if (props.params[0].data === encodeFn('balanceOf', ['0xB98bD7C7f656290071E52D1aA617D9cB4467Fd6D'])) {
    return Promise.resolve(encodeFnResult('balanceOf', [mockResult]))
  }

  return null
}

export const mockTokenDecimals = (props) => {
  if (props.params[0].data === encodeFn('decimals', [])) {
    return Promise.resolve(encodeFnResult('decimals', [18]))
  }

  return null
}

export const mockTokenSymbols = (props) => {
  if (props.params[0].data === encodeFn('symbol', [])) {
    return Promise.resolve(encodeFnResult('symbol', ['test']))
  }

  return null
}
