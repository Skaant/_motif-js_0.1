const assertionTypeEnum = require('../_enums/type/assertion.type.enum')

/**
 * @param {assertion} assertion Is in fact the real
 *  processor instance
 * @param {any} instance Is the assertion's target
 *  pattern's instance to test
 */
module.exports = (assertion, instance) => {
  
  console.log('* ' + assertion.label)

  try {

    console.log('   ' + assertion.test(instance))

    return {
      score: assertion.score,
      success: true
    }
    
  } catch (err) {

    if (assertion.type === assertionTypeEnum.ERROR) {

      throw err
    
    } else if (assertion.type === assertionTypeEnum.IMPROVEMENT) {

      console.log(`   *No, *improvement score : + ${ assertion.score }*`)

      return {
        score: assertion.score,
        success: false
      }
    }
  }
}