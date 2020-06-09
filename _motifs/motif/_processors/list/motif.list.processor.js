const recursiveDirReader = require(global.ROOT + '/_utils/recursiveDirReader/recursiveDirReader')

module.exports = (motif, scope = '') =>

  recursiveDirReader(global.ROOT + scope)
    .filter(path =>
      
      path.search(motif.folderNamePattern) !== -1
        && path.search(motif.fileNamePattern) !== -1)
    .map(path => ({
      path,
      ...require(global.ROOT + path)
    }))