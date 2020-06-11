
/**
 * Motif "constructor"
 */
module.exports = {
  id: 'constructor',
  name: 'Constructor',
  description: 
`
\`\`\`js
constructor = (motif, params) => instance
\`\`\`

\`constructor\` is a *specialization* of \`processor\`
(\`(instance, params) => any // and could have side effects\`) with :
* \`instance\`'s pattern set to \`motif\` and
* \`return\` set to \`instance\`.

*It is unclear for me now from which of the \`Abstract factory\`, the \`Builder\`
or the \`Factory\` pattern the "Constructor" \`motif\` is the closer ...*
`,
  synonyms: [
    'Abstract factory',
    'Builder',
    'Factory'
  ],
  commands : false
}
