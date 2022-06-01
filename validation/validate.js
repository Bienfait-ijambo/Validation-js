//import api methods and classes"
const requireStringInArray = require("./api/requireStringInArray");
const rulesArray = require("./api/rulesArray");
const Validator = require("./api/validator/validator");
const extractKeys = require("./api/extractKeys");
const verifyParamLength = require("./api/verifyParamLength");

class Validate extends Validator {
  constructor(obj, errors) {
    super(obj, errors);
  }

  attribMethodsToKeys(rulesArray) {
    let count = -1;
    let userObjectKeys = [];
    //extract user object keys
    extractKeys(this.obj, userObjectKeys);

    rulesArray.forEach((fn) => {
      count += 1;
      //eval exectues all methods methods present rulesArray array
      // console.log(fn);
      console.log(
        eval(
          `this.${fn}('${userObjectKeys[count]}','${
            this.obj[userObjectKeys[count]]
          }')`
        )
      );
    });
  }



  verify(userRules) {

    //verify if object length is equal to rules array (userRules)

    verifyParamLength(userRules,this.obj)


    //check if user has passed an array to rules methods and if array elements are strings
    const isValidRule = requireStringInArray(this.isValidRule);

    //return validation rules array
    const rules = rulesArray();

    //returns rules entered by user
    const inputRules = isValidRule(userRules, rules);

    //iterate rules entered by user and then execute them via eval() function
    const keysWithMethods = this.attribMethodsToKeys(inputRules);

    console.log(keysWithMethods);

    return this;
  }

  
 

  /*
   *Verify if rules entered by user exist in our rules array
   */
  isValidRule(array, rules) {
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
  email: "bienfait@gmail.com",
  password: "",
};

const errors = [];

const validate = new Validate(user, errors).verify([
  "required",
  "email",
  "required",
]);
console.log(validate);

//TODOS : multi-validation eg: required|email|string
//to add project on github
