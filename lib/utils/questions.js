//* These are the questions for each employee type
const validation = require("./validation.js");

const manager = [
  {
    type: "input",
    name: "managerName",
    message: "Enter the manager's name:",
    validate: validation.string,
  },
  {
    type: "input",
    name: "managerID",
    message: "Enter the manager's ID:",
    validate: validation.number,
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter the manager's email:",
    validate: validation.email,
  },
  {
    type: "input",
    name: "managerOffice",
    message: "Enter the manager's office number:",
    validate: validation.number,
  },
];

const engineer = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter the engineer's name:",
    validate: validation.string,
  },
  {
    type: "input",
    name: "engineerID",
    message: "Enter the engineer's ID:",
    validate: validation.number,
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter the engineer's email:",
    validate: validation.email,
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "Enter the engineer's GitHub name:",
    validate: validation.string,
  },
];

const intern = [
  {
    type: "input",
    name: "internName",
    message: "Enter the intern's name:",
    validate: validation.string,
  },
  {
    type: "input",
    name: "internID",
    message: "Enter the intern's ID:",
    validate: validation.number,
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter the intern's email:",
    validate: validation.email,
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter the intern's school:",
    validate: validation.string,
  },
];

module.exports = {manager, engineer, intern}