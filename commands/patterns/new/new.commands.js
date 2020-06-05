const fs = require('fs')
const config = require('../../commands.config')

module.exports = (path, id, options = {}) => {

  /**
   * 1. Creates the `_motifs` folder
   */
  const motifsFolderPath = config.rootDir + '/' + path + '/_motifs'

  if (!fs.existsSync(motifsFolderPath)) {

    fs.mkdirSync(motifsFolderPath)
  }

  const folderPath = motifsFolderPath + '/' + id

  if (fs.existsSync(folderPath)) {

    throw new Error(`Le répertoire "${ folderPath }" existe déjà.`)

  } else {
  
    fs.mkdirSync(folderPath)
  }

  /**
   * 2. Creates the `motif.js` file
   */
  const filePath = folderPath + '/' + id + '.motif.js'

  if (fs.existsSync(filePath)) {

    throw new Error(`Le fichier "${ filePath }" existe déjà.`)

  } else {

    fs.writeFileSync(
      filePath,
      `
module.exports = {
  path: '${ path }',
  id: '${ id }',
  options: ${ JSON.stringify(options) }
}
      `,
      options
    )

    console.log(`Pattern "${ id }" succesfully created !\n* File path : "${ path + '/_motifs/' + id + '/' + id + '.motif.js' }"`)
  }
}