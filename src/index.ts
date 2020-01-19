import chalk from 'chalk'
import { Log, PluginFunction } from './types'

// eslint-disable-next-line prefer-const
let log: Log

const plugins: Record<string, { fn: PluginFunction; autoLog: boolean }> = {}

const handler = {
  get: (target: unknown, prop: string) => (...args: any[]) => {
    if (prop === 'extend') {
      const fn = args[1] as PluginFunction
      plugins[args[0]] = { fn, autoLog: args[2] !== false }
      return log
    }

    const plugin = plugins[prop]
    if (plugin) {
      const val = plugin.fn(...args)
      if (plugin.autoLog) console.log(val)
      return log
    }

    // @ts-ignore
    for (const arg of args) console.log(chalk[prop](arg))
    return log
  },
}

function mainFn(...args: any[]) {
  // detect if it was called via a tagged template literal
  const [arg0, ...rest] = args
  if (
    Array.isArray(arg0) &&
    arg0.length === rest.length + 1 &&
    // @ts-ignore
    arg0.raw &&
    // @ts-ignore
    arg0.raw.length === arg0.length &&
    Object.isFrozen(arg0)
    // Additional check should we ever need it... could check the same on arg0.raw as well
    // arg0.every(a => typeof a === "string")
  ) {
    console.log(chalk(...args))
  } else {
    console.log(...args)
  }

  return log
}

log = new Proxy(mainFn, handler) as Log

export { log }
