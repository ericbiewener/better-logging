const log = require('.')

log('default')(1)
log.success('success')(2)
log.info('info')
log.error('error')
log({ foo: { bar: { baz: [1, 2, [3, 4]]}}})

log.table([{ 'foo': 1, 'bar': 2 }], [{ 'foo': 3, 'bar': 4 }])
