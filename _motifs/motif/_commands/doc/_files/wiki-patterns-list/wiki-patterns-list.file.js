module.exports = ({ motifList }) =>

`
## Patterns by id alphabetical order

${
  motifList.map(motif =>
    
`
## ${ motif.id }

${
  motif.description
    ? motif.description

    : '*No description for this pattern yet.*'
}

${
  motif._explorers ?(
`
### Explorers

${
  Object.keys(motif._explorers).map(explorerId => `* ${ explorerId }`).join('\n')
}
`)
    : ''
}

`)
  .join('\n')
}
`