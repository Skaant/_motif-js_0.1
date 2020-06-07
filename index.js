const package = require('./package.json')
console.log(`### motif.js (version ${ package.version }) ###`)

global.ROOT = __dirname.replace(/\\/g, '/') + '/'
console.log(`* Operating in root folder : "${ global.ROOT }".`)

const commands = require('./_motifs/motif/_commands')

const commandMotif = process.argv[2]
const commandId = process.argv[3]

/** @todo Controls commandMotif et commandId */

console.log(`* Command : "${ commandMotif }" > "${ commandId }"`)

const params = process.argv.slice(4)
console.log(`* Parameters : [ "${ params.join('", "') }" ]`)

console.log('Executing ...\n\n')
commands[commandId](...params)