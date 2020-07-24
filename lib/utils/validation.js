/**
 * THis validates answers
 * @param {string} answer this is a validation to make sure response is a string
 */
const string = (answer) => {
  if (!answer) {
    console.log("Please provide an answer");
    return false;
  }
  return true;
};

/**
 * THis validates answers
 * @param {Number} answer this is a validation to make sure response is number
 */
const number = (answer) => {
  let valid = !isNaN(parseFloat(answer));
  return valid || "Please enter a number";
};

module.exports = { string, number };