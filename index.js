const chalk = require('chalk')
const asTable = require('as-table').configure({ right: true })
const logSymbols = require('log-symbols');

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
  green: (...args) => log(chalk.green(...stringify(args))),
  red: (...args) => log(chalk.red(...stringify(args))),
  blue: (...args) => log(chalk.blue(...stringify(args))),
  yellow: (...args) => log(chalk.yellow(...stringify(args))),
  table: (...args) => log(asTable(...args)),
})

Object.assign(log, {
  success: (...args) => log.green(logSymbols.success, ...args),
  error: (...args) => log.red(logSymbols.error, ...args),
  info: (...args) => log.blue(logSymbols.info, ...args),
  warn: (...args) => log.yellow(logSymbols.warning, ...args),
})

// single letter shortcuts
for (const k in log) log[k[0]] = log[k]

module.exports = log
