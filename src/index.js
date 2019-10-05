const chalk = require("chalk");

let log;

const plugins = {};

const handler = {
  get: (obj, prop) => (...args) => {
    if (prop === "extend") {
      plugins[args[0]] = { fn: args[1], autoLog: args[2] !== false };
      return log;
    }

    const plugin = plugins[prop];
    if (plugin) {
      const val = plugin.fn(...args);
      if (plugin.autoLog) console.log(val);
      return log;
    }

    for (arg of args) console.log(chalk[prop](arg));
    return log;
  }
};

function mainFn(...args) {
  // detect if it was called via a tagged template literal
  const [arg0, ...rest] = args;
  if (
    Array.isArray(arg0) &&
    arg0.length === rest.length + 1 &&
    arg0.raw &&
    arg0.raw.length === arg0.length &&
    Object.isFrozen(arg0)
    // Additional check should we ever need it... could check the same on arg0.raw as well
    // arg0.every(a => typeof a === "string")
  ) {
    console.log(chalk(...args));
  } else {
    console.log(...args);
  }

  return log;
}

log = new Proxy(mainFn, handler);

module.exports = { log };
