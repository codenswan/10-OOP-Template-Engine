const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const renderTeam = require("./lib/htmlRenderer");
const validation = require("./lib/utils/validation.js");

const employees = [];

/**
 * This function will ask  create our team html
 */
function addStaff() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "staff",
        message: "What role do you want to create?",
        choices: ["Manager", "Engineer", "That's the team."],
      },
    ])
    .then((response) => {
      switch (response.staff) {
        case "Manager":
          managerDetails();
          console.log(employees);
          break;
        case "Engineer":
          engineerDetails();
          console.log(employees);
          break;
        case "That's all the team.":
          console.log(employees);
          createStaffTeam();
          break;
      }
    });
}

function managerDetails() {
  inquirer
    .prompt([
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
        validate: validation.string,
      },
      {
        type: "input",
        name: "managerOffice",
        message: "Enter the manager's office number:",
        validate: validation.number,
      },
    ])
    .then(({ managerName, managerEmail, managerID, managerOffice }) => {
      const manager = new Manager(
        managerName,
        managerID,
        managerEmail,
        managerOffice
      );
      employees.push(manager);
      console.log(employees);
      addStaff();
    });
}

function engineerDetails() {
  inquirer
    .prompt([
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
        validate: validation.string,
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Enter the engineer's GitHub name:",
        validate: validation.string,
      },
    ])
    .then(({ engineerEmail, engineerName, engineerID, engineerOffice }) => {
      const engineer = new Engineer(
        engineerName,
        engineerID,
        engineerEmail,
        engineerOffice
      );
      employees.push(engineer);
      addStaff();
    });
}

function createStaffTeam() {
  let finalTeamHtml = renderTeam(employees);
  console.log(employees);
  fs.writeFileSync(path.join(__dirname, "/output/team.html"), finalTeamHtml);
}

addStaff();
