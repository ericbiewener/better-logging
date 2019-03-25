# Log All The Things

### `log(foo)`
Logs normal white output to the console, pretty-printing any standard objects passed to it. Returns
a function that lets you log out additional empty lines, e.g. `log('foo')()` will log an additional
empty line after 'foo'. Pass a number to the the returned function to log multiple empty lines, e.g.
`log('foo')(2)`

### `log.success()`, `log.info()`, `log.error()`
Same as `log()`, but with color (green, blue, red, respectively).

### `log.table()`
Log an ASCII table. Provided by the [`as-table`](https://github.com/xpl/as-table) package. Also
returns an function that allows logging out additional empty lines
