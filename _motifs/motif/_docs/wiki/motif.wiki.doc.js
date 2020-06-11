module.exports = () =>

`
## Descriptive form

A pattern is first **descriptive** [1].

> [Descriptive form] preserves the instructional nature of patterns, as a cache of known solutions to recurring design problems. [1]
>
> Design patterns provide a common design lexicon, and communicate both the structure of a design and the reasoning behind it. [1]

\`motif.js\` proposes an implementation to make patterns **generative** too.

*Why ? See [Motivations for generative patterns](motivations-for-design-patterns).*

## Specifications in action !

As stated, to operates from *descriptive form (1) to operational code (3), we must go through a specification step (2) :

> During the implementation process, the adapted design pattern is a specification. Experienced programmers can quickly transform the specification into code. [1]

\`motif.js\` is processing pattern specifications (\`motif.motif\` instances) to make them speak, but most of all : it generates code !

Ideally, a program should work only by connecting patterns together, inside a global/meta pattern processor that can be exposed through the commands, and its explorer.

*See [How to use patterns ?](how-to-use-patterns) for a detailed list of [pattern concept's \`motif\` implementation]'s fields of application.*
`