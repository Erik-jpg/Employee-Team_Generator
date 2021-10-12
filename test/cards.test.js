const { Employee, Engineer, Intern, Manager } = require('../helper/computeEmployees');
const { createEngineer, createIntern, createManager } = require('../helper/HTMLgenerator');

describe('Employee Class Tests', () => {
    it('Has getName() as entered name.', () => {
        const Yamir = new Employee('Yamir', 'Yamir@email.com', '1', 'Employee');
        expect(Yamir.getName()).toBe('Yamir');
    })
    it ('Has getEmail() as entered email.', () => {
        const Yamir = new Employee('Yamir', 'Yamir@email.com', '1', 'Employee');
        expect(Yamir.getEmail()).toBe('Yamir@email.com');
    })
    it ('Has getId() as entered Employee ID.', () => {
        const Yamir = new Employee('Yamir', 'Yamir@email.com', '1', 'Employee');
        expect(Yamir.getId()).toBe('1');
    })
    it ('Has getRole() as entered Employee.', () => {
        const Yamir = new Employee('Yamir', 'Yamir@email.com', '1', 'Employee');
        expect (Yamir.getRole()).toBe('Employee');
    })
})

describe('Manager class Tests', () => {
    it ('Has getRole() as Manager.', () => {
        const Levi = new Manager('Levi', 'Levi@email.com', '2', 'Manager', 210);
        expect(Levi.getRole()).toBe('Manager')
    })
    it('Has getOfficeNumber() as office number.', () => {
        const Levi = new Manager('Levi', 'Levi@email.com', '2', 'Manager', 210);
        expect(Levi.getOfficeNumber()).toBe(210)
    })
})

describe('Engineer class Tests', () => {
    it('Has getRole() as Engineer.', () => {
        const Winry = new Engineer('Winry', 'Winry@email.com', '3', 'Engineer', 'Winryst33l');
        expect(Winry.getRole()).toBe('Engineer');
    })
        it('Has getGithub() as entered github.', () => {
            const Winry = new Engineer('Winry', 'Winry@email.com', '3', 'Engineer', 'Winryst33l');
            expect(Winry.getRole()).toBe('Winryst33l');
    })
})

describe('Intern class Tests', () => {
    it('Has getRole() as Intern.', () => {
        const Moose = new Intern('Moose', 'Moose@email.com', '4', 'Engineer', 'University of Moose');
        expect(Moose.getRole()).toBe('Inter');
    })
        it('Has getSchool() as entered school.', () => {
            const Moose = new Intern('Moose', 'Moose@email.com', '4', 'Engineer', 'University of Moose');
            expect(Moose.getSchool()).toBe('University of Moose');
        })
    })

    // Finish writing tests, using tests to check the html

    describe('Manager HTML Test', () => {
        it('Writes properties of Manager.', () => {
            const manager = ({name: 'Levi', email: 'Levi@email.com', id: '2', role: 'Manager', officeNumber: '210'})
            expect(createManager(manager)).toBe( `<div class="card" style="width: 20px;"><div class="card-title">${manager.role}</div><ul class="list-stats list-group-flush"><li class="list-group-stats>Name: ${manager.name}</li><li class="list-group-stats">Email: <a href='mailto:${manager.email}'>${manager.email}</a></li><li class="list-group-stats">Employee I.D. Number: ${manager.id}</li><li class="list-stats">Office Number: ${manager.officeNumber}</li><li></div><br/>`)
        })
    })

    describe('Engineer HTML Test', () => {
        it('Writes properties of Engineer', () => {
            const engineer =({name: 'Winry', email: 'winry@email.com', id: '3', role: 'engineer', github: 'Winryst33l'})
            expect(createEngineer(engineer)).toBe(`<div class="card" style="width: 20px;"><div class="card-title">${engineer.role}</div><ul class="list-stats list-group-flush"><li class="list-group-stats>Name: ${engineer.name}</li><li class="list-group-stats">Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></li><li class="list-group-stats">Employee I.D. Number: ${engineer.id}</li><li class="list-stats">Github Name: ${engineer.github}</li><li></div><br/>`)
        })
    })

    describe('Intern HTML Test', () => {
        it('Writes properties of Intern', () => {
            const Intern = ({ name: 'Moose', email: 'moose@email.com', id: '4', role: 'intern', school: 'UofM' })
            expect(createIntern(intern)).toBe(`<div class="card" style="width: 20px;"><div class="card-title">${intern.role}</div><ul class="list-stats list-group-flush"><li class="list-group-stats>Name: ${intern.name}</li><li class="list-group-stats">Email: <a href='mailto:${intern.email}'>${intern.email}</a></li><li class="list-group-stats">Employee I.D. Number: ${intern.id}</li><li class="list-stats">School: ${intern.school}</li><li></div><br/>`)
        })
    })