const { isArray } = require("../../util/util");
class Rules {
  constructor(obj, errors) {
    if (typeof obj === "object" && obj !== null && isArray(errors)) {
      this.obj = obj;
      this.errors = errors;
    }
  }

  required(field, objValue) {
    if (objValue === "") {
      this.errors.push(`The ${field} is required`);
    }
  }

  string(field, objValue) {
    if (typeof objValue === 'string') {
      this.errors.push(`The ${field} must be a string`);
    }
  }

  email(field,objValue) {
    var emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(!emailRegex.test(objValue)){
      this.errors.push(`The ${field} must be a valid email`)
    }
  }

  number() {
    if (typeof parseInt(objValue) !== "number") {
      this.errors.push(`The ${field} must be a string`);
    }
  }

 

  date() {}
}

module.exports = Rules;
