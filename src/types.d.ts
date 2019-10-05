declare module "log-all-the-things" {
  type Plugin = (
    name: string,
    fn: (...args: any[]) => unknown,
    autoLog?: boolean
  ) => void;

  type Log = Record<string, (...args: any[]) => Log> & {
    (...args: any[]): Log;
    extend: Plugin;
  };
  
  export const log: Log
}
