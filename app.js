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
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What role do you want to create?",
        choices: ["Manager", "Engineer", "Intern", "That's the team."],
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
          createStaffTeam();
          break;
      }
    });
}

function managerDetails() {
  inquirer
    .prompt(questions.manager)
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
    .prompt(questions.engineer)
    .then(({ engineerName, engineerEmail, engineerID, engineerGithub }) => {
      const engineer = new Engineer(
        engineerName,
        engineerID,
        engineerEmail,
        engineerGithub
      );
      employees.push(engineer);
      console.log(employees);
      addStaff();
    });
}

function internDetails() {
  inquirer
    .prompt(questions.intern)
    .then(({ internName, internEmail, internID, internSchool }) => {
      const intern = new Intern(
        internName,
        internID,
        internEmail,
        internSchool
      );
      employees.push(intern);
      console.log(employees);
      addStaff();
    });
}

function createStaffTeam() {
  console.log("test");
  let html = render(employees)
  fs.writeFileSync(outputPath, html, "UTF-8");
}

addStaff();