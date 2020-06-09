module.exports = ({
  id,
  ...properties
}) =>
`
/**
 * Motif "${ id }"
 */
module.exports = {
  id: '${ id }',
${
    Object.entries(properties)
      .map(([ _id, value ]) =>          

        `  ${ _id } : ${ value }`)
      .join(',\n')
}
}
`