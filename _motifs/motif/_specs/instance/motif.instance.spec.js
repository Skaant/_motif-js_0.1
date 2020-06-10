const assertion1 = 

module.exports = {
  
  _assertions: [
    require('./_assertions/id/motif.id.instance.assertion'),
    require('./_assertions/fileNamePattern/motif.fileNamePattern.instance.assertion'),
    require('./_assertions/folderPathPattern/motif.folderPathPattern.instance.assertion')
    /* console.log('* They *should* have a `name` property')
    console.log('* They *should* have a `description` property') */
  ]
}