declare module "chalklog" {
  type Plugin = (
    name: string,
    fn: (...args: any[]) => unknown,
    autoLog?: boolean
  ) => void;

  type Log = {
    (): Log;
    extend: Plugin;
    [fn: string]: (...args: any[]) => Log;
  };

  export = Log;
}
