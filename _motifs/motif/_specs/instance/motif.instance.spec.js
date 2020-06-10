const assert = require('assert')
const assertion1 = require('./_assertions/id/motif.id.instance.assertion')

module.exports = {
  
  test: instance => {

    // Big rule 1 ?
    console.log('* ' + assertion1.label)
    console.log(assertion1.test(instance))

    console.log('* They *should* have a `folderPathPattern` property')
    console.log('* They *should* have a `fileNamePattern` property')

    console.log('* They *should* have a `name` property')

    console.log('* They *should* have a `description` property')

    return true
  }
}