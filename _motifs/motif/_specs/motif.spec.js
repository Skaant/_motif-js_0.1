const assert = require('assert')

module.exports = {
  
  test: instance => {

    // Big rule 1 ?
    assert.ok(instance.id, 'An identifier for `id` must be present in any instance.')
    console.log(`* ${ instance.id } id`)

    return true
  }
}