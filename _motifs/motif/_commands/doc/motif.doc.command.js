const fs = require('fs')
const motifListProcessor = require(global.ROOT + '/_motifs/motif/_processors/list/motif.list.processor')

module.exports = params => {

  const filePath = global.ROOT + '/motif-js.wiki/Table-of-patterns.md'
  
  fs.writeFileSync(
    filePath,
    require('./_files/table-of-patterns/table-of-patterns.file')({
      motifList: motifListProcessor(
        require('../../motif.motif'),
        ...(params || [])
      )
    })
  )

  console.log(`-> Generated to "${ filePath }"`)
}