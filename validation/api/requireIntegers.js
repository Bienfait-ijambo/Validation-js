module.exports= function requireIntegers(fn) {
  return (...args) => {
    args.forEach((param) => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`args for ${fn.name} must be integers`);
      }
    });
    return fn(...args);
  };
}
