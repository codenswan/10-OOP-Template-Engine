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
        name: "staff",
        message: "What role do you want to create?",
        choices: ["Manager", "Engineer", "Intern", "That's the team."],
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
        case "Intern":
          internDetails();
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
    .then(({ engineerName, engineerEmail, engineerID, engineerOffice }) => {
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
      addStaff();
    });
}

function createStaffTeam() {
  let finalTeamHtml = renderTeam(employees);
  console.log(employees);
  fs.writeFileSync(path.join(__dirname, "/output/team.html"), finalTeamHtml);
}

addStaff();
