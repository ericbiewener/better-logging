const log = require('.')

log({ foo: { bar: { baz: 1 }}})
log('extra blank line after')()
log('two blank lines after')(2)

const methods = ['success', 'error', 'info']
for (const m of methods) {
  log[m](m)
  log[m[0]](m[0])
}

log.table([{ col1: 'foo', col2: 'bar' }])
