const { computeEmployees,  managerArray, engineerArray, internArray } = require('./helper/computeEmployees');
const fs = require('fs');
const { createHTML } = require('./helper/HTMLgenerator');

function writeTheFile (data) {
    fs.writeFile("employeeTeam.HTML", data, (error) => error ? console.error(error) : console.log('Employee Cards have been created'))
}

async function doIt() {
    await computeEmployees();
    writeTheFile(createHTML(managerArray, engineerArray, internArray));
}

doIt();