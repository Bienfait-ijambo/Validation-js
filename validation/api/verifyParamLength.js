module.exports = function verifyParamLength(array, obj) {
  if (array.length !== Object.keys(obj).length) {
    throw new Error(
      "the length of your object must be equal to the length of the array pass as param to verify function."
    );
  }
};
