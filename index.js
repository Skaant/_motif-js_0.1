const package = require('./package.json')
console.log(`# motif.js version ${ package.version }`)

global.ROOT = __dirname.replace(/\\/g, '/')
/** Not for production
 * 
 * console.log(`* Operating in root folder : "${ global.ROOT }".`)
 */

const motifId = process.argv[2]
const explorerId = process.argv[3]

/** `motifId` et `explorerId` controls */

const motifPathListProcessor = require('./_motifs/motif/_processors/pathList/motif.pathList.processor')

const motifInstancePath = motifPathListProcessor()
  .find(motifPath =>
    
    motifPath.search(`${ motifId }/${ motifId }.motif.js`) !== -1)

if (!motifInstancePath) {

  throw new Error(`No motif "${ motifId }"`)
}

const motif = require('./' + motifInstancePath)

const explorer = motif._explorers[explorerId]

if (!explorer) {

  throw new Error(`No explorer "${ explorerId}" in motif "${ motifId }"`)
}

const params = process.argv.slice(4)
/** Not for production
 * 
 * console.log(`* Parameters : [ "${ params.join('", "') }" ]`)
 */

/** -'-.-'-.-'-.-'- */

const explorerCliProcessor = require(`${ global.ROOT }/_motifs/explorer/_processors/cli/explorer.cli.processor.js`)
explorerCliProcessor(motif, explorer, params)