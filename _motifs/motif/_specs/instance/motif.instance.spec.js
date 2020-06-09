const assert = require('assert')

module.exports = instance => {

  // Big rule 1 ?
  assert.ok(instance.id, 'An identifier for `id` must be present in any instance.')

  return true
}