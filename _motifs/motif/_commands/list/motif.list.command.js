const fs = require('fs')
const commandsConfig = require('../../../command/_command.config')
const recursiveDirReader = require('../../../../_utils/recursiveDirReader/recursiveDirReader')

module.exports = (scope = '') =>

  console.log(recursiveDirReader(global.ROOT + scope)
    /**
     * Exact match, but
     *  could be extended to meet partial specifications
     *  and allow report & diagnosis
     */
    .filter(path => path.search(/_motifs\/(.*)\/\1\.motif\.js/) !== -1))