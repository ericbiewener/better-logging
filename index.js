const chalk = require('chalk')
const asTable = require('as-table')

function stringify(args) {
  return args.map(a => a && Object.getPrototypeOf(a) === Object.prototype ? JSON.stringify(a, null, 2): a)
}

function log(...args) {
  console.log(...stringify(args))
}

Object.assign(log, {
  success: (...args) => console.log(chalk.green(...stringify(args))),
  error: (...args) => console.error(chalk.red(...stringify(args))),
  info: (...args) => console.info(chalk.blue(...stringify(args))),
  table: asTable,
})

module.exports = log
