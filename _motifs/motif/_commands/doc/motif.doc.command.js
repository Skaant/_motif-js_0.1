const fs = require('fs')
const motifListProcessor = require('../../_processors/list/motif.list.processor')

module.exports = params => {
  
  fs.writeFileSync(
    global.ROOT + '/motif-js.wiki/Patterns-list.md',
    require('./_files/wiki-patterns-list/wiki-patterns-list.file')({
      motifList: motifListProcessor(...(params || []))
    })
  )

  console.log(`-> Generated to "${ global.ROOT + '/motif-js.wiki/Patterns-list.md' }"`)
}