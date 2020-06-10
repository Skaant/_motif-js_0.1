const motifListProcessor = require('../list/motif.list.processor')
const assertionProcessor = require('../../../assertion/_processors/assertion.processor')
const assertionTypeEnum = require('../../../assertion/_enums/type/assertion.type.enum')

module.exports = (spec, motif) => {

  console.log(`
\n## Pattern instances' specifications
  
* File : \`${ spec.path.split('/').pop() }\`
`)

  motifListProcessor(motif)
    .map(motif => {

      console.log(`\n\n### \`${ motif.path }\`\n\n`)
      
      const {
        current,
        total
      } = spec._assertions
        .reduce(
          ({ current, total }, assertion) => {

            const {
              score,
              success
            } = assertionProcessor(assertion, motif)

            return {
              current: current
                + ((assertion.type === assertionTypeEnum.IMPROVEMENT
                    && !success
                    && score)
                  || 0),
              total: total
                + ((assertion.type === assertionTypeEnum.IMPROVEMENT
                    && score)
                  || 0)
            }
          },
          {
            current: 0,
            total: 0
          }
        )

      console.log(`\n**Improvement score : ${ current }/${ total }${ current === 0 ? ' ... perfect !' : '' }**`)

      return {
        current,
        total
      }
    })
}

  