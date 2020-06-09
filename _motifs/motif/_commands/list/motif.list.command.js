const motifListProcessor = require('../../_processors/list/motif.list.processor')

module.exports = (...params) => {

  console.log(motifListProcessor(
    require('../../motif.motif'),
    ...params
  ))
}