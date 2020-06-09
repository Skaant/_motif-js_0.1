const fs = require('fs')
const motifPathListProcessor = require('../pathList/motif.pathList.processor')

module.exports = scope =>

  motifPathListProcessor(scope)
    .map(path => ({
      path,
      ...require(global.ROOT + path)
    }))