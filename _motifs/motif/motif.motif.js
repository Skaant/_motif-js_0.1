const motifExplorersIdEnum = require('./_explorers/_enums/id/motif.explorers.id.enum')

module.exports = {
  path: '.',
  id: 'motif',
  _explorers: {
    [motifExplorersIdEnum.HI]: require('./_explorers/hi/motif.hi.explorer')
  },
  options: {}
}
      