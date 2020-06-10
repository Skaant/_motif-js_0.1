const assert = require('assert')
const assertionTypeEnum = require('../../../../../assertion/_enums/type/assertion.type.enum')

module.exports = {
  label: 'Pattern `fileNamePattern`',
  type: assertionTypeEnum.IMPROVEMENT,
  score: 8,
  test: instance => {
    
    assert.ok(
      instance.fileNamePattern,
      JSON.stringify(instance)
    )

    return `"${ instance.fileNamePattern }"`
  }
}