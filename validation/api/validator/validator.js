
const Rules = require("./rules");

class Validator extends Rules {
  constructor(obj, errors) {
    super(obj, errors);
  }
}

module.exports = Validator;
