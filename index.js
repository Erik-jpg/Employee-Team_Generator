const { compileHTML,  managerArray,engineerArray, intenserArray } = require('./helper/employees');
const fs = require('fs');
const { HTMLgenerator } = require('./helper/generator');

function writeTheFile (data) {
    fs.writeFile("employeeTeam.HTML", data, (error) => error ? console.error(error) : console.log('Employee Cards have been created'))
}

async function doIt() {
    await employeeGenerator();
    writeTheFile(HTMLgenerator(managerArray, engineerArray, intenserArray));
}

doIt();