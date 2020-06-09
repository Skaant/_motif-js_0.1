module.exports = ({ motifList }) =>

`*Generated ${new Date(Date.now()).toString().slice(0, 33) }*

* Number of patterns identified : ${ motifList.length }

## Patterns by id alphabetical order

${
  motifList
    .map(motif =>
    
      `* [${ motif.id }](#${ motif.id })`)
    .join('\n')
}

${
  motifList.map(motif =>
    
`
## \`${ motif.id }\`

${
  motif.description
    ? motif.description

    : '*No description for this pattern yet.*'
}

${
  motif._explorers 
    ? (
`
### Explorers

${
  motif._explorers.map(explorerId => `* \`${ explorerId }\``).join('\n')
}`)
    : ''
}

`)
  .join('\n')
}`