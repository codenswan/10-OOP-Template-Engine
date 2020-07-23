const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school;

    }

    getSchool() {
        return this.school;
    }

    retRole() {
        return "Intern"
    }
}

module.exports = Intern;