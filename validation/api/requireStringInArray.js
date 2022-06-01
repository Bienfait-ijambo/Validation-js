module.exports=  function requireStringInArray(fn) {
  return (...args) => {
    if (Array.isArray(args[0]) && args[0].length !== 0) {
      args[0].forEach((element) => {
        if (typeof element !== "string") {
          throw new TypeError(`array elements must be typeof string`);
        }
      });
    } else {
      throw new TypeError(
        `args for ${fn.name} must be an array and contain string elements`
      );
    }
    return fn(...args);
  };
}
