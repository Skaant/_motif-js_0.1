const motifSpecProcessor = require('../../_processors/spec/motif.spec.processor')

module.exports = (scope = '') =>
    
  motifSpecProcessor(
    require('../../_specs/instance/motif.instance.spec'),
    require('../../motif.motif')
  )