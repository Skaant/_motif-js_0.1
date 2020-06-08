const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

module.exports = (motif, explorer, params) => {

  console.log(Object.keys(explorer._commands))

  rl.on(
    'line',
    input => {

      const command = explorer._commands[input]

      if (command) {

        command(params)

        console.log(Object.keys(explorer._commands))

      } else {

        console.warn(' */')
      }
    }
  )
}
