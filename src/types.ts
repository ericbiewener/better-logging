export type PluginFunction = (...args: any[]) => unknown

type Extend = (name: string, fn: PluginFunction, autoLog?: boolean) => void

export type Log = Record<string, (...args: any[]) => Log> & {
  (...args: any[]): Log
  extend: Extend
}
