const fs = require('fs')
const optionsEnum = require('./_enums/options/motif.new.command.options.enum')
const commandsConfig = require('../../../command/_command.config')
const motifFile = require('./_files/motif.file')

module.exports = (scope, id, options = {}) => {

  const _options = Object.values(optionsEnum)
    .reduce(
      (acc, option) => ({
        ...acc,
        [option]: options[option] || false,
      }),
      {}
    )

  /**
   * 1. Creates the `_motifs` folder
   */
  const motifsFolderPath = commandsConfig.root + '/' + scope + '/_motifs'

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
      motifFile({
        id,
        options: _options
      })
    )

    console.log(`Pattern "${ id }" succesfully created !\n* File path : "${ scope + '/_motifs/' + id + '/' + id + '.motif.js' }"`)
  }
}