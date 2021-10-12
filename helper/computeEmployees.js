const inquirer = require('inquirer');
const { HTMLgenerator } = require('./HTMLgenerator');

let managerArray = [];
let engineerArray = [];
let internArray = [];

class Employee {
    constructor (name, email, role, id) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.id = id;
    }
    getName () { return this.name; }
    getEmail () { return this.email; }
    getRole () { return this.role; }
    getId () { return this.id; }
}

class Manager extends Employee {
    constructor (name, email, role, id, officeNumber) {
        super (name, email, role, id);
        this.officeNumber = officeNumber;
    }
        getRole()
        { return this.role;}
        getOffice() 
        { return this.officeNumber;}
}

class Engineer extends Employee {
    constructor (name, email, role, id, github) {
        super (name, email, role, id);
        this.github = github;
    }
    getRole()
    { return this.role;}
    getGit()
    { return this.github;}
}

class Intern extends Employee {
    constructor (name, email, role, id, school) {
        super (name, email, role, id)
        this.school = school;
    }
    getRole()
    { return this.role;}
    getSchooled()
    { return this.school;}
}

function theEnd() {
    return inquirer.prompt(
        [
            {
                type: 'list',
                name: 'lastQBeforeBuild',
                message: 'Have you inputted all employees?',
                choices: ['yes', 'no']
            },
        ]
    )
}

function promptEmployeeEntry() {
    return inquirer.prompt(
        [
            {
                type: 'list',
                name: 'role',
                message: 'What role does this Employee have?',
                choices: ['Intern', 'Engineer', 'Manager']
            },
            { 
                type: 'input',
                name: 'name',
                message: 'What is this Employees name?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this Employees email address?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this Employees id?'
            },
        ]
    )
}

function promptManagerEntry() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the Office Number of this Manager?'
            },
        ]
    )
}

function promptEngineerEntry() {
    return inquirer.prompt(
        [
            { 
                type: 'input',
                name: 'github',
                message: 'What is the GitHub name for this Engineer?'
            },
        ]
    )
}

function promptInternEntry() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'school',
                message: 'What school does this Intern go to?'
            },
        ]
    )
}

async function computeEmployees() {
    let employeeEntry = await promptEmployeeEntry();
    let employee = new Employee(employeeEntry.name, employeeEntry.email, employeeEntry.id)
    if(employeeEntry.role === 'Manager') {
        let manager = await promptManagerEntry();
        let manager = new Manager(employeeEntry.name, employeeEntry.email, employeeEntry.id, managerAnswers.officeNumber);
        managerArray.push(manager);
    } else if(employeeEntry === 'Engineer') {
        let engineerArray = await promptEngineerEntry();
        let engineer = new Engineer(employeeEntry.name, employeeEntry.email, employeeEntry.id, engineerAnswer.github);
        engineerArray.push(engineer);
        }else if(employeeEntry === 'Intern') {
            let internArray = await promptInternEntry();
            let intern = new Intern(employeeEntry.name, employeeEntry.email, employeeEntry.id, internAnswer.school);
            internArray.push(intern);
        }

    let buildEmployees = await theEnd();
    if (buildEmployees.lastQBeforeBuild === 'No') {
        await computeEmployees();
    } else if((buildEmployees.lastQBeforeBuild === 'Yes') && (managerArray.length > 0) && (engineer.length > 0)) {
        HTMLgenerator(managerArray, engineerArray, internArray);
    }else {
        console.log('There must be a Manager and an Engineer to continue.');
        await buildEmployees();
    }
}

module.exports = {
    engineerArray,
    managerArray,
    internArray,
    Employee,
    Manager,
    Engineer,
    Intern,
    computeEmployees
}