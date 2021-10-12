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
        const Moose = new Intern('Moose', 'Moose@email.com', '3', 'Engineer', 'University of Moose');
        expect(Moose.getRole()).toBe('Inter');
    })
        it('Has getSchool() as entered school.', () => {
            const Moose = new Intern('Moose', 'Moose@email.com', '3', 'Engineer', 'University of Moose');
            expect(Moose.getSchool()).toBe('University of Moose');
        })
    })

    // Finish writing tests, using properly write properties of a class