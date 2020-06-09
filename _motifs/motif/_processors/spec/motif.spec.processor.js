const motifListProcessor = require('../list/motif.list.processor')

module.exports = (spec, motif) =>

  motifListProcessor(motif).map(motif => spec.test(motif))

  