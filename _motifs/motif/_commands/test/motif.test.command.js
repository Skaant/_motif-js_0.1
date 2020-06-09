const motifSpecProcessor = require('../../_processors/spec/motif.spec.processor')

module.exports = (scope = '') =>

  motifSpecProcessor(
    require('../../_specs/motif.spec'),
    require('../../motif.motif')  
  )