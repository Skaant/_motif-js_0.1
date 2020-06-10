
/**
 * Motif "false"
 */
module.exports = {
  id: 'spec',
  name: 'Specifications',
  description: `
*Specifications* make a list of assertions concerning :

* Pattern definition,
* Pattern instances,
* Pattern processors.
`,
  folderPathPattern: /_specs\/.*\//,
  fileNamePattern: /.*\.spec\.js/,
  _processors : false,
  _commands : false,
  _explorers : false
}
