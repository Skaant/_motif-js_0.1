const motifSpecProcessor = require('../../_processors/spec/motif.spec.processor')

module.exports = (scope = '') => {
    
  const path = '../../_specs/instance/motif.instance.spec'

  return motifSpecProcessor(
    {
      path,
      ...require(path)
    },
    require('../../motif.motif')
  )
}