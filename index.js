const package = require('./package.json')
console.log(`### motif.js (version ${ package.version }) ###`)

const commands = require('./commands')

const commandId = process.argv[2]
console.log(`* Command : "${ commandId }"`)

const params = process.argv.slice(3)
console.log(`* Parameters : [ "${ params.join('", "') }" ]`)

console.log('Excuting ...\n\n')
commands[commandId](...params)