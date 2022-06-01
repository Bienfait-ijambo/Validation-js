module.exports= function checkUserArray(array, rules){
  let exist = null;
  let errors = 0;
  for (let i = 0; i < array.length; i++) {
    exist = rules.some((rule) => rule.type === array[i]);
    if (!exist) errors++;
  }

  if (errors > 0) {
    throw new Error("Invalid validation rule(s)");
  } else {
    return array;
  }
};


