/// <reference types="cypress" />
import currentProvider from '../../plugins/mockProvider'
import { mockRBTCBalance, mockTokenDecimals, mockTokensBalances, mockTokenSymbols } from '../../plugins/mockUtils'

describe('receive', () => {
  const address = '0xB98bD7C7f656290071E52D1aA617D9cB4467Fd6D'
  const privateKey = 'de926db3012af759b4f24b5a51ef6afa397f04670f634aa4f48d4480417007f3'

  beforeEach(() => {
    cy.visit('/receive')

    cy.on('window:before:load', (win) => {
      win.ethereum = currentProvider({
        address,
        privateKey,
        chainId: 31,
        debug: true
      })
    })

    cy.window().then((win) => {
      win.ethereum.addMock('eth_getBalance', mockRBTCBalance(98970000000000000000n))
      win.ethereum.addMock('eth_call', mockTokensBalances(23970000000000000000n))
      win.ethereum.addMock('eth_call', mockTokenDecimals)
      win.ethereum.addMock('eth_call', mockTokenSymbols)
    })
  })

  afterEach(() => {
    cy.window().then((win) => {
      win.ethereum.clearMocks()
    })
  })

  function connect () {
    cy.get('[data-testid=connect-button]').click()
    cy.get('.rlogin-provider-container').first().click()
    cy.get('.rlogin-button').first().click()
  }

  it('shows qr and account', () => {
    connect()

    cy.get('[data-testid=account-value]').first().should('have.text', '0xB98b...Fd6D')
    cy.get('[data-testid=account-qr]').should('be.visible')
  })

  it('should copy the account to the clipboard', () => {
    connect()

    cy.get('[data-testid=account-copy]').click()

    cy.task('getClipboard').should('contain', address)
  })
})
