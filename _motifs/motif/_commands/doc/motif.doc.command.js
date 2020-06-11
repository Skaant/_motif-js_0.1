const fs = require('fs')
const motifListProcessor = require(global.ROOT + '/_motifs/motif/_processors/list/motif.list.processor')

module.exports = params => {

  const motifList = motifListProcessor(
    require('../../motif.motif'),
    ...(params || [])
  )
  const tOPFilePath = '/motif-js.wiki/Table-of-patterns.md'
  
  fs.writeFileSync(
    global.ROOT + tOPFilePath,
    require('./_files/table-of-patterns/table-of-patterns.file')({ motifList })
  )

  console.log(
`
Table of patterns generated
* ${ tOPFilePath }
`)

  motifList.forEach(motif => {

    const motifFilePath =  `/motif-js.wiki/${ motif.name || motif.id }.md`
    const splitMotifFolderPath = motif.path.split('/')
    const motifWikiDocFileName = `${ splitMotifFolderPath.slice(0, splitMotifFolderPath.length - 1).join('/') }/_docs/wiki/${ motif.id }.wiki.doc.js`

    let doc = false

    if (fs.existsSync(global.ROOT + motifWikiDocFileName)) {

      doc = require(global.ROOT + motifWikiDocFileName)
    }
    
    fs.writeFileSync(
      global.ROOT + motifFilePath,
      require('./_files/motif-instance/motif-instance.file')({
        ...motif,
        _docs: {
          wiki: doc
        }
      })
    )

    console.log(
`
${ ( '"' + motif.name + '"' ) || ( '`' + motif.id + '`' ) } pattern's wiki page generated
-> ${ motifFilePath }.md${ doc ? ` (from ${ motifWikiDocFileName })` : '' }
`)
  })
}