import inquirer from 'inquirer'
import 'colors'
export const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What you want to do?',
    choices: [
      {
        value: 1,
        name: `${'1.'.green} Search a city`
      },
      {
        value: 2,
        name: `${'2.'.green} History`
      },
      {
        value: 0,
        name: `${'3.'.green} Exit`
      }
    ]
  }
]

export const inquirerMenu = async () => {
  console.clear()
  console.log('======'.green)
  console.log('Choose an option'.white)
  console.log('======'.green)
  const { option } = await inquirer.prompt(questions)

  return option
}

export const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate (value) {
        if (value.length === 0) return 'Please type a value'
        return true
      }
    }
  ]

  const { desc } = await inquirer.prompt(question)
  return desc
}

export const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'enter'.green} key to continue`
    }
  ]
  console.log('\n')
  await inquirer.prompt(question)
}

export default {
  questions,
  inquirerMenu,
  pause
}
