/* eslint-disable no-unused-expressions */
import { log } from '../src'
import asTable from 'as-table'

asTable.configure({ right: true })

log.red('red')
log.yellow('yellow1', 'yellow2')
log.green('green')()
log.white('line break')
log('called as fn')

const a = 'a'
const b = { foo: 'bar ' }
const c = ['array!', 'other array']
log`
CPU: {red ${a}}
RAM: {green ${b}}
DISK: {rgb(255,131,0) ${c}}
${a}`()

log('hello') // console.log('hello')
log.green('hello') // console.log(chalk.green('hello'))
log`{green hello}` // console.log(chalk`{green hello}`)

const var1 = 'hello'
const var2 = 'hello'

log`
{green ${var1}}
{rgb(255,131,0) ${var2}}
`

log('foo').green('bar')('baz')()

log.extend('table', asTable)
log
  .table([{ col1: 'foo', col2: 'bar' }])()
  .green('hey there!')()
  .table([{ col1: 'foo', col2: 'bar' }])
