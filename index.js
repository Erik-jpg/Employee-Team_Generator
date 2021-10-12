const { computeEmployees,  managerArray,engineerArray, intenserArray } = require('./helper/computeEmployees');
const fs = require('fs');
const { HTMLgenerator } = require('./helper/HTMLgenerator');

function writeTheFile (data) {
    fs.writeFile("employeeTeam.HTML", data, (error) => error ? console.error(error) : console.log('Employee Cards have been created'))
}

async function doIt() {
    await computeEmployees();
    writeTheFile(HTMLgenerator(managerArray, engineerArray, intenserArray));
}

doIt();