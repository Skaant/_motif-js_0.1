const fs = require('fs')
const propertiesEnum = require('../../_enums/properties/motif.properties.enum')
const motifFile = require('./_files/motif.file')

module.exports = (scope, id, properties = {}) => {

  /**
   * 1. Creates the `_motifs` folder
   */
  const motifsFolderPath = global.ROOT + '/' + scope + '/_motifs'

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
   * 2. Avoid existing `motif.js` file override
   */
  const filePath = folderPath + '/' + id + '.motif.js'

  if (fs.existsSync(filePath)) {

    throw new Error(`Le fichier "${ filePath }" existe déjà.`)

  } else {

    console.log(id)

    /**
     * 3. Creates the content and the file
     */
    const _properties = Object.values(propertiesEnum)
      .reduce(
        (acc, propertyId) => ({
          ...acc,
          [propertyId]: properties[propertyId] || false,
        }),
        {
          id
        }
      )

    fs.writeFileSync(
      filePath,
      motifFile(_properties)
    )

    console.log(`Pattern "${ id }" succesfully created !\n* File path : "${ scope + '/_motifs/' + id + '/' + id + '.motif.js' }"`)
  }
}