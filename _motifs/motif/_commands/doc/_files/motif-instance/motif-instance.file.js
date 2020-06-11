module.exports = motif =>

`*Generated ${new Date(Date.now()).toString().slice(0, 33) }*

* \`id\` : \`${ motif.id }\`

${ motif.description || '*No description provided yet.*' }

${
  (motif._docs.wiki
      && motif._docs.wiki())
    || '*No wiki documentation provided yet.*'
}
`