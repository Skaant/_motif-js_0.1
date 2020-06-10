const recursiveDirReader = require(global.ROOT + '/_utils/recursiveDirReader/recursiveDirReader')

module.exports = (motif, scope = '') =>

  (motif.folderPathPattern
      && motif.fileNamePattern
      && recursiveDirReader(global.ROOT + scope)
        .filter(path =>
          
          path.search(motif.folderPathPattern) !== -1
            && path.search(motif.fileNamePattern) !== -1)
        .map(path => ({
          path,
          ...require(global.ROOT + path)
        })))
    || []