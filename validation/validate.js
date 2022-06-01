//import api methods and classes"
const requireStringInArray = require("./api/requireStringInArray");
const validationRules = require("./api/validationRules");
const Validator = require("./api/validator/validator");
const extractKeys = require("./api/extractKeys");

class Validate extends Validator {
  constructor(obj, errors) {
    super(obj, errors);
  }

  attribMethodsToKeys(inputRules) {
    let count = -1;
    let userObjectKeys = [];
    //extract user object keys
    extractKeys(this.obj, userObjectKeys);

    inputRules.forEach((fn) => {
      count += 1;
      //eval exectues all methods methods present inputRules array
      console.log(
        eval(
          `this.${fn}('${userObjectKeys[count]}','${
            this.obj[userObjectKeys[count]]
          }')`
        )
      );
    });
  }

  rules(array) {
    //check what user entered in the array
    const checkUserArray = requireStringInArray(this.checkUserArray);
    //return validatuib ruels
    const rules = validationRules();
    const inputRules = checkUserArray(array, rules);
    const keysWithMethods = this.attribMethodsToKeys(inputRules);

    console.log(keysWithMethods);

    return this;
  }

  checkUserArray(array, rules) {
    let exist = null;
    let errors = 0;

    array.forEach((el) => {
      exist = rules.some((rule) => rule.type === el);
      if (!exist) errors++;
    });

    if (errors > 0) throw new Error("Invalid validation rule(s)");
    else return array;
  }
}

const user = {
  name: 12,
  email: "",
  password: "",
};

const errors = [];

const validate = new Validate(user, errors).rules([
  "required",
  "required",
  "required",
]);
console.log(validate);

//TODOS : multi-validation eg: required|email|string
//to add project on github
