const assert = require('assert')
const assertionTypeEnum = require('../../../../../assertion/_enums/type/assertion.type.enum')

module.exports = {
  label: 'Patterns should have an `id` property',
  type: assertionTypeEnum.ERROR,
  test: instance => {
    
    assert.ok(
      instance.id,
      JSON.stringify(instance)
    )

    return `\`${ instance.id }\` pattern : ok`
  }
}