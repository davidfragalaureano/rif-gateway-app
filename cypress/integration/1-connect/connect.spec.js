/// <reference types="cypress" />
import currentProvider from '../../plugins/mockProvider'
import { mockRBTCBalance, mockTokenDecimals, mockTokensBalances, mockTokenSymbols } from '../../plugins/mockUtils'

describe('connect', () => {
  const address = '0xB98bD7C7f656290071E52D1aA617D9cB4467Fd6D'
  const privateKey = 'de926db3012af759b4f24b5a51ef6afa397f04670f634aa4f48d4480417007f3'

  beforeEach(() => {
    cy.visit('/')

    cy.on('window:before:load', (win) => {
      win.ethereum = currentProvider({
        address,
        privateKey,
        chainId: 31,
        debug: true
      })
    })
  })

  afterEach(() => {
    cy.window().then((win) => {
      win.ethereum.clearMocks()
    })
  })

  it('loads the connect page', () => {
    cy.get('[data-testid=title]').should('have.text', 'rBench')
    cy.get('[data-testid=subtitle]').should('have.text', 'The workbench for RSK')
  })

  it('connects with metamask', () => {
    cy.window().then((win) => {
      win.ethereum.addMock('eth_getBalance', mockRBTCBalance(98970000000000000000n))
      win.ethereum.addMock('eth_call', mockTokensBalances(23970000000000000000n))
      win.ethereum.addMock('eth_call', mockTokenDecimals)
      win.ethereum.addMock('eth_call', mockTokenSymbols)
    })

    cy.get('[data-testid=connect-button]').click()
    cy.get('.rlogin-provider-container').first().click()
    cy.get('.rlogin-button').first().click()
    cy.get('[data-testid=wallet-info]').should('have.text', 'Information')
  })
})
