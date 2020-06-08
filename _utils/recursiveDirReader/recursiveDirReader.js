const fs = require('fs')

/** 
 * Recursively list folders & files in the scope tree whom
 *  path is given in parameters.
 * 
 * @param {string} path The scope tree
 * 
 * @note Imported form `perma-data-5` (doc. processing).
 */
const recursiveDirReader = path => {
    
  const dirents = fs.readdirSync(
    path,
    {
      withFileTypes: true
    }
  )

  return dirents.reduce(
    (
      files,
      dirent
    ) => {

      const name = dirent.name
      const _path = path + '/' + name

      /** The `dirent` is a file */
      if (!dirent.isDirectory()) {

        return [
          ...files,
          _path.slice(global.ROOT.length)
        ]

      /** The `dirent` is a folder */
      } else if (dirent.name !== '.git')

        return [
          ...files,
          ...recursiveDirReader(_path)
        ]

      return files
    },
    [])
}

module.exports = recursiveDirReader