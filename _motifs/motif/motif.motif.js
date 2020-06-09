const motifExplorersIdEnum = require('./_explorers/_enums/id/motif.explorers.id.enum')

module.exports = {
  id: 'motif',
  folderPathPattern: /_motifs\/.*\//,
  fileNamePattern: /.*\.motif\.js/,
  _explorers: [
    motifExplorersIdEnum.HI
  ]
}
      