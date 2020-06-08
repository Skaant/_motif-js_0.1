const fs = require('fs')
const motifPathListProcessor = require('../../_processors/pathList/motif.pathList.processor')

module.exports = params => {

  const outputFolder = global.ROOT + '/motif-js.wiki/_motifs'

  if (fs.existsSync(outputFolder)) {

    fs.rmdirSync(outputFolder)
  }

  fs.mkdirSync(outputFolder)

  fs.writeFileSync(
    outputFolder + '/index.md',
    JSON.stringify(motifPathListProcessor(...params))
  )
}