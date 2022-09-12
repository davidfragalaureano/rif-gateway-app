/// <reference types="cypress" />
import { readSync } from 'clipboardy'

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
export default (on, config) => {
  on('task', {
    getClipboard () {
      return readSync()
    }
  })
}
