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

      const splitInput = input.split(' ')

      const command = explorer._commands[splitInput[0]]

      if (command) {

        try {

          command(...splitInput.slice(1))

        } catch (err) {

          console.error(err)
          
        }

      } else {

        console.warn(' */')
      }
    }
  )
}
