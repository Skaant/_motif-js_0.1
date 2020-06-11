const motifExplorersIdEnum = require('./_explorers/_enums/id/motif.explorers.id.enum')

module.exports = {
  id: 'motif',
  name: 'Pattern',
  description:
`
A *pattern* describes a **repetition of traits** shared by a set of individuals : its **instances**.

Patterns is made of three parts :

* Pattern definition (description, configuration ...)
* Pattern instances
* Pattern instances processors (with the shape \`processor(instance, ...params)\`)
`,
  synonyms: [
    'patterns'
  ],
  folderPathPattern: /_motifs\/.*\//,
  fileNamePattern: /.*\.motif\.js/,
  _explorers: [
    motifExplorersIdEnum.HI
  ]
}
      