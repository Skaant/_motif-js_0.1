const motifCommandsIdEnum = require('../../_commands/_enums/motif.commands.id.enum')

module.exports = {
  id: 'motif hi',
  _commands: {
    [motifCommandsIdEnum.LIST]: require('../../_commands/list/motif.list.command'),
    [motifCommandsIdEnum.DOC]: require('../../_commands/doc/motif.doc.command'),
    [motifCommandsIdEnum.NEW]: require('../../_commands/new/motif.new.command'),
    [motifCommandsIdEnum.TEST]: require('../../_commands/test/motif.test.command')
  }
}