module.exports = function validationRules() {
  return [
    {
      type: "required",
      message: "this field is required",
    },
    {
      type: "string",
      message: "must be a string",
    },
    {
      type: "number",
      message: "",
    },
    {
      type: "boolean",
      message: "",
    },
    {
      type: "email",
      message: "",
    },
    {
      type: "date",
      message: "",
    },
    {
      type: "min",
      message: "",
    },
    {
      type: "max",
      message: "",
    },
   
  ];
};
