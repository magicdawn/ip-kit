'use strict'

/**
 * Module dependencies
 */

const os = require('os')

function find(family) {
  const registry = os.networkInterfaces()
  for (let name in registry) {
    const arr = registry[name]
    for (let item of arr) {
      if (!item.internal && item.family === family) {
        return item.address
      }
    }
  }
}

const v4 = find('IPv4')
const v6 = find('IPv6')

module.exports = {
  v4,
  v6,
}