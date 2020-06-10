const assert = require('assert')
const assertionTypeEnum = require('../../../../../assertion/_enums/type/assertion.type.enum')

module.exports = {
  label: 'Pattern `folderPathPattern`',
  type: assertionTypeEnum.IMPROVEMENT,
  score: 8,
  test: instance => {
    
    assert.ok(
      instance.folderPathPattern,
      JSON.stringify(instance)
    )

    return `"${ instance.folderPathPattern }"`
  }
}