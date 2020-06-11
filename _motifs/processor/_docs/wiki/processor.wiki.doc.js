module.exports = () =>

`
It can be whatever from a simple javascript function (example : \`motif._processors.list\`), to CLI (ex: \`explorer._processors.cli\`) or even maybe a VRI ...

> Are processors necessarily pattern-specific ?
> How could we associate them to multiple patterns ?

Processor should optimally be a **pure function** (for testing, modularity, state control ...).
`