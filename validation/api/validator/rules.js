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

  string(field,objValue){
      if( typeof parseInt(objValue) === 'number'){
        this.errors.push(`The ${field} must be a string`);
      }
  }
}

module.exports=Rules