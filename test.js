const log = require('.')

log({ foo: { bar: { baz: 1 }}})
log([{ foo: { bar: { baz: 1 }}}])
log('extra blank line after')()
log('two blank lines after')(2)

for (const k in log) {
  if (k.startsWith('t')) continue
  log[k](k)
}

log()
log.table([{ col1: 'foo', col2: 'bar' }])()
log.t([{ col1: 'foo', col2: 'bar' }])
