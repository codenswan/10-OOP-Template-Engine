/**
 * THis validates answers
 * @param {string} answer this is a validation to make sure response is a string that starts with a capital letter
 */
const string = (answer) => {
  let valid = /^[A-Z]'?[a-zA-Z]+(-[a-zA-Z]+)?$/.test(answer);
  return valid || "!    Please provide an answer. Make sure the name begins with a capital." 
};

/**
 * THis validates answers
 * @param {Number} number this is a validation to make sure response is number
 */
const number = (number) => {
  let valid = !isNaN(parseFloat(number));
  return valid || "!    Please enter a number.";
};

/**
 * THis validates answers
 * @param {Email} email this is a validation to make sure response is a valid email
 */
const email = (email) => {
  let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  return valid || "!    Please enter a valid email."
};

module.exports = { string, number, email };
