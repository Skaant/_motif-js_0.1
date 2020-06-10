const assert = require('assert')

module.exports = {
  
  test: instance => {

    // Big rule 1 ?
    console.log('* Patterns should have an `id` property')
    assert.ok(instance.id, JSON.stringify(instance))
    console.log(`\`${ instance.id }\` pattern : ok`)

    console.log('* They *should* have a `folderPathPattern` property')
    console.log('* They *should* have a `fileNamePattern` property')

    console.log('* They *should* have a `name` property')

    console.log('* They *should* have a `description` property')

    return true
  }
}