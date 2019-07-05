# Log All the Things

Mostly (but not only!) a simple wrapper for the ubiquitous [Chalk package](https://github.com/chalk/chalk) that allows you to log color to your terminal with a single function call.

## Chalk Wrapper Functionality

### Basic Usage
```js
const log = require('log-all-the-things')

log('hello') // console.log('hello')
log.green('hello') // console.log(chalk.green('hello'))
log`{green hello}` // console.log(chalk`{green hello}`)
```

### Chalk Tagged Template Literal Syntax
Also supports Chalk's tagged template literal syntax:

```js
const var1 = "hello"
const var2 = "hello"

log`
{green ${var1}}
{rgb(255,131,0) ${var2}}
`
```

## Additional Functionality

### Call-Chaining
All calls to `log()` return the `log` function itself, so you can issue multiple log calls on a single line:

```js
log('foo').green('bar')('baz')

// RESULT:
// foo -> white
// bar -> green
// baz -> white
```
 
 A common use-case for this is to simply add an extra line break in your terminal output:
 
 ```js
 log('hello')()
 log('world')

// RESULT:
// hello
//
// world
```

### Plugins
Add additional methods to the `log` object via the `extend` method:

```js
const log = require('log-all-the-things')
const asTable = require('as-table')

log.extend('table', asTable)
log.table([{ col1: 'foo', col2: 'bar' }])

// RESULT:
// col1  col2
// ----------
//  foo   bar
```

`extend` takes three arguments:
- `functionName: string`: The name of the method on `log` you will call.
- `function: (...args: any[]) => unknown`: The function that will be called. Its return value will be automatically logged to the console unless the `autoLog` argument is `false`.
- `autoLog?: boolean`: Optional third parameter. Pass `false` to prevent the return value of the `function` argument from automatically being logged to the console. Useful if the function you're providing will handle logging itself.
