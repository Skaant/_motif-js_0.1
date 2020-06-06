module.exports = ({
  id,
  options
}) =>
`
/**
 * Motif "${ id }"
 */
module.exports = {
  id: '${ id }',
${
    Object.entries(options)
      .map(([ _id, value ]) =>          

        `  ${ _id } : ${ value }`)
      .join(',\n')
}
}
`