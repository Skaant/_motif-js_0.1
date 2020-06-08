const motifCommandsIdEnum = require('../../_commands/_enums/motif.commands.id.enum')

module.exports = {
  id: 'motif hi',
  _commands: {
    [motifCommandsIdEnum.REF_LIST]: require('../../_commands/refList/motif.refList.command'),
    [motifCommandsIdEnum.LIST]: require('../../_commands/list/motif.list.command')
  }
}