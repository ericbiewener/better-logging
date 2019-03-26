const chalk = require('chalk')
const asTable = require('as-table').configure({ right: true })

function stringify(args) {
  return args.map(a => a && Object.getPrototypeOf(a) === Object.prototype ? JSON.stringify(a, null, 2): a)
}

function logEmptyLines(n = 1) {
  for (let i = 0; i < n; i++) log()
}

function log(...args) {
  console.log(...stringify(args))
  return logEmptyLines
}

Object.assign(log, {
  success: (...args) => log(chalk.green(...stringify(args))),
  error: (...args) => log(chalk.red(...stringify(args))),
  info: (...args) => log(chalk.blue(...stringify(args))),
  table: (...args) => log(asTable(...args)),
})

log.s = log.success
log.e = log.error
log.i = log.info
log.t = log.table

module.exports = log
