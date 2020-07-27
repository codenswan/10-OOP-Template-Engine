const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./lib/htmlRenderer");
const questions = require("./lib/utils/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function addStaff() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What role do you want to create?",
        choices: ["Manager", "Engineer", "Intern", "That's all the team."],
      },
    ])
    .then((response) => {
      switch (response.role) {
        case "Manager":
          managerDetails();
          break;
        case "Engineer":
          engineerDetails();
          break;
        case "Intern":
          internDetails();
          break;
        case "That's all the team.":
          fs.writeFileSync(outputPath, render(employees), "UTF-8");
          break;
      }
      return employees;
    });
}

function managerDetails() {
  return inquirer
    .prompt(questions.manager)
    .then(({ managerName, managerEmail, managerID, managerOffice }) => {
      const manager = new Manager(
        managerName,
        managerID,
        managerEmail,
        managerOffice
      );
      employees.push(manager);
      addStaff();
      return employees;
    });
}

function engineerDetails() {
  return inquirer
    .prompt(questions.engineer)
    .then(({ engineerName, engineerEmail, engineerID, engineerGithub }) => {
      const engineer = new Engineer(
        engineerName,
        engineerID,
        engineerEmail,
        engineerGithub
      );
      employees.push(engineer);
      addStaff();
      return employees;
    });
}

function internDetails() {
  return inquirer
    .prompt(questions.intern)
    .then(({ internName, internEmail, internID, internSchool }) => {
      const intern = new Intern(
        internName,
        internID,
        internEmail,
        internSchool
      );
      employees.push(intern);
      addStaff();
      return employees;
    });
}

addStaff();