const motifCommandsIdEnum = require('../../_commands/_enums/motif.commands.id.enum')

module.exports = {
  id: 'motif hi',
  _commands: {
    [motifCommandsIdEnum.LIST]: require('../../_commands/list/motif.list.command')
  }
}